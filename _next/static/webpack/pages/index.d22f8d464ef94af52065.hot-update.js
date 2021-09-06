webpackHotUpdate_N_E("pages/index",{

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

/***/ "./components/Culturise/ProductDetailSlider.js":
/*!*****************************************************!*\
  !*** ./components/Culturise/ProductDetailSlider.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductDetailSlider; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loading-skeleton */ "./node_modules/react-loading-skeleton/lib/index.js");
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/helper */ "./utils/helper.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/header */ "./store/actions/header.js");
/* harmony import */ var _store_actions_cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions/cart */ "./store/actions/cart.js");
/* harmony import */ var _context_FavProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../context/FavProvider */ "./context/FavProvider.js");
/* harmony import */ var _services_product__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/product */ "./services/product.js");


var _jsxFileName = "H:\\mayank\\culturise\\components\\Culturise\\ProductDetailSlider.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-owl-carousel3 */ "./node_modules/react-owl-carousel3/lib/OwlCarousel.js", 7));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-owl-carousel3 */ "./node_modules/react-owl-carousel3/lib/OwlCarousel.js")];
    },
    modules: ["react-owl-carousel3"]
  }
});
_c2 = OwlCarousel;
var options = {
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  margin: 30,
  navText: ["<i class='flaticon-left'></i>", "<i class='flaticon-right-arrow'></i>"],
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    768: {
      items: 3
    },
    1200: {
      items: 4
    },
    1430: {
      items: 6
    }
  }
};
function ProductDetailSlider(_ref) {
  _s();

  var _this = this;

  var product = _ref.product;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_FavProvider__WEBPACK_IMPORTED_MODULE_9__["FavContext"]),
      favproduct = _useContext.favproduct,
      getFavproduct = _useContext.getFavproduct,
      removeFav = _useContext.removeFav;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();

  var addtoCart = function addtoCart(id, price) {
    dispatch(Object(_store_actions_cart__WEBPACK_IMPORTED_MODULE_8__["createInit"])({
      product: id,
      amount: price,
      count: 1
    }));
    setTimeout(function () {
      dispatch(Object(_store_actions_header__WEBPACK_IMPORTED_MODULE_7__["cartList"])());
    }, 500);
  };

  var favProduct = function favProduct(uuid) {
    var _favproduct$includes;

    if (favproduct !== null && favproduct !== void 0 && (_favproduct$includes = favproduct.includes) !== null && _favproduct$includes !== void 0 && _favproduct$includes.call(favproduct, uuid)) {
      removeFav(uuid);
    } else {
      _services_product__WEBPACK_IMPORTED_MODULE_10__["default"].addFavProduct({
        product: uuid
      });
      getFavproduct();
      Object(_utils_helper__WEBPACK_IMPORTED_MODULE_5__["notify"])('success', "Item added to favourite");
    }
  };

  return __jsx("div", {
    className: "facility-area",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container p-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx(OwlCarousel, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "facility-slides owl-carousel owl-theme"
  }, options, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }), product !== null && product !== void 0 && product.length ? product.map(function (product, i) {
    var _product$images, _product$country, _product$country$;

    var uuid = product.uuid,
        price = product.price;
    var flag = Object(_utils_helper__WEBPACK_IMPORTED_MODULE_5__["getCountryFlag"])(product.country[0].code);
    return __jsx("div", {
      key: uuid,
      className: "single-facility-box",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }
    }, __jsx("div", {
      onClick: function onClick() {
        localStorage.getItem("authToken") ? favProduct(uuid) : next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/login");
      },
      className: "bookmark-icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 19
      }
    }, __jsx("i", {
      style: {
        fontSize: 20,
        color: favproduct !== undefined && (favproduct === null || favproduct === void 0 ? void 0 : favproduct.length) > 0 && favproduct !== null && favproduct !== void 0 && favproduct.includes(uuid) ? "#0097a7" : "#f29f05"
      },
      "class": "fas fa-heart ",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "icon",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 19
      }
    }, __jsx("span", {
      style: {
        fontSize: 15
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 21
      }
    }, __jsx("img", {
      onError: function onError(ev) {
        return ev.target.src = "https://culturize.s3.amazonaws.com/client-images/53bacf26-00a5-4c31-a81e-0591deba218c.PNG";
      },
      onClick: function onClick() {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/product/".concat(product === null || product === void 0 ? void 0 : product.slug));
        window && window.scroll(0, 0);
      },
      className: "google-button-icon",
      src: (_product$images = product.images) === null || _product$images === void 0 ? void 0 : _product$images[0],
      alt: product.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 23
      }
    })), product.discount && __jsx("span", {
      className: "flag-discount",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 23
      }
    }, product.discount.amount, "% Off")), __jsx("h3", {
      onClick: function onClick() {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/product/".concat(product === null || product === void 0 ? void 0 : product.slug));
        window && window.scroll(0, 0);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 19
      }
    }, product.title), __jsx("p", {
      className: "productdetailprice",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 19
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 21
      }
    }, "$ ", price), " ", product.discount && __jsx("del", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 23
      }
    }, Object(_utils_helper__WEBPACK_IMPORTED_MODULE_5__["percentage"])(price, product.discount.amount))), __jsx("div", {
      className: "d-flex justify-content-between align-items-center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 19
      }
    }, __jsx("button", {
      onClick: function onClick() {
        addtoCart(product.uuid, product.price);
      },
      className: "addbutton",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 21
      }
    }, __jsx("i", {
      className: "bx bx-plus",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 23
      }
    }), "Add"), __jsx("img", {
      onError: function onError(ev) {
        return ev.target.src = "https://culturize.s3.amazonaws.com/client-images/53bacf26-00a5-4c31-a81e-0591deba218c.PNG";
      },
      className: "p-country",
      src: flag,
      onClick: function onClick() {
        next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/country/".concat(product.country[0].code));
        window && window.scroll(0, 0);
      },
      alt: "product country",
      title: product === null || product === void 0 ? void 0 : (_product$country = product.country) === null || _product$country === void 0 ? void 0 : (_product$country$ = _product$country[0]) === null || _product$country$ === void 0 ? void 0 : _product$country$.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 21
      }
    })));
  }) : __jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3___default.a, {
    count: 7,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }
  }))));
}

_s(ProductDetailSlider, "Uyr7Z/avSYd5uNDRBx34I1YbtnM=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"]];
});

_c3 = ProductDetailSlider;

var _c, _c2, _c3;

$RefreshReg$(_c, "OwlCarousel$dynamic");
$RefreshReg$(_c2, "OwlCarousel");
$RefreshReg$(_c3, "ProductDetailSlider");

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

/***/ }),

/***/ "./components/Modals/PostNeededItemsModal.js":
/*!***************************************************!*\
  !*** ./components/Modals/PostNeededItemsModal.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Culturise_RequestItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Culturise/RequestItem */ "./components/Culturise/RequestItem.js");
var _this = undefined,
    _jsxFileName = "H:\\mayank\\culturise\\components\\Modals\\PostNeededItemsModal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var PostNeededItemsModal = function PostNeededItemsModal(props) {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    size: "lg",
    show: props.active,
    onHide: props.onClick,
    dialogClassName: "modal-90w res44",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true,
    backdrop: "static",
    keyboard: false,
    style: {
      zIndex: 9999999999
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
    closeButton: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Post Needed Item")), __jsx("ul", {
    className: "prolist p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: "nav-item d-block",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "postneddes",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "Can\u2019t find what you\u2019re looking for? Post it and Bangladesh sellers will be notified immediately!")), __jsx(_Culturise_RequestItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClose: function onClose() {
      props.onClick();
      props.setShowSuccess(!props.showSuccess);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })));
};

_c = PostNeededItemsModal;
/* harmony default export */ __webpack_exports__["default"] = (PostNeededItemsModal);

var _c;

$RefreshReg$(_c, "PostNeededItemsModal");

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

/***/ }),

/***/ "./context/FavProvider.js":
/*!********************************!*\
  !*** ./context/FavProvider.js ***!
  \********************************/
/*! exports provided: FavContext, FavProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavContext", function() { return FavContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavProvider", function() { return FavProvider; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/product */ "./services/product.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/helper */ "./utils/helper.js");



var _this = undefined,
    _jsxFileName = "H:\\mayank\\culturise\\context\\FavProvider.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var FavContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])({});
var FavProvider = function FavProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      favproduct = _useState[0],
      setFavProduct = _useState[1];

  var getFavproduct = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _product$data, _product$data$respons, product, _product$data2, _product$data2$respon, _product$data2$respon2, fav;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _services_product__WEBPACK_IMPORTED_MODULE_3__["default"].getFavProduct();

            case 3:
              product = _context.sent;

              if ((product === null || product === void 0 ? void 0 : (_product$data = product.data) === null || _product$data === void 0 ? void 0 : (_product$data$respons = _product$data.response) === null || _product$data$respons === void 0 ? void 0 : _product$data$respons.count) > 0) {
                fav = product === null || product === void 0 ? void 0 : (_product$data2 = product.data) === null || _product$data2 === void 0 ? void 0 : (_product$data2$respon = _product$data2.response) === null || _product$data2$respon === void 0 ? void 0 : (_product$data2$respon2 = _product$data2$respon.products) === null || _product$data2$respon2 === void 0 ? void 0 : _product$data2$respon2.map(function (i) {
                  var _i$product;

                  return i === null || i === void 0 ? void 0 : (_i$product = i.product) === null || _i$product === void 0 ? void 0 : _i$product.uuid;
                });
                setFavProduct(fav);
              } else {
                setFavProduct([]);
              }

              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              setFavProduct([]); //   localStorage.clear()
              // router.push("/login");

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function getFavproduct() {
      return _ref2.apply(this, arguments);
    };
  }();

  var removeFav = /*#__PURE__*/function () {
    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _services_product__WEBPACK_IMPORTED_MODULE_3__["default"].deleteFav(id);

            case 2:
              _context2.next = 4;
              return getFavproduct();

            case 4:
              Object(_utils_helper__WEBPACK_IMPORTED_MODULE_4__["notify"])("success", "Item removed from favourite");

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function removeFav(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getFavproduct();
  }, []);
  return __jsx(FavContext.Provider, {
    value: {
      favproduct: favproduct,
      getFavproduct: getFavproduct,
      setFavProduct: setFavProduct,
      removeFav: removeFav
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, children);
};

_s(FavProvider, "9QZuT2Ivhzk1fF5/qD+R0lOa3NM=");

_c = FavProvider;

var _c;

$RefreshReg$(_c, "FavProvider");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./services/product.js":
/*!*****************************!*\
  !*** ./services/product.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/axios */ "./utils/axios.js");
/* harmony import */ var _utils_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/server */ "./utils/server.js");



 // const PRODUCT_LIST = BASE_API_URL + "/product?tags=shoes,bags&price=5,6&page=1&limit=10";

var PRODUCT_LIST = _utils_server__WEBPACK_IMPORTED_MODULE_3__["BASE_API_URL"] + "/product";
var CATEGORY_LIST = _utils_server__WEBPACK_IMPORTED_MODULE_3__["BASE_API_URL"] + "/product/categories/";
var GET_FAV_PRODUCT = _utils_server__WEBPACK_IMPORTED_MODULE_3__["BASE_API_URL"] + "/product/favourite";
var FAV_PRODUCT_DELETE = _utils_server__WEBPACK_IMPORTED_MODULE_3__["BASE_API_URL"] + "/product/favourite-delete/";
var GET_INACTIVE_PRODUCT = _utils_server__WEBPACK_IMPORTED_MODULE_3__["BASE_API_URL"] + "/product/status/inactive";
var GET_ACTIVE_PRODUCT = _utils_server__WEBPACK_IMPORTED_MODULE_3__["BASE_API_URL"] + "/product/status/active";
var GET_SELLER_PROFILE = _utils_server__WEBPACK_IMPORTED_MODULE_3__["BASE_API_URL"] + "/seller/profile";
var GET_SELLER_PRODUCT = _utils_server__WEBPACK_IMPORTED_MODULE_3__["BASE_API_URL"] + "/product/seller-products";
var GET_NEIGHBOUR_CULTURE = _utils_server__WEBPACK_IMPORTED_MODULE_3__["BASE_API_URL"] + "/border-country?country=";
var GET_ORDER_BY_PENDING = _utils_server__WEBPACK_IMPORTED_MODULE_3__["BASE_API_URL"] + "/product/seller-center?status=";
var STATUS_CHANGE = _utils_server__WEBPACK_IMPORTED_MODULE_3__["BASE_API_URL"] + "/product/product-status/";
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchproduct: function fetchproduct(_ref) {
    var page = _ref.page,
        limit = _ref.limit,
        price = _ref.price,
        country = _ref.country,
        category = _ref.category,
        tags = _ref.tags,
        region = _ref.region,
        sub_region = _ref.sub_region,
        title = _ref.title,
        zip = _ref.zip,
        sort_by = _ref.sort_by,
        condition = _ref.condition;
    var query = typeof page === "undefined" ? "" : "?page=".concat(page, "&limit=").concat(limit);
    var priceQuery;

    if (price !== "undefined") {
      priceQuery = Number(price) > 0 ? "&price=".concat(Number(price) === 5000 ? 200 : Number(price) === 200 ? 100 : Number(price) === 100 ? 50 : Number(price) === 50 ? 25 : 5, ",").concat(price) : "";
    } else {
      priceQuery = "";
    }

    var countryQuery;

    if (country !== "undefined" && (country === null || country === void 0 ? void 0 : country.length) > 0) {
      countryQuery = country ? "&country=".concat(country) : "";
    } else {
      countryQuery = "";
    }

    var regionQuery;

    if (typeof region !== "undefined" && (region === null || region === void 0 ? void 0 : region.length) > 0) {
      regionQuery = region ? "&region=".concat(region) : "";
    } else {
      regionQuery = "";
    }

    var subregionQuery;

    if (typeof sub_region !== "undefined" && (sub_region === null || sub_region === void 0 ? void 0 : sub_region.length) > 0) {
      subregionQuery = sub_region ? "&sub_region=".concat(sub_region) : "";
    } else {
      subregionQuery = "";
    }

    var titleQuery;

    if (typeof title !== "undefined") {
      titleQuery = title ? "&title=".concat(title) : "";
    } else {
      titleQuery = "";
    }

    var categoryQuery;

    if (typeof category !== "undefined") {
      categoryQuery = "&category=".concat(category);
    } else {
      categoryQuery = "";
    }

    var tagsQuery;

    if (typeof tags !== "undefined") {
      tagsQuery = "&tags=".concat(tags);
    } else {
      tagsQuery = "";
    }

    var zipQuery;

    if (typeof zip !== "undefined") {
      zipQuery = "&zip=".concat(zip);
    } else {
      zipQuery = "";
    } // console.log(typeof sort_by !== "undefined")


    var sort_byQuery;

    if (sort_by !== "undefined" && typeof sort_by !== "undefined") {
      sort_byQuery = "&sort_by=".concat(sort_by);
    } else {
      sort_byQuery = "";
    }

    var conditionQuery;

    if (typeof condition !== "undefined") {
      conditionQuery = condition ? "&condition=".concat(condition) : "";
    } else {
      conditionQuery = "";
    }

    return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_2__["apiGet"])("".concat(PRODUCT_LIST).concat(query).concat(priceQuery).concat(countryQuery).concat(categoryQuery).concat(tagsQuery).concat(regionQuery).concat(subregionQuery).concat(titleQuery).concat(zipQuery).concat(sort_byQuery).concat(conditionQuery));
  },
  fetchpcategory: function fetchpcategory() {
    return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_2__["apiGet"])("".concat(CATEGORY_LIST));
  },
  fetchProductdetails: function () {
    var _fetchProductdetails = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(slug) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_2__["apiGet"])("".concat(_utils_server__WEBPACK_IMPORTED_MODULE_3__["BASE_API_URL"], "/product/").concat(slug));

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function fetchProductdetails(_x) {
      return _fetchProductdetails.apply(this, arguments);
    }

    return fetchProductdetails;
  }(),
  postneededItem: function () {
    var _postneededItem = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_2__["apiPost"])("".concat(_utils_server__WEBPACK_IMPORTED_MODULE_3__["BASE_API_URL"], "/product/request/item"), data);

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function postneededItem(_x2) {
      return _postneededItem.apply(this, arguments);
    }

    return postneededItem;
  }(),
  createProduct: function () {
    var _createProduct = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_2__["apiPost"])("".concat(_utils_server__WEBPACK_IMPORTED_MODULE_3__["BASE_API_URL"], "/product/create"), data);

            case 2:
              return _context3.abrupt("return", _context3.sent);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function createProduct(_x3) {
      return _createProduct.apply(this, arguments);
    }

    return createProduct;
  }(),
  review: function () {
    var _review = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_2__["apiPost"])("".concat(_utils_server__WEBPACK_IMPORTED_MODULE_3__["BASE_API_URL"], "/review/product-review-add"), data);

            case 2:
              return _context4.abrupt("return", _context4.sent);

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function review(_x4) {
      return _review.apply(this, arguments);
    }

    return review;
  }(),
  getRequesteditem: function () {
    var _getRequesteditem = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_2__["apiGet"])("".concat(_utils_server__WEBPACK_IMPORTED_MODULE_3__["BASE_API_URL"], "/product/request/item"));

            case 2:
              return _context5.abrupt("return", _context5.sent);

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function getRequesteditem() {
      return _getRequesteditem.apply(this, arguments);
    }

    return getRequesteditem;
  }(),
  getFavProduct: function () {
    var _getFavProduct = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_2__["apiGet"])("".concat(GET_FAV_PRODUCT));

            case 2:
              return _context6.abrupt("return", _context6.sent);

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function getFavProduct() {
      return _getFavProduct.apply(this, arguments);
    }

    return getFavProduct;
  }(),
  deleteFav: function () {
    var _deleteFav = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_2__["apiDelete"])("".concat(FAV_PRODUCT_DELETE).concat(id));

            case 2:
              return _context7.abrupt("return", _context7.sent);

            case 3:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    function deleteFav(_x5) {
      return _deleteFav.apply(this, arguments);
    }

    return deleteFav;
  }(),
  addFavProduct: function () {
    var _addFavProduct = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(data) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_2__["apiPost"])("".concat(GET_FAV_PRODUCT), data);

            case 2:
              return _context8.abrupt("return", _context8.sent);

            case 3:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }));

    function addFavProduct(_x6) {
      return _addFavProduct.apply(this, arguments);
    }

    return addFavProduct;
  }(),
  getproductbyStatus: function () {
    var _getproductbyStatus = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(_ref2) {
      var type;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              type = _ref2.type;

              if (!(type === "active")) {
                _context9.next = 7;
                break;
              }

              _context9.next = 4;
              return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_2__["apiGet"])("".concat(GET_ACTIVE_PRODUCT));

            case 4:
              return _context9.abrupt("return", _context9.sent);

            case 7:
              _context9.next = 9;
              return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_2__["apiGet"])("".concat(GET_INACTIVE_PRODUCT));

            case 9:
              return _context9.abrupt("return", _context9.sent);

            case 10:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }));

    function getproductbyStatus(_x7) {
      return _getproductbyStatus.apply(this, arguments);
    }

    return getproductbyStatus;
  }(),
  getsellerProfile: function () {
    var _getsellerProfile = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(_ref3) {
      var username;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              username = _ref3.username;
              _context10.next = 3;
              return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_2__["apiGet"])("".concat(GET_SELLER_PROFILE, "/").concat(username));

            case 3:
              return _context10.abrupt("return", _context10.sent);

            case 4:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }));

    function getsellerProfile(_x8) {
      return _getsellerProfile.apply(this, arguments);
    }

    return getsellerProfile;
  }(),
  getsellerProducts: function () {
    var _getsellerProducts = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(_ref4) {
      var username;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              username = _ref4.username;
              _context11.next = 3;
              return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_2__["apiGet"])("".concat(GET_SELLER_PRODUCT, "/").concat(username));

            case 3:
              return _context11.abrupt("return", _context11.sent);

            case 4:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }));

    function getsellerProducts(_x9) {
      return _getsellerProducts.apply(this, arguments);
    }

    return getsellerProducts;
  }(),
  getneighnourCulture: function () {
    var _getneighnourCulture = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(_ref5) {
      var country;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              country = _ref5.country;
              _context12.next = 3;
              return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_2__["apiGet"])("".concat(GET_NEIGHBOUR_CULTURE).concat(country));

            case 3:
              return _context12.abrupt("return", _context12.sent);

            case 4:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }));

    function getneighnourCulture(_x10) {
      return _getneighnourCulture.apply(this, arguments);
    }

    return getneighnourCulture;
  }(),
  changeStatus: function () {
    var _changeStatus = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13(_ref6) {
      var id, status;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              id = _ref6.id, status = _ref6.status;
              _context13.next = 3;
              return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_2__["apiPatch"])("".concat(STATUS_CHANGE).concat(id), {
                status: status
              });

            case 3:
              return _context13.abrupt("return", _context13.sent);

            case 4:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    }));

    function changeStatus(_x11) {
      return _changeStatus.apply(this, arguments);
    }

    return changeStatus;
  }(),
  getOrderBypending: function () {
    var _getOrderBypending = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14(_ref7) {
      var type;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              type = _ref7.type;

              if (!(type === "processing")) {
                _context14.next = 7;
                break;
              }

              _context14.next = 4;
              return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_2__["apiGet"])("".concat(GET_ORDER_BY_PENDING, "processing"));

            case 4:
              return _context14.abrupt("return", _context14.sent);

            case 7:
              _context14.next = 9;
              return Object(_utils_axios__WEBPACK_IMPORTED_MODULE_2__["apiGet"])("".concat(GET_ORDER_BY_PENDING, "completed"));

            case 9:
              return _context14.abrupt("return", _context14.sent);

            case 10:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14);
    }));

    function getOrderBypending(_x12) {
      return _getOrderBypending.apply(this, arguments);
    }

    return getOrderBypending;
  }()
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DdWx0dXJpc2UvQ291bnRyeVN0YXRlRHJvcGRvd24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ3VsdHVyaXNlL1Byb2R1Y3REZXRhaWxTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTW9kYWxzL1Bvc3ROZWVkZWRJdGVtc01vZGFsLmpzIiwid2VicGFjazovL19OX0UvLi9jb250ZXh0L0ZhdlByb3ZpZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9zZXJ2aWNlcy9wcm9kdWN0LmpzIiwid2VicGFjazovL19OX0UvLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXguanMiXSwibmFtZXMiOlsiVEFCIiwiQ09VTlRSWSIsIlJFR0lPTiIsIkFSRUEiLCJDb3VudHJ5UGlja2VyRHJvcGRvd24iLCJjb3VudHJ5Q2hlY2siLCJzZXRDb3VudHJ5Q2hlY2siLCJyZWdpb25DaGVjayIsInNldFJlZ2lvbkNoZWNrIiwiYXJlYUNoZWNrIiwic2V0QXJlYUNoZWNrIiwic2hvdyIsInVzZVN0YXRlIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwib25TZWxlY3QiLCJ0eXBlIiwidGV4dCIsImNoZWNrRXhpc3QiLCJmaWx0ZXIiLCJpIiwibGVuZ3RoIiwibmV3RmlsdGVyIiwib2xkQ291bnRyeSIsInVuZGVmaW5lZCIsInB1c2giLCJzb3J0UmVnaW9uIiwiY291bnRyeSIsIm1hcCIsInJlZ2lvbiIsIm5ld1JlZ2lvbiIsImUiLCJpbmRleE9mIiwic29ydFN1YnJlZ2lvbiIsInN1YnJlZ2lvbiIsIm5ld1N1YlJlZ2lvbiIsInRvdGFsQ291bnRyeSIsIk51bWJlciIsInRvdGFsUmVnaW9uIiwidG90YWxBcmVhIiwidG90YWwiLCJwb3NpdGlvbiIsIndpZHRoIiwib3ZlcmZsb3dYIiwiaGVpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJkaXNwbGF5IiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsImN1cnNvciIsIm1pbldpZHRoIiwia2V5IiwibmFtZSIsImFscGhhMkNvZGUiLCJldiIsInRhcmdldCIsInNyYyIsImZsYWciLCJzdWJzdHJpbmciLCJtYXJnaW5Cb3R0b20iLCJpbmNsdWRlcyIsInJlcXVpcmUiLCJmaW5hbFF1ZXJ5IiwicmVnaW9uUXVlcnkiLCJhcmVhUXVlcnkiLCJyb3V0ZXIiLCJ3aW5kb3ciLCJzY3JvbGwiLCJib3R0b20iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJjb2xvciIsIk93bENhcm91c2VsIiwiZHluYW1pYyIsIm9wdGlvbnMiLCJsb29wIiwibmF2IiwiZG90cyIsImF1dG9wbGF5SG92ZXJQYXVzZSIsImF1dG9wbGF5IiwibWFyZ2luIiwibmF2VGV4dCIsInJlc3BvbnNpdmUiLCJpdGVtcyIsIlByb2R1Y3REZXRhaWxTbGlkZXIiLCJwcm9kdWN0IiwidXNlQ29udGV4dCIsIkZhdkNvbnRleHQiLCJmYXZwcm9kdWN0IiwiZ2V0RmF2cHJvZHVjdCIsInJlbW92ZUZhdiIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJhZGR0b0NhcnQiLCJpZCIsInByaWNlIiwiY3JlYXRlSW5pdCIsImFtb3VudCIsImNvdW50Iiwic2V0VGltZW91dCIsImNhcnRMaXN0IiwiZmF2UHJvZHVjdCIsInV1aWQiLCJQcm9kdWN0QVBJIiwiYWRkRmF2UHJvZHVjdCIsIm5vdGlmeSIsImdldENvdW50cnlGbGFnIiwiY29kZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzbHVnIiwiaW1hZ2VzIiwidGl0bGUiLCJkaXNjb3VudCIsInBlcmNlbnRhZ2UiLCJQb3N0TmVlZGVkSXRlbXNNb2RhbCIsInByb3BzIiwib25DbGljayIsInpJbmRleCIsInNldFNob3dTdWNjZXNzIiwic2hvd1N1Y2Nlc3MiLCJjcmVhdGVDb250ZXh0IiwiRmF2UHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldEZhdlByb2R1Y3QiLCJmYXZBUEkiLCJnZXRGYXZQcm9kdWN0IiwiZGF0YSIsInJlc3BvbnNlIiwiZmF2IiwicHJvZHVjdHMiLCJkZWxldGVGYXYiLCJ1c2VFZmZlY3QiLCJQUk9EVUNUX0xJU1QiLCJCQVNFX0FQSV9VUkwiLCJDQVRFR09SWV9MSVNUIiwiR0VUX0ZBVl9QUk9EVUNUIiwiRkFWX1BST0RVQ1RfREVMRVRFIiwiR0VUX0lOQUNUSVZFX1BST0RVQ1QiLCJHRVRfQUNUSVZFX1BST0RVQ1QiLCJHRVRfU0VMTEVSX1BST0ZJTEUiLCJHRVRfU0VMTEVSX1BST0RVQ1QiLCJHRVRfTkVJR0hCT1VSX0NVTFRVUkUiLCJHRVRfT1JERVJfQllfUEVORElORyIsIlNUQVRVU19DSEFOR0UiLCJmZXRjaHByb2R1Y3QiLCJwYWdlIiwibGltaXQiLCJjYXRlZ29yeSIsInRhZ3MiLCJzdWJfcmVnaW9uIiwiemlwIiwic29ydF9ieSIsImNvbmRpdGlvbiIsInF1ZXJ5IiwicHJpY2VRdWVyeSIsImNvdW50cnlRdWVyeSIsInN1YnJlZ2lvblF1ZXJ5IiwidGl0bGVRdWVyeSIsImNhdGVnb3J5UXVlcnkiLCJ0YWdzUXVlcnkiLCJ6aXBRdWVyeSIsInNvcnRfYnlRdWVyeSIsImNvbmRpdGlvblF1ZXJ5IiwiYXBpR2V0IiwiZmV0Y2hwY2F0ZWdvcnkiLCJmZXRjaFByb2R1Y3RkZXRhaWxzIiwicG9zdG5lZWRlZEl0ZW0iLCJhcGlQb3N0IiwiY3JlYXRlUHJvZHVjdCIsInJldmlldyIsImdldFJlcXVlc3RlZGl0ZW0iLCJhcGlEZWxldGUiLCJnZXRwcm9kdWN0YnlTdGF0dXMiLCJnZXRzZWxsZXJQcm9maWxlIiwidXNlcm5hbWUiLCJnZXRzZWxsZXJQcm9kdWN0cyIsImdldG5laWdobm91ckN1bHR1cmUiLCJjaGFuZ2VTdGF0dXMiLCJzdGF0dXMiLCJhcGlQYXRjaCIsImdldE9yZGVyQnlwZW5kaW5nIiwiYXV0aERvbWFpbiIsInN0YXRlIiwiYXV0aCIsIm1ha2VTZWxlY3RQYXJ0bmVyIiwiY3JlYXRlU2VsZWN0b3IiLCJzdWJkb21haW4iLCJwYXJ0bmVyIiwiY2xpZW50cyIsInByb2R1Y3REb21haW4iLCJtYWtlU2VsZWN0UHJvZHVjdExpc3QiLCJtYWtlU2VsZWN0VG90YWxQcm9kdWN0Q291bnQiLCJtYWtlU2VsZWN0UHJvZHVjdENhdGVnb3J5IiwiY2F0ZWdvcmllcyIsIm1ha2VTZWxlY3RQb3B1bGFyUHJvZHVjdCIsIm1vc3RfcG9wdWxhciIsIm1ha2VTZWxlY3RMYXRlc3RBcnJpdmFsUHJvZHVjdCIsImxhdGVzdCIsIm1ha2VTZWxlY3RQcm9kdWN0RGV0YWlscyIsImRldGFpbHMiLCJtYWtlU2VsZWN0UmVxdWVzdGVkUHJvZHVjdCIsInJlcXVlc3RlZEl0ZW0iLCJtYWtlU2VsZWN0RmF2UHJvZHVjdCIsImZhdm91cml0ZSIsIm1ha2VTZWxlY3RQcm9kdWN0YnlTdGF0dXMiLCJtYWtlU2VsZWN0UHJvZHVjdHVzZXJQcm9maWxlIiwicHJvZmlsZSIsInVzZXIiLCJtYWtlU2VsZWN0UHJvZHVjdHVzZXJQcm9kdWN0cyIsInNlbGxlclByb2R1Y3QiLCJtYWtlU2VsZWN0UHJvZHVjdG5laWdib3VycyIsIm5laWdoYm91ciIsImJvcmRlcl9jb3VudHJpZXMiLCJoZWFkZXJEb21haW4iLCJoZWFkZXIiLCJtYWtlU2VsZWN0SGVhZGVyTWVudSIsImhlYWRlck1lbnUiLCJtYWtlU2VsZWN0TWVzc2FnZUxpc3QiLCJtZXNzYWdlIiwibWVzc2FnZXMiLCJtYWtlU2VsZWN0Tm90aWZpY2F0aW9uTGlzdCIsIm5vdGlmaWNhdGlvbiIsIm5vdGlmaWNhdGlvbnMiLCJtYWtlU2VsZWN0Q2FydExpc3QiLCJjYXJ0IiwibG9hZGluZyIsImlzUHJvY2VlZGluZyIsImNhcnREb21haW4iLCJtYWtlU2VsZWN0Q2FydERpc2NvdW50IiwibWFrZVNlbGVjdFNoaXBwaW5nQWRkcmVzcyIsInNoaXBwaW5nQWRkcmVzcyIsImFkZHJlc3MiLCJtYWtlU2VsZWN0T3JkZXJJZCIsIm9yZGVySWQiLCJtYWtlU2VsZWN0T3JkZXJMaXN0Iiwib3JkZXJMaXN0Iiwib3JkZXJzIiwibWFrZVNlbGVjdEFkZHJlc3NMaXN0IiwiYWRkcmVzc2VzIiwibWVzc2FnZURvbWFpbiIsIm1ha2VTZWxlY3RjaGF0TGlzdCIsIm1ha2VTZWxlY3Rjb252ZXJzYXRpb25MaXN0IiwiY29udmVyc2F0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsR0FBRyxHQUFHO0FBQ1ZDLFNBQU8sRUFBRSxTQURDO0FBRVZDLFFBQU0sRUFBRSxRQUZFO0FBR1ZDLE1BQUksRUFBRTtBQUhJLENBQVo7O0FBTUEsSUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixPQVF4QjtBQUFBOztBQUFBLE1BUEpDLFlBT0ksUUFQSkEsWUFPSTtBQUFBLE1BTkpDLGVBTUksUUFOSkEsZUFNSTtBQUFBLE1BTEpDLFdBS0ksUUFMSkEsV0FLSTtBQUFBLE1BSkpDLGNBSUksUUFKSkEsY0FJSTtBQUFBLE1BSEpDLFNBR0ksUUFISkEsU0FHSTtBQUFBLE1BRkpDLFlBRUksUUFGSkEsWUFFSTtBQUFBLE1BREpDLElBQ0ksUUFESkEsSUFDSTs7QUFDSixrQkFBNEJDLHNEQUFRLENBQUNaLEdBQUcsQ0FBQ0MsT0FBTCxDQUFwQztBQUFBLE1BQU9ZLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUVBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQsRUFBT0MsSUFBUCxFQUFnQjtBQUMvQixRQUFJRCxJQUFJLEtBQUtoQixHQUFHLENBQUNDLE9BQWpCLEVBQTBCO0FBQ3hCLFVBQU1pQixVQUFVLEdBQUdiLFlBQUgsYUFBR0EsWUFBSCx1QkFBR0EsWUFBWSxDQUFFYyxNQUFkLENBQXFCLFVBQUNDLENBQUQ7QUFBQSxlQUFPQSxDQUFDLEtBQUtILElBQWI7QUFBQSxPQUFyQixDQUFuQjs7QUFDQSxVQUFJLENBQUFDLFVBQVUsU0FBVixJQUFBQSxVQUFVLFdBQVYsWUFBQUEsVUFBVSxDQUFFRyxNQUFaLElBQXFCLENBQXpCLEVBQTRCO0FBQzFCLFlBQU1DLFNBQVMsR0FBR2pCLFlB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QSxLQUFYLGFBQVdBLEtBQVgsdUJBQVdBLEtBQUssQ0FBRW9DLE9BQWxCO0FBQUEsQ0FBdEI7O0FBQ0EsSUFBTXNCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxTQUN6QnZELCtEQUFjLENBQ1pzRCxhQURZLEVBRVosVUFBQ3JELFNBQUQ7QUFBQTs7QUFBQSxXQUFlLENBQUFBLFNBQVMsU0FBVCxJQUFBQSxTQUFTLFdBQVQsbUNBQUFBLFNBQVMsQ0FBRWlDLFFBQVgscUdBQXFCNUYsUUFBckIsZ0ZBQStCNEYsUUFBL0IsS0FBMkMsRUFBMUQ7QUFBQSxHQUZZLENBRFc7QUFBQSxDQUEzQjs7QUFLQSxJQUFNc0IsMEJBQTBCLEdBQUcsU0FBN0JBLDBCQUE2QjtBQUFBLFNBQ2pDeEQsK0RBQWMsQ0FDWnNELGFBRFksRUFFWixVQUFDckQsU0FBRDtBQUFBOztBQUFBLFdBQWUsQ0FBQUEsU0FBUyxTQUFULElBQUFBLFNBQVMsV0FBVCxxQ0FBQUEsU0FBUyxDQUFFd0QsWUFBWCwwR0FBeUJuSCxRQUF6QixrRkFBbUM0RixRQUFuQyxLQUErQyxFQUE5RDtBQUFBLEdBRlksQ0FEbUI7QUFBQSxDQUFuQzs7QUFNQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMjJmOGQ0NjRlZjk0YWY1MjA2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY291bnRyeSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvY291bnRyeU1vY2tcIjtcclxuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuY29uc3QgVEFCID0ge1xyXG4gIENPVU5UUlk6IFwiQ09VTlRSWVwiLFxyXG4gIFJFR0lPTjogXCJSRUdJT05cIixcclxuICBBUkVBOiBcIkFSRUFcIixcclxufTtcclxuXHJcbmNvbnN0IENvdW50cnlQaWNrZXJEcm9wZG93biA9ICh7XHJcbiAgY291bnRyeUNoZWNrLFxyXG4gIHNldENvdW50cnlDaGVjayxcclxuICByZWdpb25DaGVjayxcclxuICBzZXRSZWdpb25DaGVjayxcclxuICBhcmVhQ2hlY2ssXHJcbiAgc2V0QXJlYUNoZWNrLFxyXG4gIHNob3csXHJcbn0pID0+IHtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoVEFCLkNPVU5UUlkpO1xyXG5cclxuICBjb25zdCBvblNlbGVjdCA9ICh0eXBlLCB0ZXh0KSA9PiB7XHJcbiAgICBpZiAodHlwZSA9PT0gVEFCLkNPVU5UUlkpIHtcclxuICAgICAgY29uc3QgY2hlY2tFeGlzdCA9IGNvdW50cnlDaGVjaz8uZmlsdGVyKChpKSA9PiBpID09PSB0ZXh0KTtcclxuICAgICAgaWYgKGNoZWNrRXhpc3Q/Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBuZXdGaWx0ZXIgPSBjb3VudHJ5Q2hlY2s/LmZpbHRlcigoaSkgPT4gaSAhPT0gdGV4dCk7XHJcbiAgICAgICAgc2V0Q291bnRyeUNoZWNrKG5ld0ZpbHRlcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IG9sZENvdW50cnkgPSBjb3VudHJ5Q2hlY2sgPT09IHVuZGVmaW5lZCA/IFtdIDogWy4uLmNvdW50cnlDaGVja107XHJcbiAgICAgICAgb2xkQ291bnRyeS5wdXNoKHRleHQpO1xyXG4gICAgICAgIHNldENvdW50cnlDaGVjayhvbGRDb3VudHJ5KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBUQUIuUkVHSU9OKSB7XHJcbiAgICAgIGNvbnN0IGNoZWNrRXhpc3QgPSByZWdpb25DaGVjaz8uZmlsdGVyKChpKSA9PiBpID09PSB0ZXh0KTtcclxuICAgICAgaWYgKGNoZWNrRXhpc3Q/Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBuZXdGaWx0ZXIgPSByZWdpb25DaGVjaz8uZmlsdGVyKChpKSA9PiBpICE9PSB0ZXh0KTtcclxuICAgICAgICBzZXRSZWdpb25DaGVjayhuZXdGaWx0ZXIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBvbGRDb3VudHJ5ID0gcmVnaW9uQ2hlY2sgPT09IHVuZGVmaW5lZCA/IFtdIDogWy4uLnJlZ2lvbkNoZWNrXTtcclxuICAgICAgICBvbGRDb3VudHJ5LnB1c2godGV4dCk7XHJcbiAgICAgICAgc2V0UmVnaW9uQ2hlY2sob2xkQ291bnRyeSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gVEFCLkFSRUEpIHtcclxuICAgICAgY29uc3QgY2hlY2tFeGlzdCA9IGFyZWFDaGVjaz8uZmlsdGVyKChpKSA9PiBpID09PSB0ZXh0KTtcclxuXHJcbiAgICAgIGlmIChjaGVja0V4aXN0Py5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3QgbmV3RmlsdGVyID0gYXJlYUNoZWNrPy5maWx0ZXIoKGkpID0+IGkgIT09IHRleHQpO1xyXG4gICAgICAgIHNldEFyZWFDaGVjayhuZXdGaWx0ZXIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBvbGRDb3VudHJ5ID0gYXJlYUNoZWNrID09PSB1bmRlZmluZWQgPyBbXSA6IFsuLi5hcmVhQ2hlY2tdO1xyXG4gICAgICAgIG9sZENvdW50cnkucHVzaCh0ZXh0KTtcclxuICAgICAgICBzZXRBcmVhQ2hlY2sob2xkQ291bnRyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IHNvcnRSZWdpb24gPSBjb3VudHJ5Lm1hcCgoaSkgPT4gaS5yZWdpb24pO1xyXG4gIGNvbnN0IG5ld1JlZ2lvbiA9IHNvcnRSZWdpb24uZmlsdGVyKChlLCBpKSA9PiBzb3J0UmVnaW9uLmluZGV4T2YoZSkgPT09IGkpO1xyXG5cclxuICBjb25zdCBzb3J0U3VicmVnaW9uID0gY291bnRyeS5tYXAoKGkpID0+IGkuc3VicmVnaW9uKTtcclxuICBjb25zdCBuZXdTdWJSZWdpb24gPSBzb3J0U3VicmVnaW9uLmZpbHRlcihcclxuICAgIChlLCBpKSA9PiBzb3J0U3VicmVnaW9uLmluZGV4T2YoZSkgPT09IGlcclxuICApO1xyXG5cclxuICBjb25zdCB0b3RhbENvdW50cnkgPVxyXG4gICAgTnVtYmVyKGNvdW50cnlDaGVjaz8ubGVuZ3RoKSA+IDAgPyBOdW1iZXIoY291bnRyeUNoZWNrPy5sZW5ndGgpIDogMDtcclxuICBjb25zdCB0b3RhbFJlZ2lvbiA9XHJcbiAgICBOdW1iZXIocmVnaW9uQ2hlY2s/Lmxlbmd0aCkgPiAwID8gTnVtYmVyKHJlZ2lvbkNoZWNrPy5sZW5ndGgpIDogMDtcclxuICBjb25zdCB0b3RhbEFyZWEgPVxyXG4gICAgTnVtYmVyKGFyZWFDaGVjaz8ubGVuZ3RoKSA+IDAgPyBOdW1iZXIoYXJlYUNoZWNrPy5sZW5ndGgpIDogMDtcclxuICBjb25zdCB0b3RhbCA9XHJcbiAgdG90YWxDb3VudHJ5K3RvdGFsUmVnaW9uK3RvdGFsQXJlYTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51IGQtZmxleCBwLTBcIlxyXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjQ4MXB4XCIsIG92ZXJmbG93WDogXCJoaWRkZW5cIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBoZWlnaHQ6IDQ1MCB9fT5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNSxcclxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gbXItMlwiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgd2lkdGg6IDI1MCB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBweC00IGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPT09IFRBQi5DT1VOVFJZID8gXCIjZTVmNGY2XCIgOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRBY3RpdmUoVEFCLkNPVU5UUlkpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS0xIG1yLTJcIj5Db3VudHJ5PC9wPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYnhzLWNoZXZyb24tcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA9PT0gVEFCLlJFR0lPTiA/IFwiI2U1ZjRmNlwiIDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlKFRBQi5SRUdJT04pO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgcHgtNCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktMSBtci0yXCI+UmVnaW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYnhzLWNoZXZyb24tcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA9PT0gVEFCLkFSRUEgPyBcIiNlNWY0ZjZcIiA6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2NSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZShUQUIuQVJFQSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBweC00IGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS0xIG1yLTJcIj5TdWItUmVnaW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYnhzLWNoZXZyb24tcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLCBtaW5XaWR0aDogMjAwIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7YWN0aXZlID09PSBUQUIuQ09VTlRSWSAmJlxyXG4gICAgICAgICAgICAgICAgY291bnRyeS5tYXAoKGNvdW50cnksIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17Y291bnRyeT8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3QoVEFCLkNPVU5UUlksIGNvdW50cnk/LmFscGhhMkNvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLWl0ZW0gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcj17KGV2KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGV2LnRhcmdldC5zcmMgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vY3VsdHVyaXplLnMzLmFtYXpvbmF3cy5jb20vY2xpZW50LWltYWdlcy81M2JhY2YyNi0wMGE1LTRjMzEtYTgxZS0wNTkxZGViYTIxOGMuUE5HXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y291bnRyeT8uZmxhZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3ctc21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImZsYWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRyeT8ubmFtZT8ubGVuZ3RoID4gMTVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY291bnRyeT8ubmFtZT8uc3Vic3RyaW5nKDAsIDE1KSArIFwiLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY291bnRyeT8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteVRlc3QgY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEwcHhcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgb25TZWxlY3QoVEFCLkNPVU5UUlksIGNvdW50cnk/LmFscGhhMkNvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3QoVEFCLkNPVU5UUlksIGNvdW50cnk/LmFscGhhMkNvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y291bnRyeUNoZWNrPy5pbmNsdWRlcz8uKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRyeT8uYWxwaGEyQ29kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiXHJcbiAgICAgICAgICAgIGlkPVwiYWxwaGFjb2RlXCJcclxuICAgICAgICAgICAgY2hlY2tlZD17Y291bnRyeUNoZWNrLmluY2x1ZGVzKGNvdW50cnk/LmFscGhhMkNvZGUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1sYWJlbCBjaGtieC1sYWJcIlxyXG4gICAgICAgICAgICBodG1sRm9yPVwiYWxwaGFjb2RlXCJcclxuICAgICAgICAgID48L2xhYmVsPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgIHthY3RpdmUgPT09IFRBQi5SRUdJT04gJiZcclxuICAgICAgICAgICAgICAgIG5ld1JlZ2lvbi5tYXAoKGNvdW50cnksIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnkgIT09IFwiXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvdW50cnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdChUQUIuUkVHSU9OLCBjb3VudHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHctMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cInNoYWRvdy1zbVwiPvCfjI08L3A+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3I9eyhldikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGV2LnRhcmdldC5zcmMgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9jdWx0dXJpemUuczMuYW1hem9uYXdzLmNvbS9jbGllbnQtaW1hZ2VzLzUzYmFjZjI2LTAwYTUtNGMzMS1hODFlLTA1OTFkZWJhMjE4Yy5QTkdcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cmVxdWlyZShcIi4uLy4uLy4uL2ltYWdlcy93b3JsZC5wbmdcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3ctc21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiZmxhZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb3VudHJ5Py5sZW5ndGggPiAxNVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvdW50cnk/LnN1YnN0cmluZygwLCAxNSkgKyBcIi4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY291bnRyeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15VGVzdCBjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBvblNlbGVjdChUQUIuUkVHSU9OLCBjb3VudHJ5Py5yZWdpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0KFRBQi5SRUdJT04sIGNvdW50cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3JlZ2lvbkNoZWNrPy5pbmNsdWRlcz8uKGNvdW50cnkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIlxyXG4gICAgICAgICAgICBpZD1cInJlZ2lvblwiXHJcbiAgICAgICAgICAgIGNoZWNrZWQ9e3JlZ2lvbkNoZWNrLmluY2x1ZGVzKGNvdW50cnk/LnJlZ2lvbil9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sLWxhYmVsIGNoa2J4LWxhYlwiXHJcbiAgICAgICAgICAgIGh0bWxGb3I9XCJyZWdpb25cIlxyXG4gICAgICAgICAgPjwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIHthY3RpdmUgPT09IFRBQi5BUkVBICYmXHJcbiAgICAgICAgICAgICAgICBuZXdTdWJSZWdpb24ubWFwKChjb3VudHJ5LCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5ICE9PSBcIlwiICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb3VudHJ5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3QoVEFCLkFSRUEsIGNvdW50cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gdy0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXsoZXYpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChldi50YXJnZXQuc3JjID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vY3VsdHVyaXplLnMzLmFtYXpvbmF3cy5jb20vY2xpZW50LWltYWdlcy81M2JhY2YyNi0wMGE1LTRjMzEtYTgxZS0wNTkxZGViYTIxOGMuUE5HXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3JlcXVpcmUoXCIuLi8uLi8uLi9pbWFnZXMvd29ybGQucG5nXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93LXNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImZsYWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRyeT8ubGVuZ3RoID4gMTVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb3VudHJ5Py5zdWJzdHJpbmcoMCwgMTUpICsgXCIuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNvdW50cnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteVRlc3QgY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTBweFwiLCBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgb25TZWxlY3QoVEFCLkFSRUEsIGNvdW50cnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0KFRBQi5BUkVBLCBjb3VudHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXthcmVhQ2hlY2s/LmluY2x1ZGVzPy4oY291bnRyeSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiXHJcbiAgICAgICAgICAgIGlkPVwic3VicmVnaW9uXCJcclxuICAgICAgICAgICAgY2hlY2tlZD17YXJlYUNoZWNrLmluY2x1ZGVzKGNvdW50cnk/LnN1YnJlZ2lvbil9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1jb250cm9sLWxhYmVsIGNoa2J4LWxhYlwiXHJcbiAgICAgICAgICAgIGh0bWxGb3I9XCJzdWJyZWdpb25cIlxyXG4gICAgICAgICAgPjwvbGFiZWw+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgeyFzaG93ICYmIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBmaW5hbFF1ZXJ5O1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50cnlDaGVjaz8ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICBmaW5hbFF1ZXJ5ID0gYC9jb3VudHJ5LyR7Y291bnRyeUNoZWNrfT9gO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgZmluYWxRdWVyeSA9IGAvY291bnRyeS8ke3VuZGVmaW5lZH0/YDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCByZWdpb25RdWVyeTtcclxuICAgICAgICAgICAgICAgIGlmIChyZWdpb25DaGVjaz8ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICByZWdpb25RdWVyeSA9IGByZWdpb249JHtyZWdpb25DaGVja31gO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgcmVnaW9uUXVlcnkgPSBgYDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBhcmVhUXVlcnk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJlYUNoZWNrPy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIGFyZWFRdWVyeSA9IGAke1xyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lvbkNoZWNrPy5sZW5ndGggPiAwID8gXCImXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgIH1zdWJfcmVnaW9uPSR7YXJlYUNoZWNrfWA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICBhcmVhUXVlcnkgPSBgYDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgJHtmaW5hbFF1ZXJ5fSR7cmVnaW9uUXVlcnl9JHthcmVhUXVlcnl9YCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cgJiYgd2luZG93LnNjcm9sbCgwLCAwKTtcclxuICAgICAgICAgICAgICAgIHNldENvdW50cnlDaGVjayhbXSk7XHJcbiAgICAgICAgICAgICAgICBzZXRBcmVhQ2hlY2soW10pO1xyXG4gICAgICAgICAgICAgICAgc2V0UmVnaW9uQ2hlY2soW10pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIC8vIHdpZHRoOiBhY3RpdmUgPT09IFRBQi5SRUdJT04gPyBcIjQ2NnB4XCIgOiBcIjQ2NnB4XCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWN0aXZlID09PSBUQUIuUkVHSU9OID8gXCJhYnNvbHV0ZVwiIDogXCJzdGlja3lcIixcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIwcHghaW1wb3J0YW50XCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2IoMjU1LCAyNTUsIDI1NSlcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNnB4IDhweFwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigyNDIsIDE1OSwgNilcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0b3RhbCA+IDAgPyB0b3RhbCA6IFwiXCJ9IEN1bHR1cmVcclxuICAgICAgICAgICAgICB7dG90YWwgPiAxID8gXCJzXCIgOiBcIlwifSBzZWxlY3RlZFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQ291bnRyeVBpY2tlckRyb3Bkb3duO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCBTa2VsZXRvbiBmcm9tIFwicmVhY3QtbG9hZGluZy1za2VsZXRvblwiO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgZ2V0Q291bnRyeUZsYWcsIG5vdGlmeSwgcGVyY2VudGFnZSB9IGZyb20gXCIuLi8uLi91dGlscy9oZWxwZXJcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgY2FydExpc3QgfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9oZWFkZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlSW5pdCB9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL2NhcnRcIjtcclxuaW1wb3J0IHsgRmF2Q29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L0ZhdlByb3ZpZGVyXCI7XHJcbmltcG9ydCBQcm9kdWN0QVBJIGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9wcm9kdWN0XCI7XHJcbmNvbnN0IE93bENhcm91c2VsID0gZHluYW1pYyhpbXBvcnQoXCJyZWFjdC1vd2wtY2Fyb3VzZWwzXCIpKTtcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgbG9vcDogdHJ1ZSxcclxuICBuYXY6IHRydWUsXHJcbiAgZG90czogZmFsc2UsXHJcbiAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxyXG4gIGF1dG9wbGF5OiB0cnVlLFxyXG4gIG1hcmdpbjogMzAsXHJcbiAgbmF2VGV4dDogW1xyXG4gICAgXCI8aSBjbGFzcz0nZmxhdGljb24tbGVmdCc+PC9pPlwiLFxyXG4gICAgXCI8aSBjbGFzcz0nZmxhdGljb24tcmlnaHQtYXJyb3cnPjwvaT5cIixcclxuICBdLFxyXG4gIHJlc3BvbnNpdmU6IHtcclxuICAgIDA6IHtcclxuICAgICAgaXRlbXM6IDEsXHJcbiAgICB9LFxyXG4gICAgNTc2OiB7XHJcbiAgICAgIGl0ZW1zOiAyLFxyXG4gICAgfSxcclxuICAgIDc2ODoge1xyXG4gICAgICBpdGVtczogMyxcclxuICAgIH0sXHJcbiAgICAxMjAwOiB7XHJcbiAgICAgIGl0ZW1zOiA0LFxyXG4gICAgfSxcclxuICAgIDE0MzA6IHtcclxuICAgICAgaXRlbXM6IDYsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0RGV0YWlsU2xpZGVyKHsgcHJvZHVjdCB9KSB7XHJcbiAgY29uc3QgeyBmYXZwcm9kdWN0LCBnZXRGYXZwcm9kdWN0LCByZW1vdmVGYXYgfSA9IHVzZUNvbnRleHQoRmF2Q29udGV4dCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGFkZHRvQ2FydCA9IChpZCwgcHJpY2UpID0+IHtcclxuICAgIGRpc3BhdGNoKFxyXG4gICAgICBjcmVhdGVJbml0KHtcclxuICAgICAgICBwcm9kdWN0OiBpZCxcclxuICAgICAgICBhbW91bnQ6IHByaWNlLFxyXG4gICAgICAgIGNvdW50OiAxLFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBkaXNwYXRjaChjYXJ0TGlzdCgpKTtcclxuICAgIH0sIDUwMCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmF2UHJvZHVjdCA9ICh1dWlkKSA9PiB7XHJcbiAgICBpZiAoZmF2cHJvZHVjdD8uaW5jbHVkZXM/Lih1dWlkKSkge1xyXG4gICAgICByZW1vdmVGYXYodXVpZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBQcm9kdWN0QVBJLmFkZEZhdlByb2R1Y3Qoe1xyXG4gICAgICAgIHByb2R1Y3Q6IHV1aWQsXHJcbiAgICAgIH0pO1xyXG4gICAgICBnZXRGYXZwcm9kdWN0KCk7XHJcbiAgICAgIG5vdGlmeSgnc3VjY2VzcycsXCJJdGVtIGFkZGVkIHRvIGZhdm91cml0ZVwiKVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZhY2lsaXR5LWFyZWFcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC0wXCI+XHJcbiAgICAgICAgPE93bENhcm91c2VsXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmYWNpbGl0eS1zbGlkZXMgb3dsLWNhcm91c2VsIG93bC10aGVtZVwiXHJcbiAgICAgICAgICB7Li4ub3B0aW9uc31cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cHJvZHVjdD8ubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICBwcm9kdWN0Lm1hcCgocHJvZHVjdCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHsgdXVpZCwgcHJpY2UgfSA9IHByb2R1Y3Q7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IGZsYWcgPSBnZXRDb3VudHJ5RmxhZyhwcm9kdWN0LmNvdW50cnlbMF0uY29kZSk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXt1dWlkfSBjbGFzc05hbWU9XCJzaW5nbGUtZmFjaWxpdHktYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhUb2tlblwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGZhdlByb2R1Y3QodXVpZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvb2ttYXJrLWljb25cIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmF2cHJvZHVjdCAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmF2cHJvZHVjdD8ubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZhdnByb2R1Y3Q/LmluY2x1ZGVzKHV1aWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiIzAwOTdhN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiI2YyOWYwNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmFzIGZhLWhlYXJ0IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAxNSB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcj17KGV2KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChldi50YXJnZXQuc3JjID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9jdWx0dXJpemUuczMuYW1hem9uYXdzLmNvbS9jbGllbnQtaW1hZ2VzLzUzYmFjZjI2LTAwYTUtNGMzMS1hODFlLTA1OTFkZWJhMjE4Yy5QTkdcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9wcm9kdWN0LyR7cHJvZHVjdD8uc2x1Z31gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cgJiYgd2luZG93LnNjcm9sbCgwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ29vZ2xlLWJ1dHRvbi1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlcz8uWzBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuZGlzY291bnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxhZy1kaXNjb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5kaXNjb3VudC5hbW91bnR9JSBPZmZcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGgzXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9wcm9kdWN0LyR7cHJvZHVjdD8uc2x1Z31gKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdyAmJiB3aW5kb3cuc2Nyb2xsKDAsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdGRldGFpbHByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+JCB7cHJpY2V9PC9zcGFuPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5kaXNjb3VudCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGVsPntwZXJjZW50YWdlKHByaWNlLCBwcm9kdWN0LmRpc2NvdW50LmFtb3VudCl9PC9kZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHRvQ2FydChwcm9kdWN0LnV1aWQsIHByb2R1Y3QucHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFkZGJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiYnggYngtcGx1c1wiPjwvaT5BZGRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkVycm9yPXsoZXYpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChldi50YXJnZXQuc3JjID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vY3VsdHVyaXplLnMzLmFtYXpvbmF3cy5jb20vY2xpZW50LWltYWdlcy81M2JhY2YyNi0wMGE1LTRjMzEtYTgxZS0wNTkxZGViYTIxOGMuUE5HXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLWNvdW50cnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtmbGFnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL2NvdW50cnkvJHtwcm9kdWN0LmNvdW50cnlbMF0uY29kZX1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93ICYmIHdpbmRvdy5zY3JvbGwoMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZHVjdCBjb3VudHJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9kdWN0Py5jb3VudHJ5Py5bMF0/Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPFNrZWxldG9uIGNvdW50PXs3fSAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L093bENhcm91c2VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IFJlcXVlc3RJdGVtIGZyb20gXCIuLi9DdWx0dXJpc2UvUmVxdWVzdEl0ZW1cIjtcclxuXHJcbmNvbnN0IFBvc3ROZWVkZWRJdGVtc01vZGFsID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbFxyXG4gICAgICBzaXplPVwibGdcIlxyXG4gICAgICBzaG93PXtwcm9wcy5hY3RpdmV9XHJcbiAgICAgIG9uSGlkZT17cHJvcHMub25DbGlja31cclxuICAgICAgZGlhbG9nQ2xhc3NOYW1lPVwibW9kYWwtOTB3IHJlczQ0XCJcclxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIlxyXG4gICAgICBjZW50ZXJlZFxyXG4gICAgICBiYWNrZHJvcD1cInN0YXRpY1wiXHJcbiAgICAgIGtleWJvYXJkPXtmYWxzZX1cclxuICAgICAgc3R5bGU9e3t6SW5kZXg6OTk5OTk5OTk5OX19XHJcbiAgICA+XHJcbiAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XHJcbiAgICAgICAgPE1vZGFsLlRpdGxlPlBvc3QgTmVlZGVkIEl0ZW08L01vZGFsLlRpdGxlPlxyXG4gICAgICA8L01vZGFsLkhlYWRlcj5cclxuXHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJwcm9saXN0IHAtNFwiPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBkLWJsb2NrXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb3N0bmVkZGVzXCI+XHJcbiAgICAgICAgICAgIENhbuKAmXQgZmluZCB3aGF0IHlvdeKAmXJlIGxvb2tpbmcgZm9yPyBQb3N0IGl0IGFuZCBCYW5nbGFkZXNoIHNlbGxlcnNcclxuICAgICAgICAgICAgd2lsbCBiZSBub3RpZmllZCBpbW1lZGlhdGVseSFcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxSZXF1ZXN0SXRlbVxyXG4gICAgICAgICAgb25DbG9zZT17KCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9wcy5vbkNsaWNrKCk7XHJcbiAgICAgICAgICAgIHByb3BzLnNldFNob3dTdWNjZXNzKCFwcm9wcy5zaG93U3VjY2Vzcyk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L01vZGFsPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0TmVlZGVkSXRlbXNNb2RhbDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBmYXZBUEkgZnJvbSBcIi4uL3NlcnZpY2VzL3Byb2R1Y3RcIjtcclxuaW1wb3J0IHsgbm90aWZ5IH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZhdkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBGYXZQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbZmF2cHJvZHVjdCwgc2V0RmF2UHJvZHVjdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGdldEZhdnByb2R1Y3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgZmF2QVBJLmdldEZhdlByb2R1Y3QoKTtcclxuXHJcbiAgICAgIGlmIChwcm9kdWN0Py5kYXRhPy5yZXNwb25zZT8uY291bnQgPiAwKSB7XHJcbiAgICAgICAgY29uc3QgZmF2ID0gcHJvZHVjdD8uZGF0YT8ucmVzcG9uc2U/LnByb2R1Y3RzPy5tYXAoXHJcbiAgICAgICAgICAoaSkgPT4gaT8ucHJvZHVjdD8udXVpZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0RmF2UHJvZHVjdChmYXYpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEZhdlByb2R1Y3QoW10pO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHNldEZhdlByb2R1Y3QoW10pO1xyXG4gICAgICAvLyAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXHJcbiAgICAgIC8vIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgcmVtb3ZlRmF2ID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBhd2FpdCBmYXZBUEkuZGVsZXRlRmF2KGlkKTtcclxuICAgIGF3YWl0IGdldEZhdnByb2R1Y3QoKTtcclxuICAgIG5vdGlmeShcInN1Y2Nlc3NcIiwgXCJJdGVtIHJlbW92ZWQgZnJvbSBmYXZvdXJpdGVcIik7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldEZhdnByb2R1Y3QoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RmF2Q29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIGZhdnByb2R1Y3QsXHJcbiAgICAgICAgZ2V0RmF2cHJvZHVjdCxcclxuICAgICAgICBzZXRGYXZQcm9kdWN0LFxyXG4gICAgICAgIHJlbW92ZUZhdixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9GYXZDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCB7IGFwaURlbGV0ZSwgYXBpR2V0LCBhcGlQYXRjaCwgYXBpUG9zdCB9IGZyb20gXCIuLi91dGlscy9heGlvc1wiO1xyXG5pbXBvcnQgeyBCQVNFX0FQSV9VUkwgfSBmcm9tIFwiLi4vdXRpbHMvc2VydmVyXCI7XHJcblxyXG4vLyBjb25zdCBQUk9EVUNUX0xJU1QgPSBCQVNFX0FQSV9VUkwgKyBcIi9wcm9kdWN0P3RhZ3M9c2hvZXMsYmFncyZwcmljZT01LDYmcGFnZT0xJmxpbWl0PTEwXCI7XHJcbmNvbnN0IFBST0RVQ1RfTElTVCA9IEJBU0VfQVBJX1VSTCArIFwiL3Byb2R1Y3RcIjtcclxuY29uc3QgQ0FURUdPUllfTElTVCA9IEJBU0VfQVBJX1VSTCArIFwiL3Byb2R1Y3QvY2F0ZWdvcmllcy9cIjtcclxuY29uc3QgR0VUX0ZBVl9QUk9EVUNUID0gQkFTRV9BUElfVVJMICsgXCIvcHJvZHVjdC9mYXZvdXJpdGVcIjtcclxuY29uc3QgRkFWX1BST0RVQ1RfREVMRVRFID0gQkFTRV9BUElfVVJMICsgXCIvcHJvZHVjdC9mYXZvdXJpdGUtZGVsZXRlL1wiO1xyXG5jb25zdCBHRVRfSU5BQ1RJVkVfUFJPRFVDVCA9IEJBU0VfQVBJX1VSTCArIFwiL3Byb2R1Y3Qvc3RhdHVzL2luYWN0aXZlXCI7XHJcbmNvbnN0IEdFVF9BQ1RJVkVfUFJPRFVDVCA9IEJBU0VfQVBJX1VSTCArIFwiL3Byb2R1Y3Qvc3RhdHVzL2FjdGl2ZVwiO1xyXG5jb25zdCBHRVRfU0VMTEVSX1BST0ZJTEUgPSBCQVNFX0FQSV9VUkwgKyBcIi9zZWxsZXIvcHJvZmlsZVwiO1xyXG5cclxuY29uc3QgR0VUX1NFTExFUl9QUk9EVUNUID0gQkFTRV9BUElfVVJMICsgXCIvcHJvZHVjdC9zZWxsZXItcHJvZHVjdHNcIjtcclxuY29uc3QgR0VUX05FSUdIQk9VUl9DVUxUVVJFID0gQkFTRV9BUElfVVJMICsgXCIvYm9yZGVyLWNvdW50cnk/Y291bnRyeT1cIjtcclxuXHJcbmNvbnN0IEdFVF9PUkRFUl9CWV9QRU5ESU5HID0gQkFTRV9BUElfVVJMICsgXCIvcHJvZHVjdC9zZWxsZXItY2VudGVyP3N0YXR1cz1cIjtcclxuXHJcbmNvbnN0IFNUQVRVU19DSEFOR0UgPSBCQVNFX0FQSV9VUkwgKyBcIi9wcm9kdWN0L3Byb2R1Y3Qtc3RhdHVzL1wiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZmV0Y2hwcm9kdWN0OiBmdW5jdGlvbiAoe1xyXG4gICAgcGFnZSxcclxuICAgIGxpbWl0LFxyXG4gICAgcHJpY2UsXHJcbiAgICBjb3VudHJ5LFxyXG4gICAgY2F0ZWdvcnksXHJcbiAgICB0YWdzLFxyXG4gICAgcmVnaW9uLFxyXG4gICAgc3ViX3JlZ2lvbixcclxuICAgIHRpdGxlLFxyXG4gICAgemlwLFxyXG4gICAgc29ydF9ieSxcclxuICAgIGNvbmRpdGlvbixcclxuICB9KSB7XHJcbiAgICBjb25zdCBxdWVyeSA9XHJcbiAgICAgIHR5cGVvZiBwYWdlID09PSBcInVuZGVmaW5lZFwiID8gXCJcIiA6IGA/cGFnZT0ke3BhZ2V9JmxpbWl0PSR7bGltaXR9YDtcclxuICAgIGxldCBwcmljZVF1ZXJ5O1xyXG4gICAgaWYgKHByaWNlICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIHByaWNlUXVlcnkgPVxyXG4gICAgICAgIE51bWJlcihwcmljZSkgPiAwXHJcbiAgICAgICAgICA/IGAmcHJpY2U9JHtcclxuICAgICAgICAgICAgICBOdW1iZXIocHJpY2UpID09PSA1MDAwXHJcbiAgICAgICAgICAgICAgICA/IDIwMFxyXG4gICAgICAgICAgICAgICAgOiBOdW1iZXIocHJpY2UpID09PSAyMDBcclxuICAgICAgICAgICAgICAgID8gMTAwXHJcbiAgICAgICAgICAgICAgICA6IE51bWJlcihwcmljZSkgPT09IDEwMFxyXG4gICAgICAgICAgICAgICAgPyA1MFxyXG4gICAgICAgICAgICAgICAgOiBOdW1iZXIocHJpY2UpID09PSA1MFxyXG4gICAgICAgICAgICAgICAgPyAyNVxyXG4gICAgICAgICAgICAgICAgOiA1XHJcbiAgICAgICAgICAgIH0sJHtwcmljZX1gXHJcbiAgICAgICAgICA6IFwiXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwcmljZVF1ZXJ5ID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY291bnRyeVF1ZXJ5O1xyXG4gICAgaWYgKGNvdW50cnkgIT09IFwidW5kZWZpbmVkXCIgJiYgY291bnRyeT8ubGVuZ3RoID4gMCkge1xyXG4gICAgICBjb3VudHJ5UXVlcnkgPSBjb3VudHJ5ID8gYCZjb3VudHJ5PSR7Y291bnRyeX1gIDogXCJcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvdW50cnlRdWVyeSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJlZ2lvblF1ZXJ5O1xyXG4gICAgaWYgKHR5cGVvZiByZWdpb24gIT09IFwidW5kZWZpbmVkXCIgJiYgcmVnaW9uPy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJlZ2lvblF1ZXJ5ID0gcmVnaW9uID8gYCZyZWdpb249JHtyZWdpb259YCA6IFwiXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZWdpb25RdWVyeSA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBsZXQgc3VicmVnaW9uUXVlcnk7XHJcbiAgICBpZiAodHlwZW9mIHN1Yl9yZWdpb24gIT09IFwidW5kZWZpbmVkXCIgJiYgc3ViX3JlZ2lvbj8ubGVuZ3RoID4gMCkge1xyXG4gICAgICBzdWJyZWdpb25RdWVyeSA9IHN1Yl9yZWdpb24gPyBgJnN1Yl9yZWdpb249JHtzdWJfcmVnaW9ufWAgOiBcIlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3VicmVnaW9uUXVlcnkgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB0aXRsZVF1ZXJ5O1xyXG4gICAgaWYgKHR5cGVvZiB0aXRsZSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB0aXRsZVF1ZXJ5ID0gdGl0bGUgPyBgJnRpdGxlPSR7dGl0bGV9YCA6IFwiXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aXRsZVF1ZXJ5ID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY2F0ZWdvcnlRdWVyeTtcclxuICAgIGlmICh0eXBlb2YgY2F0ZWdvcnkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgY2F0ZWdvcnlRdWVyeSA9IGAmY2F0ZWdvcnk9JHtjYXRlZ29yeX1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2F0ZWdvcnlRdWVyeSA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBsZXQgdGFnc1F1ZXJ5O1xyXG4gICAgaWYgKHR5cGVvZiB0YWdzICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIHRhZ3NRdWVyeSA9IGAmdGFncz0ke3RhZ3N9YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRhZ3NRdWVyeSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHppcFF1ZXJ5O1xyXG4gICAgaWYgKHR5cGVvZiB6aXAgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgemlwUXVlcnkgPSBgJnppcD0ke3ppcH1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgemlwUXVlcnkgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2codHlwZW9mIHNvcnRfYnkgIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICBsZXQgc29ydF9ieVF1ZXJ5O1xyXG4gICAgaWYgKHNvcnRfYnkgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHNvcnRfYnkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgc29ydF9ieVF1ZXJ5ID0gYCZzb3J0X2J5PSR7c29ydF9ieX1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc29ydF9ieVF1ZXJ5ID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY29uZGl0aW9uUXVlcnk7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBjb25kaXRpb24gIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgY29uZGl0aW9uUXVlcnkgPSBjb25kaXRpb24gPyBgJmNvbmRpdGlvbj0ke2NvbmRpdGlvbn1gIDogXCJcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbmRpdGlvblF1ZXJ5ID0gXCJcIjtcclxuICAgIH1cclxuICAgIHJldHVybiBhcGlHZXQoXHJcbiAgICAgIGAke1BST0RVQ1RfTElTVH0ke3F1ZXJ5fSR7cHJpY2VRdWVyeX0ke2NvdW50cnlRdWVyeX0ke2NhdGVnb3J5UXVlcnl9JHt0YWdzUXVlcnl9JHtyZWdpb25RdWVyeX0ke3N1YnJlZ2lvblF1ZXJ5fSR7dGl0bGVRdWVyeX0ke3ppcFF1ZXJ5fSR7c29ydF9ieVF1ZXJ5fSR7Y29uZGl0aW9uUXVlcnl9YFxyXG4gICAgKTtcclxuICB9LFxyXG4gIGZldGNocGNhdGVnb3J5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gYXBpR2V0KGAke0NBVEVHT1JZX0xJU1R9YCk7XHJcbiAgfSxcclxuICBmZXRjaFByb2R1Y3RkZXRhaWxzOiBhc3luYyBmdW5jdGlvbiAoc2x1Zykge1xyXG4gICAgcmV0dXJuIGF3YWl0IGFwaUdldChgJHtCQVNFX0FQSV9VUkx9L3Byb2R1Y3QvJHtzbHVnfWApO1xyXG4gIH0sXHJcbiAgcG9zdG5lZWRlZEl0ZW06IGFzeW5jIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgYXBpUG9zdChgJHtCQVNFX0FQSV9VUkx9L3Byb2R1Y3QvcmVxdWVzdC9pdGVtYCwgZGF0YSk7XHJcbiAgfSxcclxuICBjcmVhdGVQcm9kdWN0OiBhc3luYyBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF3YWl0IGFwaVBvc3QoYCR7QkFTRV9BUElfVVJMfS9wcm9kdWN0L2NyZWF0ZWAsIGRhdGEpO1xyXG4gIH0sXHJcbiAgcmV2aWV3OiBhc3luYyBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF3YWl0IGFwaVBvc3QoYCR7QkFTRV9BUElfVVJMfS9yZXZpZXcvcHJvZHVjdC1yZXZpZXctYWRkYCwgZGF0YSk7XHJcbiAgfSxcclxuICBnZXRSZXF1ZXN0ZWRpdGVtOiBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgYXBpR2V0KGAke0JBU0VfQVBJX1VSTH0vcHJvZHVjdC9yZXF1ZXN0L2l0ZW1gKTtcclxuICB9LFxyXG4gIGdldEZhdlByb2R1Y3Q6IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBhd2FpdCBhcGlHZXQoYCR7R0VUX0ZBVl9QUk9EVUNUfWApO1xyXG4gIH0sXHJcbiAgZGVsZXRlRmF2OiBhc3luYyBmdW5jdGlvbiAoaWQpIHtcclxuICAgIHJldHVybiBhd2FpdCBhcGlEZWxldGUoYCR7RkFWX1BST0RVQ1RfREVMRVRFfSR7aWR9YCk7XHJcbiAgfSxcclxuICBhZGRGYXZQcm9kdWN0OiBhc3luYyBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF3YWl0IGFwaVBvc3QoYCR7R0VUX0ZBVl9QUk9EVUNUfWAsIGRhdGEpO1xyXG4gIH0sXHJcbiAgZ2V0cHJvZHVjdGJ5U3RhdHVzOiBhc3luYyBmdW5jdGlvbiAoeyB0eXBlIH0pIHtcclxuICAgIGlmICh0eXBlID09PSBcImFjdGl2ZVwiKSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCBhcGlHZXQoYCR7R0VUX0FDVElWRV9QUk9EVUNUfWApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGF3YWl0IGFwaUdldChgJHtHRVRfSU5BQ1RJVkVfUFJPRFVDVH1gKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGdldHNlbGxlclByb2ZpbGU6IGFzeW5jIGZ1bmN0aW9uICh7IHVzZXJuYW1lIH0pIHtcclxuICAgIHJldHVybiBhd2FpdCBhcGlHZXQoYCR7R0VUX1NFTExFUl9QUk9GSUxFfS8ke3VzZXJuYW1lfWApO1xyXG4gIH0sXHJcbiAgZ2V0c2VsbGVyUHJvZHVjdHM6IGFzeW5jIGZ1bmN0aW9uICh7IHVzZXJuYW1lIH0pIHtcclxuICAgIHJldHVybiBhd2FpdCBhcGlHZXQoYCR7R0VUX1NFTExFUl9QUk9EVUNUfS8ke3VzZXJuYW1lfWApO1xyXG4gIH0sXHJcbiAgZ2V0bmVpZ2hub3VyQ3VsdHVyZTogYXN5bmMgZnVuY3Rpb24gKHsgY291bnRyeSB9KSB7XHJcbiAgICByZXR1cm4gYXdhaXQgYXBpR2V0KGAke0dFVF9ORUlHSEJPVVJfQ1VMVFVSRX0ke2NvdW50cnl9YCk7XHJcbiAgfSxcclxuICBjaGFuZ2VTdGF0dXM6IGFzeW5jIGZ1bmN0aW9uICh7IGlkLCBzdGF0dXMgfSkge1xyXG4gICAgcmV0dXJuIGF3YWl0IGFwaVBhdGNoKGAke1NUQVRVU19DSEFOR0V9JHtpZH1gLCB7IHN0YXR1czogc3RhdHVzIH0pO1xyXG4gIH0sXHJcbiAgZ2V0T3JkZXJCeXBlbmRpbmc6IGFzeW5jIGZ1bmN0aW9uICh7IHR5cGUgfSkge1xyXG4gICAgaWYgKHR5cGUgPT09IFwicHJvY2Vzc2luZ1wiKSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCBhcGlHZXQoYCR7R0VUX09SREVSX0JZX1BFTkRJTkd9cHJvY2Vzc2luZ2ApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGF3YWl0IGFwaUdldChgJHtHRVRfT1JERVJfQllfUEVORElOR31jb21wbGV0ZWRgKTtcclxuICAgIH1cclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gXCJyZXNlbGVjdFwiO1xyXG5cclxuY29uc3QgYXV0aERvbWFpbiA9IChzdGF0ZSkgPT4gc3RhdGUuYXV0aDtcclxuY29uc3QgbWFrZVNlbGVjdFBhcnRuZXIgPSAoKSA9PlxyXG4gIGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgYXV0aERvbWFpbixcclxuICAgIChzdWJkb21haW4pID0+IHN1YmRvbWFpbj8ucGFydG5lcj8ucmVzcG9uc2U/LmNsaWVudHMgfHwgW11cclxuICApO1xyXG5cclxuY29uc3QgcHJvZHVjdERvbWFpbiA9IChzdGF0ZSkgPT4gc3RhdGUucHJvZHVjdDtcclxuXHJcbmNvbnN0IG1ha2VTZWxlY3RQcm9kdWN0TGlzdCA9ICgpID0+XHJcbiAgY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBwcm9kdWN0RG9tYWluLFxyXG4gICAgKHN1YmRvbWFpbikgPT4gc3ViZG9tYWluPy5wcm9kdWN0Py5yZXNwb25zZT8ucHJvZHVjdHMgfHwgW11cclxuICApO1xyXG5cclxuICBjb25zdCBtYWtlU2VsZWN0VG90YWxQcm9kdWN0Q291bnQgPSAoKSA9PlxyXG4gIGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgcHJvZHVjdERvbWFpbixcclxuICAgIChzdWJkb21haW4pID0+IHN1YmRvbWFpbj8ucHJvZHVjdD8ucmVzcG9uc2U/LnRvdGFsIHx8IFtdXHJcbiAgKTtcclxuXHJcbmNvbnN0IG1ha2VTZWxlY3RQcm9kdWN0Q2F0ZWdvcnkgPSAoKSA9PlxyXG4gIGNyZWF0ZVNlbGVjdG9yKFxyXG4gICAgcHJvZHVjdERvbWFpbixcclxuICAgIChzdWJkb21haW4pID0+IHN1YmRvbWFpbj8uY2F0ZWdvcnk/LnJlc3BvbnNlPy5jYXRlZ29yaWVzIHx8IFtdXHJcbiAgKTtcclxuY29uc3QgbWFrZVNlbGVjdFBvcHVsYXJQcm9kdWN0ID0gKCkgPT5cclxuICBjcmVhdGVTZWxlY3RvcihcclxuICAgIHByb2R1Y3REb21haW4sXHJcbiAgICAoc3ViZG9tYWluKSA9PlxyXG4gICAgICBzdWJkb21haW4/LnByb2R1Y3Q/LnJlc3BvbnNlPy5wcm9kdWN0cz8uZmlsdGVyKFxyXG4gICAgICAgIChpKSA9PiBpLm1vc3RfcG9wdWxhciA9PT0gdHJ1ZVxyXG4gICAgICApIHx8IFtdXHJcbiAgKTtcclxuXHJcbmNvbnN0IG1ha2VTZWxlY3RMYXRlc3RBcnJpdmFsUHJvZHVjdCA9ICgpID0+XHJcbiAgY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBwcm9kdWN0RG9tYWluLFxyXG4gICAgKHN1YmRvbWFpbikgPT5cclxuICAgICAgc3ViZG9tYWluPy5wcm9kdWN0Py5yZXNwb25zZT8ucHJvZHVjdHM/LmZpbHRlcigoaSkgPT4gaS5sYXRlc3QgPT09IHRydWUpIHx8XHJcbiAgICAgIFtdXHJcbiAgKTtcclxuY29uc3QgbWFrZVNlbGVjdFByb2R1Y3REZXRhaWxzID0gKCkgPT5cclxuICBjcmVhdGVTZWxlY3RvcihcclxuICAgIHByb2R1Y3REb21haW4sXHJcbiAgICAoc3ViZG9tYWluKSA9PiBzdWJkb21haW4/LmRldGFpbHM/LnJlc3BvbnNlPy5wcm9kdWN0cyB8fCB7fVxyXG4gICk7XHJcblxyXG5jb25zdCBtYWtlU2VsZWN0UmVxdWVzdGVkUHJvZHVjdCA9ICgpID0+XHJcbiAgY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBwcm9kdWN0RG9tYWluLFxyXG4gICAgKHN1YmRvbWFpbikgPT4gc3ViZG9tYWluPy5yZXF1ZXN0ZWRJdGVtPy5yZXNwb25zZT8uaXRlbXMgfHwgW11cclxuICApO1xyXG5jb25zdCBtYWtlU2VsZWN0RmF2UHJvZHVjdCA9ICgpID0+XHJcbiAgY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBwcm9kdWN0RG9tYWluLFxyXG4gICAgKHN1YmRvbWFpbikgPT4gc3ViZG9tYWluPy5mYXZvdXJpdGU/LnJlc3BvbnNlIHx8IFtdXHJcbiAgKTtcclxuXHJcbmNvbnN0IG1ha2VTZWxlY3RQcm9kdWN0YnlTdGF0dXMgPSAoKSA9PlxyXG4gIGNyZWF0ZVNlbGVjdG9yKHByb2R1Y3REb21haW4sIChzdWJkb21haW4pID0+IHN1YmRvbWFpbiB8fCBbXSk7XHJcblxyXG5jb25zdCBtYWtlU2VsZWN0UHJvZHVjdHVzZXJQcm9maWxlID0gKCkgPT5cclxuICBjcmVhdGVTZWxlY3RvcihcclxuICAgIHByb2R1Y3REb21haW4sXHJcbiAgICAoc3ViZG9tYWluKSA9PiBzdWJkb21haW4/LnByb2ZpbGU/LnJlc3BvbnNlPy51c2VyIHx8IHt9XHJcbiAgKTtcclxuXHJcbmNvbnN0IG1ha2VTZWxlY3RQcm9kdWN0dXNlclByb2R1Y3RzID0gKCkgPT5cclxuICBjcmVhdGVTZWxlY3RvcihcclxuICAgIHByb2R1Y3REb21haW4sXHJcbiAgICAoc3ViZG9tYWluKSA9PiBzdWJkb21haW4/LnNlbGxlclByb2R1Y3Q/LnJlc3BvbnNlIHx8IHt9XHJcbiAgKTtcclxuXHJcbmNvbnN0IG1ha2VTZWxlY3RQcm9kdWN0bmVpZ2JvdXJzID0gKCkgPT5cclxuICBjcmVhdGVTZWxlY3RvcihcclxuICAgIHByb2R1Y3REb21haW4sXHJcbiAgICAoc3ViZG9tYWluKSA9PiBzdWJkb21haW4/Lm5laWdoYm91cj8ucmVzcG9uc2U/LmJvcmRlcl9jb3VudHJpZXMgfHwgW11cclxuICApO1xyXG5cclxuY29uc3QgaGVhZGVyRG9tYWluID0gKHN0YXRlKSA9PiBzdGF0ZS5oZWFkZXI7XHJcblxyXG5jb25zdCBtYWtlU2VsZWN0SGVhZGVyTWVudSA9ICgpID0+XHJcbiAgY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBoZWFkZXJEb21haW4sXHJcbiAgICAoc3ViZG9tYWluKSA9PiBzdWJkb21haW4uaGVhZGVyTWVudT8ucmVzcG9uc2U/LmNhdGVnb3JpZXMgfHwgW11cclxuICApO1xyXG5cclxuY29uc3QgbWFrZVNlbGVjdE1lc3NhZ2VMaXN0ID0gKCkgPT5cclxuICBjcmVhdGVTZWxlY3RvcihcclxuICAgIGhlYWRlckRvbWFpbixcclxuICAgIChzdWJkb21haW4pID0+IHN1YmRvbWFpbi5tZXNzYWdlPy5yZXNwb25zZT8ubWVzc2FnZXMgfHwgW11cclxuICApO1xyXG5jb25zdCBtYWtlU2VsZWN0Tm90aWZpY2F0aW9uTGlzdCA9ICgpID0+XHJcbiAgY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBoZWFkZXJEb21haW4sXHJcbiAgICAoc3ViZG9tYWluKSA9PiBzdWJkb21haW4ubm90aWZpY2F0aW9uPy5yZXNwb25zZT8ubm90aWZpY2F0aW9ucyB8fCBbXVxyXG4gICk7XHJcbmNvbnN0IG1ha2VTZWxlY3RDYXJ0TGlzdCA9ICgpID0+XHJcbiAgY3JlYXRlU2VsZWN0b3IoaGVhZGVyRG9tYWluLCAoc3ViZG9tYWluKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjYXJ0OiBzdWJkb21haW4uY2FydD8ucmVzcG9uc2U/LnByb2R1Y3RzIHx8IFtdLFxyXG4gICAgICBsb2FkaW5nOiBzdWJkb21haW4uaXNQcm9jZWVkaW5nLFxyXG4gICAgfTtcclxuICB9KTtcclxuXHJcbmNvbnN0IGNhcnREb21haW4gPSAoc3RhdGUpID0+IHN0YXRlLmNhcnQ7XHJcbmNvbnN0IG1ha2VTZWxlY3RDYXJ0RGlzY291bnQgPSAoKSA9PlxyXG4gIGNyZWF0ZVNlbGVjdG9yKGNhcnREb21haW4sIChzdWJkb21haW4pID0+IHN1YmRvbWFpbj8uZGlzY291bnQgfHwge30pO1xyXG5cclxuY29uc3QgbWFrZVNlbGVjdFNoaXBwaW5nQWRkcmVzcyA9ICgpID0+XHJcbiAgY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBjYXJ0RG9tYWluLFxyXG4gICAgKHN1YmRvbWFpbikgPT4gc3ViZG9tYWluPy5zaGlwcGluZ0FkZHJlc3M/LnJlc3BvbnNlPy5hZGRyZXNzIHx8IHt9XHJcbiAgKTtcclxuY29uc3QgbWFrZVNlbGVjdE9yZGVySWQgPSAoKSA9PlxyXG4gIGNyZWF0ZVNlbGVjdG9yKGNhcnREb21haW4sIChzdWJkb21haW4pID0+IHN1YmRvbWFpbj8ub3JkZXJJZD8ucmVzcG9uc2UgfHwge30pO1xyXG5jb25zdCBtYWtlU2VsZWN0T3JkZXJMaXN0ID0gKCkgPT5cclxuICBjcmVhdGVTZWxlY3RvcihcclxuICAgIGNhcnREb21haW4sXHJcbiAgICAoc3ViZG9tYWluKSA9PiBzdWJkb21haW4/Lm9yZGVyTGlzdD8ucmVzcG9uc2U/Lm9yZGVycyB8fCB7fVxyXG4gICk7XHJcblxyXG5jb25zdCBtYWtlU2VsZWN0QWRkcmVzc0xpc3QgPSAoKSA9PlxyXG4gIGNyZWF0ZVNlbGVjdG9yKGNhcnREb21haW4sIChzdWJkb21haW4pID0+IHN1YmRvbWFpbj8uYWRkcmVzcz8ucmVzcG9uc2U/LmFkZHJlc3NlcyB8fCBbXSk7XHJcblxyXG5jb25zdCBtZXNzYWdlRG9tYWluID0gKHN0YXRlKSA9PiBzdGF0ZT8ubWVzc2FnZTtcclxuY29uc3QgbWFrZVNlbGVjdGNoYXRMaXN0ID0gKCkgPT5cclxuICBjcmVhdGVTZWxlY3RvcihcclxuICAgIG1lc3NhZ2VEb21haW4sXHJcbiAgICAoc3ViZG9tYWluKSA9PiBzdWJkb21haW4/Lm1lc3NhZ2VzPy5yZXNwb25zZT8ubWVzc2FnZXMgfHwgW11cclxuICApO1xyXG5jb25zdCBtYWtlU2VsZWN0Y29udmVyc2F0aW9uTGlzdCA9ICgpID0+XHJcbiAgY3JlYXRlU2VsZWN0b3IoXHJcbiAgICBtZXNzYWdlRG9tYWluLFxyXG4gICAgKHN1YmRvbWFpbikgPT4gc3ViZG9tYWluPy5jb252ZXJzYXRpb24/LnJlc3BvbnNlPy5tZXNzYWdlcyB8fCBbXVxyXG4gICk7XHJcblxyXG5leHBvcnQge1xyXG4gIG1ha2VTZWxlY3RQcm9kdWN0TGlzdCxcclxuICBtYWtlU2VsZWN0UHJvZHVjdENhdGVnb3J5LFxyXG4gIG1ha2VTZWxlY3RQb3B1bGFyUHJvZHVjdCxcclxuICBtYWtlU2VsZWN0TGF0ZXN0QXJyaXZhbFByb2R1Y3QsXHJcbiAgbWFrZVNlbGVjdEhlYWRlck1lbnUsXHJcbiAgbWFrZVNlbGVjdFBhcnRuZXIsXHJcbiAgbWFrZVNlbGVjdE1lc3NhZ2VMaXN0LFxyXG4gIG1ha2VTZWxlY3ROb3RpZmljYXRpb25MaXN0LFxyXG4gIG1ha2VTZWxlY3RDYXJ0TGlzdCxcclxuICBtYWtlU2VsZWN0UHJvZHVjdERldGFpbHMsXHJcbiAgbWFrZVNlbGVjdFJlcXVlc3RlZFByb2R1Y3QsXHJcbiAgbWFrZVNlbGVjdENhcnREaXNjb3VudCxcclxuICBtYWtlU2VsZWN0U2hpcHBpbmdBZGRyZXNzLFxyXG4gIG1ha2VTZWxlY3RPcmRlcklkLFxyXG4gIG1ha2VTZWxlY3RPcmRlckxpc3QsXHJcbiAgbWFrZVNlbGVjdEZhdlByb2R1Y3QsXHJcbiAgbWFrZVNlbGVjdFByb2R1Y3RieVN0YXR1cyxcclxuICBtYWtlU2VsZWN0Y2hhdExpc3QsXHJcbiAgbWFrZVNlbGVjdGNvbnZlcnNhdGlvbkxpc3QsXHJcbiAgbWFrZVNlbGVjdFByb2R1Y3R1c2VyUHJvZmlsZSxcclxuICBtYWtlU2VsZWN0UHJvZHVjdHVzZXJQcm9kdWN0cyxcclxuICBtYWtlU2VsZWN0UHJvZHVjdG5laWdib3VycyxcclxuICBtYWtlU2VsZWN0QWRkcmVzc0xpc3QsXHJcbiAgbWFrZVNlbGVjdFRvdGFsUHJvZHVjdENvdW50XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=