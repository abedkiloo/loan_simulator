(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/payments/PaymentsComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/payments/PaymentsComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_transaction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/transaction */ "./resources/js/models/transaction.js");
/* harmony import */ var _models_userLoan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/userLoan */ "./resources/js/models/userLoan.js");
/* harmony import */ var _models_payment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/payment */ "./resources/js/models/payment.js");
/* harmony import */ var _services_payments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/payments.service */ "./resources/js/services/payments.service.js");
/* harmony import */ var _services_loans_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/loans.service */ "./resources/js/services/loans.service.js");
/* harmony import */ var _services_transactions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/transactions.service */ "./resources/js/services/transactions.service.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      transaction: new _models_transaction__WEBPACK_IMPORTED_MODULE_0__["default"]('', '', ''),
      loan: new _models_userLoan__WEBPACK_IMPORTED_MODULE_1__["default"]('', '', ''),
      payment: new _models_payment__WEBPACK_IMPORTED_MODULE_2__["default"]('', '', ''),
      submitted: false,
      successful: false,
      message: '',
      payments: {},
      transactions: {},
      loans: {},
      form: new Form({}),
      editMode: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (!this.currentUser) {
      this.$router.push('/login');
    }

    _services_payments_service__WEBPACK_IMPORTED_MODULE_3__["default"].userPayments().then(function (response) {
      _this.payments = response.data;
    }, function (error) {
      _this.content = error.response && error.response.data || error.message || error.toString();
    });
    _services_transactions_service__WEBPACK_IMPORTED_MODULE_5__["default"].userTransactions().then(function (response) {
      _this.transactions = response.data;
    }, function (error) {
      _this.content = error.response && error.response.data || error.message || error.toString();
    });
    _services_loans_service__WEBPACK_IMPORTED_MODULE_4__["default"].userLoans().then(function (response) {
      _this.loans = response.data;
    }, function (error) {
      _this.content = error.response && error.response.data || error.message || error.toString();
    });
  },
  methods: {
    logOut: function logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    },
    editModalWindow: function editModalWindow(user) {
      this.form.clear();
      this.editMode = true;
      this.form.reset();
      $('#addNew').modal('show');
      this.form.fill(user);
    },
    openModalWindow: function openModalWindow() {
      this.editMode = false;
      this.form.reset();
      $('#addNew').modal('show');
    },
    handlePayment: function handlePayment() {
      var _this2 = this;

      this.message = '';
      this.submitted = true;
      this.$validator.validate().then(function (isValid) {
        if (isValid) {
          _this2.$store.dispatch('payments/make_payment', _this2.payment).then(function (data) {
            _this2.message = data.message;
            _this2.successful = true;
          }, function (error) {
            _this2.message = error.response && error.response.data || error.message || error.toString();
            _this2.successful = false;
          });
        }
      });
    }
  },
  computed: {
    applied: function applied() {
      return this.$store.state.payments.applied;
    },
    currentUser: function currentUser() {
      return this.$store.state.auth.user;
    }
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/payments/PaymentsComponent.vue?vue&type=template&id=30bb954e&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/payments/PaymentsComponent.vue?vue&type=template&id=30bb954e& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("nav", { staticClass: "navbar navbar-expand navbar-dark bg-dark" }, [
      _c(
        "a",
        {
          staticClass: "navbar-brand",
          attrs: { href: "" },
          on: {
            click: function($event) {
              $event.preventDefault()
            }
          }
        },
        [_vm._v("$Dollar-Loaner")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "navbar-nav mr-auto" }, [
        _c(
          "li",
          { staticClass: "nav-item" },
          [
            _c(
              "router-link",
              { staticClass: "nav-link", attrs: { to: "/loans" } },
              [
                _c("font-awesome-icon", { attrs: { icon: "home" } }),
                _vm._v("\n                    Loans\n                ")
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "nav-item" },
          [
            _vm.currentUser
              ? _c(
                  "router-link",
                  { staticClass: "nav-link", attrs: { to: "/profile" } },
                  [_vm._v("Profile")]
                )
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "nav-item" },
          [
            _vm.currentUser
              ? _c(
                  "router-link",
                  { staticClass: "nav-link", attrs: { to: "/transaction" } },
                  [_vm._v("Transaction")]
                )
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          { staticClass: "nav-item" },
          [
            _vm.currentUser
              ? _c(
                  "router-link",
                  { staticClass: "nav-link", attrs: { to: "/payment" } },
                  [_vm._v("Payment")]
                )
              : _vm._e()
          ],
          1
        ),
        _c(
          "li",
          { staticClass: "nav-item" },
          [
            _vm.currentUser
              ? _c(
                  "router-link",
                  { staticClass: "nav-link", attrs: { to: "/loan-funding" } },
                  [_vm._v("Loan Funding")]
                )
              : _vm._e()
          ],
          1
        )
      ]),
      _vm._v(" "),
      !_vm.currentUser
        ? _c("div", { staticClass: "navbar-nav ml-auto" }, [
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  { staticClass: "nav-link", attrs: { to: "/register" } },
                  [
                    _c("font-awesome-icon", { attrs: { icon: "user-plus" } }),
                    _vm._v("\n                    Sign Up\n                ")
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  { staticClass: "nav-link", attrs: { to: "/login" } },
                  [
                    _c("font-awesome-icon", { attrs: { icon: "sign-in-alt" } }),
                    _vm._v("\n                    Login\n                ")
                  ],
                  1
                )
              ],
              1
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.currentUser
        ? _c("div", { staticClass: "navbar-nav ml-auto" }, [
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  { staticClass: "nav-link", attrs: { to: "/profile" } },
                  [
                    _c("font-awesome-icon", { attrs: { icon: "user" } }),
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.currentUser.username) +
                        "\n                "
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link",
                  attrs: { href: "" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.logOut($event)
                    }
                  }
                },
                [
                  _c("font-awesome-icon", { attrs: { icon: "sign-out-alt" } }),
                  _vm._v("\n                    LogOut\n                ")
                ],
                1
              )
            ])
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-5" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("div", { staticClass: "card" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "card-body table-responsive p-0" }, [
            _c("div", { staticClass: "card-body table-responsive p-0" }, [
              _c("table", { staticClass: "table table-hover" }, [
                _c(
                  "tbody",
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _vm._l(_vm.payments, function(payment) {
                      return _c("tr", { key: payment.id }, [
                        _c("td", [_vm._v(_vm._s(payment.transaction.amount))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v("Kshs . " + _vm._s(payment.reference))
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(payment.loan.amount))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm._f("formatDate")(payment.created_at))
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "a",
                            {
                              attrs: { href: "#", "data-id": "user.id" },
                              on: {
                                click: function($event) {
                                  return _vm.editModalWindow(payment)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fa fa-edit blue" }),
                              _vm._v(
                                "Edit\n                                    "
                              )
                            ]
                          )
                        ])
                      ])
                    })
                  ],
                  2
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-footer" })
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "modal fade",
            attrs: {
              id: "addNew",
              tabindex: "-1",
              role: "dialog",
              "aria-labelledby": "addNewLabel",
              "aria-hidden": "true"
            }
          },
          [
            _c(
              "div",
              {
                staticClass: "modal-dialog modal-dialog-centered",
                attrs: { role: "document" }
              },
              [
                _c("div", { staticClass: "modal-content" }, [
                  _c("div", { staticClass: "modal-header" }, [
                    _c(
                      "h5",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !_vm.editMode,
                            expression: "!editMode"
                          }
                        ],
                        staticClass: "modal-title",
                        attrs: { id: "addNewLabel" }
                      },
                      [_vm._v("Add New Transaction")]
                    ),
                    _vm._v(" "),
                    _c(
                      "h5",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.editMode,
                            expression: "editMode"
                          }
                        ],
                        staticClass: "modal-title",
                        attrs: { id: "addNewLabel" }
                      },
                      [_vm._v("Update Transaction")]
                    ),
                    _vm._v(" "),
                    _vm._m(2)
                  ]),
                  _vm._v(" "),
                  _c(
                    "form",
                    {
                      attrs: { name: "form" },
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          _vm.editMode ? _vm.updateLoan() : _vm.handlePayment()
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "modal-body" }, [
                        !_vm.successful
                          ? _c("div", [
                              _c("div", { staticClass: "form-group" }, [
                                _c(
                                  "label",
                                  { attrs: { for: "transaction_id" } },
                                  [_vm._v("Transaction")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.payment.transaction_id,
                                        expression: "payment.transaction_id"
                                      },
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: "required",
                                        expression: "'required'"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      name: "transaction_id",
                                      id: "transaction_id"
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.payment,
                                          "transaction_id",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("option", { attrs: { value: "" } }, [
                                      _vm._v("Select Transaction")
                                    ]),
                                    _vm._v(" "),
                                    _vm._l(_vm.transactions, function(
                                      transaction
                                    ) {
                                      return _c(
                                        "option",
                                        {
                                          key: transaction.id,
                                          domProps: { value: transaction.id }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                " +
                                              _vm._s(transaction.reference) +
                                              "\n                                            "
                                          )
                                        ]
                                      )
                                    })
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _vm.submitted && _vm.errors.has("type")
                                  ? _c("div", { staticClass: "alert-danger" }, [
                                      _vm._v(
                                        _vm._s(
                                          _vm.errors.first("transaction_id")
                                        ) +
                                          "\n                                        "
                                      )
                                    ])
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "form-group" }, [
                                _c("label", { attrs: { for: "loan_id" } }, [
                                  _vm._v("UserLoan")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.payment.loan_id,
                                        expression: "payment.loan_id"
                                      },
                                      {
                                        name: "validate",
                                        rawName: "v-validate",
                                        value: "required",
                                        expression: "'required'"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { name: "loan_id", id: "loan_id" },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.payment,
                                          "loan_id",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("option", { attrs: { value: "" } }, [
                                      _vm._v("Select UserLoan")
                                    ]),
                                    _vm._v(" "),
                                    _vm._l(_vm.loans, function(loan) {
                                      return _c(
                                        "option",
                                        {
                                          key: loan.id,
                                          domProps: { value: loan.customer_id }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                " +
                                              _vm._s(loan.amount) +
                                              "\n                                            "
                                          )
                                        ]
                                      )
                                    })
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _vm.submitted && _vm.errors.has("type")
                                  ? _c("div", { staticClass: "alert-danger" }, [
                                      _vm._v(
                                        _vm._s(_vm.errors.first("loan_id")) +
                                          "\n                                        "
                                      )
                                    ])
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _vm._m(3)
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "modal-footer" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger",
                            attrs: { type: "button", "data-dismiss": "modal" }
                          },
                          [_vm._v("Close")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.editMode,
                                expression: "editMode"
                              }
                            ],
                            staticClass: "btn btn-primary",
                            attrs: { type: "submit" }
                          },
                          [_vm._v("Update")]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !_vm.editMode,
                                expression: "!editMode"
                              }
                            ],
                            staticClass: "btn btn-primary",
                            attrs: { type: "submit" }
                          },
                          [_vm._v("Create")]
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _vm.message
                    ? _c(
                        "div",
                        {
                          staticClass: "alert",
                          class: _vm.successful
                            ? "alert-success"
                            : "alert-danger"
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.message) + "\n                        "
                          )
                        ]
                      )
                    : _vm._e()
                ])
              ]
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("Payments ")]),
      _vm._v(" "),
      _c("div", { staticClass: "card-tools" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-success",
            attrs: { "data-toggle": "modal", "data-target": "#addNew" }
          },
          [
            _vm._v("Add New "),
            _c("i", { staticClass: "fas fa-user-plus fa-fw" })
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("Amount")]),
      _vm._v(" "),
      _c("th", [_vm._v("Reference")]),
      _vm._v(" "),
      _c("th", [_vm._v("UserLoan Amount")]),
      _vm._v(" "),
      _c("th", [_vm._v("Created At")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("button", { staticClass: "btn btn-primary btn-block" }, [
        _vm._v("Include Transaction")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/payments/PaymentsComponent.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/payments/PaymentsComponent.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaymentsComponent_vue_vue_type_template_id_30bb954e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaymentsComponent.vue?vue&type=template&id=30bb954e& */ "./resources/js/components/payments/PaymentsComponent.vue?vue&type=template&id=30bb954e&");
/* harmony import */ var _PaymentsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/payments/PaymentsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaymentsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaymentsComponent_vue_vue_type_template_id_30bb954e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PaymentsComponent_vue_vue_type_template_id_30bb954e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/payments/PaymentsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/payments/PaymentsComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/payments/PaymentsComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PaymentsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/payments/PaymentsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/payments/PaymentsComponent.vue?vue&type=template&id=30bb954e&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/payments/PaymentsComponent.vue?vue&type=template&id=30bb954e& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsComponent_vue_vue_type_template_id_30bb954e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PaymentsComponent.vue?vue&type=template&id=30bb954e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/payments/PaymentsComponent.vue?vue&type=template&id=30bb954e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsComponent_vue_vue_type_template_id_30bb954e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentsComponent_vue_vue_type_template_id_30bb954e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/models/payment.js":
/*!****************************************!*\
  !*** ./resources/js/models/payment.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Payment; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Payment = function Payment(loan_id, transaction_id, created_at, id) {
  _classCallCheck(this, Payment);

  this.loan_id = loan_id;
  this.transaction_id = transaction_id;
  this.created_at = created_at;
  this.id = id;
};



/***/ }),

/***/ "./resources/js/models/transaction.js":
/*!********************************************!*\
  !*** ./resources/js/models/transaction.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Transaction; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transaction = function Transaction(amount, customer_id, reference, time, created_at, id) {
  _classCallCheck(this, Transaction);

  this.amount = amount;
  this.id = id;
  this.customer_id = customer_id;
  this.reference = reference;
  this.created_at = created_at;
  this.time = time;
};



/***/ }),

/***/ "./resources/js/models/userLoan.js":
/*!*****************************************!*\
  !*** ./resources/js/models/userLoan.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserLoan; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import Customer from "./customer"
var UserLoan = function UserLoan(amount, customer_id, status, created_at, id) {
  _classCallCheck(this, UserLoan);

  this.amount = amount; // this.Customer = Customer;

  this.customer_id = customer_id;
  this.status = status;
  this.created_at = created_at;
  this.id = id;
};



/***/ })

}]);