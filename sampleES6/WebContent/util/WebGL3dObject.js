sap.ui.define(
    
    [
        'sap/ui/core/Control', 
        'sap/ui/core/HTML'
    ],

    (Control, HTML) => 
    {
    
        'use strict';

        return Control.extend("influenz.de.sample.util.WebGL3dObject",  
        {

            metadata: 
            { 
                properties: 
                {
                    webGLAntiAlias: 
                    {
                        
                        type: "boolean"
                        
                    },
                    webGLAlpha: 
                    {
                        
                        type: "boolean"
                        
                    },
                    height: 
                    {
                        
                        type: "string", 
                        defaultValue: "1280"
                        
                    },
                    width: 
                    {
                        
                        type: "string",
                        defaultValue: "720"
                        
                    },
                    texturePath: 
                    {
                        
                        type: "string",
                        defaultType: "",
                        
                    },
                    objFilePath: 
                    {
                        
                        type: "string",
                        defaultType: "",
                        
                    },
                    webGLCameraPositionZ: 
                    {
                        
                        type: "string"
                        
                    },
                    webGLCameraPositionX: 
                    {
                        
                        type: "string"
                        
                    },
                    webGLCameraPositionY: 
                    {
                        
                        type: "string"
                        
                    },
                },
                aggregations: 
                {
                    webGLDOM: 
                    {
                        type: "sap.ui.core.HTML", 
                        multiple: false
                        
                    }
                },
                events : 
                {
                
                }

            },

            
            init()  {   this.setAggregation("webGLDOM", new HTML())   },
            

            renderer: 
            {

                render(rendererManager, control) 
                {
         

                    const webGLRenderer = new THREE.WebGLRenderer( { antialias : control.getWebGLAntiAlias(), alpha : control.getWebGLAlpha() });
                    const webGLTexture = new THREE.Texture();
                    const webGL3DControl = control.getAggregation("webGLDOM");
                    //imageLoader.load(control.getTexturePath(), image => { webGLTexture.image = image; webGLTexture.needsUpdate = true; });

                    webGLRenderer.setSize( control.getWidth(), control.getHeight());
                    webGLRenderer.setClearColor(0xffffff, 0);
                    webGLRenderer.setPixelRatio(window.devicePixelRatio);

                    webGL3DControl.setDOMContent(webGLRenderer.domElement);
                    control.setAggregation("webGLDOM", webGL3DControl);

                    //rendererManager.write("<div");
                    //rendererManager.writeControlData(control);
                    //rendererManager.write(">");
                    //rendererManager.write("</div>");

                    

                
                }
            },


    
  
        
        })
    });
;
