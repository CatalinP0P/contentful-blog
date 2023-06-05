// components/RichTextRenderer.js
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const RichTextRenderer = ({ content }) => {
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        const { title, description, file } = node.data.target.fields;
        const imageUrl = file.url;
        const imageAlt = title || description || 'Embedded Asset';

        return <img src={imageUrl} alt={imageAlt} />;
      },
    },
  };

  return <div>{documentToReactComponents(content, options)}</div>;
};

export default RichTextRenderer;
