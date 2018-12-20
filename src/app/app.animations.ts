import { animate, AnimationTriggerMetadata, keyframes, state, style, transition, trigger } from '@angular/animations';

/**
 * Тайминги у появления и скрытия одинаковы.
 * @type {string}
 */
const animationTime: number = 180;

export const toggleMainMenu: AnimationTriggerMetadata
    = trigger(
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
            transition('hide => show', animate(`${animationTime}ms 50ms`)),
            transition('show => hide', animate(`${animationTime * 1.5}ms`))
        ]
    );

export const toggleMainMenuMask: AnimationTriggerMetadata
    = trigger(
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

export const toggleMainMenuBlurMainContainer: AnimationTriggerMetadata
    = trigger(
        'toggleMainMenuBlurMainContainer',
        [
            state('show', style({
                filter: 'blur(3px)'
            })),
            state('hide', style({
                filter: 'none'
            })),
            transition('hide => show', animate(`10ms ${animationTime + 100}ms`)),
            transition('show => hide', animate(`0ms`)),
        ]
    );

export const toggleMainMenuContainerBody: AnimationTriggerMetadata
    = trigger(
        'toggleMainMenuContainerBody',
        [
            state('show', style({
                display: 'block'
            })),
            state('hide', style({
                display: 'none'
            })),
            transition('hide => show', animate(`10ms ${animationTime + 100}ms`)),
            transition('show => hide', animate(`0ms`)),
        ]
    );