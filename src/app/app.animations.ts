import { animate, AnimationTriggerMetadata, keyframes, state, style, transition, trigger } from '@angular/animations';

/**
 * Тайминги у появления и скрытия одинаковы.
 * @type {string}
 */
const animationTime: number = 260;

export const toggleMainMenu: AnimationTriggerMetadata =
    trigger(
        'toggleMainMenu',
        [
            state('show', style({
                width: '70%',
                minWidth: '180px',
                maxWidth: '600px'
            })),
            state('hide', style({
                width: '60px'
            })),
            transition('hide <=> show', animate(`${animationTime}ms ease-in`)),
        ]
    );

export const toggleMainMenuMask: AnimationTriggerMetadata =
    trigger(
        'toggleMainMenuMask',
        [
            state('show', style({
                display: 'block',
                opacity: .7
            })),
            state('hide', style({
                display: 'none',
                opacity: 0
            })),
            transition('hide <=> show', animate(`${animationTime}ms ease-in`)),
        ]
    );

export const toggleMainMenuBlurMainContainer: AnimationTriggerMetadata =
    trigger(
        'toggleMainMenuBlurMainContainer',
        [
            state('show', style({
                filter: 'blur(3px)'
            })),
            state('hide', style({
                filter: 'none'
            })),
            transition('hide <=> show', animate(`0ms ease-in`)),
        ]
    );