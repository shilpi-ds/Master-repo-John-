import { Hours } from "@yext/search-headless-react";
import { DirectoryParent } from "./DirectoryParent";
import { Coordinate } from "../components/google-map/SearchProvider";
import { AddressType } from "@yext/pages/components";
import { DirectoryChild } from "./DirectoryChild";
import { E164Number } from "libphonenumber-js/types";

export type MapTypes = "google" | "mapbox";
export type AutocompleteTypes = "google" | "mapbox" | "yext";
export interface SiteData {
  id: string;
  slug: string;
  name: string;
  c_headerMenus:Links[],
  c_johnLogo:Image,
  c_headerTopMenus:Links[];
  c_freeDelivery:Links;
  c_footer1Cta:Links;
  c_footer1Description:string;
  c_footer1Title:string;
  c_footer2:Footer2[];
  c_footer3Barcode:{
    height:number;
    width:number;
    url:string;
  };
  c_footer3BarcodeCta:Links;
  c_footer3Cta:Links;
  c_footer3Title:string;
  c_footer4Description:string;
  c_footer4Links:Links[];
  c_footer4Title:string;
  c_footer5Cta:Links;
  c_footer5Image:{
    height:number;
    width:number;
    url:string;
  };
  c_socialFooter:SocialIcons[];
  c_bannerTitle:string;
  c_bannerDescription:string;
  c_bannerUrl:{
    link:string;
    label:string;
  }
  c_bannerImage:Image;
}

export interface SocialIcons {
  socialImage:{
    height:number;
    width:number;
    url:string;
  };
  socialLink:string|undefined;
}

export interface Image {
  alternateText:string;
  height:number;
  width:number;
  image:{
    url:string;
  }
}
export interface Links {
  label:string;
  link:string;
  linkType:string;
}

export interface Footer2 {
  linkTitle:string;
  linkUrl:Links[]
}

export interface TemplateMeta {
  mode: "development" | "production";
}

export interface EntityType {
  id: string;
}
export interface EntityMeta {
  id: string;
  entityType: EntityType;
  locale: string;
}

export interface CountryDocument {
  name: string;
  slug: string;
  meta: EntityMeta;
  _site: SiteData;
}

export interface StateDocument {
  name: string;
  slug: string;
  meta: EntityMeta;
  _site: SiteData;
  dm_directoryChildren: DirectoryChild[];
}

export interface CityDocument {
  name: string;
  slug: string;
  meta: EntityMeta;
  _site: SiteData;
  dm_directoryChildren: LocationDocument[];
}

export interface BrandGalleries {
  description:string;
  details:string;
  url:string;
 
}
export interface OfferSection {
  offerCta:Links;
  offerDes:string;
  offerTitle:string;
  offerImage:{
    height:number;
    width:number;
    url:string;
  }
}

export interface StoreGuide {
  department:string;
  levelName:string;
  services:string;
  listOfDepartments:string[];
  listOfServices:string[]
}

export interface Faqs {
question:string[];
answer:string[];
}

export interface LocationDocument {
  meta: EntityMeta;
  _site: SiteData;
  id: string;
  name: string;
  slug: string;
  address: AddressType;
  hours: Hours;
  additionalHoursText: string;
  yextDisplayCoordinate: Coordinate;
  googlePlaceId: string;
  mainPhone: E164Number;
  dm_directoryParents: DirectoryParent[];
  c_title: string;
  description: string;
  c_seoCta: Links;
  c_backImage:{
    height:number;
    width:number;
    url:string;
  };
  c_mainImage:{
    height:number;
    width:number;
    url:string;
  };
  c_brandTitle:string;
  c_brandGallery:BrandGalleries[];
  c_offers:OfferSection[];
  c_storeGuideDetails:StoreGuide[];
  c_storeGuideHeading:string;
  c_relatedFaqs:Faqs[];
  c_faqTitle:string;
}
