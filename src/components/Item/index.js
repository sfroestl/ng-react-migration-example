import angular from 'angular';
import React from 'react';
import ReactDOM from 'react-dom';
import Item from './presenter';

const render = (element, props) => {
    ReactDOM.render(
        <Item { ...props } />,
        element
    );
}

module.exports = angular.module('ngReactExample.item', [
]).component('item', {
    controller: function($element) {
        const $ctrl = this;
        const item = { name: 'A first item' };
        const props = { item };
        $ctrl.$onChanges = () => render($element[0], props);
    }
});
