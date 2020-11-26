(function (playease) {
    var utils = playease.utils,
        css = utils.css,
        events = playease.events,
        EventDispatcher = events.EventDispatcher,
        UI = playease.UI,

        CLASS_LOGO = 'pe-logo',

        _default = {
            kind: 'Logo',
            file: 'http://studease.cn/images/content/playease-logo.png',
            link: 'https://github.com/studease/playease',
            target: '_blank',
            style: 'margin: 3% 5%; width: 36px; height: 36px; top: 0px; right: 0px;',
            visibility: true,
        };

    function Logo(config) {
        EventDispatcher.call(this, 'Logo');

        var _this = this,
            _container,
            _logo,
            _img;

        function _init() {
            _this.config = config;
            _container = utils.createElement('div', CLASS_LOGO);
            _container.style = _this.config.style;
            _logo = utils.createElement('a');

            _img = new Image();
            _img.onload = _onLoad;
            _img.onabort = _onError;
            _img.onerror = _onError;
            _img.src = _this.config.file;
        }

        function _onLoad(e) {
            css.style(_container, {
                width: _img.width + 'px',
                height: _img.height + 'px',
            });
            css.style(_logo, {
                'background': 'url(' + _this.config.file + ')',
            });

            _logo.href = _this.config.link;
            _logo.target = _this.config.target;
            _container.appendChild(_logo);
        }

        function _onError(e) {
            utils.log('Failed to load logo "' + _img.src + '".');
        }

        _this.element = function () {
            return _container;
        };

        _this.resize = function (width, height) {

        };

        _init();
    }

    Logo.prototype = Object.create(EventDispatcher.prototype);
    Logo.prototype.constructor = Logo;
    Logo.prototype.kind = 'Logo';
    Logo.prototype.CONF = _default;

    UI.register(Logo);
})(playease);

