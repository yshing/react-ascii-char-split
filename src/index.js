import React from 'react';
import PropTypes from 'prop-types';
const AsciiCharSplit = ({
    wrapper,
    text,
    textWrapper,
    children,
    nonAsciiClassName,
    asciiClassName,
    wrapperClassName,
    allAsciiRegex,
    asciiSplitRegex,
    style,
    asciiStyle,
    nonAsciiStyle,
}) => {
    const str = (text || children || '').trim();
    if (!str) return React.createElement(wrapper);
    if (allAsciiRegex.test(str))
        return React.createElement(
            wrapper,
            { className: wrapperClassName, style },
            React.createElement(textWrapper, { className: asciiClassName }, str)
        );
    const strSplit = str.split(asciiSplitRegex);
    return React.createElement(
        wrapper,
        { className: wrapperClassName, style },
        strSplit
            .filter(Boolean)
            .map(
                (i, key) =>
                    allAsciiRegex.test(i)
                        ? React.createElement(textWrapper, { key, className: asciiClassName, style: asciiStyle }, i)
                        : React.createElement(
                              textWrapper,
                              { key, className: nonAsciiClassName, style: nonAsciiStyle },
                              i
                          )
            )
    );
};
AsciiCharSplit.propTypes = {
    wrapper: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    textWrapper: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    text: PropTypes.string,
    children: PropTypes.string,
    nonAsciiClassName: PropTypes.string,
    asciiClassName: PropTypes.string,
    wrapperClassName: PropTypes.string,
    allAsciiRegex: PropTypes.instanceOf(RegExp),
    asciiSplitRegex: PropTypes.instanceOf(RegExp),
};
AsciiCharSplit.defaultProps = {
    wrapper: 'span',
    textWrapper: 'span',
    wrapperClassName: 'char-split-wrapper',
    asciiClassName: 'ascii',
    nonAsciiClassName: 'non-ascii',
    text: '',
    children: '',
    allAsciiRegex: /^[ -~]+$/,
    asciiSplitRegex: /([ -~]+)/,
    asciiStyle: undefined,
    nonAsciiStyle: undefined,
    style: undefined,
};
export default AsciiCharSplit;
