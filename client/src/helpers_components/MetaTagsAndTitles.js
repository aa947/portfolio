import React from 'react';
import DocumentTitle from 'react-document-title';
import { Helmet } from 'react-helmet';


const MetaTagsAndTitles = ({ docTitle, tagTitle, description, imageUrl, url, author }) => {
    return (
        <DocumentTitle title={docTitle}>
            <>
                <Helmet>
                    <meta property="og:title" content={tagTitle} />
                    <meta property="og:description" content={description} />
                    <meta property="og:image" content={imageUrl} />
                    <meta property="og:url" content={url} />
                    <meta name="author" content={author} />
                </Helmet>
            </>
        </DocumentTitle>
    );
}

export default MetaTagsAndTitles;