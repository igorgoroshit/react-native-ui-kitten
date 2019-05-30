import React from 'react';
import {
  Switch,
  View,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
import { RkComponent } from '../rkComponent';

/**
 * `RkSwitch` is a component which looks like a standard iOS switch on both platforms.
 *
 * @extends React.Component
 *
 * @example Simple usage example:
 *
 * ```
 * state = {
 *   value: false, // switch is disabled by default
 * };
 *
 * <RkSwitch
 *   value={this.state.value}
 *   onValueChange={this.onSwitchValueChange}
 * />
 *
 * onSwitchValueChange = (value) => {
 *   this.setState({value: value});
 * };

 * ```
 *
 * @example Custom colors
 *
 * As in a standard react-native's Switch,
 * colors of the control can be configured via appropriate props:
 *
 * ```
 * <RkSwitch
 *   trackColor='blue'
 *   trackColor='yellow'
 *   thumbColor='purple'
 *   value={this.state.value}
 *   onValueChange={this.onSwitchValueChange)}
 * />
 * ```
 *
 * @example Using rkType prop
 *
 * `RkSwitch` has `rkType` prop. This prop works similar to CSS-class in web.
 * It is possible to set more than one type.
 * There is a possibility to control tint colors via `rkType`s.
 * Available `rkType`s: `primary`, `success`, `info`, `warning`, `danger`.
 *
 * ```
 * <RkSwitch
 *   rkType='danger'
 *   value={this.state.value}
 *   onValueChange={this.onSwitchValueChange}
 * />
 * ```
 *
 * @example Define new rkTypes
 *
 * New rkTypes are defined using `setType` method of `RkTheme`.
 *
 * ```
 * RkTheme.setType('RkSwitch', 'projectDefault', {
 *   trackColor: 'blue',
 *   trackColor: 'yellow',
 *   thumbColor: 'purple',
 *   margin: 10,
 * });
 * ```
 *
 * @styles Available style properties:
 * - `trackColor` : will be converted into `trackColor` prop of `Switch`
 * - `trackColor` : will be converted into `trackColor` prop of `Switch`
 * - `thumbColor` : will be converted into `thumbColor` prop of `Switch`
 * - ...: Any other style properties will be applied to `View` container.
 *
 * @property {string} rkType - Types for component stylization
 * By default `RkSwitch` supports following types: `primary`, `warning`, `danger`, `success`, `info`
 * @property {style} style - Style for `View` container
 * @property {Switch.props} props - All `Switch` props also applied to `RkSwitch`
 */
export class RkSwitch extends RkComponent {
  componentName = 'RkSwitch';
  typeMapping = {
    component: {},
  };
  static propTypes = {
    rkType: RkComponent.propTypes.rkType,
    disabled: PropTypes.bool,
    trackColor: PropTypes.object,
    thumbColor: PropTypes.string,
    value: PropTypes.bool,
    onValueChange: PropTypes.func,
    style: ViewPropTypes.style,
  };
  static defaultProps = {
    rkType: RkComponent.defaultProps.rkType,
    disabled: false,
    trackColor: {false:'#53d669',true:'#e5e5e5'},
    thumbColor: '#ffffff',
    ios_backgroundColor:'grey',
    value: false,
    onValueChange: (() => null),
    style: null,
  };

  defineStyles(additionalTypes) {
    const { component } = super.defineStyles(additionalTypes);
    const switchStyles = {
      trackColor: this.extractNonStyleValue(component, 'trackColor'),
      thumbColor: this.extractNonStyleValue(component, 'thumbColor'),
    };
    return { componentStyles: component, switchStyles };
  }

  render() {
    const {
      trackColor,
      thumbColor,
      rkType,
      style,
      ios_backgroundColor,
      ...restProps
    } = this.props;
    const { componentStyles, switchStyles } = this.defineStyles(rkType);
    console.warn(switchStyles.trackColor);
    return (
      <View style={[componentStyles, style]}>
        <Switch
          trackColor={switchStyles.trackColor || trackColor}
          thumbColor={switchStyles.thumbColor || thumbColor}
          ios_backgroundColor={ios_backgroundColor}
          {...restProps}
        />
      </View>
    );
  }
}
