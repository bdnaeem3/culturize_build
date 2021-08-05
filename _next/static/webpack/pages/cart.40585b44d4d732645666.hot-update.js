webpackHotUpdate_N_E("pages/cart",{

/***/ "./components/Payments/CheckoutForm.js":
/*!*********************************************!*\
  !*** ./components/Payments/CheckoutForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckoutForm; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CardSelection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardSelection */ "./components/Payments/CardSelection.js");



var _jsxFileName = "H:\\mayank\\culturise\\components\\Payments\\CheckoutForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function CheckoutForm() {
  _s();

  var stripe = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__["useStripe"])();
  var elements = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__["useElements"])();
  var authToken = localStorage.getItem("authToken");

  function stripeTokenHandler(_x) {
    return _stripeTokenHandler.apply(this, arguments);
  }

  function _stripeTokenHandler() {
    _stripeTokenHandler = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(token) {
      var paymentData, response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              paymentData = {
                stripeToken: token.id,
                amount: 15,
                order_number: 'CT-39D74CB3B4962C',
                gateway: "stripe"
              }; // Use fetch to send the token ID and any other payment data to your server.
              // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

              _context2.next = 3;
              return fetch('https://stg-api.culturize.com/api/v1/payment/charge/', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: "Bearer ".concat(authToken)
                },
                body: JSON.stringify(paymentData)
              });

            case 3:
              response = _context2.sent;
              return _context2.abrupt("return", response.json());

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _stripeTokenHandler.apply(this, arguments);
  }

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
      var card, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // We don't want to let default form submission happen here,
              // which would refresh the page.
              event.preventDefault();

              if (!(!stripe || !elements)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              card = elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__["CardElement"]);
              _context.next = 6;
              return stripe.createToken(card);

            case 6:
              result = _context.sent;

              if (result.error) {
                // Show error to your customer.
                console.log(result.error.message);
              } else {
                // Send the token to your server.
                // This function does not exist yet; we will define it in the next step.
                stripeTokenHandler(result.token);
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x2) {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx("form", {
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, __jsx(_CardSelection__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }), __jsx("button", {
    className: "orangebtn",
    style: {
      fontSize: "16px",
      marginTop: 16,
      width: "180px"
    },
    disabled: !stripe,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, "Confirm"));
}

_s(CheckoutForm, "EKvoGMX7lxsZ5SGPpYu2aKFzClQ=", false, function () {
  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__["useStripe"], _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__["useElements"]];
});

_c = CheckoutForm;

var _c;

$RefreshReg$(_c, "CheckoutForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYXltZW50cy9DaGVja291dEZvcm0uanMiXSwibmFtZXMiOlsiQ2hlY2tvdXRGb3JtIiwic3RyaXBlIiwidXNlU3RyaXBlIiwiZWxlbWVudHMiLCJ1c2VFbGVtZW50cyIsImF1dGhUb2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdHJpcGVUb2tlbkhhbmRsZXIiLCJ0b2tlbiIsInBheW1lbnREYXRhIiwic3RyaXBlVG9rZW4iLCJpZCIsImFtb3VudCIsIm9yZGVyX251bWJlciIsImdhdGV3YXkiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImpzb24iLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FyZCIsImdldEVsZW1lbnQiLCJDYXJkRWxlbWVudCIsImNyZWF0ZVRva2VuIiwicmVzdWx0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImZvbnRTaXplIiwibWFyZ2luVG9wIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLFlBQVQsR0FBd0I7QUFBQTs7QUFDckMsTUFBTUMsTUFBTSxHQUFHQyx5RUFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsMkVBQVcsRUFBNUI7QUFDQSxNQUFNQyxTQUFTLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixXQUFyQixDQUFsQjs7QUFIcUMsV0FLdEJDLGtCQUxzQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSwyTUFLckMsa0JBQWtDQyxLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUUMseUJBRFIsR0FDc0I7QUFDbEJDLDJCQUFXLEVBQUVGLEtBQUssQ0FBQ0csRUFERDtBQUVsQkMsc0JBQU0sRUFBRSxFQUZVO0FBR2xCQyw0QkFBWSxFQUFFLG1CQUhJO0FBSWxCQyx1QkFBTyxFQUFFO0FBSlMsZUFEdEIsRUFRRTtBQUNBOztBQVRGO0FBQUEscUJBVXlCQyxLQUFLLENBQUMsc0RBQUQsRUFBeUQ7QUFDbkZDLHNCQUFNLEVBQUUsTUFEMkU7QUFFbkZDLHVCQUFPLEVBQUU7QUFDUCxrQ0FBZ0Isa0JBRFQ7QUFFUEMsK0JBQWEsbUJBQVlkLFNBQVo7QUFGTixpQkFGMEU7QUFNbkZlLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlWixXQUFmO0FBTjZFLGVBQXpELENBVjlCOztBQUFBO0FBVVFhLHNCQVZSO0FBQUEsZ0RBb0JTQSxRQUFRLENBQUNDLElBQVQsRUFwQlQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FMcUM7QUFBQTtBQUFBOztBQTRCckMsTUFBTUMsWUFBWTtBQUFBLGdNQUFHLGlCQUFPQyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQjtBQUNBO0FBQ0FBLG1CQUFLLENBQUNDLGNBQU47O0FBSG1CLG9CQUtmLENBQUMxQixNQUFELElBQVcsQ0FBQ0UsUUFMRztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQVdieUIsa0JBWGEsR0FXTnpCLFFBQVEsQ0FBQzBCLFVBQVQsQ0FBb0JDLG1FQUFwQixDQVhNO0FBQUE7QUFBQSxxQkFZRTdCLE1BQU0sQ0FBQzhCLFdBQVAsQ0FBbUJILElBQW5CLENBWkY7O0FBQUE7QUFZYkksb0JBWmE7O0FBY25CLGtCQUFJQSxNQUFNLENBQUNDLEtBQVgsRUFBa0I7QUFDaEI7QUFDQUMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFNLENBQUNDLEtBQVAsQ0FBYUcsT0FBekI7QUFDRCxlQUhELE1BR087QUFDTDtBQUNBO0FBQ0E1QixrQ0FBa0IsQ0FBQ3dCLE1BQU0sQ0FBQ3ZCLEtBQVIsQ0FBbEI7QUFDRDs7QUFyQmtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpnQixZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQXdCQSxTQUNFO0FBQU0sWUFBUSxFQUFFQSxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFRLGFBQVMsRUFBQyxXQUFsQjtBQUE4QixTQUFLLEVBQUU7QUFBRVksY0FBUSxFQUFFLE1BQVo7QUFBb0JDLGVBQVMsRUFBRSxFQUEvQjtBQUFtQ0MsV0FBSyxFQUFFO0FBQTFDLEtBQXJDO0FBQTBGLFlBQVEsRUFBRSxDQUFDdEMsTUFBckc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLENBREY7QUFRRDs7R0E1RHVCRCxZO1VBQ1BFLGlFLEVBQ0VFLG1FOzs7S0FGS0osWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXJ0LjQwNTg1YjQ0ZDRkNzMyNjQ1NjY2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZVN0cmlwZSwgdXNlRWxlbWVudHMsIENhcmRFbGVtZW50fSBmcm9tICdAc3RyaXBlL3JlYWN0LXN0cmlwZS1qcyc7XHJcblxyXG5pbXBvcnQgQ2FyZFNlY3Rpb24gZnJvbSAnLi9DYXJkU2VsZWN0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoZWNrb3V0Rm9ybSgpIHtcclxuICBjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKTtcclxuICBjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKCk7XHJcbiAgY29uc3QgYXV0aFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoVG9rZW5cIik7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHN0cmlwZVRva2VuSGFuZGxlcih0b2tlbikge1xyXG4gICAgY29uc3QgcGF5bWVudERhdGEgPSB7XHJcbiAgICAgIHN0cmlwZVRva2VuOiB0b2tlbi5pZCxcclxuICAgICAgYW1vdW50OiAxNSxcclxuICAgICAgb3JkZXJfbnVtYmVyOiAnQ1QtMzlENzRDQjNCNDk2MkMnLFxyXG4gICAgICBnYXRld2F5OiBcInN0cmlwZVwiXHJcbiAgICB9O1xyXG4gIFxyXG4gICAgLy8gVXNlIGZldGNoIHRvIHNlbmQgdGhlIHRva2VuIElEIGFuZCBhbnkgb3RoZXIgcGF5bWVudCBkYXRhIHRvIHlvdXIgc2VydmVyLlxyXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9zdGctYXBpLmN1bHR1cml6ZS5jb20vYXBpL3YxL3BheW1lbnQvY2hhcmdlLycsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthdXRoVG9rZW59YCxcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bWVudERhdGEpLFxyXG4gICAgfSk7XHJcbiAgXHJcbiAgICAvLyBSZXR1cm4gYW5kIGRpc3BsYXkgdGhlIHJlc3VsdCBvZiB0aGUgY2hhcmdlLlxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCB0byBsZXQgZGVmYXVsdCBmb3JtIHN1Ym1pc3Npb24gaGFwcGVuIGhlcmUsXHJcbiAgICAvLyB3aGljaCB3b3VsZCByZWZyZXNoIHRoZSBwYWdlLlxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoIXN0cmlwZSB8fCAhZWxlbWVudHMpIHtcclxuICAgICAgLy8gU3RyaXBlLmpzIGhhcyBub3QgeWV0IGxvYWRlZC5cclxuICAgICAgLy8gTWFrZSAgc3VyZSB0byBkaXNhYmxlIGZvcm0gc3VibWlzc2lvbiB1bnRpbCBTdHJpcGUuanMgaGFzIGxvYWRlZC5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhcmQgPSBlbGVtZW50cy5nZXRFbGVtZW50KENhcmRFbGVtZW50KTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN0cmlwZS5jcmVhdGVUb2tlbihjYXJkKTtcclxuXHJcbiAgICBpZiAocmVzdWx0LmVycm9yKSB7XHJcbiAgICAgIC8vIFNob3cgZXJyb3IgdG8geW91ciBjdXN0b21lci5cclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0LmVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gU2VuZCB0aGUgdG9rZW4gdG8geW91ciBzZXJ2ZXIuXHJcbiAgICAgIC8vIFRoaXMgZnVuY3Rpb24gZG9lcyBub3QgZXhpc3QgeWV0OyB3ZSB3aWxsIGRlZmluZSBpdCBpbiB0aGUgbmV4dCBzdGVwLlxyXG4gICAgICBzdHJpcGVUb2tlbkhhbmRsZXIocmVzdWx0LnRva2VuKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxDYXJkU2VjdGlvbi8+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwib3JhbmdlYnRuXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMTZweFwiLCBtYXJnaW5Ub3A6IDE2LCB3aWR0aDogXCIxODBweFwiIH19IGRpc2FibGVkPXshc3RyaXBlfT5cclxuICAgICAgICBDb25maXJtXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9