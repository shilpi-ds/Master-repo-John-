
import * as React from "react";
import { ChatHeadlessProvider } from "@yext/chat-headless-react";
import { ChatPopUp } from "@yext/chat-ui-react";
import "@yext/chat-ui-react/bundle.css";


const ChatBoat=()=>{
    return(
        <div>
            <ChatHeadlessProvider
            config={{
                apiKey: '1111d594ea6d3762a1e6c9d041ff77fe',
                 botId: 'john-lewis',
                 saveToSessionStorage:false,
                 apiDomain: "sbx-cdn.yextapis.com",
            }}>
                <ChatPopUp title="ChatBoat"/>

            </ChatHeadlessProvider>
        </div>

    )
}
export default ChatBoat;