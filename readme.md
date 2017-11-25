# React-ascii-char-split
React Component for separately rendering ASCII and non-ASCII String.

## Example:
```js
<AsciiCharSplit wrapperClassName="SOMETHING" asciiClassName="number" nonAsciiClassName="chinese">
    圓周率是3.1415926
</AsciiCharSplit>
// OR
<AsciiCharSplit wrapperClassName="SOMETHING" asciiClassName="number" nonAsciiClassName="chinese" text="圓周率是3.1415926"/>
```
Both render to 
```html
<span class="SOMETHING"><span class="chinese">圓周率是</span><span class="number">3.1415926</span></span>
```

### API:
PropTypes:
```js
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
```
DefaultProps:
```js
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
```