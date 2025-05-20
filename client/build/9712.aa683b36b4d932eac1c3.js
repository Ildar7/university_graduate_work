!(function () { try { const e = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; const t = (new Error()).stack; t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = '5289d567-db35-4d04-8a9c-702bac86846e', e._sentryDebugIdIdentifier = 'sentry-dbid-5289d567-db35-4d04-8a9c-702bac86846e'); } catch (e) {} }()); const _global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; _global.SENTRY_RELEASE = { id: '45ee1168f5cf48e9753bace26323152d3b61cb67' }, (self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[9712], {
    7251: (e, t, n) => {
        n.r(t), n.d(t, { default: () => Le }); const s = n(5893); const a = n(1150); const i = n(9649); const r = n(5306); const l = n(918); const o = n(7294); const c = n(7168); const d = n(1759); const u = n(121); const f = function (e) { let t; return (t = e.eventsTypes) === null || void 0 === t ? void 0 : t.page; }; const v = function (e) { let t; return (t = e.eventsTypes) === null || void 0 === t ? void 0 : t.limit; }; const h = (0, c.hg)('students/fetchEventsTypes', ((e, t) => {
            return n = void 0, s = void 0, i = function () {
                let e; let n; let s; let a; let i; let r; return (function (e, t) {
                    let n; let s; let a; let i; let r = {
                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                    }; return i = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, l[0] && (r = 0)), r;) try { if (n = 1, s && (a = 2 & l[0] ? s.return : l[0] ? s.throw || ((a = s.return) && a.call(s), 0) : s.next) && !(a = a.call(s, l[1])).done) return a; switch (s = 0, a && (l = [2 & l[0], a.value]), l[0]) { case 0: case 1: a = l; break; case 4: return r.label++, { value: l[1], done: !1 }; case 5: r.label++, s = l[1], l = [0]; continue; case 7: l = r.ops.pop(), r.trys.pop(); continue; default: if (!((a = (a = r.trys).length > 0 && a[a.length - 1]) || l[0] !== 6 && l[0] !== 2)) { r = 0; continue; } if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) { r.label = l[1]; break; } if (l[0] === 6 && r.label < a[1]) { r.label = a[1], a = l; break; } if (a && r.label < a[2]) { r.label = a[2], r.ops.push(l); break; }a[2] && r.ops.pop(), r.trys.pop(); continue; }l = t.call(e, r); } catch (e) { l = [6, e], s = 0; } finally { n = a = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                }(this, ((l) => {
                    switch (l.label) {
                    case 0: e = t.rejectWithValue, n = t.extra, s = t.getState, a = {
                        pageSelector: f, limitSelector: v, sortFieldSelector: d.DU, sortOrderSelector: d.Qg,
                    }, i = (0, u.o)('/college/events/types', a, s()), l.label = 1; case 1: return l.trys.push([1, 3,, 4]), [4, n.api.get(i)]; case 2: return [2, l.sent().data]; case 3: return (r = l.sent()).message === 'Failed to fetch' ? [2, e({ status: 500, error: 'timeout' })] : [2, e({ status: r.response.status, error: r.response.data.message })]; case 4: return [2];
                    }
                })));
            }, new ((a = void 0) || (a = Promise))(((e, t) => { function r(e) { try { o(i.next(e)); } catch (e) { t(e); } } function l(e) { try { o(i.throw(e)); } catch (e) { t(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(r, l); }o((i = i.apply(n, s || [])).next()); })); let n; let s; let a; let i;
        })); const p = function (e) { let t; return (t = e.addEventsType) === null || void 0 === t ? void 0 : t.data.title; }; const y = (0, c.hg)('eventsTypes/addEventsType', ((e, t) => {
            return n = void 0, s = void 0, i = function () {
                let e; let n; let s; let a; let i; let r; let l; let o; return (function (e, t) {
                    let n; let s; let a; let i; let r = {
                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                    }; return i = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, l[0] && (r = 0)), r;) try { if (n = 1, s && (a = 2 & l[0] ? s.return : l[0] ? s.throw || ((a = s.return) && a.call(s), 0) : s.next) && !(a = a.call(s, l[1])).done) return a; switch (s = 0, a && (l = [2 & l[0], a.value]), l[0]) { case 0: case 1: a = l; break; case 4: return r.label++, { value: l[1], done: !1 }; case 5: r.label++, s = l[1], l = [0]; continue; case 7: l = r.ops.pop(), r.trys.pop(); continue; default: if (!((a = (a = r.trys).length > 0 && a[a.length - 1]) || l[0] !== 6 && l[0] !== 2)) { r = 0; continue; } if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) { r.label = l[1]; break; } if (l[0] === 6 && r.label < a[1]) { r.label = a[1], a = l; break; } if (a && r.label < a[2]) { r.label = a[2], r.ops.push(l); break; }a[2] && r.ops.pop(), r.trys.pop(); continue; }l = t.call(e, r); } catch (e) { l = [6, e], s = 0; } finally { n = a = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                }(this, ((c) => { switch (c.label) { case 0: e = t.rejectWithValue, n = t.extra, s = t.dispatch, a = t.getState, i = p(a()), r = { name: i }, c.label = 1; case 1: return c.trys.push([1, 3,, 4]), [4, n.api.post('/college/events/types/', r)]; case 2: return l = c.sent(), s(h()), s(x.clearData()), [2, l.data]; case 3: return o = c.sent(), [2, e({ errors: o.response.data.errors, status: o.response.status })]; case 4: return [2]; } })));
            }, new ((a = void 0) || (a = Promise))(((e, t) => { function r(e) { try { o(i.next(e)); } catch (e) { t(e); } } function l(e) { try { o(i.throw(e)); } catch (e) { t(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(r, l); }o((i = i.apply(n, s || [])).next()); })); let n; let s; let a; let i;
        })); const b = (0, c.oM)({
            name: 'addEventsType', initialState: { data: { title: null }, isLoading: !1, errors: void 0 }, reducers: { setTitle(e, t) { e.data.title = t.payload; }, clearData(e) { e.data = { title: null }, e.errors = void 0; } }, extraReducers(e) { e.addCase(y.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(y.fulfilled, ((e) => { e.isLoading = !1; })).addCase(y.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })); },
        }); var x = b.actions; const g = b.reducer; const m = n(4387); const j = n(4475); const w = n(2308); const S = n(5044); const N = n(3280); const T = n(4809); const k = n(1385); const E = n(6458); const B = n(5461); const C = n(530); const L = n(9161); const D = function (e) { let t; return (t = e.addEventsType) === null || void 0 === t ? void 0 : t.errors; }; const O = {
            tabBtn: 'TcVJX9CI', tabsButtonsBlock: 'psk4bdiU', title: 'vVFNus6A', settings: 'xLjj5DJm', newAddField: 'ptRAFTyR', tabBlock: 'cl6dbKFE', form: 'oidtAQGR', footerBtn: 'ksX9Pvtn', greenBtn: 'vgJBhNtc', footer: 'KGnVE7ca', message: 'Kr5LZEMD', messageIcon: 'HpK2VYcb',
        }; let I = function () { return I = Object.assign || function (e) { for (var t, n = 1, s = arguments.length; n < s; n++) for (const a in t = arguments[n])Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e; }, I.apply(this, arguments); }; const A = function (e) {
            const t = e.className; const n = e.visible; const a = e.setVisible; const i = (0, B.T)(); const r = (0, o.useState)(!1); const l = r[0]; const c = r[1]; const d = (0, o.useState)(!1); const u = d[0]; const f = d[1]; const v = (0, o.useState)(); const h = v[0]; const b = v[1]; const g = (0, o.useRef)(null); const A = (0, E.v9)(p); const R = (0, E.v9)(D); const z = (0, o.useCallback)((() => { a(!1); }), [a]); const F = function () { z(), c(!1), f(!1); }; return (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(j.Tk, {
                    className: (0, m.A)(O.AddEventsType, {}, [t]),
                    visible: n,
                    onClose: z,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, s.jsxs)(j.lx, {
                        className: (0, m.A)(O.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: l,
                        onSubmit(e) {
                            return t = void 0, n = void 0, a = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let s; let a; let i; let r = {
                                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                                    }; return i = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, l[0] && (r = 0)), r;) try { if (n = 1, s && (a = 2 & l[0] ? s.return : l[0] ? s.throw || ((a = s.return) && a.call(s), 0) : s.next) && !(a = a.call(s, l[1])).done) return a; switch (s = 0, a && (l = [2 & l[0], a.value]), l[0]) { case 0: case 1: a = l; break; case 4: return r.label++, { value: l[1], done: !1 }; case 5: r.label++, s = l[1], l = [0]; continue; case 7: l = r.ops.pop(), r.trys.pop(); continue; default: if (!((a = (a = r.trys).length > 0 && a[a.length - 1]) || l[0] !== 6 && l[0] !== 2)) { r = 0; continue; } if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) { r.label = l[1]; break; } if (l[0] === 6 && r.label < a[1]) { r.label = a[1], a = l; break; } if (a && r.label < a[2]) { r.label = a[2], r.ops.push(l); break; }a[2] && r.ops.pop(), r.trys.pop(); continue; }l = t.call(e, r); } catch (e) { l = [6, e], s = 0; } finally { n = a = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                                }(this, ((s) => { switch (s.label) { case 0: return e.preventDefault(), t = e.currentTarget, f(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), c(!0), t.checkValidity() ? A ? [4, i(y())] : [3, 2] : [3, 3]; case 1: return (n = s.sent()).meta.requestStatus === 'fulfilled' && (b(C.F.success('Тип соревнования добавлен')), F()), n.meta.requestStatus === 'rejected' && f(!0), [3, 3]; case 2: f(!0), s.label = 3; case 3: return [2]; } })));
                            }, new ((s = void 0) || (s = Promise))(((e, i) => { function r(e) { try { o(a.next(e)); } catch (e) { i(e); } } function l(e) { try { o(a.throw(e)); } catch (e) { i(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof s ? n : new s(((e) => { e(n); }))).then(r, l); }o((a = a.apply(t, n || [])).next()); })); let t; let n; let s; let a;
                        },
                        children: [(0, s.jsx)(j.p0, { children: (0, s.jsx)(j.fl, { children: 'Добавление типа соревнования' }) }), (0, s.jsx)(j.sD, { children: (0, s.jsx)('div', { className: O.tab, children: (0, s.jsx)('div', { className: O.tabBlock, children: (0, s.jsx)('div', { className: O.settings, children: (0, s.jsxs)('div', { className: O.newAddField, children: [(0, s.jsx)('h6', {className: O.newAddFieldTitle, children: "Наименование*"}), (0, s.jsx)(k.h, {
 type: 'text', placeholder: 'не участвовал', feedbackValid: R ? '' : 'Здорово!', invalid: !!R, feedbackInvalid: 'Введите корректные данные!', value: A || '', onChange (e) { i(x.setTitle(e.target.value)) }, required: !0 
})] }) }) }) }) }), (0, s.jsxs)(j.Ym, { className: O.footer, children: [(0, s.jsx)('div', { className: O.message, children: u && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(w.Z, { icon: S.D, customClassName: O.messageIcon }), (0, s.jsx)(T.xv, { size: T.yH.M, weight: T.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, s.jsxs)('div', { className: O.footerBtns, children: [(0, s.jsx)(L.zx, {
 theme: L.bn.OUTLINE, className: O.footerBtn, onClick: F, children: (0, s.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Отмена'}) 
}), (0, s.jsxs)(L.zx, { type: 'submit', className: (0, m.A)(O.footerBtn, {}, [O.greenBtn]), children: [(0, s.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Добавить'}), (0, s.jsx)(w.Z, { icon: N.q, className: O.btnIcon })] })] })] })],
                    }),
                }), (0, s.jsx)(j.KF, { ref: g, push: h, placement: 'top-end' })],
            });
        }; const R = function (e) { let t; return (t = e.eventsTypes) === null || void 0 === t ? void 0 : t.data; }; const z = function (e) { let t; return (t = e.eventsTypes) === null || void 0 === t ? void 0 : t.isLoading; }; const F = function (e) { let t; return (t = e.eventsTypes) === null || void 0 === t ? void 0 : t.error; }; const V = (0, c.oM)({
            name: 'eventsTypes',
            initialState: {
                data: void 0, isLoading: !0, error: void 0, page: '1', limit: '50',
            },
            reducers: { setPage(e, t) { e.page = t.payload; }, setLimit(e, t) { e.limit = t.payload; } },
            extraReducers(e) { e.addCase(h.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(h.fulfilled, ((e, t) => { e.isLoading = !1, e.data = { data: t.payload.data, pagination: t.payload.pagination }; })).addCase(h.rejected, ((e, t) => { e.isLoading = !1, e.error = t.payload; })); },
        }); const M = V.actions; const _ = V.reducer; const H = n(1138); const X = (0, c.hg)('eventsTypes/fetchEventsTypeDetail', ((e, t) => {
            return n = void 0, s = void 0, i = function () {
                let n; let s; let a; let i; return (function (e, t) {
                    let n; let s; let a; let i; let r = {
                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                    }; return i = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, l[0] && (r = 0)), r;) try { if (n = 1, s && (a = 2 & l[0] ? s.return : l[0] ? s.throw || ((a = s.return) && a.call(s), 0) : s.next) && !(a = a.call(s, l[1])).done) return a; switch (s = 0, a && (l = [2 & l[0], a.value]), l[0]) { case 0: case 1: a = l; break; case 4: return r.label++, { value: l[1], done: !1 }; case 5: r.label++, s = l[1], l = [0]; continue; case 7: l = r.ops.pop(), r.trys.pop(); continue; default: if (!((a = (a = r.trys).length > 0 && a[a.length - 1]) || l[0] !== 6 && l[0] !== 2)) { r = 0; continue; } if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) { r.label = l[1]; break; } if (l[0] === 6 && r.label < a[1]) { r.label = a[1], a = l; break; } if (a && r.label < a[2]) { r.label = a[2], r.ops.push(l); break; }a[2] && r.ops.pop(), r.trys.pop(); continue; }l = t.call(e, r); } catch (e) { l = [6, e], s = 0; } finally { n = a = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                }(this, ((r) => { switch (r.label) { case 0: n = t.rejectWithValue, s = t.extra, a = t.dispatch, r.label = 1; case 1: return r.trys.push([1, 3,, 4]), [4, s.api.get('/college/events/types/'.concat(e))]; case 2: return i = r.sent(), a(K.setEventsTypeData(i.data)), [2, i.data]; case 3: return r.sent().message === 'Failed to fetch' ? [2, n('timeout')] : [2, n('ERROR')]; case 4: return [2]; } })));
            }, new ((a = void 0) || (a = Promise))(((e, t) => { function r(e) { try { o(i.next(e)); } catch (e) { t(e); } } function l(e) { try { o(i.throw(e)); } catch (e) { t(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(r, l); }o((i = i.apply(n, s || [])).next()); })); let n; let s; let a; let i;
        })); const P = function (e) { let t; let n; return (n = (t = e.editEventsType) === null || void 0 === t ? void 0 : t.newFields) === null || void 0 === n ? void 0 : n.title; }; const Z = (0, c.hg)('eventsTypes/editEventsType', ((e, t) => {
            return n = void 0, s = void 0, i = function () {
                let n; let s; let a; let i; let r; let l; let o; let c; return (function (e, t) {
                    let n; let s; let a; let i; let r = {
                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                    }; return i = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, l[0] && (r = 0)), r;) try { if (n = 1, s && (a = 2 & l[0] ? s.return : l[0] ? s.throw || ((a = s.return) && a.call(s), 0) : s.next) && !(a = a.call(s, l[1])).done) return a; switch (s = 0, a && (l = [2 & l[0], a.value]), l[0]) { case 0: case 1: a = l; break; case 4: return r.label++, { value: l[1], done: !1 }; case 5: r.label++, s = l[1], l = [0]; continue; case 7: l = r.ops.pop(), r.trys.pop(); continue; default: if (!((a = (a = r.trys).length > 0 && a[a.length - 1]) || l[0] !== 6 && l[0] !== 2)) { r = 0; continue; } if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) { r.label = l[1]; break; } if (l[0] === 6 && r.label < a[1]) { r.label = a[1], a = l; break; } if (a && r.label < a[2]) { r.label = a[2], r.ops.push(l); break; }a[2] && r.ops.pop(), r.trys.pop(); continue; }l = t.call(e, r); } catch (e) { l = [6, e], s = 0; } finally { n = a = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                }(this, ((d) => { switch (d.label) { case 0: n = t.rejectWithValue, s = t.extra, a = t.dispatch, i = t.getState, r = P(i()), l = { name: r }, d.label = 1; case 1: return d.trys.push([1, 3,, 4]), [4, s.api.put('/college/events/types/'.concat(e), l)]; case 2: return o = d.sent(), a(h()), a(X(e)), [2, o.data]; case 3: return c = d.sent(), [2, n({ errors: c.response.data.errors, status: c.response.status })]; case 4: return [2]; } })));
            }, new ((a = void 0) || (a = Promise))(((e, t) => { function r(e) { try { o(i.next(e)); } catch (e) { t(e); } } function l(e) { try { o(i.throw(e)); } catch (e) { t(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(r, l); }o((i = i.apply(n, s || [])).next()); })); let n; let s; let a; let i;
        })); const q = (0, c.oM)({
            name: 'editEventsType',
            initialState: {
                data: void 0, newFields: void 0, isLoading: !1, errors: void 0,
            },
            reducers: { setEventsTypeData(e, t) { t.payload && (e.data = t.payload, e.newFields = { title: e.data.typeofevent }); }, setTitle(e, t) { e.newFields.title = t.payload; }, clearNewFields(e) { let t; e.newFields = { title: ((t = e.data) === null || void 0 === t ? void 0 : t.typeofevent) || null }, e.errors = void 0; } },
            extraReducers(e) { e.addCase(Z.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(Z.fulfilled, ((e) => { e.isLoading = !1; })).addCase(Z.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })); },
        }); var K = q.actions; const G = q.reducer; const U = n(1783); const W = n(8263); const J = function (e) { let t; return (t = e.eventsTypeDetail) === null || void 0 === t ? void 0 : t.error; }; const Y = function (e) { let t; return (t = e.eventsTypeDetail) === null || void 0 === t ? void 0 : t.isLoading; }; const Q = function (e) { let t; return (t = e.eventsTypeDetail) === null || void 0 === t ? void 0 : t.data; }; const $ = (0, c.oM)({
            name: 'eventsTypeDetail', initialState: { data: void 0, isLoading: !1, error: void 0 }, reducers: {}, extraReducers(e) { e.addCase(X.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(X.fulfilled, ((e, t) => { e.isLoading = !1, e.data = t.payload; })).addCase(X.rejected, ((e, t) => { e.isLoading = !1, e.error = t.payload; })); },
        }); const ee = ($.actions, $.reducer); const te = function (e) { let t; return (t = e.editEventsType) === null || void 0 === t ? void 0 : t.isLoading; }; const ne = function (e) { let t; return (t = e.editEventsType) === null || void 0 === t ? void 0 : t.errors; }; const se = {
            tabBtn: 'b2AEu7kA', tabsButtonsBlock: 'OamSZduT', title: 'sQ8GpSJt', footerBtn: 'GUipE8Yo', greenBtn: 'qu4CwYi0', redBtn: 'oZAluQiB', settings: 'RSqPjSTc', newAddField: 'SAsFJ_So', tabBlock: '_5DKqVvKX', form: 'wU_Zv8wm', footer: 'DTaZYRwq', message: 'eQp0ueUj', messageIcon: 'zk8NFzYC',
        }; let ae = function () { return ae = Object.assign || function (e) { for (var t, n = 1, s = arguments.length; n < s; n++) for (const a in t = arguments[n])Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e; }, ae.apply(this, arguments); }; const ie = function (e) {
            const t = e.className; const n = e.visible; const a = e.setVisible; const i = e.eventsTypeId; const r = e.onDeleteEventsType; const l = (0, B.T)(); const c = (0, o.useState)(); const d = c[0]; const u = c[1]; const f = (0, o.useRef)(null); const v = (0, o.useState)(!1); const h = v[0]; const p = v[1]; const y = (0, o.useState)(!1); const b = y[0]; const x = y[1]; const g = (0, E.v9)(Q); const N = (0, E.v9)(Y); const D = (0, E.v9)(J); const O = (0, E.v9)(te); const I = (0, E.v9)(P); const A = (0, E.v9)(ne); (0, o.useEffect)((() => { i && l(X(i)); }), [l, i]); let R; const z = function () { a(!1), p(!1), x(!1); }; const F = function () { z(), l(K.clearNewFields()); }; return R = O || N ? (0, s.jsx)(H.O, { width: '100%', height: 80 }) : D ? (0, s.jsx)(T.xv, {
                theme: T.lg.ERROR, size: T.yH.M, weight: T.fs.SEMIBOLD, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, s.jsx)('div', {
                className: se.tab,
                children: (0, s.jsx)('div', {
                    className: se.tabBlock,
                    children: (0, s.jsx)('div', {
                        className: se.settings,
                        children: (0, s.jsxs)('div', {
                            className: se.newAddField,
                            children: [(0, s.jsx)('h6', { className: se.newAddFieldTitle, children: 'Наименование' }), (0, s.jsx)(k.h, {
                                type: 'text', placeholder: 'не участвовал', feedbackValid: A ? '' : 'Здорово!', invalid: !!A, feedbackInvalid: 'Введите корректные данные', value: I || '', onChange(e) { l(K.setTitle(e.target.value)); },
                            })],
                        }),
                    }),
                }),
            }), (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsx)(j.Tk, {
                    className: (0, m.A)(se.EditEventsType, {}, [t]),
                    visible: n,
                    onClose: z,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, s.jsxs)(j.lx, {
                        className: (0, m.A)(se.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: h,
                        onSubmit(e) {
                            return t = void 0, n = void 0, a = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let s; let a; let i; let r = {
                                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                                    }; return i = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, l[0] && (r = 0)), r;) try { if (n = 1, s && (a = 2 & l[0] ? s.return : l[0] ? s.throw || ((a = s.return) && a.call(s), 0) : s.next) && !(a = a.call(s, l[1])).done) return a; switch (s = 0, a && (l = [2 & l[0], a.value]), l[0]) { case 0: case 1: a = l; break; case 4: return r.label++, { value: l[1], done: !1 }; case 5: r.label++, s = l[1], l = [0]; continue; case 7: l = r.ops.pop(), r.trys.pop(); continue; default: if (!((a = (a = r.trys).length > 0 && a[a.length - 1]) || l[0] !== 6 && l[0] !== 2)) { r = 0; continue; } if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) { r.label = l[1]; break; } if (l[0] === 6 && r.label < a[1]) { r.label = a[1], a = l; break; } if (a && r.label < a[2]) { r.label = a[2], r.ops.push(l); break; }a[2] && r.ops.pop(), r.trys.pop(); continue; }l = t.call(e, r); } catch (e) { l = [6, e], s = 0; } finally { n = a = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                                }(this, ((s) => { switch (s.label) { case 0: return e.preventDefault(), t = e.currentTarget, x(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), p(!0), t.checkValidity() ? (g == null ? void 0 : g.typeofevent) !== I ? [3, 1] : (u(C.F.error('Для сохранения вы должны внести изменения!')), [3, 3]) : [3, 3]; case 1: return [4, l(Z(i))]; case 2: (n = s.sent()).meta.requestStatus === 'fulfilled' && (u(C.F.success('Информация о типе соревнования успешно обновлена')), F()), n.meta.requestStatus === 'rejected' && x(!0), s.label = 3; case 3: return [2]; } })));
                            }, new ((s = void 0) || (s = Promise))(((e, i) => { function r(e) { try { o(a.next(e)); } catch (e) { i(e); } } function l(e) { try { o(a.throw(e)); } catch (e) { i(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof s ? n : new s(((e) => { e(n); }))).then(r, l); }o((a = a.apply(t, n || [])).next()); })); let t; let n; let s; let a;
                        },
                        children: [(0, s.jsx)(j.p0, { children: O || N ? (0, s.jsx)(H.O, { width: 200, height: 30 }) : (0, s.jsxs)(j.fl, { children: ['Изменение типа соревнования №', g == null ? void 0 : g.id_typeofevent] }) }), (0, s.jsx)(j.sD, { children: R }), (0, s.jsxs)(j.Ym, {
 className: se.footer,
children: [(0, s.jsx)('div', { className: se.message, children: b && (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(w.Z, { icon: S.D, customClassName: se.messageIcon }), (0, s.jsx)(T.xv, { size: T.yH.M, weight: T.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, s.jsxs)('div', {
 className: se.footerBtns,
children: [(0, s.jsx)(L.zx, {
                            theme: L.bn.OUTLINE, className: se.footerBtn, onClick: F, children: (0, s.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Отмена' }), 
}), (0, s.jsxs)(L.zx, {
                            theme: L.bn.ERROR, className: (0, m.A)(se.footerBtn, {}, [se.redBtn]), onClick() { r(g), z(); }, disabled: N || O || !!D, children: [(0, s.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Удалить' }), (0, s.jsx)(w.Z, { icon: U.N, className: se.btnIcon })], 
}), (0, s.jsxs)(L.zx, {
                            type: 'submit', className: (0, m.A)(se.footerBtn, {}, [se.greenBtn]), disabled: N || O || !!D, children: [(0, s.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Сохранить' }), (0, s.jsx)(w.Z, { icon: W.F, className: se.btnIcon })], 
})] 
})] 
})],
                    }),
                }), (0, s.jsx)(j.KF, { ref: f, push: d, placement: 'top-end' })],
            });
        }; const re = { footerBtn: 'tqasat14', redBtn: 'PLrnCayk', deleteText: 'lWINnGEX' }; const le = (0, c.hg)('eventsTypes/deleteEventsType', ((e, t) => {
            return n = void 0, s = void 0, i = function () {
                let n; let s; let a; let i; return (function (e, t) {
                    let n; let s; let a; let i; let r = {
                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                    }; return i = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, l[0] && (r = 0)), r;) try { if (n = 1, s && (a = 2 & l[0] ? s.return : l[0] ? s.throw || ((a = s.return) && a.call(s), 0) : s.next) && !(a = a.call(s, l[1])).done) return a; switch (s = 0, a && (l = [2 & l[0], a.value]), l[0]) { case 0: case 1: a = l; break; case 4: return r.label++, { value: l[1], done: !1 }; case 5: r.label++, s = l[1], l = [0]; continue; case 7: l = r.ops.pop(), r.trys.pop(); continue; default: if (!((a = (a = r.trys).length > 0 && a[a.length - 1]) || l[0] !== 6 && l[0] !== 2)) { r = 0; continue; } if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) { r.label = l[1]; break; } if (l[0] === 6 && r.label < a[1]) { r.label = a[1], a = l; break; } if (a && r.label < a[2]) { r.label = a[2], r.ops.push(l); break; }a[2] && r.ops.pop(), r.trys.pop(); continue; }l = t.call(e, r); } catch (e) { l = [6, e], s = 0; } finally { n = a = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                }(this, ((r) => { switch (r.label) { case 0: n = t.rejectWithValue, s = t.extra, a = t.dispatch, r.label = 1; case 1: return r.trys.push([1, 3,, 4]), [4, s.api.delete('/college/events/types/'.concat(e))]; case 2: return i = r.sent(), a(h()), [2, i.data]; case 3: return r.sent().message === 'Failed to fetch' ? [2, n('timeout')] : [2, n('ERROR')]; case 4: return [2]; } })));
            }, new ((a = void 0) || (a = Promise))(((e, t) => { function r(e) { try { o(i.next(e)); } catch (e) { t(e); } } function l(e) { try { o(i.throw(e)); } catch (e) { t(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(r, l); }o((i = i.apply(n, s || [])).next()); })); let n; let s; let a; let i;
        })); let oe = function () { return oe = Object.assign || function (e) { for (var t, n = 1, s = arguments.length; n < s; n++) for (const a in t = arguments[n])Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e; }, oe.apply(this, arguments); }; const ce = function (e) {
            const t = e.className; const n = e.eventsType; const a = e.visible; const i = e.setVisible; const r = (0, B.T)(); const l = (0, o.useState)(); const c = l[0]; const d = l[1]; const u = (0, o.useRef)(null); const f = (0, o.useState)(!1); const v = f[0]; const h = f[1]; const p = function () { i(!1); }; return (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsxs)(j.Tk, {
                    className: (0, m.A)(re.DeleteEventsType, {}, [t]),
visible: a,
onClose: p,
size: 'lg',
alignment: 'center',
children: [(0, s.jsx)(j.p0, { children: (0, s.jsxs)(j.fl, { children: ['Удаление типа соревнования №', n == null ? void 0 : n.id_typeofevent] }) }), (0, s.jsx)(j.sD, { children: (0, s.jsxs)(T.xv, { size: T.yH.XM, className: re.deleteText, children: ['Вы действительно хотите удалить тип соревнования', ' ', (0, s.jsxs)('span', { children: ['№', n == null ? void 0 : n.id_typeofevent, ' ', '-', ' ', '"'.concat(n == null ? void 0 : n.typeofevent, '"')] }), ' ', 'и все связанные с ним данные?'] }) }), (0, s.jsx)(j.Ym, {
 className: re.footer,
children: (0, s.jsxs)('div', {
 className: re.footerBtns,
children: [(0, s.jsx)(L.zx, {
                        theme: L.bn.OUTLINE, className: re.footerBtn, onClick: p, children: (0, s.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Отмена' }), 
}), (0, s.jsxs)(L.zx, {
                        theme: L.bn.ERROR, className: (0, m.A)(re.footerBtn, {}, [re.redBtn]), onClick() { let e; e = n.id_typeofevent.toString(), h(!0), r(le(e)).then(((e) => { e.meta.requestStatus === 'fulfilled' ? (d(C.F.success('Тип соревнования №'.concat(n == null ? void 0 : n.id_typeofevent, ' удален'))), p(), h(!1)) : e.meta.requestStatus === 'rejected' && (d(C.F.error('Произошла ошибка при удалении, попробуйте снова')), h(!1)); })); }, disabled: v, children: [(0, s.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Удалить' }), (0, s.jsx)(w.Z, { icon: U.N, className: re.btnIcon })], 
})] 
}) 
})],
                }), (0, s.jsx)(j.KF, { ref: u, push: c, placement: 'top-end' })],
            });
        }; const de = n(779); const ue = {
            'modal-dialog': 'S9yqXGLo', tabBtn: 'pL_KMqdX', tabsButtonsBlock: 'TKjVUWON', title: 'oA0bHszg', footerBtn: 'upnsJqX6', redBtn: 'HscVpyYt', settings: 'svWiIQtV', newAddField: 'DdXkqdrK', tabBlock: 'xLX07Mc7', footer: 'hd66rcUd', message: 'Ouq0ljSh', messageIcon: 'RGJf7hxe', checkboxText: 'aAyoeKPQ',
        }; let fe = function () { return fe = Object.assign || function (e) { for (var t, n = 1, s = arguments.length; n < s; n++) for (const a in t = arguments[n])Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e; }, fe.apply(this, arguments); }; const ve = function (e) {
            const t = e.className; const n = e.visible; const a = e.setVisible; const i = e.eventsTypeId; const r = e.onDeleteEventsType; const l = e.onEditEventsType; const c = (0, B.T)(); const d = (0, E.v9)(Q); const u = (0, E.v9)(Y); const f = (0, E.v9)(J); (0, o.useEffect)((() => { i && c(X(i)); }), [c, i]); let v; const h = function () { a(!1); }; return v = u ? (0, s.jsx)(H.O, { width: '100%', height: 120 }) : f ? (0, s.jsx)(T.xv, {
                theme: T.lg.ERROR, size: T.yH.M, weight: T.fs.BOLD, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, s.jsx)('div', { className: ue.tab, children: (0, s.jsxs)('div', { className: ue.tabBlock, children: [(0, s.jsx)('div', { className: ue.settings, children: (0, s.jsxs)('div', { className: ue.newAddField, children: [(0, s.jsx)('h6', { className: ue.newAddFieldTitle, children: 'ID типа соревнования' }), (0, s.jsx)(T.xv, { size: T.yH.S, weight: T.fs.BOLD, children: d == null ? void 0 : d.id_typeofevent })] }) }), (0, s.jsx)('div', { className: ue.settings, children: (0, s.jsxs)('div', { className: ue.newAddField, children: [(0, s.jsx)('h6', { className: ue.newAddFieldTitle, children: 'Наименование' }), (0, s.jsx)(T.xv, { size: T.yH.S, weight: T.fs.BOLD, children: d == null ? void 0 : d.typeofevent })] }) })] }) }), (0, s.jsxs)(j.Tk, {
                className: (0, m.A)(ue.ViewEventsType, {}, [t, 'view-student-modal']),
visible: n,
onClose: h,
alignment: 'center',
children: [(0, s.jsx)(j.p0, { children: u ? (0, s.jsx)(H.O, { width: 200, height: 30 }) : (0, s.jsxs)(j.fl, { children: ['Тип соревнования №', d == null ? void 0 : d.id_typeofevent] }) }), (0, s.jsx)(j.sD, { children: v }), (0, s.jsxs)(j.Ym, {
 className: ue.footer,
children: [(0, s.jsx)('div', {}), (0, s.jsxs)('div', {
 className: ue.footerBtns,
children: [(0, s.jsx)(L.zx, {
                    theme: L.bn.OUTLINE, className: ue.footerBtn, onClick: h, children: (0, s.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Закрыть' }), 
}), (0, s.jsxs)(L.zx, {
                    theme: L.bn.ERROR, className: (0, m.A)(ue.footerBtn, {}, [ue.redBtn]), onClick() { r(d), h(); }, disabled: u || !!f, children: [(0, s.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Удалить' }), (0, s.jsx)(w.Z, { icon: U.N, className: ue.btnIcon })], 
}), (0, s.jsxs)(L.zx, {
                    color: 'primary', className: ue.footerBtn, onClick() { l(i), h(); }, disabled: u || !!f, children: [(0, s.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Редактировать' }), (0, s.jsx)(w.Z, { icon: de.C, className: ue.btnIcon })], 
})] 
})] 
})],
            });
        }; const he = n(6837); const pe = n(1353); const ye = n(773); const be = n(5606); const xe = n(2008); const ge = n(596); const me = n(4164); const je = {
            TableBlock: 'UokBB_zI', table: 'Ff7KpLLt', tableRow: 'eGOXA7KM', tableCell: 'ZHODwTmL', tableHead: 'TxTKM9Oz', tableCellId: 'm377nH0w', tableBody: 'g_qSDzI0', tableSortIcon: 'Qjee9tKK', active: 'j8TND7Ss', cellTextBg: 'Y2tAwWcn', tableCellBtns: 'kUEjQmrr', tableCellBtnsWrapper: 'mGRLtVlb', editBtn: 'Wk3pczlF', checkbox: 'oUqN23DT', tableWithCheckboxes: 'xZ_vfq6w',
        }; let we = function () { return we = Object.assign || function (e) { for (var t, n = 1, s = arguments.length; n < s; n++) for (const a in t = arguments[n])Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e; }, we.apply(this, arguments); }; const Se = function (e) {
            let t; let n; let a; let i; const r = e.className; const l = e.data; const c = e.exportDisabled; const u = (0, B.T)(); const f = (0, E.v9)(z); const v = (0, E.v9)(F); const p = (0, E.v9)(d.DU); const y = (0, E.v9)(d.Qg); const b = (0, o.useState)(); const x = b[0]; const g = b[1]; const j = (0, o.useState)(!1); const w = j[0]; const S = j[1]; const N = (0, o.useState)(!1); const k = N[0]; const C = N[1]; const D = (0, o.useState)(!1); const O = D[0]; const I = D[1]; const A = (0, o.useState)(); const R = A[0]; const V = A[1]; const M = function (e) { C(!0), V(e); }; const _ = (0, o.useCallback)(((e) => { I(!0), g(e); }), []); (0, o.useEffect)((() => { u(d.f$.setSort('id_typeofevent')); }), [u]); let X; const P = (0, o.useCallback)(((e) => { u(d.f$.setSort(e)), u(h()); }), [u]); X = f ? (0, s.jsx)(H.O, { height: 250 }) : v ? (0, s.jsx)(T.xv, {
                theme: T.lg.ERROR, size: T.yH.M, weight: T.fs.SEMIBOLD, className: je.error, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : l.length ? (0, s.jsxs)('div', {
 className: (0, m.A)(je.table, (t = {}, t[je.tableWithCheckboxes] = !c, t), []),
children: [(0, s.jsx)('div', {
 className: je.tableHead,
children: (0, s.jsxs)('div', {
 className: je.tableRow,
children: [!c && (0, s.jsx)(he.X, { className: je.checkbox, id: 'checkbox-events-types-all' }), (0, s.jsxs)(L.zx, {
                theme: L.bn.CLEAR, className: (0, m.A)(je.tableCell, {}, [je.tableCellId]), onClick() { P('id_typeofevent'); }, children: [(0, s.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'ID типа соревнования' }), (0, s.jsx)(pe.J, { Svg: y === 'asc' ? ye.Z : be.Z, className: (0, m.A)(je.tableSortIcon, (n = {}, n[je.active] = p === 'id_typeofevent', n), []) })], 
}), (0, s.jsxs)(L.zx, {
                theme: L.bn.CLEAR, className: je.tableCell, onClick() { P('typeofevent'); }, children: [(0, s.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Наименование' }), (0, s.jsx)(pe.J, { Svg: y === 'asc' ? ye.Z : be.Z, className: (0, m.A)(je.tableSortIcon, (a = {}, a[je.active] = p === 'typeofevent', a), []) })], 
}), (0, s.jsx)('div', { className: (0, m.A)(je.tableCell, {}, [je.tableCellBtnsWrapper]) })] 
}) 
}), (0, s.jsx)('div', { className: je.tableBody, children: l == null ? void 0 : l.map(((e) => (0, s.jsxs)('div', { className: je.tableRow, children: [!c && (0, s.jsx)(he.X, { className: je.checkbox, id: 'checkbox-events-types-'.concat(e.id_typeofevent) }), (0, s.jsx)('div', { className: (0, m.A)(je.tableCell, {}, [je.tableCellId]), children: (0, s.jsx)(T.xv, { size: T.yH.XS, children: e.id_typeofevent }) }), (0, s.jsx)('div', { className: je.tableCell, children: (0, s.jsx)(T.xv, { size: T.yH.XS, children: e.typeofevent }) }), (0, s.jsxs)('div', { className: (0, m.A)(je.tableCell, {}, [je.tableCellBtns]), children: [(0, s.jsx)(L.zx, { theme: L.bn.CLEAR, title: 'Просмотр', className: je.editBtn, onClick () { var t; t = e.id_typeofevent.toString(), S(!0), V(t) }, children: (0, s.jsx)(pe.J, { Svg: xe.Z }) }), (0, s.jsx)(L.zx, { theme: L.bn.CLEAR, title: 'Редактировать', className: je.editBtn, onClick () { M(e.id_typeofevent.toString()) }, children: (0, s.jsx)(pe.J, { Svg: ge.Z }) }), (0, s.jsx)(L.zx, { theme: L.bn.CLEAR, title: 'Удалить', className: je.editBtn, onClick () { _(e) }, children: (0, s.jsx)(pe.J, { Svg: me.Z }) })] })] }, e.id_typeofevent))) })] 
}) : (0, s.jsx)(T.xv, { children: 'Ничего не найдено...' }); const Z = ((i = {})[je.error] = !!v, i); return (0, s.jsxs)('div', {
                className: (0, m.A)(je.TableBlock, Z, [r]),
                children: [X, (0, s.jsx)(ve, {
                    visible: w, setVisible: S, eventsTypeId: R, onDeleteEventsType: _, onEditEventsType: M,
                }), (0, s.jsx)(ie, {
                    visible: k, setVisible: C, eventsTypeId: R, onDeleteEventsType: _,
                }), (0, s.jsx)(ce, { eventsType: x, visible: O, setVisible: I })],
            });
        }; const Ne = n(7730); const Te = n(7687); const ke = n(5375); const Ee = n(2556); let Be = function () { return Be = Object.assign || function (e) { for (var t, n = 1, s = arguments.length; n < s; n++) for (const a in t = arguments[n])Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e; }, Be.apply(this, arguments); }; const Ce = {
            eventsTypes: _, addEventsType: g, eventsTypeDetail: ee, editEventsType: G,
        }; const Le = function (e) {
            e.className; const t = (0, B.T)(); const n = (0, o.useState)(!1); const c = n[0]; const d = n[1]; const u = (0, E.v9)(R); const p = (0, E.v9)(z); const y = (0, E.v9)(F); const b = (0, E.v9)(v); const x = (0, E.v9)(f); const g = (0, o.useState)(''); const m = g[0]; const j = g[1]; const w = (0, o.useState)(); const S = w[0]; const N = w[1]; const T = (0, o.useCallback)(((e) => { j(e); }), []); const k = (0, o.useCallback)(((e) => { t(M.setLimit(e)), t(h()); }), [t]); const C = (0, o.useCallback)(((e) => { t(M.setPage(e)), t(h()); }), [t]); return (0, o.useEffect)((() => { N((u == null ? void 0 : u.data) || []); }), [u]), (0, o.useEffect)((() => { const e = (0, Ne.$C)(m, (u == null ? void 0 : u.data) || []); N(e || []); }), [u, m]), (0, o.useEffect)((() => { t(h()); }), [t]), (0, s.jsx)(l.B, {
                title: 'LMS - Тип соревнования',
                children: (0, s.jsxs)(a.W, {
                    reducers: Ce,
                    removeAfterUnmount: !0,
                    children: [(0, s.jsxs)('div', {
                        children: [(0, s.jsxs)('div', {
                            className: 'page-settings '.concat(!1),
                            children: [(0, s.jsx)(i.o, {
                                value: m, onChange: T, searchText: 'Поиск по наименованию', error: y, isLoading: p,
                            }), (0, s.jsx)(r.X, {
                                onlyAdding: !0, setVisibleAddNewField: d, addingModalText: 'Добавить тип соревнования', error: y, isLoading: p, references: Ee.x, referencesTitle: 'Справочники', children: (0, s.jsx)(A, { visible: c, setVisible: d }),
                            })],
                        }), (0, s.jsx)(Se, { data: S || [], exportDisabled: !0 }), (0, s.jsxs)('div', {
                            className: 'page-table-settings',
                            children: [(0, s.jsx)(Te.K, {
                                data: S || [], onChange: k, onChangePage: C, paginationData: u == null ? void 0 : u.pagination, itemsLimit: b, withRecords: !0, isLoading: p, error: y,
                            }), (0, s.jsx)(Te.N, {
                                data: S || [], onChange: C, itemsPage: x, isLoading: p, error: y, paginationData: u == null ? void 0 : u.pagination,
                            })],
                        })],
                    }), y && (0, s.jsx)(ke.d, { error: y })],
                }),
            });
        };
    },
}]);
