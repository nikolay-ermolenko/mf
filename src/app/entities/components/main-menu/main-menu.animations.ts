import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

const defaultConfig: { [key: string]: string | number | boolean } = {
    percentageExpand: 40,
    delayExpand: 250,
    delayCollapse: 250,
    minExpand: 60,
    maxExpand: 400,
    minWidth: 140,
    maxWidth: 550,
    maskOpacity: .7,
    hidden: false
};

export const toggleMainMenu: AnimationTriggerMetadata
    = trigger(
        'toggleMainMenu',
        [
            state('expanded-center', style({
                width: '{{percentageExpand}}%',
                opacity: 1,
                minWidth: '{{minWidth}}px',
                maxWidth: '{{maxWidth}}px'
            }), { params: defaultConfig }),
            state('collapsed-center', style({
                width: '{{percentageExpand}}%',
                opacity: 0,
                display: 'none',
                minWidth: '{{minWidth}}px',
                maxWidth: '{{maxWidth}}px'
            }), { params: defaultConfig }),

            state('expanded-left,expanded-right', style({
                width: '{{percentageExpand}}%',
                minWidth: '{{minExpand}}px',
                maxWidth: '{{maxExpand}}px'
            }), { params: defaultConfig }),
            state('collapsed-left,collapsed-right', style({
                width: '6px',
                display: "{{hidden}}",
            }), { params: defaultConfig }),

            state('expanded-top,expanded-bottom', style({
                height: '{{percentageExpand}}%',
                minHeight: '{{minExpand}}px',
                maxHeight: '{{maxExpand}}px'
            }), { params: defaultConfig }),
            state('collapsed-top,collapsed-bottom', style({
                height: '6px',
                // minHeight: '6px',
            })),
            transition(
                'collapsed-left => expanded-left,collapsed-right => expanded-right,collapsed-top => expanded-top,collapsed-bottom => expanded-bottom',
                animate('{{delayExpand}}ms 20ms ease'),
                { params: defaultConfig }
            ),
            transition(
                'expanded-left => collapsed-left,expanded-right => collapsed-right,expanded-top => collapsed-top,expanded-bottom => collapsed-bottom',
                animate('{{delayCollapse}}ms 20ms ease'),
                { params: defaultConfig }
            ),

            transition(
                'collapsed-center => expanded-center',
                animate('{{delayExpand}}ms 20ms'),
                { params: defaultConfig }
            ),
            transition(
                'expanded-center => collapsed-center',
                animate('{{delayCollapse}}ms 20ms'),
                { params: defaultConfig }
            )
        ]
    );

export const toggleMainMenuMask: AnimationTriggerMetadata
    = trigger(
        'toggleMainMenuMask',
        [
            state('show', style({
                display: 'block',
                opacity: '{{maskOpacity}}'
            }), { params: defaultConfig }),
            state('hide', style({
                display: 'none',
                opacity: 0
            }), { params: defaultConfig }),
            transition(
                'hide => show',
                animate('{{delayExpand}}ms ease-in'),
                { params: defaultConfig }
            ),
            transition(
                'show => hide',
                animate('{{delayCollapse}}ms ease-in'),
                { params: defaultConfig }
            )
        ]
    );
