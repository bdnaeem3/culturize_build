webpackHotUpdate_N_E("pages/sell-item",{

/***/ "./components/Culturise/CountryStateDropdown/index.js":
/*!************************************************************!*\
  !*** ./components/Culturise/CountryStateDropdown/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_countryMock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/countryMock */ "./utils/countryMock.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "H:\\mayank\\culturise\\components\\Culturise\\CountryStateDropdown\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var TAB = {
  COUNTRY: "COUNTRY",
  REGION: "REGION",
  AREA: "AREA"
};

var CountryPickerDropdown = function CountryPickerDropdown(_ref) {
  _s();

  var countryCheck = _ref.countryCheck,
      setCountryCheck = _ref.setCountryCheck,
      regionCheck = _ref.regionCheck,
      setRegionCheck = _ref.setRegionCheck,
      areaCheck = _ref.areaCheck,
      setAreaCheck = _ref.setAreaCheck,
      show = _ref.show;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(TAB.COUNTRY),
      active = _useState[0],
      setActive = _useState[1];

  var onSelect = function onSelect(type, text) {
    if (type === TAB.COUNTRY) {
      var checkExist = countryCheck === null || countryCheck === void 0 ? void 0 : countryCheck.filter(function (i) {
        return i === text;
      });

      if ((checkExist === null || checkExist === void 0 ? void 0 : checkExist.length) > 0) {
        var newFilter = countryCheck === null || countryCheck === void 0 ? void 0 : countryCheck.filter(function (i) {
          return i !== text;
        });
        setCountryCheck(newFilter);
      } else {
        var oldCountry = countryCheck === undefined ? [] : Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(countryCheck);
        oldCountry.push(text);
        setCountryCheck(oldCountry);
      }
    } else if (type === TAB.REGION) {
      var _checkExist = regionCheck === null || regionCheck === void 0 ? void 0 : regionCheck.filter(function (i) {
        return i === text;
      });

      if ((_checkExist === null || _checkExist === void 0 ? void 0 : _checkExist.length) > 0) {
        var _newFilter = regionCheck === null || regionCheck === void 0 ? void 0 : regionCheck.filter(function (i) {
          return i !== text;
        });

        setRegionCheck(_newFilter);
      } else {
        var _oldCountry = regionCheck === undefined ? [] : Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(regionCheck);

        _oldCountry.push(text);

        setRegionCheck(_oldCountry);
      }
    } else if (type === TAB.AREA) {
      var _checkExist2 = areaCheck === null || areaCheck === void 0 ? void 0 : areaCheck.filter(function (i) {
        return i === text;
      });

      if ((_checkExist2 === null || _checkExist2 === void 0 ? void 0 : _checkExist2.length) > 0) {
        var _newFilter2 = areaCheck === null || areaCheck === void 0 ? void 0 : areaCheck.filter(function (i) {
          return i !== text;
        });

        setAreaCheck(_newFilter2);
      } else {
        var _oldCountry2 = areaCheck === undefined ? [] : Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(areaCheck);

        _oldCountry2.push(text);

        setAreaCheck(_oldCountry2);
      }
    }
  };

  var sortRegion = _utils_countryMock__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (i) {
    return i.region;
  });
  var newRegion = sortRegion.filter(function (e, i) {
    return sortRegion.indexOf(e) === i;
  });
  var sortSubregion = _utils_countryMock__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (i) {
    return i.subregion;
  });
  var newSubRegion = sortSubregion.filter(function (e, i) {
    return sortSubregion.indexOf(e) === i;
  });
  var totalCountry = Number(countryCheck === null || countryCheck === void 0 ? void 0 : countryCheck.length) > 0 ? Number(countryCheck === null || countryCheck === void 0 ? void 0 : countryCheck.length) : 0;
  var totalRegion = Number(regionCheck === null || regionCheck === void 0 ? void 0 : regionCheck.length) > 0 ? Number(regionCheck === null || regionCheck === void 0 ? void 0 : regionCheck.length) : 0;
  var totalArea = Number(areaCheck === null || areaCheck === void 0 ? void 0 : areaCheck.length) > 0 ? Number(areaCheck === null || areaCheck === void 0 ? void 0 : areaCheck.length) : 0;
  var total = totalCountry + totalRegion + totalArea;
  return __jsx("div", {
    style: {
      position: "relative"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "dropdown-menu d-flex p-0",
    style: {
      width: "481px",
      overflowX: "hidden"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      position: "relative",
      height: 450
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      justifyContent: "space-between",
      display: "flex",
      padding: 5,
      width: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "d-flex flex-column mr-2",
    style: {
      position: "relative",
      width: 250
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "d-flex justify-content-between align-items-center px-4 cursor-pointer",
    style: {
      backgroundColor: active === TAB.COUNTRY ? "#e5f4f6" : "transparent",
      cursor: "pointer"
    },
    onClick: function onClick() {
      setActive(TAB.COUNTRY);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "my-1 mr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, "Country"), __jsx("i", {
    className: "bx bxs-chevron-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  })), __jsx("div", {
    style: {
      backgroundColor: active === TAB.REGION ? "#e5f4f6" : "transparent",
      cursor: "pointer"
    },
    onClick: function onClick() {
      setActive(TAB.REGION);
    },
    className: "d-flex justify-content-between align-items-center px-4 cursor-pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "my-1 mr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }, "Region"), __jsx("i", {
    className: "bx bxs-chevron-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  })), __jsx("div", {
    style: {
      backgroundColor: active === TAB.AREA ? "#e5f4f6" : "transparent",
      cursor: "pointer",
      width: 165
    },
    onClick: function onClick() {
      setActive(TAB.AREA);
    },
    className: "d-flex justify-content-between align-items-center px-4 cursor-pointer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 15
    }
  }, __jsx("p", {
    className: "my-1 mr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }, "Sub-Region"), __jsx("i", {
    className: "bx bxs-chevron-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "w-100",
    style: {
      position: "relative",
      minWidth: 200
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, active === TAB.COUNTRY && _utils_countryMock__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (country, key) {
    var _country$name, _country$name2, _countryCheck$include;

    return __jsx("div", {
      key: country === null || country === void 0 ? void 0 : country.name,
      onClick: function onClick() {
        onSelect(TAB.COUNTRY, country === null || country === void 0 ? void 0 : country.alpha2Code);
      },
      style: {
        cursor: "pointer"
      },
      className: "d-flex align-items-center justify-content-between w-100",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 21
      }
    }, __jsx("a", {
      className: "dropdown-item d-flex align-items-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 23
      }
    }, __jsx("img", {
      onError: function onError(ev) {
        return ev.target.src = "https://culturize.s3.amazonaws.com/client-images/53bacf26-00a5-4c31-a81e-0591deba218c.PNG";
      },
      src: country === null || country === void 0 ? void 0 : country.flag,
      className: "shadow-sm",
      alt: "flag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 25
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 25
      }
    }, (country === null || country === void 0 ? void 0 : (_country$name = country.name) === null || _country$name === void 0 ? void 0 : _country$name.length) > 15 ? (country === null || country === void 0 ? void 0 : (_country$name2 = country.name) === null || _country$name2 === void 0 ? void 0 : _country$name2.substring(0, 15)) + "..." : country === null || country === void 0 ? void 0 : country.name)), __jsx("div", {
      className: "myTest custom-control custom-checkbox",
      style: {
        marginBottom: "10px",
        cursor: "pointer"
      } // onClick={() => {
      //   onSelect(TAB.COUNTRY, country?.alpha2Code);
      // }}
      ,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 23
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Check, {
      onChange: function onChange(e) {
        onSelect(TAB.COUNTRY, country === null || country === void 0 ? void 0 : country.alpha2Code);
      },
      checked: countryCheck === null || countryCheck === void 0 ? void 0 : (_countryCheck$include = countryCheck.includes) === null || _countryCheck$include === void 0 ? void 0 : _countryCheck$include.call(countryCheck, country === null || country === void 0 ? void 0 : country.alpha2Code),
      type: "checkbox",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 25
      }
    })));
  }), active === TAB.REGION && newRegion.map(function (country, key) {
    var _regionCheck$includes;

    return country !== "" && __jsx("div", {
      key: country,
      onClick: function onClick() {
        onSelect(TAB.REGION, country);
      },
      style: {
        cursor: "pointer"
      },
      className: "d-flex align-items-center justify-content-between w-100",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 23
      }
    }, __jsx("a", {
      className: "dropdown-item d-flex align-items-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 25
      }
    }, __jsx("img", {
      onError: function onError(ev) {
        return ev.target.src = "https://culturize.s3.amazonaws.com/client-images/53bacf26-00a5-4c31-a81e-0591deba218c.PNG";
      },
      src: __webpack_require__(/*! ../../../images/world.png */ "./images/world.png"),
      className: "shadow-sm",
      alt: "flag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 27
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 27
      }
    }, (country === null || country === void 0 ? void 0 : country.length) > 15 ? (country === null || country === void 0 ? void 0 : country.substring(0, 15)) + "..." : country)), __jsx("div", {
      className: "myTest custom-control custom-checkbox",
      style: {
        marginBottom: "10px",
        cursor: "pointer"
      } // onClick={() => {
      //   onSelect(TAB.REGION, country?.region);
      // }}
      ,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 25
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Check, {
      onChange: function onChange(e) {
        onSelect(TAB.REGION, country);
      },
      checked: regionCheck === null || regionCheck === void 0 ? void 0 : (_regionCheck$includes = regionCheck.includes) === null || _regionCheck$includes === void 0 ? void 0 : _regionCheck$includes.call(regionCheck, country),
      type: "checkbox",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 27
      }
    })));
  }), active === TAB.AREA && newSubRegion.map(function (country, key) {
    var _areaCheck$includes;

    return country !== "" && __jsx("div", {
      key: country,
      onClick: function onClick() {
        onSelect(TAB.AREA, country);
      },
      style: {
        cursor: "pointer"
      },
      className: "d-flex align-items-center justify-content-between w-100",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 23
      }
    }, __jsx("a", {
      className: "dropdown-item d-flex align-items-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 25
      }
    }, __jsx("img", {
      onError: function onError(ev) {
        return ev.target.src = "https://culturize.s3.amazonaws.com/client-images/53bacf26-00a5-4c31-a81e-0591deba218c.PNG";
      },
      src: __webpack_require__(/*! ../../../images/world.png */ "./images/world.png"),
      className: "shadow-sm",
      alt: "flag",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 27
      }
    }), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 27
      }
    }, (country === null || country === void 0 ? void 0 : country.length) > 15 ? (country === null || country === void 0 ? void 0 : country.substring(0, 15)) + "..." : country)), __jsx("div", {
      className: "myTest custom-control custom-checkbox",
      style: {
        marginBottom: "10px",
        cursor: "pointer"
      } // onClick={() => {
      //   onSelect(TAB.AREA, country);
      // }}
      ,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 25
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Check, {
      onChange: function onChange(e) {
        onSelect(TAB.AREA, country);
      },
      checked: areaCheck === null || areaCheck === void 0 ? void 0 : (_areaCheck$includes = areaCheck.includes) === null || _areaCheck$includes === void 0 ? void 0 : _areaCheck$includes.call(areaCheck, country),
      type: "checkbox",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 27
      }
    })));
  }))), !show && __jsx("div", {
    onClick: function onClick() {
      var finalQuery;

      if ((countryCheck === null || countryCheck === void 0 ? void 0 : countryCheck.length) > 0) {
        finalQuery = "/country/".concat(countryCheck, "?");
      } else {
        finalQuery = "/country/".concat(undefined, "?");
      }

      var regionQuery;

      if ((regionCheck === null || regionCheck === void 0 ? void 0 : regionCheck.length) > 0) {
        regionQuery = "region=".concat(regionCheck);
      } else {
        regionQuery = "";
      }

      var areaQuery;

      if ((areaCheck === null || areaCheck === void 0 ? void 0 : areaCheck.length) > 0) {
        areaQuery = "".concat((regionCheck === null || regionCheck === void 0 ? void 0 : regionCheck.length) > 0 ? "&" : "", "sub_region=").concat(areaCheck);
      } else {
        areaQuery = "";
      }

      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("".concat(finalQuery).concat(regionQuery).concat(areaQuery));
      window && window.scroll(0, 0);
      setCountryCheck([]);
      setAreaCheck([]);
      setRegionCheck([]);
    },
    style: {
      // width: active === TAB.REGION ? "466px" : "466px",
      width: "100%",
      position: active === TAB.REGION ? "absolute" : "sticky",
      bottom: 0,
      fontSize: 12,
      fontWeight: "bold",
      cursor: "pointer",
      borderRadius: "0px!important",
      color: "rgb(255, 255, 255)",
      padding: "6px 8px",
      backgroundColor: "rgb(242, 159, 6)",
      display: "flex",
      justifyContent: "center"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 13
    }
  }, total > 0 ? total : "", " Culture", total > 1 ? "s" : "", " selected"))));
};

_s(CountryPickerDropdown, "eiRjqzXDiA6mqqfwrQJHC5bRhfA=");

_c = CountryPickerDropdown;
/* harmony default export */ __webpack_exports__["default"] = (CountryPickerDropdown);

var _c;

$RefreshReg$(_c, "CountryPickerDropdown");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./store/selectors/index.js":
/*!**********************************!*\
  !*** ./store/selectors/index.js ***!
  \**********************************/
/*! exports provided: makeSelectProductList, makeSelectProductCategory, makeSelectPopularProduct, makeSelectLatestArrivalProduct, makeSelectHeaderMenu, makeSelectPartner, makeSelectMessageList, makeSelectNotificationList, makeSelectCartList, makeSelectProductDetails, makeSelectRequestedProduct, makeSelectCartDiscount, makeSelectShippingAddress, makeSelectOrderId, makeSelectOrderList, makeSelectFavProduct, makeSelectProductbyStatus, makeSelectchatList, makeSelectconversationList, makeSelectProductuserProfile, makeSelectProductuserProducts, makeSelectProductneigbours, makeSelectAddressList, makeSelectTotalProductCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectProductList", function() { return makeSelectProductList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectProductCategory", function() { return makeSelectProductCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectPopularProduct", function() { return makeSelectPopularProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectLatestArrivalProduct", function() { return makeSelectLatestArrivalProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectHeaderMenu", function() { return makeSelectHeaderMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectPartner", function() { return makeSelectPartner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectMessageList", function() { return makeSelectMessageList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectNotificationList", function() { return makeSelectNotificationList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectCartList", function() { return makeSelectCartList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectProductDetails", function() { return makeSelectProductDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectRequestedProduct", function() { return makeSelectRequestedProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectCartDiscount", function() { return makeSelectCartDiscount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectShippingAddress", function() { return makeSelectShippingAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectOrderId", function() { return makeSelectOrderId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectOrderList", function() { return makeSelectOrderList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectFavProduct", function() { return makeSelectFavProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectProductbyStatus", function() { return makeSelectProductbyStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectchatList", function() { return makeSelectchatList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectconversationList", function() { return makeSelectconversationList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectProductuserProfile", function() { return makeSelectProductuserProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectProductuserProducts", function() { return makeSelectProductuserProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectProductneigbours", function() { return makeSelectProductneigbours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectAddressList", function() { return makeSelectAddressList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSelectTotalProductCount", function() { return makeSelectTotalProductCount; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");


var authDomain = function authDomain(state) {
  return state.auth;
};

var makeSelectPartner = function makeSelectPartner() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(authDomain, function (subdomain) {
    var _subdomain$partner, _subdomain$partner$re;

    return (subdomain === null || subdomain === void 0 ? void 0 : (_subdomain$partner = subdomain.partner) === null || _subdomain$partner === void 0 ? void 0 : (_subdomain$partner$re = _subdomain$partner.response) === null || _subdomain$partner$re === void 0 ? void 0 : _subdomain$partner$re.clients) || [];
  });
};

var productDomain = function productDomain(state) {
  return state.product;
};

var makeSelectProductList = function makeSelectProductList() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(productDomain, function (subdomain) {
    var _subdomain$product, _subdomain$product$re;

    return (subdomain === null || subdomain === void 0 ? void 0 : (_subdomain$product = subdomain.product) === null || _subdomain$product === void 0 ? void 0 : (_subdomain$product$re = _subdomain$product.response) === null || _subdomain$product$re === void 0 ? void 0 : _subdomain$product$re.products) || [];
  });
};

var makeSelectTotalProductCount = function makeSelectTotalProductCount() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(productDomain, function (subdomain) {
    var _subdomain$product2, _subdomain$product2$r;

    return (subdomain === null || subdomain === void 0 ? void 0 : (_subdomain$product2 = subdomain.product) === null || _subdomain$product2 === void 0 ? void 0 : (_subdomain$product2$r = _subdomain$product2.response) === null || _subdomain$product2$r === void 0 ? void 0 : _subdomain$product2$r.total) || [];
  });
};

var makeSelectProductCategory = function makeSelectProductCategory() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(productDomain, function (subdomain) {
    var _subdomain$category, _subdomain$category$r;

    return (subdomain === null || subdomain === void 0 ? void 0 : (_subdomain$category = subdomain.category) === null || _subdomain$category === void 0 ? void 0 : (_subdomain$category$r = _subdomain$category.response) === null || _subdomain$category$r === void 0 ? void 0 : _subdomain$category$r.categories) || [];
  });
};

var makeSelectPopularProduct = function makeSelectPopularProduct() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(productDomain, function (subdomain) {
    var _subdomain$product3, _subdomain$product3$r, _subdomain$product3$r2;

    return (subdomain === null || subdomain === void 0 ? void 0 : (_subdomain$product3 = subdomain.product) === null || _subdomain$product3 === void 0 ? void 0 : (_subdomain$product3$r = _subdomain$product3.response) === null || _subdomain$product3$r === void 0 ? void 0 : (_subdomain$product3$r2 = _subdomain$product3$r.products) === null || _subdomain$product3$r2 === void 0 ? void 0 : _subdomain$product3$r2.filter(function (i) {
      return i.most_popular === true;
    })) || [];
  });
};

var makeSelectLatestArrivalProduct = function makeSelectLatestArrivalProduct() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(productDomain, function (subdomain) {
    var _subdomain$product4, _subdomain$product4$r, _subdomain$product4$r2;

    return (subdomain === null || subdomain === void 0 ? void 0 : (_subdomain$product4 = subdomain.product) === null || _subdomain$product4 === void 0 ? void 0 : (_subdomain$product4$r = _subdomain$product4.response) === null || _subdomain$product4$r === void 0 ? void 0 : (_subdomain$product4$r2 = _subdomain$product4$r.products) === null || _subdomain$product4$r2 === void 0 ? void 0 : _subdomain$product4$r2.filter(function (i) {
      return i.latest === true;
    })) || [];
  });
};

var makeSelectProductDetails = function makeSelectProductDetails() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(productDomain, function (subdomain) {
    var _subdomain$details, _subdomain$details$re;

    return (subdomain === null || subdomain === void 0 ? void 0 : (_subdomain$details = subdomain.details) === null || _subdomain$details === void 0 ? void 0 : (_subdomain$details$re = _subdomain$details.response) === null || _subdomain$details$re === void 0 ? void 0 : _subdomain$details$re.products) || {};
  });
};

var makeSelectRequestedProduct = function makeSelectRequestedProduct() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(productDomain, function (subdomain) {
    var _subdomain$requestedI, _subdomain$requestedI2;

    return (subdomain === null || subdomain === void 0 ? void 0 : (_subdomain$requestedI = subdomain.requestedItem) === null || _subdomain$requestedI === void 0 ? void 0 : (_subdomain$requestedI2 = _subdomain$requestedI.response) === null || _subdomain$requestedI2 === void 0 ? void 0 : _subdomain$requestedI2.items) || [];
  });
};

var makeSelectFavProduct = function makeSelectFavProduct() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(productDomain, function (subdomain) {
    var _subdomain$favourite;

    return (subdomain === null || subdomain === void 0 ? void 0 : (_subdomain$favourite = subdomain.favourite) === null || _subdomain$favourite === void 0 ? void 0 : _subdomain$favourite.response) || [];
  });
};

var makeSelectProductbyStatus = function makeSelectProductbyStatus() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(productDomain, function (subdomain) {
    return subdomain || [];
  });
};

var makeSelectProductuserProfile = function makeSelectProductuserProfile() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(productDomain, function (subdomain) {
    var _subdomain$profile, _subdomain$profile$re;

    return (subdomain === null || subdomain === void 0 ? void 0 : (_subdomain$profile = subdomain.profile) === null || _subdomain$profile === void 0 ? void 0 : (_subdomain$profile$re = _subdomain$profile.response) === null || _subdomain$profile$re === void 0 ? void 0 : _subdomain$profile$re.user) || {};
  });
};

var makeSelectProductuserProducts = function makeSelectProductuserProducts() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(productDomain, function (subdomain) {
    var _subdomain$sellerProd;

    return (subdomain === null || subdomain === void 0 ? void 0 : (_subdomain$sellerProd = subdomain.sellerProduct) === null || _subdomain$sellerProd === void 0 ? void 0 : _subdomain$sellerProd.response) || {};
  });
};

var makeSelectProductneigbours = function makeSelectProductneigbours() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(productDomain, function (subdomain) {
    var _subdomain$neighbour, _subdomain$neighbour$;

    return (subdomain === null || subdomain === void 0 ? void 0 : (_subdomain$neighbour = subdomain.neighbour) === null || _subdomain$neighbour === void 0 ? void 0 : (_subdomain$neighbour$ = _subdomain$neighbour.response) === null || _subdomain$neighbour$ === void 0 ? void 0 : _subdomain$neighbour$.border_countries) || [];
  });
};

var headerDomain = function headerDomain(state) {
  return state.header;
};

var makeSelectHeaderMenu = function makeSelectHeaderMenu() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(headerDomain, function (subdomain) {
    var _subdomain$headerMenu, _subdomain$headerMenu2;

    return ((_subdomain$headerMenu = subdomain.headerMenu) === null || _subdomain$headerMenu === void 0 ? void 0 : (_subdomain$headerMenu2 = _subdomain$headerMenu.response) === null || _subdomain$headerMenu2 === void 0 ? void 0 : _subdomain$headerMenu2.categories) || [];
  });
};

var makeSelectMessageList = function makeSelectMessageList() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(headerDomain, function (subdomain) {
    var _subdomain$message, _subdomain$message$re;

    return ((_subdomain$message = subdomain.message) === null || _subdomain$message === void 0 ? void 0 : (_subdomain$message$re = _subdomain$message.response) === null || _subdomain$message$re === void 0 ? void 0 : _subdomain$message$re.messages) || [];
  });
};

var makeSelectNotificationList = function makeSelectNotificationList() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(headerDomain, function (subdomain) {
    var _subdomain$notificati, _subdomain$notificati2;

    return ((_subdomain$notificati = subdomain.notification) === null || _subdomain$notificati === void 0 ? void 0 : (_subdomain$notificati2 = _subdomain$notificati.response) === null || _subdomain$notificati2 === void 0 ? void 0 : _subdomain$notificati2.notifications) || [];
  });
};

var makeSelectCartList = function makeSelectCartList() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(headerDomain, function (subdomain) {
    var _subdomain$cart, _subdomain$cart$respo;

    return {
      cart: ((_subdomain$cart = subdomain.cart) === null || _subdomain$cart === void 0 ? void 0 : (_subdomain$cart$respo = _subdomain$cart.response) === null || _subdomain$cart$respo === void 0 ? void 0 : _subdomain$cart$respo.products) || [],
      loading: subdomain.isProceeding
    };
  });
};

var cartDomain = function cartDomain(state) {
  return state.cart;
};

var makeSelectCartDiscount = function makeSelectCartDiscount() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(cartDomain, function (subdomain) {
    return (subdomain === null || subdomain === void 0 ? void 0 : subdomain.discount) || {};
  });
};

var makeSelectShippingAddress = function makeSelectShippingAddress() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(cartDomain, function (subdomain) {
    var _subdomain$shippingAd, _subdomain$shippingAd2;

    return (subdomain === null || subdomain === void 0 ? void 0 : (_subdomain$shippingAd = subdomain.shippingAddress) === null || _subdomain$shippingAd === void 0 ? void 0 : (_subdomain$shippingAd2 = _subdomain$shippingAd.response) === null || _subdomain$shippingAd2 === void 0 ? void 0 : _subdomain$shippingAd2.address) || {};
  });
};

var makeSelectOrderId = function makeSelectOrderId() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(cartDomain, function (subdomain) {
    var _subdomain$orderId;

    return (subdomain === null || subdomain === void 0 ? void 0 : (_subdomain$orderId = subdomain.orderId) === null || _subdomain$orderId === void 0 ? void 0 : _subdomain$orderId.response) || {};
  });
};

var makeSelectOrderList = function makeSelectOrderList() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(cartDomain, function (subdomain) {
    var _subdomain$orderList, _subdomain$orderList$;

    return (subdomain === null || subdomain === void 0 ? void 0 : (_subdomain$orderList = subdomain.orderList) === null || _subdomain$orderList === void 0 ? void 0 : (_subdomain$orderList$ = _subdomain$orderList.response) === null || _subdomain$orderList$ === void 0 ? void 0 : _subdomain$orderList$.orders) || {};
  });
};

var makeSelectAddressList = function makeSelectAddressList() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(cartDomain, function (subdomain) {
    var _subdomain$address, _subdomain$address$re;

    return (subdomain === null || subdomain === void 0 ? void 0 : (_subdomain$address = subdomain.address) === null || _subdomain$address === void 0 ? void 0 : (_subdomain$address$re = _subdomain$address.response) === null || _subdomain$address$re === void 0 ? void 0 : _subdomain$address$re.addresses) || [];
  });
};

var messageDomain = function messageDomain(state) {
  return state === null || state === void 0 ? void 0 : state.message;
};

var makeSelectchatList = function makeSelectchatList() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(messageDomain, function (subdomain) {
    var _subdomain$messages, _subdomain$messages$r;

    return (subdomain === null || subdomain === void 0 ? void 0 : (_subdomain$messages = subdomain.messages) === null || _subdomain$messages === void 0 ? void 0 : (_subdomain$messages$r = _subdomain$messages.response) === null || _subdomain$messages$r === void 0 ? void 0 : _subdomain$messages$r.messages) || [];
  });
};

var makeSelectconversationList = function makeSelectconversationList() {
  return Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(messageDomain, function (subdomain) {
    var _subdomain$conversati, _subdomain$conversati2;

    return (subdomain === null || subdomain === void 0 ? void 0 : (_subdomain$conversati = subdomain.conversation) === null || _subdomain$conversati === void 0 ? void 0 : (_subdomain$conversati2 = _subdomain$conversati.response) === null || _subdomain$conversati2 === void 0 ? void 0 : _subdomain$conversati2.messages) || [];
  });
};



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdWx0dXJpc2UvQ291bnRyeVN0YXRlRHJvcGRvd24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL3NlbGVjdG9ycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJUQUIiLCJDT1VOVFJZIiwiUkVHSU9OIiwiQVJFQSIsIkNvdW50cnlQaWNrZXJEcm9wZG93biIsImNvdW50cnlDaGVjayIsInNldENvdW50cnlDaGVjayIsInJlZ2lvbkNoZWNrIiwic2V0UmVnaW9uQ2hlY2siLCJhcmVhQ2hlY2siLCJzZXRBcmVhQ2hlY2siLCJzaG93IiwidXNlU3RhdGUiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJvblNlbGVjdCIsInR5cGUiLCJ0ZXh0IiwiY2hlY2tFeGlzdCIsImZpbHRlciIsImkiLCJsZW5ndGgiLCJuZXdGaWx0ZXIiLCJvbGRDb3VudHJ5IiwidW5kZWZpbmVkIiwicHVzaCIsInNvcnRSZWdpb24iLCJjb3VudHJ5IiwibWFwIiwicmVnaW9uIiwibmV3UmVnaW9uIiwiZSIsImluZGV4T2YiLCJzb3J0U3VicmVnaW9uIiwic3VicmVnaW9uIiwibmV3U3ViUmVnaW9uIiwidG90YWxDb3VudHJ5IiwiTnVtYmVyIiwidG90YWxSZWdpb24iLCJ0b3RhbEFyZWEiLCJ0b3RhbCIsInBvc2l0aW9uIiwid2lkdGgiLCJvdmVyZmxvd1giLCJoZWlnaHQiLCJqdXN0aWZ5Q29udGVudCIsImRpc3BsYXkiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiY3Vyc29yIiwibWluV2lkdGgiLCJrZXkiLCJuYW1lIiwiYWxwaGEyQ29kZSIsImV2IiwidGFyZ2V0Iiwic3JjIiwiZmxhZyIsInN1YnN0cmluZyIsIm1hcmdpbkJvdHRvbSIsImluY2x1ZGVzIiwicmVxdWlyZSIsImZpbmFsUXVlcnkiLCJyZWdpb25RdWVyeSIsImFyZWFRdWVyeSIsInJvdXRlciIsIndpbmRvdyIsInNjcm9sbCIsImJvdHRvbSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImJvcmRlclJhZGl1cyIsImNvbG9yIiwiYXV0aERvbWFpbiIsInN0YXRlIiwiYXV0aCIsIm1ha2VTZWxlY3RQYXJ0bmVyIiwiY3JlYXRlU2VsZWN0b3IiLCJzdWJkb21haW4iLCJwYXJ0bmVyIiwicmVzcG9uc2UiLCJjbGllbnRzIiwicHJvZHVjdERvbWFpbiIsInByb2R1Y3QiLCJtYWtlU2VsZWN0UHJvZHVjdExpc3QiLCJwcm9kdWN0cyIsIm1ha2VTZWxlY3RUb3RhbFByb2R1Y3RDb3VudCIsIm1ha2VTZWxlY3RQcm9kdWN0Q2F0ZWdvcnkiLCJjYXRlZ29yeSIsImNhdGVnb3JpZXMiLCJtYWtlU2VsZWN0UG9wdWxhclByb2R1Y3QiLCJtb3N0X3BvcHVsYXIiLCJtYWtlU2VsZWN0TGF0ZXN0QXJyaXZhbFByb2R1Y3QiLCJsYXRlc3QiLCJtYWtlU2VsZWN0UHJvZHVjdERldGFpbHMiLCJkZXRhaWxzIiwibWFrZVNlbGVjdFJlcXVlc3RlZFByb2R1Y3QiLCJyZXF1ZXN0ZWRJdGVtIiwiaXRlbXMiLCJtYWtlU2VsZWN0RmF2UHJvZHVjdCIsImZhdm91cml0ZSIsIm1ha2VTZWxlY3RQcm9kdWN0YnlTdGF0dXMiLCJtYWtlU2VsZWN0UHJvZHVjdHVzZXJQcm9maWxlIiwicHJvZmlsZSIsInVzZXIiLCJtYWtlU2VsZWN0UHJvZHVjdHVzZXJQcm9kdWN0cyIsInNlbGxlclByb2R1Y3QiLCJtYWtlU2VsZWN0UHJvZHVjdG5laWdib3VycyIsIm5laWdoYm91ciIsImJvcmRlcl9jb3VudHJpZXMiLCJoZWFkZXJEb21haW4iLCJoZWFkZXIiLCJtYWtlU2VsZWN0SGVhZGVyTWVudSIsImhlYWRlck1lbnUiLCJtYWtlU2VsZWN0TWVzc2FnZUxpc3QiLCJtZXNzYWdlIiwibWVzc2FnZXMiLCJtYWtlU2VsZWN0Tm90aWZpY2F0aW9uTGlzdCIsIm5vdGlmaWNhdGlvbiIsIm5vdGlmaWNhdGlvbnMiLCJtYWtlU2VsZWN0Q2FydExpc3QiLCJjYXJ0IiwibG9hZGluZyIsImlzUHJvY2VlZGluZyIsImNhcnREb21haW4iLCJtYWtlU2VsZWN0Q2FydERpc2NvdW50IiwiZGlzY291bnQiLCJtYWtlU2VsZWN0U2hpcHBpbmdBZGRyZXNzIiwic2hpcHBpbmdBZGRyZXNzIiwiYWRkcmVzcyIsIm1ha2VTZWxlY3RPcmRlcklkIiwib3JkZXJJZCIsIm1ha2VTZWxlY3RPcmRlckxpc3QiLCJvcmRlckxpc3QiLCJvcmRlcnMiLCJtYWtlU2VsZWN0QWRkcmVzc0xpc3QiLCJhZGRyZXNzZXMiLCJtZXNzYWdlRG9tYWluIiwibWFrZVNlbGVjdGNoYXRMaXN0IiwibWFrZVNlbGVjdGNvbnZlcnNhdGlvbkxpc3QiLCJjb252ZXJzYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxHQUFHLEdBQUc7QUFDVkMsU0FBTyxFQUFFLFNBREM7QUFFVkMsUUFBTSxFQUFFLFFBRkU7QUFHVkMsTUFBSSxFQUFFO0FBSEksQ0FBWjs7QUFNQSxJQUFNQyxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLE9BUXhCO0FBQUE7O0FBQUEsTUFQSkMsWUFPSSxRQVBKQSxZQU9JO0FBQUEsTUFOSkMsZUFNSSxRQU5KQSxlQU1JO0FBQUEsTUFMSkMsV0FLSSxRQUxKQSxXQUtJO0FBQUEsTUFKSkMsY0FJSSxRQUpKQSxjQUlJO0FBQUEsTUFISkMsU0FHSSxRQUhKQSxTQUdJO0FBQUEsTUFGSkMsWUFFSSxRQUZKQSxZQUVJO0FBQUEsTUFESkMsSUFDSSxRQURKQSxJQUNJOztBQUNKLGtCQUE0QkMsc0RBQVEsQ0FBQ1osR0FBRyxDQUFDQyxPQUFMLENBQXBDO0FBQUEsTUFBT1ksTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBRUEsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQy9CLFFBQUlELElBQUksS0FBS2hCLEdBQUcsQ0FBQ0MsT0FBakIsRUFBMEI7QUFDeEIsVUFBTWlCLFVBQVUsR0FB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RCwrREFBYyxDQUFDK0MsVUFBRCxFQUFhLFVBQUM5QyxTQUFEO0FBQUE7O0FBQUEsV0FBZSxDQUFBQSxTQUFTLFNBQVQsSUFBQUEsU0FBUyxXQUFULGtDQUFBQSxTQUFTLENBQUVtRCxPQUFYLG1HQUFvQmpELFFBQXBCLGdGQUE4QndELFNBQTlCLEtBQTJDLEVBQTFEO0FBQUEsR0FBYixDQURjO0FBQUEsQ0FBOUI7O0FBR0EsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDL0QsS0FBRDtBQUFBLFNBQVdBLEtBQVgsYUFBV0EsS0FBWCx1QkFBV0EsS0FBSyxDQUFFeUMsT0FBbEI7QUFBQSxDQUF0Qjs7QUFDQSxJQUFNdUIsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLFNBQ3pCN0QsK0RBQWMsQ0FDWjRELGFBRFksRUFFWixVQUFDM0QsU0FBRDtBQUFBOztBQUFBLFdBQWUsQ0FBQUEsU0FBUyxTQUFULElBQUFBLFNBQVMsV0FBVCxtQ0FBQUEsU0FBUyxDQUFFc0MsUUFBWCxxR0FBcUJwQyxRQUFyQixnRkFBK0JvQyxRQUEvQixLQUEyQyxFQUExRDtBQUFBLEdBRlksQ0FEVztBQUFBLENBQTNCOztBQUtBLElBQU11QiwwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTZCO0FBQUEsU0FDakM5RCwrREFBYyxDQUNaNEQsYUFEWSxFQUVaLFVBQUMzRCxTQUFEO0FBQUE7O0FBQUEsV0FBZSxDQUFBQSxTQUFTLFNBQVQsSUFBQUEsU0FBUyxXQUFULHFDQUFBQSxTQUFTLENBQUU4RCxZQUFYLDBHQUF5QjVELFFBQXpCLGtGQUFtQ29DLFFBQW5DLEtBQStDLEVBQTlEO0FBQUEsR0FGWSxDQURtQjtBQUFBLENBQW5DOztBQU1BIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlbGwtaXRlbS5kMjJmOGQ0NjRlZjk0YWY1MjA2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY291bnRyeSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvY291bnRyeU1vY2tcIjtcclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuY29uc3QgVEFCID0ge1xyXG4gIENPVU5UUlk6IFwiQ09VTlRSWVwiLFxyXG4gIFJFR0lPTjogXCJSRUdJT05cIixcclxuICBBUkVBOiBcIkFSRUFcIixcclxufTtcclxuXHJcbmNvbnN0IENvdW50cnlQaWNrZXJEcm9wZG93biA9ICh7XHJcbiAgY291bnRyeUNoZWNrLFxyXG4gIHNldENvdW50cnlDaGVjayxcclxuICByZWdpb25DaGVjayxcclxuICBzZXRSZWdpb25DaGVjayxcclxuICBhcmVhQ2hlY2ssXHJcbiAgc2V0QXJlYUNoZWNrLFxyXG4gIHNob3csXHJcbn0pID0+IHtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoVEFCLkNPVU5UUlkpO1xyXG5cclxuICBjb25zdCBvblNlbGVjdCA9ICh0eXBlLCB0ZXh0KSA9PiB7XHJcbiAgICBpZiAodHlwZSA9PT0gVEFCLkNPVU5UUlkpIHtcclxuICAgICAgY29uc3QgY2hlY2tFeGlzdCA9IGNvdW50cnlDaGVjaz8uZmlsdGVyKChpKSA9PiBpID09PSB0ZXh0KTtcclxuICAgICAgaWYgKGNoZWNrRXhpc3Q/Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBuZXdGaWx0ZXIgPSBjb3VudHJ5Q2hlY2s/LmZpbHRlcigoaSkgPT4gaSAhPT0gdGV4dCk7XHJcbiAgICAgICAgc2V0Q291bnRyeUNoZWNrKG5ld0ZpbHRlcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IG9sZENvdW50cnkgPSBjb3VudHJ5Q2hlY2sgPT09IHVuZGVmaW5lZCA/IFtdIDogWy4uLmNvdW50cnlDaGVja107XHJcbiAgICAgICAgb2xkQ291bnRyeS5wdXNoKHRleHQpO1xyXG4gICAgICAgIHNldENvdW50cnlDaGVjayhvbGRDb3VudHJ5KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBUQUIuUkVHSU9OKSB7XHJcbiAgICAgIGNvbnN0IGNoZWNrRXhpc3QgPSByZWdpb25DaGVjaz8uZmlsdGVyKChpKSA9PiBpID09PSB0ZXh0KTtcclxuICAgICAgaWYgKGNoZWNrRXhpc3Q/Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBuZXdGaWx0ZXIgPSByZWdpb25DaGVjaz8uZmlsdGVyKChpKSA9PiBpICE9PSB0ZXh0KTtcclxuICAgICAgICBzZXRSZWdpb25DaGVjayhuZXdGaWx0ZXIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBvbGRDb3VudHJ5ID0gcmVnaW9uQ2hlY2sgPT09IHVuZGVmaW5lZCA/IFtdIDogWy4uLnJlZ2lvbkNoZWNrXTtcclxuICAgICAgICBvbGRDb3VudHJ5LnB1c2godGV4dCk7XHJcbiAgICAgICAgc2V0UmVnaW9uQ2hlY2sob2xkQ291bnRyeSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gVEFCLkFSRUEpIHtcclxuICAgICAgY29uc3QgY2hlY2tFeGlzdCA9IGFyZWFDaGVjaz8uZmlsdGVyKChpKSA9PiBpID09PSB0ZXh0KTtcclxuXHJcbiAgICAgIGlmIChjaGVja0V4aXN0Py5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3QgbmV3RmlsdGVyID0gYXJlYUNoZWNrPy5maWx0ZXIoKGkpID0+IGkgIT09IHRleHQpO1xyXG4gICAgICAgIHNldEFyZWFDaGVjayhuZXdGaWx0ZXIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBvbGRDb3VudHJ5ID0gYXJlYUNoZWNrID09PSB1bmRlZmluZWQgPyBbXSA6IFsuLi5hcmVhQ2hlY2tdO1xyXG4gICAgICAgIG9sZENvdW50cnkucHVzaCh0ZXh0KTtcclxuICAgICAgICBzZXRBcmVhQ2hlY2sob2xkQ291bnRyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHNvcnRSZWdpb24gPSBjb3VudHJ5Lm1hcCgoaSkgPT4gaS5yZWdpb24pO1xyXG4gIGNvbnN0IG5ld1JlZ2lvbiA9IHNvcnRSZWdpb24uZmlsdGVyKChlLCBpKSA9PiBzb3J0UmVnaW9uLmluZGV4T2YoZSkgPT09IGkpO1xyXG5cclxuICBjb25zdCBzb3J0U3VicmVnaW9uID0gY291bnRyeS5tYXAoKGkpID0+IGkuc3VicmVnaW9uKTtcclxuICBjb25zdCBuZXdTdWJSZWdpb24gPSBzb3J0U3VicmVnaW9uLmZpbHRlcihcclxuICAgIChlLCBpKSA9PiBzb3J0U3VicmVnaW9uLmluZGV4T2YoZSkgPT09IGlcclxuICApO1xyXG5cclxuICBjb25zdCB0b3RhbENvdW50cnkgPVxyXG4gICAgTnVtYmVyKGNvdW50cnlDaGVjaz8ubGVuZ3RoKSA+IDAgPyBOdW1iZXIoY291bnRyeUNoZWNrPy5sZW5ndGgpIDogMDtcclxuICBjb25zdCB0b3RhbFJlZ2lvbiA9XHJcbiAgICBOdW1iZXIocmVnaW9uQ2hlY2s/Lmxlbmd0aCkgPiAwID8gTnVtYmVyKHJlZ2lvbkNoZWNrPy5sZW5ndGgpIDogMDtcclxuICBjb25zdCB0b3RhbEFyZWEgPVxyXG4gICAgTnVtYmVyKGFyZWFDaGVjaz8ubGVuZ3RoKSA+IDAgPyBOdW1iZXIoYXJlYUNoZWNrPy5sZW5ndGgpIDogMDtcclxuICBjb25zdCB0b3RhbCA9XHJcbiAgdG90YWxDb3VudHJ5K3RvdGFsUmVnaW9uK3RvdGFsQXJlYTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51IGQtZmxleCBwLTBcIlxyXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjQ4MXB4XCIsIG92ZXJmbG93WDogXCJoaWRkZW5cIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBoZWlnaHQ6IDQ1MCB9fT5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gbXItMlwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6IDI1MCB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBweC00IGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPT09IFRBQi5DT1VOVFJZID8gXCIjZTVmNGY2XCIgOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRBY3RpdmUoVEFCLkNPVU5UUlkpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS0xIG1yLTJcIj5Db3VudHJ5PC9wPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYnhzLWNoZXZyb24tcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA9PT0gVEFCLlJFR0lPTiA/IFwiI2U1ZjRmNlwiIDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlKFRBQi5SRUdJT04pO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgcHgtNCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktMSBtci0yXCI+UmVnaW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYnhzLWNoZXZyb24tcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA9PT0gVEFCLkFSRUEgPyBcIiNlNWY0ZjZcIiA6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2NSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZShUQUIuQVJFQSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBweC00IGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS0xIG1yLTJcIj5TdWItUmVnaW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYnhzLWNoZXZyb24tcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBtaW5XaWR0aDogMjAwIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7YWN0aXZlID09PSBUQUIuQ09VTlRSWSAmJlxyXG4gICAgICAgICAgICAgICAgY291bnRyeS5tYXAoKGNvdW50cnksIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17Y291bnRyeT8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3QoVEFCLkNPVU5UUlksIGNvdW50cnk/LmFscGhhMkNvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcj17KGV2KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGV2LnRhcmdldC5zcmMgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vY3VsdHVyaXplLnMzLmFtYXpvbmF3cy5jb20vY2xpZW50LWltYWdlcy81M2JhY2YyNi0wMGE1LTRjMzEtYTgxZS0wNTkxZGViYTIxOGMuUE5HXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y291bnRyeT8uZmxhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3ctc21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImZsYWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRyeT8ubmFtZT8ubGVuZ3RoID4gMTVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY291bnRyeT8ubmFtZT8uc3Vic3RyaW5nKDAsIDE1KSArIFwiLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY291bnRyeT8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteVRlc3QgY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgb25TZWxlY3QoVEFCLkNPVU5UUlksIGNvdW50cnk/LmFscGhhMkNvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3QoVEFCLkNPVU5UUlksIGNvdW50cnk/LmFscGhhMkNvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y291bnRyeUNoZWNrPy5pbmNsdWRlcz8uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeT8uYWxwaGEyQ29kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiXHJcbiAgICAgICAgICAgIGlkPVwiYWxwaGFjb2RlXCJcclxuICAgICAgICAgICAgY2hlY2tlZD17Y291bnRyeUNoZWNrLmluY2x1ZGVzKGNvdW50cnk/LmFscGhhMkNvZGUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1sYWJlbCBjaGtieC1sYWJcIlxyXG4gICAgICAgICAgICBodG1sRm9yPVwiYWxwaGFjb2RlXCJcclxuICAgICAgICAgID48L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgIHthY3RpdmUgPT09IFRBQi5SRUdJT04gJiZcclxuICAgICAgICAgICAgICAgIG5ld1JlZ2lvbi5tYXAoKGNvdW50cnksIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnkgIT09IFwiXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvdW50cnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdChUQUIuUkVHSU9OLCBjb3VudHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cInNoYWRvdy1zbVwiPvCfjI08L3A+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3I9eyhldikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGV2LnRhcmdldC5zcmMgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9jdWx0dXJpemUuczMuYW1hem9uYXdzLmNvbS9jbGllbnQtaW1hZ2VzLzUzYmFjZjI2LTAwYTUtNGMzMS1hODFlLTA1OTFkZWJhMjE4Yy5QTkdcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uLy4uLy4uL2ltYWdlcy93b3JsZC5wbmdcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3ctc21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZmxhZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudHJ5Py5sZW5ndGggPiAxNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvdW50cnk/LnN1YnN0cmluZygwLCAxNSkgKyBcIi4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY291bnRyeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15VGVzdCBjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBvblNlbGVjdChUQUIuUkVHSU9OLCBjb3VudHJ5Py5yZWdpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0KFRBQi5SRUdJT04sIGNvdW50cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3JlZ2lvbkNoZWNrPy5pbmNsdWRlcz8uKGNvdW50cnkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIlxyXG4gICAgICAgICAgICBpZD1cInJlZ2lvblwiXHJcbiAgICAgICAgICAgIGNoZWNrZWQ9e3JlZ2lvbkNoZWNrLmluY2x1ZGVzKGNvdW50cnk/LnJlZ2lvbil9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sLWxhYmVsIGNoa2J4LWxhYlwiXHJcbiAgICAgICAgICAgIGh0bWxGb3I9XCJyZWdpb25cIlxyXG4gICAgICAgICAgPjwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIHthY3RpdmUgPT09IFRBQi5BUkVBICYmXHJcbiAgICAgICAgICAgICAgICBuZXdTdWJSZWdpb24ubWFwKChjb3VudHJ5LCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5ICE9PSBcIlwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb3VudHJ5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3QoVEFCLkFSRUEsIGNvdW50cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXsoZXYpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChldi50YXJnZXQuc3JjID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vY3VsdHVyaXplLnMzLmFtYXpvbmF3cy5jb20vY2xpZW50LWltYWdlcy81M2JhY2YyNi0wMGE1LTRjMzEtYTgxZS0wNTkxZGViYTIxOGMuUE5HXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoXCIuLi8uLi8uLi9pbWFnZXMvd29ybGQucG5nXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93LXNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImZsYWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRyeT8ubGVuZ3RoID4gMTVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb3VudHJ5Py5zdWJzdHJpbmcoMCwgMTUpICsgXCIuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvdW50cnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteVRlc3QgY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgb25TZWxlY3QoVEFCLkFSRUEsIGNvdW50cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0KFRBQi5BUkVBLCBjb3VudHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXthcmVhQ2hlY2s/LmluY2x1ZGVzPy4oY291bnRyeSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiXHJcbiAgICAgICAgICAgIGlkPVwic3VicmVnaW9uXCJcclxuICAgICAgICAgICAgY2hlY2tlZD17YXJlYUNoZWNrLmluY2x1ZGVzKGNvdW50cnk/LnN1YnJlZ2lvbil9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sLWxhYmVsIGNoa2J4LWxhYlwiXHJcbiAgICAgICAgICAgIGh0bWxGb3I9XCJzdWJyZWdpb25cIlxyXG4gICAgICAgICAgPjwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgeyFzaG93ICYmIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBmaW5hbFF1ZXJ5O1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50cnlDaGVjaz8ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICBmaW5hbFF1ZXJ5ID0gYC9jb3VudHJ5LyR7Y291bnRyeUNoZWNrfT9gO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgZmluYWxRdWVyeSA9IGAvY291bnRyeS8ke3VuZGVmaW5lZH0/YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCByZWdpb25RdWVyeTtcclxuICAgICAgICAgICAgICAgIGlmIChyZWdpb25DaGVjaz8ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICByZWdpb25RdWVyeSA9IGByZWdpb249JHtyZWdpb25DaGVja31gO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgcmVnaW9uUXVlcnkgPSBgYDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBhcmVhUXVlcnk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJlYUNoZWNrPy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIGFyZWFRdWVyeSA9IGAke1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvbkNoZWNrPy5sZW5ndGggPiAwID8gXCImXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgIH1zdWJfcmVnaW9uPSR7YXJlYUNoZWNrfWA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBhcmVhUXVlcnkgPSBgYDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgJHtmaW5hbFF1ZXJ5fSR7cmVnaW9uUXVlcnl9JHthcmVhUXVlcnl9YCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cgJiYgd2luZG93LnNjcm9sbCgwLCAwKTtcclxuICAgICAgICAgICAgICAgIHNldENvdW50cnlDaGVjayhbXSk7XHJcbiAgICAgICAgICAgICAgICBzZXRBcmVhQ2hlY2soW10pO1xyXG4gICAgICAgICAgICAgICAgc2V0UmVnaW9uQ2hlY2soW10pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIC8vIHdpZHRoOiBhY3RpdmUgPT09IFRBQi5SRUdJT04gPyBcIjQ2NnB4XCIgOiBcIjQ2NnB4XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWN0aXZlID09PSBUQUIuUkVHSU9OID8gXCJhYnNvbHV0ZVwiIDogXCJzdGlja3lcIixcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIwcHghaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNnB4IDhweFwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigyNDIsIDE1OSwgNilcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0b3RhbCA+IDAgPyB0b3RhbCA6IFwiXCJ9IEN1bHR1cmVcclxuICAgICAgICAgICAgICB7dG90YWwgPiAxID8gXCJzXCIgOiBcIlwifSBzZWxlY3RlZFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQ291bnRyeVBpY2tlckRyb3Bkb3duO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gXCJyZXNlbGVjdFwiO1xyXG5cclxuY29uc3QgYXV0aERvbWFpbiA9IChzdGF0ZSkgPT4gc3RhdGUuYXV0aDtcclxuY29uc3QgbWFrZVNlbGVjdFBhcnRuZXIgPSAoKSA9PlxyXG4gIGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgYXV0aERvbWFpbixcclxuICAgIChzdWJkb21haW4pID0+IHN1YmRvbWFpbj8ucGFydG5lcj8ucmVzcG9uc2U/LmNsaWVudHMgfHwgW11cclxuICApO1xyXG5cclxuY29uc3QgcHJvZHVjdERvbWFpbiA9IChzdGF0ZSkgPT4gc3RhdGUucHJvZHVjdDtcclxuXHJcbmNvbnN0IG1ha2VTZWxlY3RQcm9kdWN0TGlzdCA9ICgpID0+XHJcbiAgY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBwcm9kdWN0RG9tYWluLFxyXG4gICAgKHN1YmRvbWFpbikgPT4gc3ViZG9tYWluPy5wcm9kdWN0Py5yZXNwb25zZT8ucHJvZHVjdHMgfHwgW11cclxuICApO1xyXG5cclxuICBjb25zdCBtYWtlU2VsZWN0VG90YWxQcm9kdWN0Q291bnQgPSAoKSA9PlxyXG4gIGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgcHJvZHVjdERvbWFpbixcclxuICAgIChzdWJkb21haW4pID0+IHN1YmRvbWFpbj8ucHJvZHVjdD8ucmVzcG9uc2U/LnRvdGFsIHx8IFtdXHJcbiAgKTtcclxuXHJcbmNvbnN0IG1ha2VTZWxlY3RQcm9kdWN0Q2F0ZWdvcnkgPSAoKSA9PlxyXG4gIGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgcHJvZHVjdERvbWFpbixcclxuICAgIChzdWJkb21haW4pID0+IHN1YmRvbWFpbj8uY2F0ZWdvcnk/LnJlc3BvbnNlPy5jYXRlZ29yaWVzIHx8IFtdXHJcbiAgKTtcclxuY29uc3QgbWFrZVNlbGVjdFBvcHVsYXJQcm9kdWN0ID0gKCkgPT5cclxuICBjcmVhdGVTZWxlY3RvcihcclxuICAgIHByb2R1Y3REb21haW4sXHJcbiAgICAoc3ViZG9tYWluKSA9PlxyXG4gICAgICBzdWJkb21haW4/LnByb2R1Y3Q/LnJlc3BvbnNlPy5wcm9kdWN0cz8uZmlsdGVyKFxyXG4gICAgICAgIChpKSA9PiBpLm1vc3RfcG9wdWxhciA9PT0gdHJ1ZVxyXG4gICAgICApIHx8IFtdXHJcbiAgKTtcclxuXHJcbmNvbnN0IG1ha2VTZWxlY3RMYXRlc3RBcnJpdmFsUHJvZHVjdCA9ICgpID0+XHJcbiAgY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBwcm9kdWN0RG9tYWluLFxyXG4gICAgKHN1YmRvbWFpbikgPT5cclxuICAgICAgc3ViZG9tYWluPy5wcm9kdWN0Py5yZXNwb25zZT8ucHJvZHVjdHM/LmZpbHRlcigoaSkgPT4gaS5sYXRlc3QgPT09IHRydWUpIHx8XHJcbiAgICAgIFtdXHJcbiAgKTtcclxuY29uc3QgbWFrZVNlbGVjdFByb2R1Y3REZXRhaWxzID0gKCkgPT5cclxuICBjcmVhdGVTZWxlY3RvcihcclxuICAgIHByb2R1Y3REb21haW4sXHJcbiAgICAoc3ViZG9tYWluKSA9PiBzdWJkb21haW4/LmRldGFpbHM/LnJlc3BvbnNlPy5wcm9kdWN0cyB8fCB7fVxyXG4gICk7XHJcblxyXG5jb25zdCBtYWtlU2VsZWN0UmVxdWVzdGVkUHJvZHVjdCA9ICgpID0+XHJcbiAgY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBwcm9kdWN0RG9tYWluLFxyXG4gICAgKHN1YmRvbWFpbikgPT4gc3ViZG9tYWluPy5yZXF1ZXN0ZWRJdGVtPy5yZXNwb25zZT8uaXRlbXMgfHwgW11cclxuICApO1xyXG5jb25zdCBtYWtlU2VsZWN0RmF2UHJvZHVjdCA9ICgpID0+XHJcbiAgY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBwcm9kdWN0RG9tYWluLFxyXG4gICAgKHN1YmRvbWFpbikgPT4gc3ViZG9tYWluPy5mYXZvdXJpdGU/LnJlc3BvbnNlIHx8IFtdXHJcbiAgKTtcclxuXHJcbmNvbnN0IG1ha2VTZWxlY3RQcm9kdWN0YnlTdGF0dXMgPSAoKSA9PlxyXG4gIGNyZWF0ZVNlbGVjdG9yKHByb2R1Y3REb21haW4sIChzdWJkb21haW4pID0+IHN1YmRvbWFpbiB8fCBbXSk7XHJcblxyXG5jb25zdCBtYWtlU2VsZWN0UHJvZHVjdHVzZXJQcm9maWxlID0gKCkgPT5cclxuICBjcmVhdGVTZWxlY3RvcihcclxuICAgIHByb2R1Y3REb21haW4sXHJcbiAgICAoc3ViZG9tYWluKSA9PiBzdWJkb21haW4/LnByb2ZpbGU/LnJlc3BvbnNlPy51c2VyIHx8IHt9XHJcbiAgKTtcclxuXHJcbmNvbnN0IG1ha2VTZWxlY3RQcm9kdWN0dXNlclByb2R1Y3RzID0gKCkgPT5cclxuICBjcmVhdGVTZWxlY3RvcihcclxuICAgIHByb2R1Y3REb21haW4sXHJcbiAgICAoc3ViZG9tYWluKSA9PiBzdWJkb21haW4/LnNlbGxlclByb2R1Y3Q/LnJlc3BvbnNlIHx8IHt9XHJcbiAgKTtcclxuXHJcbmNvbnN0IG1ha2VTZWxlY3RQcm9kdWN0bmVpZ2JvdXJzID0gKCkgPT5cclxuICBjcmVhdGVTZWxlY3RvcihcclxuICAgIHByb2R1Y3REb21haW4sXHJcbiAgICAoc3ViZG9tYWluKSA9PiBzdWJkb21haW4/Lm5laWdoYm91cj8ucmVzcG9uc2U/LmJvcmRlcl9jb3VudHJpZXMgfHwgW11cclxuICApO1xyXG5cclxuY29uc3QgaGVhZGVyRG9tYWluID0gKHN0YXRlKSA9PiBzdGF0ZS5oZWFkZXI7XHJcblxyXG5jb25zdCBtYWtlU2VsZWN0SGVhZGVyTWVudSA9ICgpID0+XHJcbiAgY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBoZWFkZXJEb21haW4sXHJcbiAgICAoc3ViZG9tYWluKSA9PiBzdWJkb21haW4uaGVhZGVyTWVudT8ucmVzcG9uc2U/LmNhdGVnb3JpZXMgfHwgW11cclxuICApO1xyXG5cclxuY29uc3QgbWFrZVNlbGVjdE1lc3NhZ2VMaXN0ID0gKCkgPT5cclxuICBjcmVhdGVTZWxlY3RvcihcclxuICAgIGhlYWRlckRvbWFpbixcclxuICAgIChzdWJkb21haW4pID0+IHN1YmRvbWFpbi5tZXNzYWdlPy5yZXNwb25zZT8ubWVzc2FnZXMgfHwgW11cclxuICApO1xyXG5jb25zdCBtYWtlU2VsZWN0Tm90aWZpY2F0aW9uTGlzdCA9ICgpID0+XHJcbiAgY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBoZWFkZXJEb21haW4sXHJcbiAgICAoc3ViZG9tYWluKSA9PiBzdWJkb21haW4ubm90aWZpY2F0aW9uPy5yZXNwb25zZT8ubm90aWZpY2F0aW9ucyB8fCBbXVxyXG4gICk7XHJcbmNvbnN0IG1ha2VTZWxlY3RDYXJ0TGlzdCA9ICgpID0+XHJcbiAgY3JlYXRlU2VsZWN0b3IoaGVhZGVyRG9tYWluLCAoc3ViZG9tYWluKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjYXJ0OiBzdWJkb21haW4uY2FydD8ucmVzcG9uc2U/LnByb2R1Y3RzIHx8IFtdLFxyXG4gICAgICBsb2FkaW5nOiBzdWJkb21haW4uaXNQcm9jZWVkaW5nLFxyXG4gICAgfTtcclxuICB9KTtcclxuXHJcbmNvbnN0IGNhcnREb21haW4gPSAoc3RhdGUpID0+IHN0YXRlLmNhcnQ7XHJcbmNvbnN0IG1ha2VTZWxlY3RDYXJ0RGlzY291bnQgPSAoKSA9PlxyXG4gIGNyZWF0ZVNlbGVjdG9yKGNhcnREb21haW4sIChzdWJkb21haW4pID0+IHN1YmRvbWFpbj8uZGlzY291bnQgfHwge30pO1xyXG5cclxuY29uc3QgbWFrZVNlbGVjdFNoaXBwaW5nQWRkcmVzcyA9ICgpID0+XHJcbiAgY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBjYXJ0RG9tYWluLFxyXG4gICAgKHN1YmRvbWFpbikgPT4gc3ViZG9tYWluPy5zaGlwcGluZ0FkZHJlc3M/LnJlc3BvbnNlPy5hZGRyZXNzIHx8IHt9XHJcbiAgKTtcclxuY29uc3QgbWFrZVNlbGVjdE9yZGVySWQgPSAoKSA9PlxyXG4gIGNyZWF0ZVNlbGVjdG9yKGNhcnREb21haW4sIChzdWJkb21haW4pID0+IHN1YmRvbWFpbj8ub3JkZXJJZD8ucmVzcG9uc2UgfHwge30pO1xyXG5jb25zdCBtYWtlU2VsZWN0T3JkZXJMaXN0ID0gKCkgPT5cclxuICBjcmVhdGVTZWxlY3RvcihcclxuICAgIGNhcnREb21haW4sXHJcbiAgICAoc3ViZG9tYWluKSA9PiBzdWJkb21haW4/Lm9yZGVyTGlzdD8ucmVzcG9uc2U/Lm9yZGVycyB8fCB7fVxyXG4gICk7XHJcblxyXG5jb25zdCBtYWtlU2VsZWN0QWRkcmVzc0xpc3QgPSAoKSA9PlxyXG4gIGNyZWF0ZVNlbGVjdG9yKGNhcnREb21haW4sIChzdWJkb21haW4pID0+IHN1YmRvbWFpbj8uYWRkcmVzcz8ucmVzcG9uc2U/LmFkZHJlc3NlcyB8fCBbXSk7XHJcblxyXG5jb25zdCBtZXNzYWdlRG9tYWluID0gKHN0YXRlKSA9PiBzdGF0ZT8ubWVzc2FnZTtcclxuY29uc3QgbWFrZVNlbGVjdGNoYXRMaXN0ID0gKCkgPT5cclxuICBjcmVhdGVTZWxlY3RvcihcclxuICAgIG1lc3NhZ2VEb21haW4sXHJcbiAgICAoc3ViZG9tYWluKSA9PiBzdWJkb21haW4/Lm1lc3NhZ2VzPy5yZXNwb25zZT8ubWVzc2FnZXMgfHwgW11cclxuICApO1xyXG5jb25zdCBtYWtlU2VsZWN0Y29udmVyc2F0aW9uTGlzdCA9ICgpID0+XHJcbiAgY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBtZXNzYWdlRG9tYWluLFxyXG4gICAgKHN1YmRvbWFpbikgPT4gc3ViZG9tYWluPy5jb252ZXJzYXRpb24/LnJlc3BvbnNlPy5tZXNzYWdlcyB8fCBbXVxyXG4gICk7XHJcblxyXG5leHBvcnQge1xyXG4gIG1ha2VTZWxlY3RQcm9kdWN0TGlzdCxcclxuICBtYWtlU2VsZWN0UHJvZHVjdENhdGVnb3J5LFxyXG4gIG1ha2VTZWxlY3RQb3B1bGFyUHJvZHVjdCxcclxuICBtYWtlU2VsZWN0TGF0ZXN0QXJyaXZhbFByb2R1Y3QsXHJcbiAgbWFrZVNlbGVjdEhlYWRlck1lbnUsXHJcbiAgbWFrZVNlbGVjdFBhcnRuZXIsXHJcbiAgbWFrZVNlbGVjdE1lc3NhZ2VMaXN0LFxyXG4gIG1ha2VTZWxlY3ROb3RpZmljYXRpb25MaXN0LFxyXG4gIG1ha2VTZWxlY3RDYXJ0TGlzdCxcclxuICBtYWtlU2VsZWN0UHJvZHVjdERldGFpbHMsXHJcbiAgbWFrZVNlbGVjdFJlcXVlc3RlZFByb2R1Y3QsXHJcbiAgbWFrZVNlbGVjdENhcnREaXNjb3VudCxcclxuICBtYWtlU2VsZWN0U2hpcHBpbmdBZGRyZXNzLFxyXG4gIG1ha2VTZWxlY3RPcmRlcklkLFxyXG4gIG1ha2VTZWxlY3RPcmRlckxpc3QsXHJcbiAgbWFrZVNlbGVjdEZhdlByb2R1Y3QsXHJcbiAgbWFrZVNlbGVjdFByb2R1Y3RieVN0YXR1cyxcclxuICBtYWtlU2VsZWN0Y2hhdExpc3QsXHJcbiAgbWFrZVNlbGVjdGNvbnZlcnNhdGlvbkxpc3QsXHJcbiAgbWFrZVNlbGVjdFByb2R1Y3R1c2VyUHJvZmlsZSxcclxuICBtYWtlU2VsZWN0UHJvZHVjdHVzZXJQcm9kdWN0cyxcclxuICBtYWtlU2VsZWN0UHJvZHVjdG5laWdib3VycyxcclxuICBtYWtlU2VsZWN0QWRkcmVzc0xpc3QsXHJcbiAgbWFrZVNlbGVjdFRvdGFsUHJvZHVjdENvdW50XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=