(function (playease) {
    var utils = playease.utils,
        events = playease.events,
        EventDispatcher = events.EventDispatcher,
        MouseEvent = events.MouseEvent,
        UI = playease.UI,
        components = UI.components,

        CLASS_TOOLTIP = 'pe-tooltip';

    function Preview() {
        EventDispatcher.call(this, 'Preview', null, [MouseEvent.CLICK]);

        var _this = this,
            _container,
            _content;

        function _init() {
            _container = utils.createElement('div', CLASS_TOOLTIP + ' preview');
            _content = utils.createElement('div');
            _container.appendChild(_content);
        }

        _this.append = function (url, min, max) {
            var img = utils.createElement('img');
            img.setAttribute('min', min);
            img.setAttribute('max', max || NaN);
            img.src = url;
            _content.appendChild(img);
        };

        _this.element = function () {
            return _container;
        };

        _this.resize = function (width, height) {

        };

        _init();
    }

    Preview.prototype = Object.create(EventDispatcher.prototype);
    Preview.prototype.constructor = Preview;
    Preview.prototype.kind = 'Preview';

    components.Preview = Preview;
})(playease);

