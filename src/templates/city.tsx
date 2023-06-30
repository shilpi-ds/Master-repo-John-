import * as React from "react";
import {
  Template,
  GetPath,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TransformProps,
} from "@yext/pages";
import favicon from "../assets/images/favicon.ico";
import {
  CityDocument,
  EntityMeta,
  LocationDocument,
  TemplateMeta,
} from "../types";
import PageLayout from "../components/layout/PageLayout";
import "../index.css";
import { Address, Link } from "@yext/pages/components";
import Breadcrumbs, { BreadcrumbItem } from "../components/common/Breadcrumbs";
import { getBreadcrumb, getRecursiveData } from "../config/GlobalFunctions";
import { DirectoryParent } from "../types/DirectoryParent";

export const config: TemplateConfig = {
  stream: {
    $id: "city",
    filter: {
      entityTypes: ["ce_city"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "slug",

      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta.entityType",
      "dm_directoryParents.dm_directoryParents.name",
      "dm_directoryParents.dm_directoryParents.slug",
      "dm_directoryParents.dm_directoryParents.meta.entityType",

      /* DM children */
      "dm_directoryChildren.name",
      "dm_directoryChildren.meta.entityType",
      "dm_directoryChildren.slug",
      "dm_directoryChildren.hours",
      "dm_directoryChildren.address",
      "dm_directoryChildren.id",
      "dm_directoryChildren.yextDisplayCoordinate",
    ],
    localization: {
      locales: ["en_GB"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  if (
    document.dm_directoryParents &&
    document.dm_directoryParents != "undefined"
  ) {
    const parent: string[] = [];
    document.dm_directoryParents?.map(
      (i: { meta: EntityMeta; slug: string; name: string }) => {
        parent.push(i.slug);
      }
    );
    return `${parent.join("/")}/${document.slug.toString()}`;
  } else {
    return `${document.slug.toString()}`;
  }
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  const metaTitle = `Dotsquares | ${document.name}`;
  return {
    title: metaTitle,
    charset: "UTF-8",
    viewport:
      "width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1, user-scalable=0",
    tags: [
      {
        type: "link",
        attributes: {
          rel: "icon",
          type: "image/png",
          href: favicon,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "author",
          content: "Dotsquares",
        },
      },
      {
        type: "meta",
        attributes: {
          name: "robots",
          content: `${"noindex, nofollow"}`,
        },
      },
    ],
  };
};

type TransformData = TemplateRenderProps & {
  breadcrumbs: BreadcrumbItem[];
};

export const transformProps: TransformProps<TransformData> = async (data) => {
  const document = data.document as CityDocument;
  const directoryParents = document.dm_directoryParents || [];
  const breadcrumbs = getBreadcrumb<DirectoryParent, CityDocument>(
    directoryParents,
    document,
    data.__meta
  );
  return { ...data, breadcrumbs };
};

interface CityTemplateProps extends TemplateRenderProps {
  __meta: TemplateMeta;
  document: CityDocument;
}

const City: Template<CityTemplateProps> = ({
  document,
  __meta,
  breadcrumbs,
}: CityTemplateProps) => {
  const { meta, _site, slug, dm_directoryChildren } = document;

    
  let baseUrl="";
  if(__meta.mode==="development")
  {
    baseUrl="/";
  }
  else 
  {
    baseUrl=YEXT_PUBLIC_BASEURL;
  }
  return (
    <div id="main">
      <PageLayout
        _site={_site}
        meta={__meta}
        template="country"
        locale={meta.locale}
        devLink={slug}
      >
        <Breadcrumbs baseUrl={baseUrl} breadcrumbs={breadcrumbs} />
        <h1>City</h1>
        <h3>Locations</h3>
        <div className="city-locations">
          <div className="container">
            {dm_directoryChildren &&
              dm_directoryChildren.map((location: LocationDocument) => {
                //const url = location.slug;
                const url = getRecursiveData(location, __meta);
                return (
                  <div className="city-location" key={location.id}>
                    <div className="location-card">
                      <div className="icon-row">
                        <div className="icon addressIcon"></div>
                        <Link className="location-name" href={`${baseUrl}${url}`}>
                          {location.name}
                        </Link>
                        <Address address={location.address} />
                      </div>
                      <div className="button-bx-detail">
                        <Link className="button link" href={`${baseUrl}${url}`}>
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </PageLayout>
    </div>
  );
};
export default City;
