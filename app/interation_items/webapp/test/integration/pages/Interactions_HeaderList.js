sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'interationitems',
            componentId: 'Interactions_HeaderList',
            entitySet: 'Interactions_Header'
        },
        CustomPageDefinitions
    );
});