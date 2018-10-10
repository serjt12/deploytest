exports.ids = [1];
exports.modules = {

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = __webpack_require__(5);

var _moment2 = _interopRequireDefault(_moment);

var _reactLoadingComponents = __webpack_require__(14);

var _reactLoadingComponents2 = _interopRequireDefault(_reactLoadingComponents);

var _reactRedux = __webpack_require__(1);

var _reactRouter = __webpack_require__(3);

var _reactHelmet = __webpack_require__(13);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _TravelCreateWidget = __webpack_require__(19);

var _TravelCreateWidget2 = _interopRequireDefault(_TravelCreateWidget);

var _circulo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACTCAYAAAA0liRhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAImNJREFUeNrsnQdYk9cXxr9sEkAQRKWo4KqAe6+6tc5q7bD2b111W0WRuuqqtbVaax0ouEWr1Tpqq3W07jrrHq2AuNjKJsxM/u9NPizGgAs1Ced9nvOQm3wk4UB+vOd+57uX40gkEolEIpFIJBKJRCKRSCQSiUQiFYsElAIS6dVJ4VPdudqSbxprU9KkGNZB2PGfQ3eED0JT4HAhIh1xFiFDqBG3BGJxTM6de4l3Jn11k4BFIpFeWPa1vBXVfpjTRJOSWhdDFg0Q3jx4iksMbncQDFzHBWLR1dzImGu3A2YlELBIJFKhcqjjq6i6cHYLTXJqOwxZNEJIzBxqcEmIe4i7iAf8cWmIMyZAE/LOyxehQpRCNEOIeQjamXl+LSIMcUQgEh1RxcQduOU/Q0XAIpFKOqTq1ZJXXTCrAyA1BMP2PFDypUfE8+XcX0KZNDTzyr+37s1ecLe4Xt+uUgX7N1ctbKNNS/fCsCGiLaKKGRd2EvBar4qNP3Br/PREAhaJVELk2LCOuMq8GW8BUv48IApCKhmxQyiT/ZVx8eqJyK9/iH7V709WwV1eY/WiLtp0ZU8MWyGqmsDrhEAkXKS+n3goYuzUXAIWiWSLoGpUz73Kt9M+A6g+LuBi8lh5J7STbVOeu7wzau7iy5b0nqXu5cTe65bUALw6Ydgb0brA+44XCIU/qR8kBgFcd63l90DAIpEKg1Tj+oIqc7+oCkiNxnAU99+cUbLQzm6r8uyFrVHzlp60hp9FWr6sCPDy0SozGHBHIlz4h9QA1x51QtKciDFTrhKwSCQrU6mmDbjKX0+tC1B9ieG7BR4KFcrtFilPn98cNT8w+0VeQ1GjmrBa4FwPbUoaO3PIJuLZZHs1gVRSKTs04vbdaXNXvzR4lXWT1QhZ0lWnzGRzbz3ywcUJhb9rEpO/ivhsssWCi4BFIj0Kq/KA1ReA1TDeUekQhwGq2eknz52NXrBM/yzPV6C9oSaGNRBNEGW4R+eW/vtASiUcgHUOwGr6sn9WiZur0HtDYF2Aaw6G3QuAa682KeWrm6MnXSFgkUiWCKpmjRwrz5k8AqCahqEzA5VQLj+cfuLMtOjvgy48NaBq+yiqLfyqBQD1pPYGpizENQSb/GbzSnEA1i0AK+5lOqzHwFXGBeBaVkeXYQBXvuPKAbgCtSmp02+OnKghYJFIlgCqFo25yrMnsbN+gRjW4+++CljNTv/r9K7ohcFPfI4C7Q2fcsb2BqcCD+e3N7Aeq7NCmTQm89qN0HuzvrtmabmQuJYWem9cXhfgWsIZzzBynFAQg7J1KqC1iYBFIr1eWLkAVtP5FgWmFKFC/n3a0VMLYxatUBcJqfq1JVW/m9mYn5Dvxe4q8DBrb9jJtzf89TraG15EYhdnic/G5T11mVkLMKzMsXYIgWCPNi19+M0RnycTsEikVyinlk04ry8ntgZslnLGjvE8kUK+I/XIiXExi1fFF/W9jg3rOFaZN+MjfO84DGvxd7Ny7rbQTvZzxvkrv0R+s+iSLeQJ4HIAuL4FuNh8ngzQitGlK6eHDw/YQMAikV4FrFo1k3rNDGD9VAv5v/9IwGoqYLUFsCocVOb7sJSIXwGq9cpzl09EzV2ss7V8iZ2dhD6bguoDWjsw9OLYpLxAsAngGglwvfK5LQIWqSTBqrzXjIDvNSmp/dhYpFDsSz10/NOYpasfFAEqR4BqAEA1CcNK/N0JQju7ecqzF1ZEzVuaUxJyJ3YqZQ9wzddlZX9mcJQCwVWdMuP98GET7hCwSKTih1VDwCoEsGJlXJbIXvFt6sHj3wBW5kFlbBrtzZeNHvzd11l7g/L0+Z1R8wNLXA4BLbHPj8t76rJzfmZDQCsW0BoDaP1KwCKRikHOrZtzntMn9ASoGJnKAlSRKX8eGx8buMbsh6xA0+hcDLs9dFRyuy/TT54Ljl6wrETnU1zKkYPTqgxoHTGUiAJBti4jc0z4UP/1BCwS6UVg1aYF5znN/0PAik0SywGriykHjg6KXb72H7OwatbIofKcyWMBq6844xIuWQDVsvQTZ6dHfx+kpYw+Ai5H701BP+qzc3oBWmpAKwjQ8idgkUjPD6tPAStWuykAq52A1QDAKrsQWPkAVqsBq5ZsLJTLj6X/dXp49MLgCMqmeYkcHeQ+m4PnAVp+BmhlZgWHDxk/noBFIj0LrNq1lHhOHT8ZsJpj+GDZK7bzzuoxWPGNo/0AKtYh6ohIFSrk36QfP73waZpGCVoOUpSIo/U5uYsALQ2gFfQyoUXAItkirKYCVrMfwmr/4YGxQetzzMDKHrCaDFjNMByrkJ9MPXrKL2bRisuUyWeAloO9FE7rlUCLgEWyJVhxgFVfwGojhhJ8kL5O2XdoBmD12LFOLZuU9/py4nzAagCGasBqXeqRE5NjFq9SUiafE1qbgkfpc3MXM2jps7NXhA0e50fAIpHMqHT7VlylKX4MVoxOdvgAbUvee3BQXHBIjhlYNQCsQgCr2hjeB6xmAlari2ocJT0FtOwVEp/NK0a/TGgJKc0kG1FnRBAPq62Fwor1Y/GwEikUt5Snzw+83rM/waoYpMvK1oT2GxkktLMbz+XlSYQKxVDvkKUfksMikR51V83grtbBXfkAVnuS9/z5YdzKDSqzsOKbR+EGLqUePD4oZunq65TBYnda7OxhoD5XxRYIzIXj6hk2yO8gOSwSwapjaw/Ayp+H1d+A1ZSngVXKn8cIVi/PaeXc+HjkWKGdbCdzvHBcId4bAmsQsEglHVbiipPG+AFCfQCrUMBqKmB1w/Q459bNGxWA1UUGq9jANQSrlytWjrMVLdgmr28IZbJ1gJYdAYtUMmHVqS0HWA3UpqRNAqxyk3YfCAasjpqDlef0Cf/BivVjEaxeuvQ5ORxcVpxQJn2fM65Zz5Z8XkjAIpVUsZU9v+RvszODj12N7NymhRdgNYOtp/6ky3JILwVaeYBWGKDF5rJEcFlD4LLeJmCRSpq7KlNx4mjmriqIHB0OwF1Nj1/1oymsXDyn+U8DrHoCVjcBqykEq9cArdxcLaC1XSiVstOwMkBrvffGZc9dGhKwSNZXCk4c3RewGgBY3U3atW8pYJXyCKxYA+k0/4GA1VDA6kHK/sOzAatDlL3XJhXvhsMR7oh1BCxSSSoFpwJWHGC1KX7Npv1mjnkH8R1/ew3iJ0rba3VZ3I2PRzyAy2KloQBf34fL6kzAItm0XDq3c4C7+gDu6g0M9yEWmx4Dd1XXc+r4mXBXYpGD/Ua4q+nmLs0hvWJoqVR6QOs8XxpK8XWRz4/LFQQski2L7U4zCu7qftIve9fBXZmWgvaAFVtSphFgdTJ578GZBCuLkpovDe8j3uSMbQ8ELJJNuqtqFQJGDYC7YkO2IcLOgo+zawkBqw8AKz/AKgGwCooLDomkzFmUy2KlYYJAIpmAoQhfZ8FluROwSLYFqy7tOcCqG2D1NtzVZbirkPi1m00PY5ugjuVvs00/t1DmLBJautCPR/wCWP3NSkPELAIWydbEVlX4yDDR/sve3YDVRRN3Ja40xe8juKuGcFd/Je/5cwncFWXNcsW2B2PrlQkArkE+m4LeIGCRbMdd+Y/sAHfVAsPTiK1mDuuAGANYZQFWG+NWboiizFmwy1Kr9XBZhwUS8f5ndVnioh702Rz8vUAkasDRqg6k/yQRl3ZKg4NZkPTr/uPsjrIfvetTfnDf8do0JdtF2bCki9i5lEv82p8WJ27f/aKz3sxd9WHuKnHHnj/ur98S9oi76tjatdKkscxdOQBYbG5rLf2KrMZlsbmsrgKxeDBc1uzQT0bHvRCwOOM23m0JWCQTpSMKblfO1kJvyEdBVS6G12qGaM67q5/NPN4JMRiwioC7CoK7ot+OdbisvBt9R9zx3bryTJ5G24x3WSNeFFifs39ilF6SyTQCOz0dXuC+UP6PzRmRv107s/ovtOOMS7eOFSuMG94jT6fNd1fhJu7Ko+KkMezMIFuil3WyH6Vfj1WJbZ3GtlTbD5fF5rL84bKynxtYof1GXaWckp6khJ9/zUBcfAlPzeatevJwNAejVoj3mbtK2n1gm+n1hCTLVp5Go4fLOuK7ZcWNPK3OG3exjSvmPum/JYlkcYK7EsNdNdemGvqu/kKceMRdsQugJ43pwvdlMXd1jLJmlWKOfAnPooFPY+9JJEsUc1e9RaUcUhK37d6PctD08SaccTI+Bu5qL7krq3VZOrisEIFYlI2ysIrP5uAeBCySNcoXUQnB9gg8Z+Ku2IoNjeGu5BieROyldFm19IhfOeMUVS8CFsnaykE3lINt83Q6Du7q2P2QrbEmh7BWm/fhrlRJu/b9Qe7KZspCjoBFskb5IFoiYk3dFS/WbsP6s84iDlO6rLws1GpZi8NllIVxApHIpaiykIBFstRysAJn7L06ZlIOstVG2+VptGw9rIvxazZFU7psqiwUFeWyCFgki5Jr906OKAcbGcrBrbsiUA6qTQ5hy5K0RsRzxrODJNsB1m9PKgsJWCRLUxVEfURaIeUg29/OE8Gu9j9C6bKpsvAYSsJMVhb6/rSiNgGLZA1il/OwOSrWLBpa8AF+xdEmhnLwl723UA6qKF0257KO8VxqS8AiWYvDYvMY7CLnmyaPeXHGM4RKzjjhTrIxo4VgF9Sza5fbELBIFi02f+XhN6w2P3918/7GbaaHePLlIrtG8V/KmE06rOP8bXJYJKtwV6wcTCsESMxhSXjnFUbpsjF7ZZjHGn5FIILBFgqdfX9aUZGARbJksfW9qyJYq8Ij67Gz+asKAaPq8vNXN80skUyyHZd1kmdTPQIWyZLFljIqxQPrnslj5RHVOOOSJHcoVTatK5xxHouARbJ4h8XxwEozeawcD6wYMzAj2VBlWMBd1yVgkSxSru+8LfbwG1aZM064J5uZcGeLA3ogbiOuU8ZsGlj56/B5EbBIlio5Xw5yhTgoL/7vNQGRSumyaWBd4W9TSUiyWLGtnljTKGsGzTJ3gNi4zVcaTbjbMK3gsG/0HZ7GCc2jiYBFshTZIZwQbOeUR88QdmlvOEOoMa4umkCpKhEuKxrQEvhuWdmGgEWyRuX/rT6gVJQIYN0jh0WyZLH+q5qI+4hEM+7LnlJEImCRLEnsGsJUM2Ufa3dgy8qwHZ3pkpySIeawHuvFImCRSCRLLAkjeWA5E7BIJBKVhCQSifQyJaYUkCxdKQeOXEc0pEyQyGGRSCQCFolEIhGwSCSSrYudHWQrNbCzhWkELJIlKgeRgXBFlKV0lHg5c49eCE3AIlmU2DWEd3lYuVE6SFQSkkgkaykJvQhYJEsWuyQnljMuMeNL6SjxwKrI6fV5Nz4ecZyARbJUYCVSGko4qUQiznfrKi/AikpCkkWLTbjH8bfJYVE5yHTM9EHqdCdZhJL3/Mlx+rxED79hnFvf3my5ZM7Muu6kkgGs/M0n0shhkSxZ8fxXtoGmM6WjxALLk799lYBFsmTF8VGDMy7mRyqZYmtgPdaDRcAiWaLDus07LE9KR4kUY9JbnHEHaAIWySqAJeUK6cMh2XAtKBYLfLeuast2zuH0+rQb/xsZbXoMTbqTLEbJew+yM4XX+Yl3tiQyTbyXPHeVP+F+rLADSCRL0h0E/sVy3pxxHXdSCTJZCLatF5u/Ok7AIlmD2PWEl/n/tI0oHSXOYfXg/2GRwyJZhdiuOKc549ZedKbQlmhkJ2Mbo5ptVxGIxULfrSvfZfNXiLs3/jfyOgGLZPFK3ntQG7Nk1SV2iYZb395Nyw/q60FZsQFYyWQi359W/o8TCFK9Ny6bWwiLevG3jxdlwUgkSywL2R6ErB+nCaXDJsRO8PXkjPNThbHoXb4c/I2ARbImhSJOccbF/AhYVl8K2nEoBcvo1eo+GOYiNpotB7U6BcrBlNB+o34nYJGsRin7DiWiLPzDUBb26UllofVLghjIbuhVqkthA8aEFVEO/lYk/CiXJAvVDT6aIdpSOqxarBF4HEKDWPqIu5JIOLgrF7ir//GPLyFgkaxR5xG/6pSZcriszuUHf0wZsc5yUOy7ZcVglINl4a4SwgaONe0EFiEGsRt5Wu1dlIP/ELBI1lgWcigL/xaXdlZj2BTRirJilZIhZiK0pu6Kl5h3X7onuSsCFsnSxRpI98Nlven2wTsfkMuyMncll0sM7kqlZpuKJJgCCeUgm2xvh3LwDQyTERsIWCRrdlnRMYtW7ITLYsPWiAaUFat0VxqUg0tQDqrMuCv2eB7KwV9DPxmdRcAiWbuOInZzxp6sHpQOq3FXMrir2by7CjctB4VSKXNX7fM02uZ8uTj7qZ6XUkuycMUwaOkyMjmUhb3ch/RrSCmxbInsFQLA6k19rmoship9bu5XcFe5JodJCrir9XBXcQQskvWXhQeOcCgLD4tdnE8BWg3KvNd9EKBFibFsKRCLOIFAAlgdDBvkt93UXflseeiu1E/rrghYJGuB1vWYhcHBgBYbduKM81kky3RXYp/NKz6Au+qAIZuTmmDmMKkBaMxdaTQhT+uuCFgkaxK7IHYXXFYNuKxPyGVZJKw4wMoDrmot3JVan509C+4q4hHgyGQSuCt/gIqt28/OHPo/y2sQsEjW4bL+OBoDl7UWLov91+6LGEBZsTjZI9YBViLA6mzY4HELTWDFril0A6wMfVn4uiS0/2c5BCySreoPRBBcliNc1kD3oZ9UpJRYiLtysJfBXX0Od9WeM26KO8TMYTK+FLTTq9URgNW3z/w6lGqStSjn9j29+n5icumOrZrq0pXNHerW1IgU8kOZl65Rcl4vrIQ+m4NbAVbr4a5ydJlZfuGfjj9s4q6EcFedAapvMFTl6XS9k3bti3nW1yKHRbI2XWIui7/NVgD4kFLyGmHl6CAArOroc3IPAlYawGpV+JDx6x6BjHF5mXKA1VoMdfj6Q9iAMWef5/UIWCSrUurBY1z0gqAtYhfnYJSG5cr07jbKfXj/SpSZ1wIrDrCqBFjt5Ku1M4iJZg5ly12HIMpxxibSOc/9mpR2krUp9849NUrDeJSGjVEatnCo7euMsuS3zItUGr5KCWVSZ7f3e5zN02grw11Fwl11hLvKNHFXbLWG4XBVrIk0V69SvRs2cGwkAYtU0qAVr45/kFC6Y+sPUWQ0yA6/pQKwTlJmXo3EpRwd4a426rNzmgFWUXC77cOH+sc+Aiu5XAhYNdOr1JsxzAOsZppZXoaARSoZklfxvO3UsolAl57RBi6rltjRMSbj4tV/KTOvAFabgjYBVr0AKyVg1QWwCjWBFQdYeQBWRzAsBVgdAKw+e+EylNJPsl6XFamHy7ru0rGNmzZd2cq+tk91QOsioBVH2Xm5sNJl5/QErDJ1yoz+4cMmHDM9TiCR2Lt90ONAnlZXHcPYPJ3uraRf9+sIWKSSDq0cdez9my6d2tYCtJoCWnUArdOAViJlpxhB5VSKq7ljrZdLl/Z/5Gm0bQCrDB5Wj63BLrJXKHx/WrFRn6vqiGEc680KG+SXUBzvg4BFsn5o3Y1KArTCAK2WgFY9QMsVH7B9GReuaCk7xQArZycOrqqKLiubLfXjbZhgT1d2Dh8ecNwMrOQ+m1csA6z6sZ4swGokYHWiuN4LAYtkK9CKUcXERbm83e59QKuufS3v6oDWXoLWC8NKBFh1Aqz+xrA0IHQXsGoHWIWZgZUEsBoJSE01wCo7u3/Y4HE7TI8TSqWc77Y15dze676pTK8u/yTt2vfUbpj6sEhWI5fO7RQNzuxr5T6kX6NCDtnDGZtJc3WZWX1cu3cK8Rg9WE6Ze05YuTgrAKs5yCW7JCoPEDoMWDUGrO49BisHeylgNRqwWswaSAGrNYDVzkKeml2iw0pJtnHqDnJYJFuEFVchYNTn6vsJmxzq1aojktudyrx8PekRl3UvmoPL+gcu67Y+J7dHnlpT1963xpuS0k6/Z5wnp/WMsHLw2bh8AWDFVlNQA0IbtWnpfW+O+DzLPKyCH8IK3xMU/un4cWYdkkwm89myckOeRtOZY6s16PVd4bCSCFgkm1LO7XucJiEpz7lDq7fwX74uoOUkUsj3Z166pi0EWrcM0NLw0HIpvTfj/GUNZfIpSy+5nc6td3ddnlb7jjY1fUTYoLFfJ//+p/4xgDg6KACrYOR6ykNYDRk/vhBYSX23rAzE74S5YDW+jgzt/9lRclgkW4VWtPp+4p3SHVt1B7SaOtStWRnQ2mcWWlGx/8KVMWh1N0LrzS6A1mlAK4Ey+WQhb3mpfxy749KpbTAAdM4sPBwdHACrzTi2L1v/CrAKLgJWYsBqmF6tZkvLqPF1QNiAMVuf9X0RsEhWJXlVrwinlo3j8CHplqdW1zdAy0GxP/OiCbQiH0LrOo7tCGhVA7Q6AVqhgNYdyuTTQCsnL2nX3tzHysVSjlzN7Ws9Xbp2YC0ObQGrLF1GZr/wof6LzcLKcHnOSnZ5znKO7aADaAFWK5/nPRGwSFal3Dv3OLisa3BZkQ+hVdsX0LI3C60HP24PRyl51KVz+xZaZYaPnWeFTuUHfpQmKeNyOePcJUroMwqwYmcN2+iyc37B0NfQPJqROQCw2lU4rFaMBKSWYajVq1SrwwaO/eJ5X5+ARbJmaN01lHxqjQFaYkfH/RkXrz42uZ4bGROHMnGfa5f2lXF8Izbha+9T3V3q5npS+fclFWX0KWHlVMoOsBoLWIVgWMbQj6XMaBY+bMIZs7AybqQ6Uq9SB/KwWvWil+cQsEjWC634B9dLd2z9EFr2tX18Aa3DgFa26fGqqJh0QOt3QIvNz7QDtBoralTvAGiFAVpRlNEiQOXsxErAiiiv16ME9DPcKRAcBayaAFYphcBKDlhtBqwCigtWBCySlUMrkuOvJbxjLA81tQGtNoVdmgNoqQGtI65d2zPIdQK0KssqerxbfkAfrbSc2xnl2YuU1MdhJYGrek+Xlf07hvUBqlyAak7YwDFDk/f8oTcLFeOlOT/qc1Xvc8Z9CceEDfKbUxzvR0C/EpItqHT7Vs0qTfFbq0lJ9RU52N9N3ntwXFxwyJ7Cjndq2aS615cTl2uSUzsZPmQK+bnUIycCYhavoiVqOEMfFuezcXlFXWbWXAw/4V3VPV26snf48IArhYCK7ZpTEYBirQpVDd3uOTkDTfclJIdFIrdlvDTnlMvb7Rpq05U17bwqvl1+UN8sibPT+Yzzj3++VNGxKTm3721z7daRnXFshVKniqzCGx+WG9DHVVq+3Dnl2Qu5JRhWcsBqAmC1G8N6nLFxNESblt755ojPza6EYVzXfQVb153ZVDa/FafPzu4cNnjcoeJ8bwQsku1A6170A0BrH6DlCgg1R4nYzd63hqektNMhQEvzOLTidA9+3H5BFRO/3bV7R298jy/A1UJWwX1Quf59NDKP8leVZy6UmA55iWtpac0d63q5dGqzEbnrb7hTKLiiTU3vETZo7GpzjaM8rGQ+m4OnA1YhhqpNIDgFWL0HWF0v7vdIwCLZGrQyeGhl8P1X9QGtdyQupS9nnL9sdpcWHJ+aE3F3M6D1L77nLdzlnqfVdpV5uL9Trv+HCQBYqPL0edsFVRkXac3ta98t3bHNpjy1mk2qs7XXYzmhcIY2JW30zZETY83Cw9GBLTlT0bVrh+3I12DcpQWsNsOZfRj+6fiX0qBLc1gkm5Rzmxac5zT/LpqUVLbDTmVEpshe8W3KgaNzY5evLfT7SjVt4Fj566mDNMmpn2OYv7lFqFBu90P6yXM/RS9Ylm0zoHJzlXpvCOypU2bOwLAOf3cOQLVcm5Qy/+boSYVe4ycu5Sj23hTUQ5+ds5ovAdn2XmNMd8whYJFIzwKu1s29PKdPWAJw9TS4AnvF8ZQ/j/nFBq4pcscKx8b1y1WZ+8UXANdwzrjrC9N9gGsZ3NbWqPmBt601J9KybvY1QpaMBqhG8TBnymag0iQmz4/4bHJyEaBia2N56LJz2P6C7JpAtorDdV1G5nvhQ/1fek4IWKSSAC0ZoDUU0GI7DTvybmtR6sHjs2OWri5y2V7HRvVcq3w7bRjANQJDL/5uNq91UmgnW6w8e/Fo1LylSouHVPmyEu91S1pqlRlDOeNejtJ8UAmEwmXqhKT5EWOmpBT1HGKnUlKfH5f3A6zmY+jGKnDAah5gNR+weiUnKQhYpBIjp1bNanjNCPgB4OrG3xUhUigCUo/8tSdm8SruCeCSA1xdAa5JGDYt8FAO4jDgtU557vLhqLmLLQZeUvdyDFJvadOVn2LYmYcME4P0DYBqhfpB4uqIsVOLXMVC7OwkBKjq6LKy13PGs4Z6g6tSZnwaPmzCK72+iYBFKmnQEnjNDOgD8LALdcsbykSF/GTqkRNjAa0rT/p+x4Z1BFXmzaiK7x+CIQNB2QIPs/mt04ijQpnsaMbFqxciv/7hlS1pI6vgLq6xZpG3Nk3ZHsMOPKRkBQ7JFIiEq1XxD3675Tft+JOej+/FqqDLzGLO9JOHP6NA8IUuXbkyfHjAK2/9IGCRSia4WjZx9fpy4kSAZwKGEuY6AK6DqUdPTY9ZtOKpWt4d6tWSVF0wqz6eow+G7yDeNDmEAYwtzXIDES6USU9lXvk36t7sBS+8QYZdpQp2b65aWF+bls7moNgKrG0QPoiCK6zmcexsH8ftFIhEx1Sx8ftvjZ/+xGsnASoBQOUBUE3GcBgPPXYGcDdANQKgSnpdvzcCFqlEq1SLxp6VZ0/6FtD5OL9cEirkh9KPn54WvTD4qa/VcajjK6i6cLYn3znfFtEKUbGQw9WsHOXYipscl4E4a+KETCXk3aA3Z5x7qsv9dyLAVKxEPQhAHVfFxB295T/j8tP+DBLX0gJvBqqMTAaq4fxraTihYK82NX3OzRGfv/blLQhYJIJWs0Zc5TmTmVP6EsOe/N2slDsnlNstTj9xdkf090HP9Jz2tbyF1X6Y465JSW2OIQsPji3HwnG1i+ltsybOBwgG1asCsfhKbmT0ldsBs2496xNJyrgIvTcsqwNQsev9ejx8fqHwujYldebNkRN3W8rvioBFIj0OrqkYsol5e/6heNbOkH7y3NboBcteePE/RY1qTtUC5zbVpqSxYXXePeme8Dll5eU1gCkz5/bd+3cmz4l4kfcgcXMVeG8IdNcpM/tyxvmp+g/dn1C4X5uUsvjm6EnHLO13RMAikczIsXH98lXmfhEAeLFeI7cCruuS0M5us/LM+W1R8wMfWNvPJS3rJvcOWfqRVpnRC8OuBUpR1oe1UpOYvCnis8kWu7IhAYtEKgpcxnaGbgAXW6u8Bfff1ngMXpeFdrJtyrMXd0fNWxphie9f6l5O4L1uiYc2Xfkehu1MIMXKyusCofB7dULS9ogxUyx+MUMCFon0tPBqWMe1yrwZA/kJetaPJOYfYmfjIhF/CmWy0xkXrpyP/GbRjdfxHmUV3AU1Vi9yB6DYNvFt+Kha4BBWeoYCUtvUDxI3R4ydalXr2xOwSKTnkEP92q5Vv5v5MeDFJqlZI6mzySH5LQ1XEVeEMuk/mVf+jSyOloZ8mbQ2NOCMZw/ZNYFlTQ5lZyXPCkSiX1Tx93+/5TfNai8rImCRSC8KL2M/VgMeXmzyuqUZgBWER35LA+uK/5sruqUh38FJeafkzh9fVGuDmn/eo4b+q5i4M7f8Z9jE+l4ELBKpmGVf20dYbeFX+S0NbN7rDc7YVOr7FHB6FrF5NFbSsVaGawKxKDI3Mubc7YBZl201twQsEukVSuFT3bnakm+aaFPS2AXUrDfLmwfPkyTkHdkZgVjM5dy5d+vOpK8eUEZJJBLJQvV/AQYAzJeRc7nVUksAAAAASUVORK5CYII=";

var _circulo2 = _interopRequireDefault(_circulo);

var _sky = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACSCAYAAACXOXX8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAADz1JREFUeNrsnV9sleUdx5+6bmsbGuhK3SBUWow1YCKFGWfdHAWybBcaJVnY7ihZtsSLxT+720iUxG1Xit7MxBvKnfFGFr1l1mzCZgyUGiC0kxZqYLFim9GpiSTu+b59nvbhcNqe077nPe+fzyd5PD3UnnPef5/z+/2eP68xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAbDeyC2rLt9df67UOXa5vd41JM2HbZPQ6f/+VvhtmLgHBgKcE8bluvbf0xveyQbe/q0QpoiL0MCAfJHLDtCdvW1fjtZmw7btsx5AMIpziSkVgGbHuqgjSpVijtesW2QSufGY4KIJx8iuZpJ5p1KflYM048LyMeQDj5kY1E81yKRFNOPIetdF7maAHCya5oVAA+auYKwVlAPVsH6eGCtHEHu2BZ2TxvH85kSDbGfdYz7rMDEOFkQDRd9uHNjImmHEO27aO2Awgn3SnUOya9tZpqkWx2k2IBKVX6ZDPgUqh1Odosbcs7btsAiHBSJJujOd9MFZMHOdqAcJAN0gGEg2yQDgDCiUc2/WauQFxEdlBIBoSTnGy6TP4KxNUw46QzwaUASVD0Xqo3Cywb47b9TS4DQDi1j26OmOwP6ouDXkYkAylVbWXTb4pbt1mM3ayvA0Q4teEoh/42jrALAOHEH90ofeji0JNaASlVrWWjIum4KXaheCnUa9XNRE8gwokvbUA2i+NXMwQgwllldNPlohsgygEinJozwOEmygGEkxRPcbgr5gC7ABDOytOpAUPtphq67D57gt0ACGdlPM6hJsqB+pP7orHrCp/mUK+INorHQIRTHaQGK6efXQBx0liAbdzFYV5VKnq8nh/g66+/brcP7SX//HFDQ8PnHB6Ew7c0+241cmmxD9ttu9e2TbZ1LvH/6mHUtWEroEkOV/rJdQ2HwX6xUPM6jpVHj3142La+0t/dvHnTzN64sfAN2dho1rS2lnuZ67adsu0E0Q8RTr1gvZt49uFQjUSjCGa/bT3+3ySXqU+nzMz0Z2Z6evFaf1NTs2lrazPrbOvouFMiUtr1qG177Ov+DfEgHIST3bQqduFYKTzmBBFx7dpVMzl55ZZoZim+/PIL+zdfRH93wZwzGzZsNJ2ddyn6aXGv22ffY9BKZ5RDiHCSYjOHeNWsjVk0EsKzxtVnpqY+MWOjo5FAVoPEoybxdG/ZoghIEc/v7Pu9baXzFocR4SRBF4c4PVGiS6EkmxbVZi6cPxcJJ04kHb3mPT33RvJRtKOeLiudQQ5l/cn7OBymM6SEUDZKm06f/iB22Xi8zNQcSq8GOApEOJn5dibCiSWNmpeNpFBrFO2Irdvu89IxRDpEOJD/KDFx2YTSKYl0+jikCAfym0qpN6pTkjl/4VyisgmlMz5+yT/d70YvA8KBDIulpfRCds+jrm9FGZV2edeC8UsfmZm5cT1K7wY4YvWhkV0AK5CLCsBKTfTYU/I7/6PGvzTrB13otSoQV8N5K72Hf/gj/dij0c2M0UE4kD5mAplIMkqRbktJlCpp2kFAT3ihpwGN9VFq1d29xbjteJHDi3DiZMIwFme1stntIpoDLqKJ5KKI5dOpKXPDpkmlg/Y07aC1tdWs7+iwv/ty1YP64mTyymUvHEU5nVma9OnmnHW6tDCcRe8jNW3L9TRvE8KBpdh97he/Vlp0yItG0w900S5V/JVg1NKQRpWLxPyIZMte2wZTLBg/e77XLD08oTStve4kdDJtaWPehcNqdSvnoJPNgJ5IHir81qOXKW4UmTnh9KRYNPudbFpCkSuinJ2dnTu5pz+zaew352fPt61ri352E1mV/vY5+bxlxXMK4dSes4YV/1bCcSubi142imrGRi/mZuMkT1dzal9pWuWk0OOa0pxms7B+j2apf+weozV7Kn0PN4xgjxeNevbmpmtMLZqa+kjSr8Mi6WgiazCLfsC+rqK5N+od8RQhpYIqo8K/PPLTP9vHX0Un8filqEs5b+hC1tIWZm6hr8kqRLPo2j0BLUH01BukOSdsO1Vu2Qw3hOBJLy317I2Pf7TkEh1LbZui0bHGi6bzrs2RfKx49Lp1n8yad+EM44/qWPutb7+2a+NdUVQYDZjLoWzE9My0F876CkXT7iK+W9bu0etIDjdvfjUvBxXNm5ubzJo1rdF7tLV9x0caSpM0mfSNMMUpndSqaNJPy1gNei0dP9XcNL1DEY97f23Dq/VYL6gId23QWcAkzgqjm+M/+/lv71nb9ojC9/f/9c9c1GzKoRqOm2OldOfFZWSz18nCLIj4UsW9bxouoIvdLZvh/1mpzasuwlJkE039GBk5W7NePW2zZtG74QuK6l5KWjpFGIczVPA6jrb/XRftzexY/932za1r58fRXP3fbO8XN7/q+vd/p+/+RsMdw1Y2349SKXtB5VU2otKL2s0y7/NpjsYUVSsE3zOmpvSme8vduugVZfzRp2BJFOX1/jdmb5idOx/wKZaiqhcQTry8W0DhTNj2im2DWo/YXjS97qLZZYJej4DJoI7RMrea3tWi7KtNrlCrLuTri8lGaY6K56tFr6E0bNvW+/zqhFHR98ORs4lsrJ9A66WjbUxyBn0RUqouU6yF1A9byTzvLphelwq0h9+25eY0uXqGifPiSjNaD3mHvehKUFFXRdXPQ9ko8ohbwEprdrr3T3oGfZntVz1nGOHEJ50zJv9r4yiq2WdlMxyM4+jzkpFA9E261ARKdadqLMdSXbB5wtdWVNsIhKuahhZhf7RWsgnf3x+feqDUzo261jb/IYl6TlGE87R9OJLjTVRI/IxLn26ZhqBu7eVGBsPcN76KyEFRN7dDAkIefPAhP3DwVBKpVVGEk+f7i6tOc9ClULd0r344MryicRxFRRGH7z5WgVipThFEG6RWvy+tY8VNIdbDcTdyG8zhppWVjdKmk+/9HdlUyZykz0Yp1OjYxUJss86RmYXzZG+t369IC3C9kmPZqGYzP5ajHkXIPFHvxcKSJuggqHmds6FIJ5JNrd4x+bjXuHoUdvtb8FrhSDa9eR+sB7Xjx7t2hwMC1avph0/4eWGx3MO9aEuMPpOX7Qhk0+O/mTRKFdnASgiWEuk0t47V8vPC1Gt3yJ5vh9w5R4RTYZRz1GR7Tdv5VMoJ50/6RipCjwrUDhXKNTRA9ZxwUTX1YDU3NUeLqbnZ52GUfazarvQiLjGqKEcjj7M6v+pwIBt907RH42yuXOaqgVVFOOUWTFMtSy26JbObfe7G7iiq1vIeVc3HKtxdG1wqcjjD0c1E8FzLJES9KqRSUGv87PP335+vE0Y9o67TAuEsIZ2Xzdykxqzx15Ln271wAJLCD7twaZek8yTCWZ59JltLkM5YUR4P0qmouLfY3CiAWkc7QSdFT6V3NC2scFxqtS9DH7k0Itvkv20A6hXpBB0VjyGc5aWjizgrXeWl6xdEK9VpqQOAeqFBgy61aq8kyin8jfBUz9n2+muqhQxkLMKJUI+B6zUAqDfquTpFhLO8dDSuZZA9AbAqlh0Q2MA+WiDlgwKV+sWxSNKwH6UMkDQIJ1vSWS23jFIGSBpSqvLp1TM53LSDyAaIcNIb6Wj6g6KdrN9iJur+dz1yAAgnxdLpctLpz+gmDDnZULMBhJMh8WhN5OcyFO1E88XcFA4AhJPRaEcLsaf9HleDTjYTHDVAONkXT7+LdtKWZg050QxxlADh5FM8T6Ug4lFEcwzRAMIpTqo1YObuBdWV0NsqXTpmbl8fBwDhFEg+vS7iedzEvwK+IhjdJ/247q7J3gaEA+XSLolnu4t+uiqIgiaCphniw6RLAAAAAAAAAAAAAAAAAAAAAKmnsONwSm7Ifr2hoeE6pwMAwolDLrppnAbgSTK6n9NityadtO1j2y7adrbaG7UDQIGF4+6Ts9fM3Y70FnQTL38/7nVtbeX+XLLRSN+3iH4AEM5y6dKAbe16LrFMTX1iZqanzbRt7sZdt9FmxbO+407T0dFhmpqaw1+dsO1tIh4AhBOKRqnSftv6vGh0Z8DJK5fno5lKkXy6u+8Oox9FOYNWOqOcNgAFF46TzbM+fZJodN/jakVTTjxbt90XRjySzilOHYCCCieUjQTz4chwlDrFRWNjo7mn516zYcNGpANQZOGUyub06Q+ignAtUKSDdABWTh5uhHcgCdmIC+fPmWvXrvqnA667HQCKIBzX7R2trFdr2YTSUY9XIDsAyLtwgh4pMz5+KRHZhNJxxehO+zke4zQCyH+EowF9LRpTo96oJJFsxkYv+qd7nPwAYBkaMxLJ+OkIvmaiq31PFN1culSXz6VaTveWLeou1+dSaneC0wkgg8JxkulzrVxh9lH9R9FNUMRNHMlOPVcu2kI4AFkSjhPNXhe9zKcpft7T9My0jSiaTHNTs2lqbjKTV67U9fOqeLzVRMJpV49VQ0PDJKcUQAaE47qYnzRu/pMko9HCuqhXO1q4Vvg5Wh0dd+qp5m8hHIC0C8d1b6vHKSoCj42Ohl3PqUYTQp1wGJMDkHbhBDO7o4t3ZGQ4tRFNOWZn57vj2zmdAFIsHCubdpdGRcVfjW/JGl8tyHETpxNAHYXjhNLrWrjSntaV0cp6moLdonpNFmUTRTgLAw5b7PYecdule3+fYv0cgASEU7ouTRn0+2hNYaVPIyNn87I//Xap7bf7gYW7AAJiny3uepue9dGM6jJKl8KV9ta0tprWNa3RzGt1dSc9UrhWhNtVsnDXq3SZA8QsnFA2SjXGxi7Gui5NlihZuEsRzktIBxBOfLJRveaQZKMu7WCCY3Hz1cZGs3PnA1Hk4yKdF0ivAOFULxelS9vNXDFYUc18l7AiGy0VUXTZhNJ58AcP+Uhn1EU74T7zt6Y5yXrJgHBul40ko3Vgys6QPvnePxa9K0JRUXq1w0Y6FSDhDHJbGkA4c7JRz5PmOkVS0VwmFX0V1eibvKm5OdF1abKEUis//yvcZ6023freho3h0qXUewDhuOkHA1EOMHklXA8GKkAp1VKRn35///3bfb1H0nmBSAfyRkULcLmCcCQbiQbZVM9yaaZ+HyyT2uL3N0DhhGOJltHUmBpFN1AbSgZB9rh5ZgCFE456pMz4+EfssQQioWBRsYfZI1Ao4bhv2WjZiKIO4kua/ywIhwmhkCsqnkulouaevT9hjyULa+xAIVMqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAGvB/AQYAE+IYSWlNkxQAAAAASUVORK5CYII=";

var _sky2 = _interopRequireDefault(_sky);

var _carro = "data:image/png;base64,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";

var _carro2 = _interopRequireDefault(_carro);

var _barra = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAAoCAYAAABEm8fXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZNJREFUeNrs3c1NAkEYBuDFeJcOhArQDrADSXYPe7MFKxArUCvQGwdJwAqkA7ECsQPtwNm4J4TlJzBAfJ5kMslO5vId3ny7swtJAgAAAAAAAPwvtXkL/edeN0w3SgTswCjN8ovpi0fqAhwKgQUILACBBQisaWmWd8PUCeNLmYCIisx5mLVQW7Sz/9xrh+lVDYFIOqFhGq4VWGVoDcJ0qY7Alo1DWJ2vfEs45V0dgQhGVYseugP75HsTgXWqjkAErarFZR6618P0EUZdLYEImmmWT1busMqwehRWQESDMnuWD6yw4arsrJwOAjGdFaG1aofV0FkB+8QpISCwAAQWILAADjmwnsK4VSJgB15mXVzmxdHitYaB+gGRXKdZfr9WYJWh9Zb8vhsBsE2TEFbNdW4JF7ZnABs2qlr00B3YJ5+bCKwTdQQiaG0isHxPCMTQnvfh81KBFTYXv9bQUEcggiKs7uYtVv1Vfbvc6HQQiG2YZnlnlQ6rLayAHXZafxxXbJgkC44YAbZkrAQAAAAAHKIfAQYAWvFBriTluAIAAAAASUVORK5CYII=";

var _barra2 = _interopRequireDefault(_barra);

var _TravelDetailPage = {
  "single-travel": "ZnaBMVqRx8IPpJjssi-0o",
  "travel-title": "yvZ3rBngouOpVbRxmzQR8",
  "travel-desc": "M-fb2tj7mNURholtneyW2",
  "circulo": "rO9PwXhTfLnUxtip1VtYs",
  "avatar": "_1xcWqCvcnDETo4zKh7ulpA",
  "travel-detail": "_2cVZyDOv85ALReA9fCVdtS",
  "detailtop": "_3_Qc3-f8-JlbwXPnYgrTD7",
  "detail-container": "_3Q7c2c-KPFXX-fHTdQs_VB",
  "cities": "_6kPQjqnQ6qmf_aVyu-0Ti",
  "barra": "_1P4bCoOmH3yOlDJ0KpzjMo",
  "price": "_3IhIlbpYSMASByt-Yw6I9g",
  "users-container": "_2e8iAi54GwECeRyR2363B3",
  "passengers": "_2SW7gdoC0GuRt6iM3qxO1O",
  "passengerimg": "_1sNkf4xNcx_3NJlsRpkixO",
  "car": "_2MAvrxeccDTFTlzID4bUQ7",
  "info": "_1AaH-nurbDsRE5KoQYxlMJ",
  "viajar": "_2iAuAh8xS2n7ENBagHxh5E",
  "cancelar": "_3Uc19PlA--8pR2Ddv7j8d9",
  "actionsbtns": "_2T-taYl_za5UQiL7ZLwVXK",
  "comments": "_3Np05-oaBL-nSqcbAOo60G"
};

var _TravelDetailPage2 = _interopRequireDefault(_TravelDetailPage);

var _TravelActions = __webpack_require__(4);

var _TravelReducer = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Import Style


// Import Actions


var _ref = _jsx(_reactLoadingComponents2.default, {
  type: 'oval',
  width: 200,
  height: 200,
  fill: 'rgb(42,168,154)'
});

var _ref2 = _jsx('br', {});

var _ref3 = _jsx('h4', {}, void 0, 'Comentarios del TOBDRIVER: ');

var _ref4 = _jsx('li', {}, void 0, 'Usuarios programados para este viaje:');

var _ref5 = _jsx(_reactLoadingComponents2.default, {
  type: 'oval',
  width: 200,
  height: 200,
  fill: 'rgb(42,168,154)'
});

var TravelDetailPage = function (_Component) {
  _inherits(TravelDetailPage, _Component);

  function TravelDetailPage() {
    _classCallCheck(this, TravelDetailPage);

    return _possibleConstructorReturn(this, (TravelDetailPage.__proto__ || Object.getPrototypeOf(TravelDetailPage)).apply(this, arguments));
  }

  _createClass(TravelDetailPage, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.travel.passengers !== nextProps.travel.passenger;
    }
  }, {
    key: 'render',
    value: function render() {
      var avatar = this.props.user !== null ? this.props.user.avatar : 'https://via.placeholder.com/350x150';
      var confirmed = this.props.user !== null && this.props.user.confirmed;
      var firstName = this.props.user !== null && this.props.user.name.split(' ')[0];
      var userID = this.props.user !== null ? this.props.user._id : '';
      var passengersList = this.props.travel !== null && this.props.travel.passenger;
      var cuid = this.props.travel !== null && this.props.travel.cuid;
      var Pasajeros = passengersList.map(function (pass) {
        return _jsx('li', {
          className: _TravelDetailPage2.default.item
        }, pass._id, _jsx('img', {
          className: _TravelDetailPage2.default.passengerimg,
          src: pass.avatar,
          alt: 'Tobpassenger ' + pass.name
        }), pass.name);
      });
      var author = userID === this.props.travel.author._id;
      var tobpassenger = passengersList.filter(function (user) {
        return user._id === userID;
      });
      // console.log('PROPS', this.props)
      // console.log('Passenger list', passengersList)
      // console.log('USER', userID)
      // console.log('TOBPASSENGERS', tobpassenger)
      // console.log('Author', author)
      return _jsx('div', {}, void 0, _jsx(_reactHelmet2.default, {
        title: 'Viaje hacia ' + this.props.travel.to
      }), _jsx('section', {
        className: _TravelDetailPage2.default['detail-container']
      }, void 0, _jsx(_TravelCreateWidget2.default, {
        showAddTravel: this.props.showAddTravel
      }), this.props.user !== null ? _jsx('div', {
        className: _TravelDetailPage2.default.detailtop
      }, void 0, _jsx('div', {}, void 0, _jsx('img', {
        className: _TravelDetailPage2.default.sky,
        src: _sky2.default,
        alt: 'Tobcity Divide Tus gastos'
      }), _jsx('img', {
        className: _TravelDetailPage2.default.circulo,
        src: _circulo2.default,
        alt: 'Tobcity Divide Tus gastos'
      }), _jsx(_reactRouter.Link, {
        to: '/profile'
      }, void 0, _jsx('img', {
        className: _TravelDetailPage2.default.avatar,
        src: avatar,
        alt: 'Tobcity Divide Tus gastos'
      }))), _jsx('h2', {}, void 0, 'HOLA! ', firstName.toUpperCase())) : _ref, this.props.travel !== null ? _jsx('div', {
        className: _TravelDetailPage2.default['travel-detail']
      }, void 0, _jsx('img', {
        className: _TravelDetailPage2.default.barra,
        alt: 'Opciones de viaje',
        src: _barra2.default
      }), _jsx('p', {
        className: _TravelDetailPage2.default.cities
      }, void 0, this.props.travel.from, '/', this.props.travel.to), _jsx('h3', {
        className: _TravelDetailPage2.default.price
      }, void 0, '$ ', this.props.travel.price), _jsx('h2', {}, void 0, 'DRIVER: ', _ref2, ' ', this.props.travel.author.name), _jsx('div', {
        className: _TravelDetailPage2.default.comments
      }, void 0, _ref3, _jsx('p', {}, void 0, this.props.travel.content)), _jsx('div', {
        className: _TravelDetailPage2.default['users-container']
      }, void 0, _jsx('ul', {
        className: _TravelDetailPage2.default.passengers
      }, void 0, _ref4, Pasajeros)), _jsx('div', {
        className: _TravelDetailPage2.default.info
      }, void 0, _jsx('p', {
        className: _TravelDetailPage2.default.fecha
      }, void 0, 'Hora: ', (0, _moment2.default)(this.props.travel.date).format('HH mm')), _jsx('p', {
        className: _TravelDetailPage2.default.fecha
      }, void 0, 'Fecha: ', (0, _moment2.default)(this.props.travel.date).format('MMM Do YY')), _jsx('p', {
        className: _TravelDetailPage2.default.cupos
      }, void 0, 'Puestos: ', this.props.travel.sits, '/4')), _jsx('img', {
        className: _TravelDetailPage2.default.car,
        src: _carro2.default,
        alt: 'Viaja con Tobcity'
      }), _jsx('div', {
        className: _TravelDetailPage2.default.actionsbtns
      }, void 0, tobpassenger.length === 0 && !author && confirmed ? _jsx(_reactRouter.Link, {
        to: '/payment/' + cuid
      }, void 0, _jsx('button', {
        className: _TravelDetailPage2.default.viajar
      }, void 0, 'VIAJAR')) : null, _jsx('button', {
        onClick: this.props.router.goBack,
        className: _TravelDetailPage2.default.cancelar
      }, void 0, 'CERRAR'))) : _ref5));
    }
  }]);

  return TravelDetailPage;
}(_react.Component);

// Actions required to provide data for this component to render in server side.


TravelDetailPage.need = [function (params) {
  return (0, _TravelActions.fetchTravel)(params.cuid);
}];

// Retrieve data from store as this.props
function mapStateToProps(store, props) {
  return {
    user: store.auth.currentUser,
    travel: (0, _TravelReducer.getTravel)(store, props.params.cuid)
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(TravelDetailPage);

/***/ })

};;