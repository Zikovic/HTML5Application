/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "vertical",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'menuCopy6',
                type: 'rect',
                rect: ['27px', '505px','53.8%','124px','auto', 'auto'],
                borderRadius: ["2px 2px", "2px 2px", "2px 2px", "2px 2px"],
                fill: ["rgba(83,211,125,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
            },
            {
                id: 'iconCopy8',
                type: 'ellipse',
                rect: ['-11px', '462px','16.7%','11.4%','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(34,34,34,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'menuCopy5',
                type: 'rect',
                rect: ['27px', '314px','53.8%','124px','auto', 'auto'],
                borderRadius: ["2px 2px", "2px 2px", "2px 2px", "2px 2px"],
                fill: ["rgba(83,211,125,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
            },
            {
                id: 'iconCopy7',
                type: 'ellipse',
                rect: ['-11px', '271px','16.7%','11.4%','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(34,34,34,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'menu',
                type: 'rect',
                rect: ['27px', '59px','53.8%','124px','auto', 'auto'],
                borderRadius: ["2px 2px", "2px 2px", "2px 2px", "2px 2px"],
                fill: ["rgba(83,211,125,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
            },
            {
                id: 'iconCopy5',
                type: 'ellipse',
                rect: ['-11px', '78px','16.7%','11.4%','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(34,34,34,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'menuButtonClick2',
                type: 'rect',
                rect: ['10', '9','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'menuButtonClick2',
                symbolName: 'menuButtonClick'
            }
            ]
        },
    states: {
        "Base State": {
            "${_menuCopy5}": [
                ["style", "opacity", '1'],
                ["style", "left", '27px'],
                ["style", "border-bottom-left-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["color", "background-color", 'rgba(83,225,130,1)'],
                ["style", "border-top-left-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "border-bottom-right-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '90%'],
                ["style", "top", '314px'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "height", '164px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["subproperty", "boxShadow.spread", '0px'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]]
            ],
            "${_menuCopy6}": [
                ["style", "opacity", '1'],
                ["style", "left", '27px'],
                ["style", "border-bottom-left-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["color", "background-color", 'rgba(83,225,130,1)'],
                ["style", "border-top-left-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "border-bottom-right-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '90%'],
                ["style", "top", '505px'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]],
                ["style", "height", '164px'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["subproperty", "boxShadow.spread", '0px'],
                ["color", "border-color", 'rgb(0, 0, 0)']
            ],
            "${_iconCopy8}": [
                ["style", "top", '462px'],
                ["style", "height", '11.39%'],
                ["style", "left", '-11px'],
                ["style", "width", '16.67%']
            ],
            "${_iconCopy7}": [
                ["style", "height", '11.39%'],
                ["style", "top", '271px'],
                ["style", "left", '-11px'],
                ["style", "width", '16.67%']
            ],
            "${_menu}": [
                ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]],
                ["style", "left", '27px'],
                ["style", "border-bottom-left-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["color", "background-color", 'rgba(83,225,130,1.00)'],
                ["style", "border-top-left-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "border-bottom-right-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-top-right-radius", [2,2], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '90%'],
                ["style", "top", '141px'],
                ["style", "opacity", '0.000000'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "height", '164px'],
                ["subproperty", "boxShadow.spread", '0px'],
                ["color", "border-color", 'rgb(0, 0, 0)']
            ],
            "${_iconCopy5}": [
                ["style", "top", '78px'],
                ["style", "height", '11.39%'],
                ["style", "left", '-11px'],
                ["style", "width", '16.67%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(34,34,34,1.00)'],
                ["style", "width", '100%'],
                ["style", "height", '100%'],
                ["style", "overflow", 'hidden']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 500,
            autoPlay: true,
            timeline: [
                { id: "eid17", tween: [ "gradient", "${_menu}", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]], { fromValue: [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]}], position: 0, duration: 0 },
                { id: "eid230", tween: [ "style", "${_menu}", "width", '90%', { fromValue: '90%'}], position: 375, duration: 0 },
                { id: "eid21", tween: [ "style", "${_menu}", "opacity", '1', { fromValue: '0.000000'}], position: 0, duration: 500 },
                { id: "eid6", tween: [ "subproperty", "${_menu}", "boxShadow.spread", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid18", tween: [ "color", "${_menu}", "background-color", 'rgba(83,225,130,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(83,225,130,1.00)'}], position: 0, duration: 0 },
                { id: "eid3", tween: [ "color", "${_menu}", "border-color", 'rgb(0, 0, 0)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgb(0, 0, 0)'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "subproperty", "${_menu}", "boxShadow.offsetH", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
                { id: "eid231", tween: [ "style", "${_menu}", "height", '164px', { fromValue: '164px'}], position: 375, duration: 0 }            ]
        }
    }
},
"Symbol_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['7px', '15px', '12px', '11px', 'auto', 'auto'],
                    borderRadius: ['100% 100%', '100% 100%', '100% 100%', '100% 100%'],
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    id: 'RoundRect2',
                    opacity: 0,
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.0471)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRect2}": [
                ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "opacity", '0'],
                ["style", "left", '7px'],
                ["style", "width", '12px'],
                ["style", "top", '15px'],
                ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "height", '11px'],
                ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ]
            ],
            "${symbolSelector}": [
                ["style", "height", '0px'],
                ["style", "width", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"menuButtonClick": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'buttonMenu',
                    type: 'rect',
                    rect: ['0', '0', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'menuClicked2',
                    type: 'rect',
                    rect: ['0px', '1px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'buttonMenu',
                symbolName: 'buttonMenu',
                autoPlay: {

               }
            },
            {
                id: 'menuClicked2',
                symbolName: 'menuClicked',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '31px'],
                ["style", "width", '34px']
            ],
            "${_menuClicked2}": [
                ["style", "left", '-13px'],
                ["style", "top", '-19px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            timeline: [
                { id: "eid217", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_buttonMenu}', [] ], ""], position: 0 },
                { id: "eid221", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_menuClicked2}', [] ], ""], position: 0 }            ]
        }
    }
},
"menuClicked": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-1.#IND%', '-1.#IND%', '20px', '19px', 'auto', 'auto'],
                    borderRadius: ['100% 100%', '100% 100%', '100% 100%', '100% 100%'],
                    fill: ['rgba(255,255,255,0.0471)'],
                    id: 'menuButtonClicked',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    sizeRange: ['0px', '', '', '']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '0px'],
                ["style", "width", '0px']
            ],
            "${_menuButtonClicked}": [
                ["style", "bottom", 'auto'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '-18px'],
                ["style", "width", '100px'],
                ["style", "top", '-15px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '100px'],
                ["style", "right", 'auto']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            timeline: [
                { id: "eid161", tween: [ "style", "${_menuButtonClicked}", "opacity", '0.9922480620155', { fromValue: '0'}], position: 0, duration: 175 },
                { id: "eid162", tween: [ "style", "${_menuButtonClicked}", "opacity", '0', { fromValue: '0.992247998714447'}], position: 175, duration: 75 },
                { id: "eid216", tween: [ "style", "${_menuButtonClicked}", "left", '-18px', { fromValue: '-18px'}], position: 0, duration: 0 },
                { id: "eid214", tween: [ "style", "${_menuButtonClicked}", "top", '-15px', { fromValue: '-15px'}], position: 0, duration: 0 },
                { id: "eid197", tween: [ "transform", "${_menuButtonClicked}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid196", tween: [ "transform", "${_menuButtonClicked}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 250 }            ]
        }
    }
},
"isClick": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '0px'],
                ["style", "width", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"buttonMenu": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '34px', '31px', 'auto', 'auto'],
                    id: 'menuButton',
                    type: 'group',
                    transform: [[], ['90']],
                    c: [
                    {
                        rect: ['7px', '9px', '20px', '2px', 'auto', 'auto'],
                        id: 'menuLine3',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(255,255,255,1.00)']
                    },
                    {
                        rect: ['7px', '14px', '20px', '2px', 'auto', 'auto'],
                        id: 'menuLine2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(255,255,255,1.00)']
                    },
                    {
                        rect: ['7px', '19px', '20px', '2px', 'auto', 'auto'],
                        id: 'menuLine1',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(255,255,255,1.00)']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '31px'],
                ["style", "width", '34px']
            ],
            "${_menuLine2}": [
                ["style", "top", '14px'],
                ["style", "left", '7px'],
                ["color", "background-color", 'rgba(255,255,255,1)']
            ],
            "${_menuLine3}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '7px'],
                ["style", "top", '9px']
            ],
            "${_menuButton}": [
                ["motion", "location", '17px 15.5px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_menuLine1}": [
                ["style", "top", '19px'],
                ["style", "left", '7px'],
                ["color", "background-color", 'rgba(255,255,255,1)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 250,
            autoPlay: false,
            timeline: [
                { id: "eid68", tween: [ "transform", "${_menuButton}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 0, duration: 250 },
                { id: "eid139", tween: [ "motion", "${_menuButton}", [[17, 15.5, 0, 0],[17, 15.5, 0, 0]]], position: 250, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "content");
