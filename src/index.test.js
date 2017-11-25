import React from 'react';
import renderer from 'react-test-renderer';
import AsciiTextSplit from './index.js';

it('Renders some Mixed Text without crashing', () => {
    const div = document.createElement('div');
    const rendered = renderer.create(<AsciiTextSplit>圓周率是3.1415926</AsciiTextSplit>);
    const renderedJSON = rendered.toJSON();
    expect(renderedJSON.children.length).toBe(2);
    expect(renderedJSON.children[0]).toHaveProperty('props.className', 'non-ascii');
    expect(renderedJSON.children[1]).toHaveProperty('props.className', 'ascii');
    expect(renderedJSON).toMatchSnapshot();
});
it('Renders empty text without crashing', () => {
    const div = document.createElement('div');
    const rendered = renderer.create(<AsciiTextSplit />);
    const renderedJSON = rendered.toJSON();
    expect(renderedJSON.children).toBeNull();
    expect(renderedJSON).toMatchSnapshot();
});
it('Renders ascii only text without crashing', () => {
    const div = document.createElement('div');
    const rendered = renderer.create(<AsciiTextSplit>ASCII</AsciiTextSplit>);
    const renderedJSON = rendered.toJSON();
    expect(renderedJSON).toHaveProperty('children.length', 1);
    expect(renderedJSON).toMatchSnapshot();
});
it('Renders alternative class name without issue', () => {
    const div = document.createElement('div');
    const rendered = renderer.create(
        <AsciiTextSplit wrapperClassName="SOMETHING" asciiClassName="number" nonAsciiClassName="chinese">
            圓周率是3.1415926
        </AsciiTextSplit>
    );
    const renderedJSON = rendered.toJSON();
    expect(renderedJSON).toHaveProperty('props.className', 'SOMETHING');
    expect(renderedJSON.children.length).toBe(2);
    expect(renderedJSON.children[0]).toHaveProperty('props.className', 'chinese');
    expect(renderedJSON.children[1]).toHaveProperty('props.className', 'number');
    expect(renderedJSON).toMatchSnapshot();
});
