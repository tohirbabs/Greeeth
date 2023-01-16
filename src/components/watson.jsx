const Watson = () => {

    window.watsonAssistantChatOptions = {
        integrationID: "fd1a6e7f-1069-47a1-8b8c-6b82af44032e", // The ID of this integration.
        region: "us-south", // The region your integration is hosted in.
        serviceInstanceID: "58a3a938-ee82-4366-a8c6-88d7d6b61630", // The ID of your service instance.
        onLoad: function(instance) { instance.render(); }
      }
      setTimeout(function(){
        const t=document.createElement('script');
        t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
        document.head.appendChild(t);
      });
    

    return ( 


        <></>

     );
}
 
export default Watson;