import {__} from '@wordpress/i18n';
import {createBlock} from '@wordpress/blocks';

import CodeEditComponent from './edit';
import {Path, SVG} from '@wordpress/components';

/**
 * @copyright wordpress
 * @see {@link https://github.com/WordPress/gutenberg/blob/master/packages/block-library/src/code/index.js#L23}
 */
const icon = <SVG viewBox="0 0 24 24" width='24' height='24' xmlns="http://www.w3.org/2000/svg"><Path d="M0,0h24v24H0V0z" fill="none"/>
  <Path d="M9.4,16.6L4.8,12l4.6-4.6L8,6l-6,6l6,6L9.4,16.6z M14.6,16.6l4.6-4.6l-4.6-4.6L16,6l6,6l-6,6L14.6,16.6z"/>
</SVG>;

const attributes = {
  language: {
    type: 'string',
    default: 'javascript',
  },
  filePath: {
    type: 'string',
    source: 'text',
    selector: 'h4 span',
  },
  content: {
    type: 'string',
    source: 'text',
    selector: 'code',
  },
};

const supports = {
  html: false,
};

const settings = {
  title: __('DP Code'),
  icon,
  category: 'formatting',
  attributes,
  supports,
  edit: CodeEditComponent,
  save({attributes, className}) {
    return (
      <div className={className}>
        <h4>
          {icon}<span>{attributes.filePath}</span>
        </h4>
        <pre>
          <code className={attributes.language}>{attributes.content}</code>
        </pre>
      </div>
    );
  },
  deprecated: [
    {
      supports,
      attributes,
      save({attributes, className}) {
        return (
          <div className={className}>
            <h4>
              <span>{attributes.filePath}</span>
            </h4>
            <pre>
              <code className={attributes.language}>{attributes.content}</code>
            </pre>
          </div>
        );
      }
    }
  ],
  transforms: {
    from: [
      {
        type: 'block',
        blocks: ['core/code', 'core/paragraph', 'core/preformatted'],
        transform: ({content}) => createBlock('jscouch/code', {content}),
      },
    ],
    to: [
      {
        type: 'block',
        blocks: ['core/code'],
        transform: ({content}) => createBlock('core/code', {content}),
      },
    ],
  },
};

export default settings;
