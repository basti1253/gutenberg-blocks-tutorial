import {Component, Fragment} from '@wordpress/element';
import {InspectorControls, PlainText} from '@wordpress/editor';
import {__} from '@wordpress/i18n';
import {PanelBody, SelectControl} from '@wordpress/components';

export default class CodeEditComponent extends Component {

  static languages = [
    {
      value: 'javascript',
      label: 'javascript',
    },
    {
      value: 'typescript',
      label: 'typescript',
    },
  ];

  setLanguage = (language) => {
    this.props.setAttributes({language});
  };

  setFilePath = (filePath) => {
    this.props.setAttributes({filePath});
  };

  setContent = (content) => {
    this.props.setAttributes({content});
  };

  render() {
    const {attributes, className, mergeBlocks} = this.props;

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody>
            <SelectControl
              type='string'
              label={__('programming language')}
              value={attributes.language}
              onChange={this.setLanguage}
              options={CodeEditComponent.languages}
            />
          </PanelBody>
        </InspectorControls>
        <div className={className}>
          <h4>
            <PlainText
              tagName='span'
              value={attributes.filePath}
              onChange={this.setFilePath}
              placeholder={__('<> path/to/file…')}
            />
          </h4>
          <pre>
            <PlainText
              tagName='code'
              value={attributes.content}
              onChange={this.setContent}
              placeholder={__('your code snippet…')}
              onMerge={mergeBlocks}
            />
          </pre>
        </div>
      </Fragment>
    );
  }
}
