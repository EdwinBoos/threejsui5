sap.ui.define(
    [
        'sap/ui/core/Control',

    ],

    (Control) => {

        'use strict';

        return Control.extend("influenz.de.sample.util.THREEObject",
            {

                metadata: {
                    
                    properties: 
                    {
                    
                        objFilePath: 
                        {
                            type: "string",
                        },
                        objPositionX:
                        {
                            defaultValue : 0,
                        },
                        objPositionY:
                        {
                            defaultValue : 0,
                        },
                        objPositionZ:
                        {
                            defaultValue : 0,
                        }
                        
                    }
                },


                init()  {},


                renderer: {},


                onAfterRendering: {}
                
            })
    });
