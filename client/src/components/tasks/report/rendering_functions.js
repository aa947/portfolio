import React from 'react';

/**
 *@param cardTitle <String> : Title to be shown on as card Title
 *@param content <JSX elemnt> : the content of the card
 *@desc renders the card with it's title and content
 */
export function renderCard(cardTitle, content) {
    return (<div className="row">
        <div className="col-lg-12 mb-12">

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">{cardTitle}</h6>
                </div>
                <div className="card-body" style={{ textAlign: "center" }} >
                    <div style={{ textAlign: 'center', padding: " 0 15% 0 15% " }} >
                        {content}
                    </div>

                </div>
            </div>
        </div>
    </div>);
}

/**
*
 *@desc Loading spinners for the charts
 */
export function loadingSpinner() {
    return (<div className="spinner-border" style={{ width: '5rem', height: '5rem' }} role="status">
        <span className="sr-only">Loading...</span>
    </div>);
} 