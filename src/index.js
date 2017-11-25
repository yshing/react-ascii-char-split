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
}) => {
    const str = (text || children || '').trim();
    if (!str) return React.createElement(wrapper);
    if (allAsciiRegex.test(str))
        return React.createElement(
            wrapper,
            { className: wrapperClassName },
            React.createElement(textWrapper, { className: asciiClassName }, str)
        );
    const strSplit = str.split(asciiSplitRegex);
    return React.createElement(
        wrapper,
        { className: wrapperClassName },
        strSplit
            .filter(Boolean)
            .map(
                (i, key) =>
                    allAsciiRegex.test(i)
                        ? React.createElement(textWrapper, { key, className: asciiClassName }, i)
                        : React.createElement(textWrapper, { key, className: nonAsciiClassName }, i)
            )
    );
};
AsciiCharSplit.propTypes = {
    wrapper: PropTypes.oneOfType([PropTypes.element,PropTypes.string]),
    textWrapper: PropTypes.oneOfType([PropTypes.element,PropTypes.string]),
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
};
export default AsciiCharSplit;
