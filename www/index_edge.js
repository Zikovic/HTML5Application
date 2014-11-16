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
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'menuButtonClick2',
                type: 'rect',
                rect: ['10', '9','auto','auto','auto', 'auto']
            },
            {
                id: 'Group4',
                type: 'group',
                rect: ['0px', '11.8%','100%','67.1%','auto', 'auto'],
                c: [
                {
                    id: 'menu2',
                    type: 'group',
                    rect: ['5%', '160px','90.6%','150px','auto', 'auto'],
                    c: [
                    {
                        id: 'menuCopy2',
                        type: 'rect',
                        rect: ['0px', '21px','100%','123px','auto', 'auto'],
                        borderRadius: ["2px 2px", "2px 2px", "2px 2px", "2px 2px"],
                        fill: ["rgba(207,81,82,1.00)"],
                        stroke: [0,"rgba(0,0,0,1)","none"],
                        boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                    },
                    {
                        id: 'RoundRectCopy2',
                        type: 'rect',
                        rect: ['-23px', '0px','41px','41px','auto', 'auto'],
                        borderRadius: ["100% 100%", "100% 100%", "100% 100%", "100% 100%"],
                        fill: ["rgba(34,34,34,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    }]
                },
                {
                    id: 'menu2Copy',
                    type: 'group',
                    rect: ['5%', '0px','90%','150px','auto', 'auto'],
                    overflow: 'visible',
                    c: [
                    {
                        id: 'menuCopy3',
                        type: 'rect',
                        rect: ['-2px', '21px','100%','123px','auto', 'auto'],
                        overflow: 'hidden',
                        borderRadius: ["2px 2px", "2px 2px", "2px 2px", "2px 2px"],
                        fill: ["rgba(83,211,125,1.00)"],
                        stroke: [0,"rgb(0, 0, 0)","none"],
                        boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"],
                        c: [
                        {
                            id: 'borderButtom',
                            type: 'rect',
                            rect: ['8%', '52px','82%','2px','auto', 'auto'],
                            borderRadius: ["4px 4px", "4px 4px", "4px 4px", "4px 4px"],
                            fill: ["rgba(90,199,124,0.80)"],
                            stroke: [0,"rgba(75,194,112,0.55)","none"]
                        },
                        {
                            id: 'title',
                            type: 'text',
                            rect: ['0px', '9%','100%','31px','auto', 'auto'],
                            text: "BUS",
                            align: "center",
                            font: ['Tahoma, Geneva, sans-serif', 24, "rgba(255,255,255,1.00)", "800", "none", "normal"]
                        },
                        {
                            id: 'Capture',
                            type: 'image',
                            rect: ['0px', '54px','100%','69px','auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Capture.PNG",'0px','0px']
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['0px', '54px','100%','69px','auto', 'auto'],
                            opacity: 0.70198675694055,
                            fill: ["rgba(83,225,130,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }]
                    },
                    {
                        id: 'RoundRectCopy3',
                        type: 'rect',
                        rect: ['-23px', '0px','50px','50px','auto', 'auto'],
                        borderRadius: ["100% 100%", "100% 100%", "100% 100%", "100% 100%"],
                        fill: ["rgba(34,34,34,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    },
                    {
                        id: 'bus28',
                        type: 'image',
                        rect: ['-133px', '-113px','270px','275px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"bus28.svg",'0px','0px'],
                        userClass: "black",
                        filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                        transform: [[],[],[],['0.1','0.1']]
                    }]
                },
                {
                    id: 'menu2Copy2',
                    type: 'group',
                    rect: ['5%', '320px','90.6%','150px','auto', 'auto'],
                    c: [
                    {
                        id: 'menuCopy4',
                        type: 'rect',
                        rect: ['0px', '21px','100%','123px','auto', 'auto'],
                        borderRadius: ["2px 2px", "2px 2px", "2px 2px", "2px 2px"],
                        fill: ["rgba(0,0,0,1.00)"],
                        stroke: [0,"rgba(0,0,0,1)","none"],
                        boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                    },
                    {
                        id: 'RoundRectCopy4',
                        type: 'rect',
                        rect: ['-23px', '0px','41px','41px','auto', 'auto'],
                        borderRadius: ["100% 100%", "100% 100%", "100% 100%", "100% 100%"],
                        fill: ["rgba(34,34,34,1)"],
                        stroke: [0,"rgb(0, 0, 0)","none"]
                    }]
                }]
            }],
            symbolInstances: [
            {
                id: 'menuButtonClick2',
                symbolName: 'menuButtonClick',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_menuCopy3}": [
                ["style", "right", 'auto'],
                ["style", "left", '-2px'],
                ["style", "border-bottom-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '1'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["color", "background-color", 'rgba(83,225,130,1)'],
                ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "border-bottom-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '100%'],
                ["style", "top", '21px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["color", "border-color", 'rgb(0, 0, 0)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '123px'],
                ["subproperty", "boxShadow.spread", '0px'],
                ["style", "opacity", '1'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]]
            ],
            "${_RoundRectCopy3}": [
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "height", '50px'],
                ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '-23px'],
                ["style", "width", '50px']
            ],
            "${_bus28}": [
                ["style", "left", '-133px'],
                ["style", "width", '270px'],
                ["style", "top", '-113px'],
                ["style", "height", '275px']
            ],
            "${_title}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '800'],
                ["style", "left", '0px'],
                ["style", "width", '100%'],
                ["style", "top", '9%'],
                ["style", "text-align", 'center'],
                ["style", "height", '31px'],
                ["style", "font-family", 'Tahoma, Geneva, sans-serif'],
                ["style", "text-decoration", 'none'],
                ["style", "font-style", 'normal']
            ],
            "${_menu2Copy2}": [
                ["style", "height", '150px'],
                ["style", "top", '320px'],
                ["style", "left", '5%'],
                ["style", "width", '90.61%']
            ],
            "${_Capture}": [
                ["style", "top", '54px'],
                ["style", "height", '69px'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_borderButtom}": [
                ["color", "background-color", 'rgba(90,199,124,0.80)'],
                ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '8%'],
                ["style", "width", '82%'],
                ["style", "top", '52px'],
                ["style", "border-bottom-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "height", '2px'],
                ["color", "border-color", 'rgba(75,194,112,0.55)'],
                ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_menu2Copy}": [
                ["style", "top", '0px'],
                ["style", "height", '150px'],
                ["style", "left", '5%'],
                ["style", "width", '90%']
            ],
            "${_menuButtonClick2}": [
                ["style", "top", '16px'],
                ["style", "left", '16px']
            ],
            "${_menuCopy4}": [
                ["style", "right", 'auto'],
                ["style", "left", '0px'],
                ["style", "border-bottom-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '1'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["style", "border-bottom-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '100%'],
                ["style", "top", '21px'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]],
                ["style", "opacity", '1'],
                ["style", "height", '123px'],
                ["subproperty", "boxShadow.spread", '0px'],
                ["subproperty", "boxShadow.blur", '3px'],
                ["color", "border-color", 'rgb(0, 0, 0)']
            ],
            "${_Rectangle3}": [
                ["style", "top", '54px'],
                ["style", "opacity", '0.70198675694055'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_RoundRectCopy2}": [
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "height", '41px'],
                ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '-23px'],
                ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ]
            ],
            "${_Group4}": [
                ["style", "top", '11.81%'],
                ["style", "height", '67.14%'],
                ["style", "left", '0px'],
                ["style", "width", '100%']
            ],
            "${_menu2}": [
                ["style", "height", '150px'],
                ["style", "top", '160px'],
                ["style", "left", '5%'],
                ["style", "width", '90.61%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(34,34,34,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ],
            "${_RoundRectCopy4}": [
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-bottom-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "height", '41px'],
                ["style", "border-top-left-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "border-top-right-radius", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "left", '-23px']
            ],
            "${_menuCopy2}": [
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "border-bottom-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleY", '1'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '0px'],
                ["color", "background-color", 'rgba(207,81,82,1.00)'],
                ["style", "border-top-left-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '3px'],
                ["style", "border-bottom-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["transform", "scaleX", '1'],
                ["style", "border-top-right-radius", [4,4], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '100%'],
                ["style", "top", '21px'],
                ["style", "right", 'auto'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]],
                ["style", "height", '123px'],
                ["subproperty", "boxShadow.spread", '0px'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,0.65098)'],
                ["color", "border-color", 'rgb(0, 0, 0)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
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
                    opacity: 0,
                    id: 'RoundRect2',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,0.0471)']
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
            "${_menuClicked2}": [
                ["style", "left", '-13px'],
                ["style", "top", '-19px']
            ],
            "${symbolSelector}": [
                ["style", "height", '31px'],
                ["style", "width", '34px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 195,
            autoPlay: false,
            timeline: [
                { id: "eid221", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_menuClicked2}', [] ], ""], position: 0 },
                { id: "eid217", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_buttonMenu}', [] ], ""], position: 0 }            ]
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
            "${_menuButtonClicked}": [
                ["style", "bottom", 'auto'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '-20px'],
                ["style", "width", '100px'],
                ["style", "top", '-16px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '100px'],
                ["style", "right", 'auto']
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
            duration: 195,
            autoPlay: false,
            timeline: [
                { id: "eid161", tween: [ "style", "${_menuButtonClicked}", "opacity", '0.9922480620155', { fromValue: '0'}], position: 0, duration: 145 },
                { id: "eid162", tween: [ "style", "${_menuButtonClicked}", "opacity", '0', { fromValue: '0.992247998714447'}], position: 145, duration: 50 },
                { id: "eid197", tween: [ "transform", "${_menuButtonClicked}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 145 },
                { id: "eid196", tween: [ "transform", "${_menuButtonClicked}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 145 }            ]
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
                        rect: ['2px', '14px', '30px', '3px', 'auto', 'auto'],
                        id: 'menuLine2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(255,255,255,1.00)']
                    },
                    {
                        rect: ['2px', '25px', '30px', '3px', 'auto', 'auto'],
                        id: 'menuLine2Copy',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'rect',
                        fill: ['rgba(255,255,255,1.00)']
                    },
                    {
                        rect: ['2px', '3px', '30px', '3px', 'auto', 'auto'],
                        id: 'menuLine2Copy2',
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
            "${_menuLine2Copy2}": [
                ["style", "top", '3px'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '2px'],
                ["style", "width", '30px']
            ],
            "${_menuLine2Copy}": [
                ["style", "top", '25px'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '2px'],
                ["style", "width", '30px']
            ],
            "${symbolSelector}": [
                ["style", "height", '31px'],
                ["style", "width", '34px']
            ],
            "${_menuLine2}": [
                ["style", "top", '14px'],
                ["style", "height", '3px'],
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "left", '2px'],
                ["style", "width", '30px']
            ],
            "${_menuButton}": [
                ["style", "top", '0px'],
                ["transform", "rotateZ", '0deg'],
                ["motion", "location", '17px 15.5px'],
                ["style", "left", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 135,
            autoPlay: false,
            timeline: [
                { id: "eid68", tween: [ "transform", "${_menuButton}", "rotateZ", '90deg', { fromValue: '0deg'}], position: 0, duration: 135 },
                { id: "eid268", tween: [ "motion", "${_menuButton}", [[17, 15.5, 0, 0],[17, 15.5, 0, 0]]], position: 0, duration: 0 },
                { id: "eid269", tween: [ "motion", "${_menuButton}", [[17, 15.5, 0, 0],[17, 15.5, 0, 0]]], position: 135, duration: 0 }            ]
        }
    }
},
"Symbol_2": {
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
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Text',
                    text: 'sdc,sndcksdv<br>',
                    font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '28px'],
                ["style", "width", '146px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
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
