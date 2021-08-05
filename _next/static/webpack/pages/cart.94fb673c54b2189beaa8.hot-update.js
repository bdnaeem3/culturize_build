webpackHotUpdate_N_E("pages/cart",{

/***/ "./components/Culturise/RightSidebarYCShippingPayment.js":
/*!***************************************************************!*\
  !*** ./components/Culturise/RightSidebarYCShippingPayment.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth */ "./services/auth.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/helper */ "./utils/helper.js");
/* harmony import */ var _context_userInfoProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/userInfoProvider */ "./context/userInfoProvider.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/actions/cart */ "./store/actions/cart.js");
/* harmony import */ var _Modals_AddShipping__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Modals/AddShipping */ "./components/Modals/AddShipping.js");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/selectors */ "./store/selectors/index.js");
/* harmony import */ var _Payments_CheckoutForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Payments/CheckoutForm */ "./components/Payments/CheckoutForm.js");
/* harmony import */ var _Payments_Paypal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Payments/Paypal */ "./components/Payments/Paypal.js");




var _this = undefined,
    _jsxFileName = "H:\\mayank\\culturise\\components\\Culturise\\RightSidebarYCShippingPayment.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













var RightSidebarYCShippingPayment = function RightSidebarYCShippingPayment(_ref) {
  _s();

  var shipping_label = _ref.shipping_label,
      setshipping_label = _ref.setshipping_label;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      paypal = _useState[0],
      setPaypal = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_userInfoProvider__WEBPACK_IMPORTED_MODULE_7__["UserContext"]),
      userInfo = _useContext.userInfo;

  var addressList = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(Object(_store_selectors__WEBPACK_IMPORTED_MODULE_11__["makeSelectAddressList"])());

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      countries = _useState2[0],
      setCountries = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("Select Culture"),
      country = _useState3[0],
      setCountry = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      addShiping = _useState4[0],
      setShipping = _useState4[1];

  var getCountry = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var _country$data, _country$data$respons;

      var country;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _services_auth__WEBPACK_IMPORTED_MODULE_5__["default"].getCountry();

            case 2:
              country = _context.sent;
              setCountries(country === null || country === void 0 ? void 0 : (_country$data = country.data) === null || _country$data === void 0 ? void 0 : (_country$data$respons = _country$data.response) === null || _country$data$respons === void 0 ? void 0 : _country$data$respons.countries);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getCountry() {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getCountry();
    dispatch(Object(_store_actions_cart__WEBPACK_IMPORTED_MODULE_9__["getAddressInit"])());
  }, []);

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    name: "",
    state: "",
    first_name: userInfo === null || userInfo === void 0 ? void 0 : userInfo.first_name,
    last_name: userInfo === null || userInfo === void 0 ? void 0 : userInfo.last_name,
    address: "",
    apartment: "",
    city: "",
    postcode: ""
  }),
      value = _useState5[0],
      setValue = _useState5[1];

  function handleChange(evt) {
    var values = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setValue(_objectSpread(_objectSpread({}, value), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, evt.target.name, values)));
  }

  var saveAddress = function saveAddress() {
    dispatch(Object(_store_actions_cart__WEBPACK_IMPORTED_MODULE_9__["createShippingaddressInit"])(_objectSpread(_objectSpread({}, value), {}, {
      country: country
    })));
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx(_Modals_AddShipping__WEBPACK_IMPORTED_MODULE_10__["default"], {
    show: addShiping,
    onClose: function onClose() {
      setShipping(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 10
    }
  }), __jsx("p", {
    className: "ycsp-t1 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, "Shipping Details"), (userInfo === null || userInfo === void 0 ? void 0 : userInfo.username) === undefined && __jsx("div", {
    className: "addeditemscart p-3 my-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx("form", {
    className: "c-form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "form-group col d-flex align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "ycsp-t2 mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, "Contact information"), __jsx("p", {
    className: "ycsp-t3 mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  }, "Already have an account?", __jsx("span", {
    onClick: function onClick() {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/login");
    },
    className: "ycsp-t4 mb-0 ml-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 23
    }
  }, " ", "Log in")))))))), __jsx("div", {
    className: "addeditemscart p-3 my-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-md-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "c-form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, __jsx("div", {
    style: {
      width: "100%"
    },
    className: "form-group col d-flex align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "ycsp-t2 mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, "Shipping address"), __jsx("button", {
    onClick: function onClick(e) {
      e.preventDefault();
      setShipping(true);
    },
    style: {
      fontSize: 14,
      fontWeight: "bold",
      borderRadius: 4,
      width: 250
    },
    type: "button",
    className: "postnow",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, "Add  Address"))), __jsx("div", {
    className: "text-center mb-3 mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 12
    }
  }, "OR"), __jsx("select", {
    className: "form-control se-selectcat col mb-3",
    style: {
      border: "1px solid #d8dde2",
      borderRadius: "6px"
    },
    onChange: function onChange(e) {
      setshipping_label(e.target.value);
    },
    placeholder: "Select shipping address",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 12
    }
  }, addressList && addressList.map(function (i) {
    return __jsx("option", {
      value: i === null || i === void 0 ? void 0 : i.uuid,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 26
      }
    }, i === null || i === void 0 ? void 0 : i.name);
  })))))), __jsx("div", {
    className: "addeditemscart p-3 my-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-md-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 11
    }
  }, __jsx("form", {
    className: "c-form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "form-group col d-flex align-items-center justify-content-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "ycsp-t2 mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 19
    }
  }, "Pickup"))), __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "form-group col d-flex flex-column align-items-start",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "ycsp-t5 mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 19
    }
  }, "Pickup in Virginia Beach, VA, USA"), __jsx("p", {
    className: "ycsp-t6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 19
    }
  }, "Contact seller for Location details after checkout"))), __jsx("button", {
    className: "orangebtn",
    style: {
      fontSize: "16px",
      width: "180px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 15
    }
  }, "Confirm"))))), __jsx("p", {
    className: "ycsp-t1 my-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 7
    }
  }, "Payment Details"), __jsx("div", {
    className: "addeditemscart p-3 mt-3 res34",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-md-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 11
    }
  }, __jsx("form", {
    className: "c-form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "form-group col d-flex align-items-center justify-content-start",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/images/stripe.png",
    className: "mr-3 mr-sm-4",
    style: {
      top: 0,
      height: "36px"
    },
    alt: "flag",
    onClick: function onClick() {
      return setPaypal(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 19
    }
  }), __jsx("img", {
    src: "/images/paypal.png",
    className: "mr-3 mr-sm-4",
    style: {
      top: 0,
      height: "36px"
    },
    alt: "flag",
    onClick: function onClick() {
      return setPaypal(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 19
    }
  }))), paypal ? __jsx(_Payments_Paypal__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 19
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_Payments_CheckoutForm__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 17
    }
  })))))));
};

_s(RightSidebarYCShippingPayment, "Pe2EMDbUUlmAAOdp88Hf/BddY+4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"]];
});

_c = RightSidebarYCShippingPayment;
/* harmony default export */ __webpack_exports__["default"] = (RightSidebarYCShippingPayment);

var _c;

$RefreshReg$(_c, "RightSidebarYCShippingPayment");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdWx0dXJpc2UvUmlnaHRTaWRlYmFyWUNTaGlwcGluZ1BheW1lbnQuanMiXSwibmFtZXMiOlsiUmlnaHRTaWRlYmFyWUNTaGlwcGluZ1BheW1lbnQiLCJzaGlwcGluZ19sYWJlbCIsInNldHNoaXBwaW5nX2xhYmVsIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwicGF5cGFsIiwic2V0UGF5cGFsIiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwidXNlckluZm8iLCJhZGRyZXNzTGlzdCIsInVzZVNlbGVjdG9yIiwibWFrZVNlbGVjdEFkZHJlc3NMaXN0IiwiY291bnRyaWVzIiwic2V0Q291bnRyaWVzIiwiY291bnRyeSIsInNldENvdW50cnkiLCJhZGRTaGlwaW5nIiwic2V0U2hpcHBpbmciLCJnZXRDb3VudHJ5IiwiYXV0aCIsImRhdGEiLCJyZXNwb25zZSIsInVzZUVmZmVjdCIsImdldEFkZHJlc3NJbml0IiwibmFtZSIsInN0YXRlIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImFkZHJlc3MiLCJhcGFydG1lbnQiLCJjaXR5IiwicG9zdGNvZGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZXZ0IiwidmFsdWVzIiwidGFyZ2V0IiwidHlwZSIsImNoZWNrZWQiLCJzYXZlQWRkcmVzcyIsImNyZWF0ZVNoaXBwaW5nYWRkcmVzc0luaXQiLCJ1c2VybmFtZSIsInVuZGVmaW5lZCIsInJvdXRlciIsInB1c2giLCJ3aWR0aCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsIm1hcCIsImkiLCJ1dWlkIiwidG9wIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LFdBQU8sRUFBRTtBQUFBLGFBQUlwRCxTQUFTLENBQUMsS0FBRCxDQUFiO0FBQUEsS0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFRRTtBQUNFLE9BQUcsRUFBQyxvQkFETjtBQUVFLGFBQVMsRUFBQyxjQUZaO0FBR0UsU0FBSyxFQUFFO0FBQUVtRCxTQUFHLEVBQUUsQ0FBUDtBQUFVQyxZQUFNLEVBQUU7QUFBbEIsS0FIVDtBQUlFLE9BQUcsRUFBQyxNQUpOO0FBS0UsV0FBTyxFQUFFO0FBQUEsYUFBSXBELFNBQVMsQ0FBQyxJQUFELENBQWI7QUFBQSxLQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQURGLENBREYsRUFvQklELE1BQU0sR0FDSixNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESSxHQUVKLG1FQUNGLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURFLENBdEJOLENBREYsQ0FERixDQURGLENBM0lGLENBREY7QUFxUEQsQ0FsU0Q7O0dBQU1OLDZCO1VBQ1lJLHVELEVBR0lRLHVEOzs7S0FKaEJaLDZCO0FBb1NTQSw0RkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXJ0Ljk0ZmI2NzNjNTRiMjE4OWJlYWE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYXV0aCBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXV0aFwiO1xyXG5pbXBvcnQgeyBnZXRDb3VudHJ5RmxhZyB9IGZyb20gXCIuLi8uLi91dGlscy9oZWxwZXJcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC91c2VySW5mb1Byb3ZpZGVyXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVTaGlwcGluZ2FkZHJlc3NJbml0LCBnZXRBZGRyZXNzSW5pdCB9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2NhcnRcIjtcclxuaW1wb3J0IEFkZFNoaXBwaW5nSW5mb3JtYXRpb24gZnJvbSBcIi4uL01vZGFscy9BZGRTaGlwcGluZ1wiO1xyXG5pbXBvcnQgeyBtYWtlU2VsZWN0QWRkcmVzc0xpc3QgfSBmcm9tIFwiLi4vLi4vc3RvcmUvc2VsZWN0b3JzXCI7XHJcbmltcG9ydCBDaGVja291dEZvcm0gZnJvbSAnLi4vUGF5bWVudHMvQ2hlY2tvdXRGb3JtJztcclxuaW1wb3J0IFBheXBhbCBmcm9tIFwiLi4vUGF5bWVudHMvUGF5cGFsXCI7XHJcblxyXG5jb25zdCBSaWdodFNpZGViYXJZQ1NoaXBwaW5nUGF5bWVudCA9ICh7c2hpcHBpbmdfbGFiZWwsc2V0c2hpcHBpbmdfbGFiZWx9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPXVzZURpc3BhdGNoKClcclxuICBjb25zdCBbIHBheXBhbCwgc2V0UGF5cGFsIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgeyB1c2VySW5mbyB9ID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgY29uc3QgYWRkcmVzc0xpc3QgPSB1c2VTZWxlY3RvcihtYWtlU2VsZWN0QWRkcmVzc0xpc3QoKSk7XHJcblxyXG4gIGNvbnN0IFtjb3VudHJpZXMsIHNldENvdW50cmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NvdW50cnksIHNldENvdW50cnldID0gdXNlU3RhdGUoXCJTZWxlY3QgQ3VsdHVyZVwiKTtcclxuXHJcbiAgY29uc3QgW2FkZFNoaXBpbmcsIHNldFNoaXBwaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gIGNvbnN0IGdldENvdW50cnkgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBjb3VudHJ5ID0gYXdhaXQgYXV0aC5nZXRDb3VudHJ5KCk7XHJcbiAgICBzZXRDb3VudHJpZXMoY291bnRyeT8uZGF0YT8ucmVzcG9uc2U/LmNvdW50cmllcyk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldENvdW50cnkoKTtcclxuICAgIGRpc3BhdGNoKGdldEFkZHJlc3NJbml0KCkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgc3RhdGU6IFwiXCIsXHJcbiAgICBmaXJzdF9uYW1lOiB1c2VySW5mbz8uZmlyc3RfbmFtZSxcclxuICAgIGxhc3RfbmFtZTp1c2VySW5mbz8ubGFzdF9uYW1lLFxyXG4gICAgYWRkcmVzczogXCJcIixcclxuICAgIGFwYXJ0bWVudDogXCJcIixcclxuICAgIGNpdHk6IFwiXCIsXHJcbiAgICBwb3N0Y29kZTogXCJcIixcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2dCkge1xyXG4gICAgY29uc3QgdmFsdWVzID1cclxuICAgICAgZXZ0LnRhcmdldC50eXBlID09PSBcImNoZWNrYm94XCIgPyBldnQudGFyZ2V0LmNoZWNrZWQgOiBldnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICBzZXRWYWx1ZSh7XHJcbiAgICAgIC4uLnZhbHVlLFxyXG4gICAgICBbZXZ0LnRhcmdldC5uYW1lXTogdmFsdWVzXHJcbiAgICB9KTtcclxuICB9XHJcbmNvbnN0IHNhdmVBZGRyZXNzID0oKT0+e1xyXG4gIGRpc3BhdGNoKGNyZWF0ZVNoaXBwaW5nYWRkcmVzc0luaXQoey4uLnZhbHVlLGNvdW50cnk6Y291bnRyeX0pKVxyXG5cclxufVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgICA8QWRkU2hpcHBpbmdJbmZvcm1hdGlvblxyXG4gICAgICAgIHNob3c9e2FkZFNoaXBpbmd9XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4ge1xyXG4gICAgICAgICAgc2V0U2hpcHBpbmcoZmFsc2UpO1xyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInljc3AtdDEgbWItNFwiPlNoaXBwaW5nIERldGFpbHM8L3A+XHJcbiAgICAgIHt1c2VySW5mbz8udXNlcm5hbWUgPT09IHVuZGVmaW5lZCAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRlZGl0ZW1zY2FydCBwLTMgbXktM1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjLWZvcm1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInljc3AtdDIgbWItMFwiPkNvbnRhY3QgaW5mb3JtYXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwieWNzcC10MyBtYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD9cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwieWNzcC10NCBtYi0wIG1sLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZyBpblxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZGVkaXRlbXNjYXJ0IHAtMyBteS0zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYy1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwieWNzcC10MiBtYi0wXCI+U2hpcHBpbmcgYWRkcmVzczwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxMDAlXCJ9fSBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ5Y3NwLXQyIG1iLTBcIj5TaGlwcGluZyBhZGRyZXNzPC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHNldFNoaXBwaW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1MCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc3Rub3dcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQWRkICBBZGRyZXNzXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMyBtdC0zXCI+XHJcbiAgICAgICAgICAgT1JcclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcblxyXG4gICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgc2Utc2VsZWN0Y2F0IGNvbCBtYi0zXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXI6IFwiMXB4IHNvbGlkICNkOGRkZTJcIiwgYm9yZGVyUmFkaXVzOiBcIjZweFwiIH19XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRzaGlwcGluZ19sYWJlbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBzaGlwcGluZyBhZGRyZXNzXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHthZGRyZXNzTGlzdCAmJlxyXG4gICAgICAgICAgICAgICAgYWRkcmVzc0xpc3QubWFwKChpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8b3B0aW9uIHZhbHVlPXtpPy51dWlkfT57aT8ubmFtZX08L29wdGlvbj47XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlUZXN0IGN1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3V0b2ZzdG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sLWxhYmVsIGNoa2J4LWxhYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwic2F2ZWluZm9cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFNhdmUgdGhpcyBpbmZvcm1hdGlvbiBmb3IgbmV4dCB0aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZGVkaXRlbXNjYXJ0IHAtMyBteS0zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImMtZm9ybVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwieWNzcC10MiBtYi0wXCI+UGlja3VwPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInljc3AtdDUgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFBpY2t1cCBpbiBWaXJnaW5pYSBCZWFjaCwgVkEsIFVTQVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInljc3AtdDZcIj5cclxuICAgICAgICAgICAgICAgICAgICBDb250YWN0IHNlbGxlciBmb3IgTG9jYXRpb24gZGV0YWlscyBhZnRlciBjaGVja291dFxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcmFuZ2VidG5cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiMTZweFwiLCB3aWR0aDogXCIxODBweFwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ29uZmlybVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInljc3AtdDEgbXktNFwiPlBheW1lbnQgRGV0YWlsczwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZGRlZGl0ZW1zY2FydCBwLTMgbXQtMyByZXMzNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjLWZvcm1cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9zdHJpcGUucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0zIG1yLXNtLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRvcDogMCwgaGVpZ2h0OiBcIjM2cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImZsYWdcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5zZXRQYXlwYWwoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9wYXlwYWwucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0zIG1yLXNtLTRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRvcDogMCwgaGVpZ2h0OiBcIjM2cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cImZsYWdcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5zZXRQYXlwYWwodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXlwYWxcclxuICAgICAgICAgICAgICAgID8gPFBheXBhbC8+XHJcbiAgICAgICAgICAgICAgICA6IDw+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tvdXRGb3JtIC8+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNhcmRudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2FyZCBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNhcmRudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2FyZCBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJleHBkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4cGlyeSAoTU0vWVkpXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzZWN1cml0eWNvZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VjdXJpdHkgY29kZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInppcGNvZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiemlwY29kZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2xcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15VGVzdCBjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cIm91dG9mc3RvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1sYWJlbCBjaGtieC1sYWJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInNhdmVpbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTYXZlIHRoaXMgaW5mb3JtYXRpb24gZm9yIG5leHQgdGltZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3JhbmdlYnRuXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE2cHhcIiwgd2lkdGg6IFwiMTgwcHhcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENvbmZpcm1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSaWdodFNpZGViYXJZQ1NoaXBwaW5nUGF5bWVudDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==