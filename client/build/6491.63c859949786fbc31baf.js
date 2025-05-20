!(function () { try { const e = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; const t = (new Error()).stack; t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = 'ebdc4b3d-14f2-4612-9fb1-7e95a533cdb2', e._sentryDebugIdIdentifier = 'sentry-dbid-ebdc4b3d-14f2-4612-9fb1-7e95a533cdb2'); } catch (e) {} }()); const _global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; _global.SENTRY_RELEASE = { id: '45ee1168f5cf48e9753bace26323152d3b61cb67' }, (self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[6491], {
    7152: (e, t, n) => { n.d(t, { l: () => r }); var r = ['512 512', "<path fill='var(--ci-primary-color, currentColor)' d='M29.663,482.25l.087.087a24.847,24.847,0,0,0,17.612,7.342,25.178,25.178,0,0,0,8.1-1.345l142.006-48.172,272.5-272.5A88.832,88.832,0,0,0,344.334,42.039l-272.5,272.5L23.666,456.541A24.844,24.844,0,0,0,29.663,482.25Zm337.3-417.584a56.832,56.832,0,0,1,80.371,80.373L411.5,180.873,331.127,100.5ZM99.744,331.884,308.5,123.127,388.873,203.5,180.116,412.256,58.482,453.518Z' class='ci-primary'/>"]; },
    1350: (e, t, n) => { n.d(t, { s: () => r }); var r = ['512 512', "<polygon fill='var(--ci-primary-color, currentColor)' points='43.314 130.51 95.196 78.627 95.196 496.196 127.196 496.196 127.196 78.627 179.079 130.51 201.706 107.883 111.196 17.372 20.686 107.883 43.314 130.51' class='ci-primary'/><rect width='120' height='32' x='184' y='160' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='184' height='32' x='184' y='232' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='248' height='32' x='184' y='304' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='312' height='32' x='184' y='376' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/>"]; },
    8795: (e, t, n) => { n.d(t, { w: () => r }); var r = ['512 512', "<rect width='120' height='32' x='184' y='288' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='184' height='32' x='184' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='248' height='32' x='184' y='144' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='312' height='32' x='184' y='72' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='95.196 16 95.196 433.568 43.313 381.686 20.687 404.313 111.196 494.823 201.705 404.313 179.078 381.687 127.196 433.568 127.196 16 95.196 16' class='ci-primary'/>"]; },
    8640: (e, t, n) => {
        n.r(t), n.d(t, { default: () => I }); const r = n(5893); const a = n(1150); const i = n(9649); const s = n(5306); const l = n(918); const o = n(7294); const c = n(6458); const u = n(5461); const d = n(7687); const f = n(9753); const h = n(7730); const p = n(7168); const v = n(6140); const g = function (e) { let t; return (t = e.addEduCourse) === null || void 0 === t ? void 0 : t.data.value; }; const m = function (e) { let t; return (t = e.addEduCourse) === null || void 0 === t ? void 0 : t.data.title; }; const y = (0, p.hg)('eduCourses/addEduCourse', ((e, t) => {
            return n = void 0, r = void 0, i = function () {
                let e; let n; let r; let a; let i; let s; let l; let o; let c; return (function (e, t) {
                    let n; let r; let a; let i; let s = {
                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                    }; return i = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, l[0] && (s = 0)), s;) try { if (n = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done) return a; switch (r = 0, a && (l = [2 & l[0], a.value]), l[0]) { case 0: case 1: a = l; break; case 4: return s.label++, { value: l[1], done: !1 }; case 5: s.label++, r = l[1], l = [0]; continue; case 7: l = s.ops.pop(), s.trys.pop(); continue; default: if (!((a = (a = s.trys).length > 0 && a[a.length - 1]) || l[0] !== 6 && l[0] !== 2)) { s = 0; continue; } if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) { s.label = l[1]; break; } if (l[0] === 6 && s.label < a[1]) { s.label = a[1], a = l; break; } if (a && s.label < a[2]) { s.label = a[2], s.ops.push(l); break; }a[2] && s.ops.pop(), s.trys.pop(); continue; }l = t.call(e, s); } catch (e) { l = [6, e], r = 0; } finally { n = a = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                }(this, ((u) => { switch (u.label) { case 0: e = t.rejectWithValue, n = t.extra, r = t.dispatch, a = t.getState, i = m(a()), s = g(a()), l = { title: i, value: s }, u.label = 1; case 1: return u.trys.push([1, 3,, 4]), [4, n.api.post('/college/educations-courses/', l)]; case 2: return o = u.sent(), r((0, v.R)()), r(b.clearData()), [2, o.data]; case 3: return c = u.sent(), [2, e({ errors: c.response.data.errors, status: c.response.status })]; case 4: return [2]; } })));
            }, new ((a = void 0) || (a = Promise))(((e, t) => { function s(e) { try { o(i.next(e)); } catch (e) { t(e); } } function l(e) { try { o(i.throw(e)); } catch (e) { t(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(s, l); }o((i = i.apply(n, r || [])).next()); })); let n; let r; let a; let i;
        })); const x = (0, p.oM)({
            name: 'addEduCourse', initialState: { data: { title: null, value: null }, isLoading: !1, errors: void 0 }, reducers: { setTitle(e, t) { e.data.title = t.payload; }, setValue(e, t) { e.data.value = t.payload; }, clearData(e) { e.data = { title: null, value: null }, e.errors = void 0; } }, extraReducers(e) { e.addCase(y.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(y.fulfilled, ((e) => { e.isLoading = !1; })).addCase(y.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })); },
        }); var b = x.actions; const j = x.reducer; const w = n(4387); const C = n(4475); const N = n(2308); const k = n(5044); const S = n(3280); const A = n(4809); const E = n(1385); const _ = n(530); const O = function (e) { let t; return (t = e.addEduCourse) === null || void 0 === t ? void 0 : t.errors; }; const L = {
            tabBtn: 'QH_VmoJT', tabsButtonsBlock: 'zu4i81kS', title: 'CrQbGPWG', settings: 'qhGrpAkO', newAddField: 'tivkjQeB', tabBlock: 'f3D0Zkvc', form: 'ButzPsGg', footerBtn: 'zZjJ_f1X', greenBtn: 'e4rlqXoN', footer: 'lWT1zl9z', message: 'X9BhHr30', messageIcon: 'Or8lVghh',
        }; let B = function () { return B = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++) for (const a in t = arguments[n])Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e; }, B.apply(this, arguments); }; const R = function (e) {
            const t = e.className; const n = e.visible; const a = e.setVisible; const i = (0, u.T)(); const s = (0, o.useState)(!1); const l = s[0]; const d = s[1]; const f = (0, o.useState)(!1); const h = f[0]; const p = f[1]; const v = (0, o.useState)(); const x = v[0]; const j = v[1]; const R = (0, o.useRef)(null); const D = (0, c.v9)(m); const P = (0, c.v9)(g); const T = (0, c.v9)(O); const V = (0, o.useCallback)((() => { a(!1); }), [a]); const F = function () { V(), d(!1), p(!1); }; return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(C.Tk, {
                    className: (0, w.A)(L.AddEduCourse, {}, [t]),
                    visible: n,
                    onClose: V,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, r.jsxs)(C.lx, {
                        className: (0, w.A)(L.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: l,
                        onSubmit(e) {
                            return t = void 0, n = void 0, a = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let r; let a; let i; let s = {
                                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                                    }; return i = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, l[0] && (s = 0)), s;) try { if (n = 1, r && (a = 2 & l[0] ? r.return : l[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, l[1])).done) return a; switch (r = 0, a && (l = [2 & l[0], a.value]), l[0]) { case 0: case 1: a = l; break; case 4: return s.label++, { value: l[1], done: !1 }; case 5: s.label++, r = l[1], l = [0]; continue; case 7: l = s.ops.pop(), s.trys.pop(); continue; default: if (!((a = (a = s.trys).length > 0 && a[a.length - 1]) || l[0] !== 6 && l[0] !== 2)) { s = 0; continue; } if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) { s.label = l[1]; break; } if (l[0] === 6 && s.label < a[1]) { s.label = a[1], a = l; break; } if (a && s.label < a[2]) { s.label = a[2], s.ops.push(l); break; }a[2] && s.ops.pop(), s.trys.pop(); continue; }l = t.call(e, s); } catch (e) { l = [6, e], r = 0; } finally { n = a = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                                }(this, ((r) => { switch (r.label) { case 0: return e.preventDefault(), t = e.currentTarget, p(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), d(!0), t.checkValidity() ? D ? [4, i(y())] : [3, 2] : [3, 3]; case 1: return (n = r.sent()).meta.requestStatus === 'fulfilled' && (j(_.F.success('Номер учебного курса добавлен')), F()), n.meta.requestStatus === 'rejected' && p(!0), [3, 3]; case 2: p(!0), r.label = 3; case 3: return [2]; } })));
                            }, new ((r = void 0) || (r = Promise))(((e, i) => { function s(e) { try { o(a.next(e)); } catch (e) { i(e); } } function l(e) { try { o(a.throw(e)); } catch (e) { i(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(s, l); }o((a = a.apply(t, n || [])).next()); })); let t; let n; let r; let a;
                        },
                        children: [(0, r.jsx)(C.p0, { children: (0, r.jsx)(C.fl, { children: 'Добавление номера учебного курса' }) }), (0, r.jsx)(C.sD, { children: (0, r.jsx)('div', { className: L.tab, children: (0, r.jsxs)('div', { className: L.tabBlock, children: [(0, r.jsx)('div', { className: L.settings, children: (0, r.jsxs)('div', { className: L.newAddField, children: [(0, r.jsx)('h6', {className: L.newAddFieldTitle, children: "Наименование*"}), (0, r.jsx)(E.h, {
 type: 'text', placeholder: '1 курс', feedbackValid: T ? '' : 'Здорово!', invalid: !!T, feedbackInvalid: 'Введите корректные данные!', value: D || '', onChange (e) { i(b.setTitle(e.target.value)) }, required: !0 
})] }) }), (0, r.jsx)('div', { className: L.settings, children: (0, r.jsxs)('div', { className: L.newAddField, children: [(0, r.jsx)('h6', {className: L.newAddFieldTitle, children: "Номер учебного курса*"}), (0, r.jsx)(E.h, {
 type: 'number', placeholder: '1', feedbackValid: T ? '' : 'Здорово!', invalid: !!T, feedbackInvalid: 'Введите корректные данные!', value: P || '', onChange (e) { i(b.setValue(e.target.value)) }, required: !0 
})] }) })] }) }) }), (0, r.jsxs)(C.Ym, { className: L.footer, children: [(0, r.jsx)('div', { className: L.message, children: h && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(N.Z, { icon: k.D, customClassName: L.messageIcon }), (0, r.jsx)(A.xv, { size: A.yH.M, weight: A.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, r.jsxs)('div', { className: L.footerBtns, children: [(0, r.jsx)(C.u5, {
 color: 'primary', variant: 'outline', className: L.footerBtn, onClick: F, children: 'Отмена' }), (0, r.jsxs)(C.u5, {
 color: 'success', type: 'submit', className: (0, w.A)(L.footerBtn, {}, [L.greenBtn]), children: [(0, r.jsx)(N.Z, { icon: S.q, className: L.btnIcon }), 'Добавить'] 
})] })] })],
                    }),
                }), (0, r.jsx)(C.KF, { ref: R, push: x, placement: 'top-end' })],
            });
        }; const D = n(5228); const P = n(2809); const T = n(5375); const V = { eduCoursesSettings: 'XoKE33pq' }; let F = function () { return F = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++) for (const a in t = arguments[n])Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e; }, F.apply(this, arguments); }; const M = {
            eduCourses: f.Fc, eduCourseDetail: D.eP, addEduCourse: j, editEduCourse: P.RC,
        }; const I = function (e) {
            const t = e.className; const n = (0, u.T)(); const p = (0, o.useState)(!1); const v = p[0]; const g = p[1]; const m = (0, c.v9)(f.Ym); const y = (0, c.v9)(f.ZV); const x = (0, c.v9)(f.UA); const b = (0, c.v9)(f.Xy); const j = (0, c.v9)(f.Iu); const C = (0, o.useState)(''); const N = C[0]; const k = C[1]; const S = (0, o.useState)(); const A = S[0]; const E = S[1]; const _ = (0, o.useCallback)(((e) => { k(e); }), []); const O = (0, o.useCallback)(((e) => { n(f.Eb.setLimit(e)), n((0, f.RV)()); }), [n]); const L = (0, o.useCallback)(((e) => { n(f.Eb.setPage(e)), n((0, f.RV)()); }), [n]); return (0, o.useEffect)((() => { E((m == null ? void 0 : m.data) || []); }), [m]), (0, o.useEffect)((() => { const e = (0, h.Wh)(N, (m == null ? void 0 : m.data) || []); E(e || []); }), [m, N]), (0, o.useEffect)((() => { n((0, f.RV)()); }), [n]), (0, r.jsx)(l.B, {
                title: 'LMS - Номер учебного курса',
                children: (0, r.jsxs)(a.W, {
                    reducers: M,
                    removeAfterUnmount: !0,
                    children: [(0, r.jsxs)('div', {
                        className: (0, w.A)(V.EduCoursesPage, {}, [t]),
                        children: [(0, r.jsx)(i.o, {
                            value: N, onChange: _, searchText: 'Поиск по наименованию', error: x, isLoading: y,
                        }), (0, r.jsx)(s.X, {
                            onlyAdding: !0, setVisibleAddNewField: g, addingModalText: 'Добавить номер учебного курса', error: x, isLoading: y, children: (0, r.jsx)(R, { visible: v, setVisible: g }),
                        }), (0, r.jsx)(f.fM, { data: A || [] }), (0, r.jsxs)('div', {
                            className: V.eduCoursesSettings,
                            children: [(0, r.jsx)(d.K, {
                                data: A || [], onChange: O, onChangePage: L, paginationData: m == null ? void 0 : m.pagination, itemsLimit: b, withRecords: !0, isLoading: y, error: x,
                            }), (0, r.jsx)(d.N, {
                                data: A || [], onChange: L, itemsPage: j, isLoading: y, error: x, paginationData: m == null ? void 0 : m.pagination,
                            })],
                        })],
                    }), x && (0, r.jsx)(T.d, { error: x })],
                }),
            });
        };
    },
    5375: (e, t, n) => { n.d(t, { d: () => o }); const r = n(5893); const a = n(7294); const i = n(530); const s = n(4475); function l(e) { return l = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) { return typeof e; } : function (e) { return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e; }, l(e); } var o = (0, a.memo)(((e) => { const t = e.error; const n = (0, a.useState)(); const o = n[0]; const c = n[1]; const u = (0, a.useRef)(null); return (0, a.useEffect)((() => { (typeof t === 'string' && t === 'timeout' || l(t) === 'object' && t.status === 500 && t.error === 'timeout') && c(i.F.error('Соединение с сервером потеряно')); }), [t]), (0, r.jsx)(s.KF, { ref: u, push: o, placement: 'top-end' }); })); },
    7687: (e, t, n) => {
        n.d(t, { K: () => C, N: () => P }); let r; const a = n(5893); const i = n(4387); const s = n(7294); const l = ['25', '50', '100', '200', '500']; const o = n(1138); const c = n(4809); const u = n(1353); const d = n(8896); function f() { return f = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]); } return e; }, f.apply(this, arguments); } const h = function (e) { return s.createElement('svg', f({ width: 20, height: 20, xmlns: 'http://www.w3.org/2000/svg' }, e), r || (r = s.createElement('path', { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M8.565 9.731 5.229 6.396A.79.79 0 0 1 5 5.813a.79.79 0 0 1 .23-.584A.79.79 0 0 1 5.811 5a.79.79 0 0 1 .584.23l3.25 3.25 3.25-3.25a.79.79 0 0 1 .583-.23.79.79 0 0 1 .584.23.79.79 0 0 1 .229.582.79.79 0 0 1-.23.584l-3.33 3.331 3.335 3.335a.79.79 0 0 1 .229.584.79.79 0 0 1-.23.583.79.79 0 0 1-.583.23.79.79 0 0 1-.583-.23l-3.25-3.25-3.25 3.25a.79.79 0 0 1-.583.23.79.79 0 0 1-.584-.23.79.79 0 0 1-.229-.583.79.79 0 0 1 .23-.584l3.33-3.33Z' }))); }; const p = n(9161); const v = n(8863); const g = 'lJhrM3nh'; const m = 'zZgj2JgW'; let y = function () { return y = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++) for (const a in t = arguments[n])Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e; }, y.apply(this, arguments); }; const x = (0, s.memo)(((e) => {
            let t; const n = e.className; const r = e.items; const l = e.value; const o = e.onChange; const f = (0, s.useState)(l); const x = f[0]; const b = f[1]; const j = (0, s.useState)(!1); const w = j[0]; const C = j[1]; const N = (0, s.useRef)(null); (0, v.p)(N, C); const k = (0, s.useCallback)((() => { C(!0); }), []); const S = (0, s.useCallback)((() => { C(!1); }), []); const A = (0, s.useCallback)(((e) => { o(e), b(e), S(); }), [S, o]); return (0, a.jsxs)('div', {
                className: (0, i.A)('eXu4wq7K', {}, [n]),
                ref: N,
                children: [!w && (0, a.jsxs)(p.zx, {
                    className: 'bAUrWG2D', theme: p.bn.CLEAR, onClick: k, children: [(0, a.jsx)(c.xv, { weight: c.fs.SEMIBOLD, className: g, children: x }), (0, a.jsx)(u.J, { Svg: d.Z })],
                }), (0, a.jsx)('div', {
 className: (0, i.A)('Jh9c6KnL', (t = {}, t.fpG6Af4B = w, t), []),
style: { top: ''.concat(-40 * r.indexOf(x), 'px') },
children: r.map(((e) => (x === e ? (0, a.jsxs)('div', { className: (0, i.A)(m, {}, ['rKHhU8sR']), children: [(0, a.jsx)(c.xv, { weight: c.fs.SEMIBOLD, className: g, children: e }), (0, a.jsx)(p.zx, {
 theme: p.bn.CLEAR, className: 'HkrPDu6E', onClick: S, children: (0, a.jsx)(u.J, { Svg: h }) 
})] }, e) : (0, a.jsx)(p.zx, {
                    theme: p.bn.CLEAR, className: m, size: p.qE.XS, onClick() { A(e); }, children: (0, a.jsx)(c.xv, { weight: c.fs.SEMIBOLD, className: g, children: e }), 
}, e)))) 
})],
            });
        })); const b = {
            LimitShow: 'eQ6pERU2', selectLimit: 'hKaByxY3', limitSelectWrapper: 'XhlPZwOr', recordsText: 'Shn48cNg', textResults: 'MlwyceC_',
        }; let j; let w = function () { return w = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++) for (const a in t = arguments[n])Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e; }, w.apply(this, arguments); }; var C = (0, s.memo)(((e) => {
            const t = e.className; const n = e.onChange; const r = e.itemsLimit; const s = e.withRecords; const u = e.paginationData; const d = e.isLoading; const f = e.error; const h = e.data; const p = e.onChangePage; const v = (u == null ? void 0 : u.current_page) ? (u.current_page - 1) * Number(r) + 1 : 0; const g = (u == null ? void 0 : u.current_page) ? u.current_page * Number(r) : 0; return d ? (0, a.jsx)(o.O, {
                width: '100%', height: 40, border: '6px', className: b.skeleton,
            }) : f ? (0, a.jsx)('div', {}) : h.length ? (0, a.jsxs)('div', { className: (0, i.A)(b.LimitShow, {}, [t]), children: [s && v && g && (0, a.jsxs)(c.xv, { theme: c.lg.LIGHT, className: b.recordsText, children: ['Записи', ' ', v, ' ', '-', ' ', g, ' ', '| Всего', ' ', u == null ? void 0 : u.total_records] }), (0, a.jsxs)('div', { className: b.limitSelectWrapper, children: [(0, a.jsx)(c.xv, { theme: c.lg.LIGHT, className: b.textResults, children: 'Результатов на странице' }), (0, a.jsx)(x, { items: l, value: r, onChange(e) { n(e), p('1'); } })] })] }) : (0, a.jsx)('div', {});
        })); const N = n(4475); function k() { return k = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]); } return e; }, k.apply(this, arguments); } const S = function (e) {
            return s.createElement('svg', k({
                width: 30, height: 30, fill: 'none', xmlns: 'http://www.w3.org/2000/svg',
            }, e), j || (j = s.createElement('path', { d: 'M9.514 5.763A1.739 1.739 0 0 0 9 6.994a1.73 1.73 0 0 0 .514 1.231l6.822 6.777-6.822 6.776a1.735 1.735 0 0 0 0 2.462 1.759 1.759 0 0 0 2.48 0l8.07-8.016a1.74 1.74 0 0 0 .514-1.231 1.73 1.73 0 0 0-.514-1.231l-8.07-8.016c-.669-.664-1.794-.664-2.48.017Z', fill: '#EB8247' })));
        }; let A; function E() { return E = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]); } return e; }, E.apply(this, arguments); } const _ = function (e) {
            return s.createElement('svg', E({
                width: 30, height: 30, fill: 'none', xmlns: 'http://www.w3.org/2000/svg',
            }, e), A || (A = s.createElement('path', { d: 'M6.175 8.2a1.875 1.875 0 0 1 2.65-2.65l8.125 8.125a1.875 1.875 0 0 1 0 2.65L8.825 24.45a1.875 1.875 0 0 1-2.65-2.65l6.8-6.8-6.8-6.8Zm18.2 16.8a1.875 1.875 0 0 0 1.875-1.875V6.875a1.875 1.875 0 0 0-3.75 0v16.25c0 1.035.84 1.875 1.875 1.875Z', fill: '#EB8247' })));
        }; const O = 'ytJMbyx3'; const L = 'SRBkd4oW'; const B = '_DUi30wm'; let R = function () { return R = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++) for (const a in t = arguments[n])Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e; }, R.apply(this, arguments); }; const D = function (e, t, n) { if (n || arguments.length === 2) for (var r, a = 0, i = t.length; a < i; a++)!r && a in t || (r || (r = Array.prototype.slice.call(t, 0, a)), r[a] = t[a]); return e.concat(r || Array.prototype.slice.call(t)); }; var P = (0, s.memo)(((e) => {
            const t = e.className; const n = e.data; const r = e.isLoading; const s = e.error; const l = e.paginationData; const c = e.onChange; const d = e.itemsPage; return r ? (0, a.jsx)(o.O, {
                width: 250, height: 40, border: '6px', className: 'nlgg7yYk',
            }) : s || n.length === 0 ? (0, a.jsx)('div', {}) : (0, a.jsx)('div', {
                className: (0, i.A)('AuxB6Ddw', {}, [t]),
                children: (0, a.jsxs)(N.E7, {
                    'aria-label': 'TrainingSchedule pagination',
                    align: 'end',
                    children: [(l == null ? void 0 : l.prev_page) && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(N.tn, { onClick() { c('1'); }, className: (0, i.A)(O, {}, [L]), children: (0, a.jsx)(u.J, { className: 'uBUXyeMF', Svg: _ }) }), (0, a.jsx)(N.tn, { onClick() { c(''.concat(+d - 1)); }, className: (0, i.A)(O, {}, [L]), children: (0, a.jsx)(u.J, { className: 'jKQ4PRf5', Svg: S }) })] }), (l == null ? void 0 : l.total_pages) ? (0, a.jsxs)(a.Fragment, {
                        children: [l.total_pages <= 7 && D([], Array(l.total_pages), !0).map(((e, t) => (0, a.jsx)(N.tn, {
                            className: (0, i.A)(O, {}, [B]), active: +d === t + 1, onClick() { c(''.concat(t + 1)); }, children: t + 1,
                        }, t))), l.total_pages > 7 && (0, a.jsxs)(a.Fragment, {
                            children: [D([], Array(l.total_pages), !0).map(((e, t) => {
                                if ((+d === t + 1 || +d + 1 === t + 1 || +d + 2 === t + 1) && +d !== l.total_pages && t + 1 !== l.total_pages && t + 2 !== l.total_pages && t + 3 !== l.total_pages) {
                                    return (0, a.jsx)(N.tn, {
                                        className: (0, i.A)(O, {}, [B]), active: +d === t + 1, onClick() { c(''.concat(t + 1)); }, children: t + 1,
                                    }, t);
                                }
                            })), l.total_pages === +d || l.total_pages - 1 == +d || l.total_pages - 2 == +d || l.total_pages - 2 - +d == 3 || l.total_pages - 2 - +d == 2 || l.total_pages - 2 - +d == 1 ? '' : (0, a.jsx)(N.tn, { className: (0, i.A)(O, {}, [B, 'JQSOdsCs']), onClick() { c(''.concat(+d + 1)); }, children: '...' }), D([], Array(l.total_pages), !0).map(((e, t) => {
                                if (l.total_pages - t + 1 == 4 || l.total_pages - t + 1 == 3 || l.total_pages - t + 1 == 2 || l.total_pages - t + 1 == 1) {
                                    return (0, a.jsx)(N.tn, {
                                        className: (0, i.A)(O, {}, [B]), active: +d === t + 1, onClick() { c(''.concat(t + 1)); }, children: t + 1,
                                    }, t);
                                }
                            }))],
                        })],
                    }) : (0, a.jsx)('div', {}), (l == null ? void 0 : l.next_page) && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(N.tn, { onClick() { c(''.concat(+d + 1)); }, className: (0, i.A)(O, {}, [L]), children: (0, a.jsx)(u.J, { Svg: S }) }), (0, a.jsx)(N.tn, { onClick() { c(''.concat(l == null ? void 0 : l.total_pages)); }, className: (0, i.A)(O, {}, [L]), children: (0, a.jsx)(u.J, { Svg: _ }) })] })],
                }),
            });
        }));
    },
}]);
