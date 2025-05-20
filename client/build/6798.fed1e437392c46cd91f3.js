!(function () { try { const e = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; const t = (new Error()).stack; t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = 'f0f8973d-b841-478d-b691-cf993158e991', e._sentryDebugIdIdentifier = 'sentry-dbid-f0f8973d-b841-478d-b691-cf993158e991'); } catch (e) {} }()); const _global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; _global.SENTRY_RELEASE = { id: '45ee1168f5cf48e9753bace26323152d3b61cb67' }, (self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[6798], {
    376: (e, t, n) => {
        n.r(t), n.d(t, { default: () => De }); const i = n(5893); const r = n(1150); const a = n(9649); const s = n(5306); const l = n(918); const o = n(7294); const c = n(7168); const d = n(1759); const u = n(121); const f = function (e) { let t; return (t = e.residenceTypes) === null || void 0 === t ? void 0 : t.page; }; const h = function (e) { let t; return (t = e.residenceTypes) === null || void 0 === t ? void 0 : t.limit; }; const p = (0, c.hg)('students/fetchResidenceTypes', ((e, t) => {
            return n = void 0, i = void 0, a = function () {
                let e; let n; let i; let r; let a; let s; return (function (e, t) {
                    let n; let i; let r; let a; let s = {
                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                    }; return a = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, l[0] && (s = 0)), s;) try { if (n = 1, i && (r = 2 & l[0] ? i.return : l[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, l[1])).done) return r; switch (i = 0, r && (l = [2 & l[0], r.value]), l[0]) { case 0: case 1: r = l; break; case 4: return s.label++, { value: l[1], done: !1 }; case 5: s.label++, i = l[1], l = [0]; continue; case 7: l = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || l[0] !== 6 && l[0] !== 2)) { s = 0; continue; } if (l[0] === 3 && (!r || l[1] > r[0] && l[1] < r[3])) { s.label = l[1]; break; } if (l[0] === 6 && s.label < r[1]) { s.label = r[1], r = l; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(l); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }l = t.call(e, s); } catch (e) { l = [6, e], i = 0; } finally { n = r = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                }(this, ((l) => {
                    switch (l.label) {
                    case 0: e = t.rejectWithValue, n = t.extra, i = t.getState, r = {
                        pageSelector: f, limitSelector: h, sortFieldSelector: d.DU, sortOrderSelector: d.Qg,
                    }, a = (0, u.o)('/college/residence-types', r, i()), l.label = 1; case 1: return l.trys.push([1, 3,, 4]), [4, n.api.get(a)]; case 2: return [2, l.sent().data]; case 3: return (s = l.sent()).message === 'Failed to fetch' ? [2, e({ status: 500, error: 'timeout' })] : [2, e({ status: s.response.status, error: s.response.data.message })]; case 4: return [2];
                    }
                })));
            }, new ((r = void 0) || (r = Promise))(((e, t) => { function s(e) { try { o(a.next(e)); } catch (e) { t(e); } } function l(e) { try { o(a.throw(e)); } catch (e) { t(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(s, l); }o((a = a.apply(n, i || [])).next()); })); let n; let i; let r; let a;
        })); const v = function (e) { let t; return (t = e.addResidenceType) === null || void 0 === t ? void 0 : t.data.title; }; const y = (0, c.hg)('residenceTypes/addResidenceType', ((e, t) => {
            return n = void 0, i = void 0, a = function () {
                let e; let n; let i; let r; let a; let s; let l; let o; return (function (e, t) {
                    let n; let i; let r; let a; let s = {
                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                    }; return a = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, l[0] && (s = 0)), s;) try { if (n = 1, i && (r = 2 & l[0] ? i.return : l[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, l[1])).done) return r; switch (i = 0, r && (l = [2 & l[0], r.value]), l[0]) { case 0: case 1: r = l; break; case 4: return s.label++, { value: l[1], done: !1 }; case 5: s.label++, i = l[1], l = [0]; continue; case 7: l = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || l[0] !== 6 && l[0] !== 2)) { s = 0; continue; } if (l[0] === 3 && (!r || l[1] > r[0] && l[1] < r[3])) { s.label = l[1]; break; } if (l[0] === 6 && s.label < r[1]) { s.label = r[1], r = l; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(l); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }l = t.call(e, s); } catch (e) { l = [6, e], i = 0; } finally { n = r = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                }(this, ((c) => { switch (c.label) { case 0: e = t.rejectWithValue, n = t.extra, i = t.dispatch, r = t.getState, a = v(r()), s = { title: a }, c.label = 1; case 1: return c.trys.push([1, 3,, 4]), [4, n.api.post('/college/residence-types/', s)]; case 2: return l = c.sent(), i(p()), i(x.clearData()), [2, l.data]; case 3: return o = c.sent(), [2, e({ errors: o.response.data.errors, status: o.response.status })]; case 4: return [2]; } })));
            }, new ((r = void 0) || (r = Promise))(((e, t) => { function s(e) { try { o(a.next(e)); } catch (e) { t(e); } } function l(e) { try { o(a.throw(e)); } catch (e) { t(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(s, l); }o((a = a.apply(n, i || [])).next()); })); let n; let i; let r; let a;
        })); const b = (0, c.oM)({
            name: 'addResidenceType', initialState: { data: { title: null }, isLoading: !1, errors: void 0 }, reducers: { setTitle(e, t) { e.data.title = t.payload; }, clearData(e) { e.data = { title: null }, e.errors = void 0; } }, extraReducers(e) { e.addCase(y.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(y.fulfilled, ((e) => { e.isLoading = !1; })).addCase(y.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })); },
        }); var x = b.actions; const g = b.reducer; const m = n(4387); const j = n(4475); const w = n(2308); const S = n(5044); const N = n(3280); const T = n(4809); const k = n(1385); const B = n(6458); const R = n(5461); const C = n(530); const D = n(9161); const O = function (e) { let t; return (t = e.addResidenceType) === null || void 0 === t ? void 0 : t.errors; }; const E = {
            tabBtn: 'sQbUDwTr', tabsButtonsBlock: 'JMAJAxlS', title: 'UE7dRk_O', settings: 'qn3BEGfU', newAddField: 'l6bYNDLp', tabBlock: 'e7dCPjDl', form: 'fesM7r3y', footerBtn: 'n17aPbBS', greenBtn: 'gsvJCxui', footer: 'X9M0ZXOf', message: 'DuIrR9TI', messageIcon: 'p1_EV91m',
        }; let L = function () { return L = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, L.apply(this, arguments); }; const I = function (e) {
            const t = e.className; const n = e.visible; const r = e.setVisible; const a = (0, R.T)(); const s = (0, o.useState)(!1); const l = s[0]; const c = s[1]; const d = (0, o.useState)(!1); const u = d[0]; const f = d[1]; const h = (0, o.useState)(); const p = h[0]; const b = h[1]; const g = (0, o.useRef)(null); const I = (0, B.v9)(v); const A = (0, B.v9)(O); const z = (0, o.useCallback)((() => { r(!1); }), [r]); const F = function () { z(), c(!1), f(!1); }; return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(j.Tk, {
                    className: (0, m.A)(E.AddResidenceType, {}, [t]),
                    visible: n,
                    onClose: z,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, i.jsxs)(j.lx, {
                        className: (0, m.A)(E.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: l,
                        onSubmit(e) {
                            return t = void 0, n = void 0, r = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let i; let r; let a; let s = {
                                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                                    }; return a = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, l[0] && (s = 0)), s;) try { if (n = 1, i && (r = 2 & l[0] ? i.return : l[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, l[1])).done) return r; switch (i = 0, r && (l = [2 & l[0], r.value]), l[0]) { case 0: case 1: r = l; break; case 4: return s.label++, { value: l[1], done: !1 }; case 5: s.label++, i = l[1], l = [0]; continue; case 7: l = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || l[0] !== 6 && l[0] !== 2)) { s = 0; continue; } if (l[0] === 3 && (!r || l[1] > r[0] && l[1] < r[3])) { s.label = l[1]; break; } if (l[0] === 6 && s.label < r[1]) { s.label = r[1], r = l; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(l); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }l = t.call(e, s); } catch (e) { l = [6, e], i = 0; } finally { n = r = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                                }(this, ((i) => { switch (i.label) { case 0: return e.preventDefault(), t = e.currentTarget, f(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), c(!0), t.checkValidity() ? I ? [4, a(y())] : [3, 2] : [3, 3]; case 1: return (n = i.sent()).meta.requestStatus === 'fulfilled' && (b(C.F.success('Местожительство добавлено')), F()), n.meta.requestStatus === 'rejected' && f(!0), [3, 3]; case 2: f(!0), i.label = 3; case 3: return [2]; } })));
                            }, new ((i = void 0) || (i = Promise))(((e, a) => { function s(e) { try { o(r.next(e)); } catch (e) { a(e); } } function l(e) { try { o(r.throw(e)); } catch (e) { a(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i(((e) => { e(n); }))).then(s, l); }o((r = r.apply(t, n || [])).next()); })); let t; let n; let i; let r;
                        },
                        children: [(0, i.jsx)(j.p0, { children: (0, i.jsx)(j.fl, { children: 'Добавление местожительства' }) }), (0, i.jsx)(j.sD, { children: (0, i.jsx)('div', { className: E.tab, children: (0, i.jsx)('div', { className: E.tabBlock, children: (0, i.jsx)('div', { className: E.settings, children: (0, i.jsxs)('div', { className: E.newAddField, children: [(0, i.jsx)('h6', {className: E.newAddFieldTitle, children: "Наименование*"}), (0, i.jsx)(k.h, {
 type: 'text', placeholder: 'городская местность', feedbackValid: A ? '' : 'Здорово!', invalid: !!A, feedbackInvalid: 'Введите корректные данные!', value: I || '', onChange (e) { a(x.setTitle(e.target.value)) }, required: !0 
})] }) }) }) }) }), (0, i.jsxs)(j.Ym, { className: E.footer, children: [(0, i.jsx)('div', { className: E.message, children: u && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(w.Z, { icon: S.D, customClassName: E.messageIcon }), (0, i.jsx)(T.xv, { size: T.yH.M, weight: T.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, i.jsxs)('div', { className: E.footerBtns, children: [(0, i.jsx)(D.zx, {
 theme: D.bn.OUTLINE, className: E.footerBtn, onClick: F, children: (0, i.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Отмена'}) 
}), (0, i.jsxs)(D.zx, { type: 'submit', className: (0, m.A)(E.footerBtn, {}, [E.greenBtn]), children: [(0, i.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Добавить'}), (0, i.jsx)(w.Z, { icon: N.q, className: E.btnIcon })] })] })] })],
                    }),
                }), (0, i.jsx)(j.KF, { ref: g, push: p, placement: 'top-end' })],
            });
        }; const A = function (e) { let t; return (t = e.residenceTypes) === null || void 0 === t ? void 0 : t.data; }; const z = function (e) { let t; return (t = e.residenceTypes) === null || void 0 === t ? void 0 : t.isLoading; }; const F = function (e) { let t; return (t = e.residenceTypes) === null || void 0 === t ? void 0 : t.error; }; const M = (0, c.oM)({
            name: 'residenceTypes',
            initialState: {
                data: void 0, isLoading: !0, error: void 0, page: '1', limit: '50',
            },
            reducers: { setPage(e, t) { e.page = t.payload; }, setLimit(e, t) { e.limit = t.payload; } },
            extraReducers(e) { e.addCase(p.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(p.fulfilled, ((e, t) => { e.isLoading = !1, e.data = { data: t.payload.data, pagination: t.payload.pagination }; })).addCase(p.rejected, ((e, t) => { e.isLoading = !1, e.error = t.payload; })); },
        }); const H = M.actions; const _ = M.reducer; const V = n(1138); const P = (0, c.hg)('residenceTypes/fetchResidenceTypeDetail', ((e, t) => {
            return n = void 0, i = void 0, a = function () {
                let n; let i; let r; let a; return (function (e, t) {
                    let n; let i; let r; let a; let s = {
                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                    }; return a = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, l[0] && (s = 0)), s;) try { if (n = 1, i && (r = 2 & l[0] ? i.return : l[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, l[1])).done) return r; switch (i = 0, r && (l = [2 & l[0], r.value]), l[0]) { case 0: case 1: r = l; break; case 4: return s.label++, { value: l[1], done: !1 }; case 5: s.label++, i = l[1], l = [0]; continue; case 7: l = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || l[0] !== 6 && l[0] !== 2)) { s = 0; continue; } if (l[0] === 3 && (!r || l[1] > r[0] && l[1] < r[3])) { s.label = l[1]; break; } if (l[0] === 6 && s.label < r[1]) { s.label = r[1], r = l; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(l); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }l = t.call(e, s); } catch (e) { l = [6, e], i = 0; } finally { n = r = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                }(this, ((s) => { switch (s.label) { case 0: n = t.rejectWithValue, i = t.extra, r = t.dispatch, s.label = 1; case 1: return s.trys.push([1, 3,, 4]), [4, i.api.get('/college/residence-types/'.concat(e))]; case 2: return a = s.sent(), r(J.setResidenceTypeData(a.data)), [2, a.data]; case 3: return s.sent().message === 'Failed to fetch' ? [2, n('timeout')] : [2, n('ERROR')]; case 4: return [2]; } })));
            }, new ((r = void 0) || (r = Promise))(((e, t) => { function s(e) { try { o(a.next(e)); } catch (e) { t(e); } } function l(e) { try { o(a.throw(e)); } catch (e) { t(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(s, l); }o((a = a.apply(n, i || [])).next()); })); let n; let i; let r; let a;
        })); const X = function (e) { let t; let n; return (n = (t = e.editResidenceType) === null || void 0 === t ? void 0 : t.newFields) === null || void 0 === n ? void 0 : n.title; }; const Z = (0, c.hg)('residenceTypes/editResidenceType', ((e, t) => {
            return n = void 0, i = void 0, a = function () {
                let n; let i; let r; let a; let s; let l; let o; let c; return (function (e, t) {
                    let n; let i; let r; let a; let s = {
                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                    }; return a = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, l[0] && (s = 0)), s;) try { if (n = 1, i && (r = 2 & l[0] ? i.return : l[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, l[1])).done) return r; switch (i = 0, r && (l = [2 & l[0], r.value]), l[0]) { case 0: case 1: r = l; break; case 4: return s.label++, { value: l[1], done: !1 }; case 5: s.label++, i = l[1], l = [0]; continue; case 7: l = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || l[0] !== 6 && l[0] !== 2)) { s = 0; continue; } if (l[0] === 3 && (!r || l[1] > r[0] && l[1] < r[3])) { s.label = l[1]; break; } if (l[0] === 6 && s.label < r[1]) { s.label = r[1], r = l; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(l); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }l = t.call(e, s); } catch (e) { l = [6, e], i = 0; } finally { n = r = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                }(this, ((d) => { switch (d.label) { case 0: n = t.rejectWithValue, i = t.extra, r = t.dispatch, a = t.getState, s = X(a()), l = { title: s }, d.label = 1; case 1: return d.trys.push([1, 3,, 4]), [4, i.api.put('/college/residence-types/'.concat(e), l)]; case 2: return o = d.sent(), r(p()), r(P(e)), [2, o.data]; case 3: return c = d.sent(), [2, n({ errors: c.response.data.errors, status: c.response.status })]; case 4: return [2]; } })));
            }, new ((r = void 0) || (r = Promise))(((e, t) => { function s(e) { try { o(a.next(e)); } catch (e) { t(e); } } function l(e) { try { o(a.throw(e)); } catch (e) { t(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(s, l); }o((a = a.apply(n, i || [])).next()); })); let n; let i; let r; let a;
        })); const q = (0, c.oM)({
            name: 'editResidenceType',
            initialState: {
                data: void 0, newFields: void 0, isLoading: !1, errors: void 0,
            },
            reducers: { setResidenceTypeData(e, t) { t.payload && (e.data = t.payload, e.newFields = { title: e.data.typeofareaofresidence }); }, setTitle(e, t) { e.newFields.title = t.payload; }, clearNewFields(e) { let t; e.newFields = { title: ((t = e.data) === null || void 0 === t ? void 0 : t.typeofareaofresidence) || null }, e.errors = void 0; } },
            extraReducers(e) { e.addCase(Z.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(Z.fulfilled, ((e) => { e.isLoading = !1; })).addCase(Z.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })); },
        }); var J = q.actions; const G = q.reducer; const Q = n(1783); const U = n(8263); const W = function (e) { let t; return (t = e.residenceTypeDetail) === null || void 0 === t ? void 0 : t.error; }; const K = function (e) { let t; return (t = e.residenceTypeDetail) === null || void 0 === t ? void 0 : t.isLoading; }; const Y = function (e) { let t; return (t = e.residenceTypeDetail) === null || void 0 === t ? void 0 : t.data; }; const $ = (0, c.oM)({
            name: 'residenceTypeDetail', initialState: { data: void 0, isLoading: !1, error: void 0 }, reducers: {}, extraReducers(e) { e.addCase(P.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(P.fulfilled, ((e, t) => { e.isLoading = !1, e.data = t.payload; })).addCase(P.rejected, ((e, t) => { e.isLoading = !1, e.error = t.payload; })); },
        }); const ee = ($.actions, $.reducer); const te = function (e) { let t; return (t = e.editResidenceType) === null || void 0 === t ? void 0 : t.isLoading; }; const ne = function (e) { let t; return (t = e.editResidenceType) === null || void 0 === t ? void 0 : t.errors; }; const ie = {
            tabBtn: 'uR_LP4Q7', tabsButtonsBlock: 'kRx4DfSc', title: 'BQzLTEfk', footerBtn: 'X4ZMZQks', greenBtn: 'Iz_Jq4Od', redBtn: 'xny4u27J', settings: 'oSFRjIQP', newAddField: 't079wVfK', tabBlock: 'dco7sXYE', form: 'YRa9Hprm', footer: 'TQzDpAvD', message: 'ccZ3a8Io', messageIcon: 'Z40Xv2yZ',
        }; let re = function () { return re = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, re.apply(this, arguments); }; const ae = function (e) {
            const t = e.className; const n = e.visible; const r = e.setVisible; const a = e.residenceTypeId; const s = e.onDeleteResidenceType; const l = (0, R.T)(); const c = (0, o.useState)(); const d = c[0]; const u = c[1]; const f = (0, o.useRef)(null); const h = (0, o.useState)(!1); const p = h[0]; const v = h[1]; const y = (0, o.useState)(!1); const b = y[0]; const x = y[1]; const g = (0, B.v9)(Y); const N = (0, B.v9)(K); const O = (0, B.v9)(W); const E = (0, B.v9)(te); const L = (0, B.v9)(X); const I = (0, B.v9)(ne); (0, o.useEffect)((() => { a && l(P(a)); }), [l, a]); let A; const z = function () { r(!1), v(!1), x(!1); }; const F = function () { z(), l(J.clearNewFields()); }; return A = E || N ? (0, i.jsx)(V.O, { width: '100%', height: 80 }) : O ? (0, i.jsx)(T.xv, {
                theme: T.lg.ERROR, size: T.yH.M, weight: T.fs.SEMIBOLD, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, i.jsx)('div', {
                className: ie.tab,
                children: (0, i.jsx)('div', {
                    className: ie.tabBlock,
                    children: (0, i.jsx)('div', {
                        className: ie.settings,
                        children: (0, i.jsxs)('div', {
                            className: ie.newAddField,
                            children: [(0, i.jsx)('h6', { className: ie.newAddFieldTitle, children: 'Наименование' }), (0, i.jsx)(k.h, {
                                type: 'text', placeholder: 'городская местность', feedbackValid: I ? '' : 'Здорово!', invalid: !!I, feedbackInvalid: 'Введите корректные данные', value: L || '', onChange(e) { l(J.setTitle(e.target.value)); },
                            })],
                        }),
                    }),
                }),
            }), (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(j.Tk, {
                    className: (0, m.A)(ie.EditResidenceType, {}, [t]),
                    visible: n,
                    onClose: z,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, i.jsxs)(j.lx, {
                        className: (0, m.A)(ie.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: p,
                        onSubmit(e) {
                            return t = void 0, n = void 0, r = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let i; let r; let a; let s = {
                                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                                    }; return a = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, l[0] && (s = 0)), s;) try { if (n = 1, i && (r = 2 & l[0] ? i.return : l[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, l[1])).done) return r; switch (i = 0, r && (l = [2 & l[0], r.value]), l[0]) { case 0: case 1: r = l; break; case 4: return s.label++, { value: l[1], done: !1 }; case 5: s.label++, i = l[1], l = [0]; continue; case 7: l = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || l[0] !== 6 && l[0] !== 2)) { s = 0; continue; } if (l[0] === 3 && (!r || l[1] > r[0] && l[1] < r[3])) { s.label = l[1]; break; } if (l[0] === 6 && s.label < r[1]) { s.label = r[1], r = l; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(l); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }l = t.call(e, s); } catch (e) { l = [6, e], i = 0; } finally { n = r = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                                }(this, ((i) => { switch (i.label) { case 0: return e.preventDefault(), t = e.currentTarget, x(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), v(!0), t.checkValidity() ? (g == null ? void 0 : g.typeofareaofresidence) !== L ? [3, 1] : (u(C.F.error('Для сохранения вы должны внести изменения!')), [3, 3]) : [3, 3]; case 1: return [4, l(Z(a))]; case 2: (n = i.sent()).meta.requestStatus === 'fulfilled' && (u(C.F.success('Информация о местожительстве успешно обновлена')), F()), n.meta.requestStatus === 'rejected' && x(!0), i.label = 3; case 3: return [2]; } })));
                            }, new ((i = void 0) || (i = Promise))(((e, a) => { function s(e) { try { o(r.next(e)); } catch (e) { a(e); } } function l(e) { try { o(r.throw(e)); } catch (e) { a(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i(((e) => { e(n); }))).then(s, l); }o((r = r.apply(t, n || [])).next()); })); let t; let n; let i; let r;
                        },
                        children: [(0, i.jsx)(j.p0, { children: E || N ? (0, i.jsx)(V.O, { width: 200, height: 30 }) : (0, i.jsxs)(j.fl, { children: ['Изменение местожительства №', g == null ? void 0 : g.id_typeofareaofresidence] }) }), (0, i.jsx)(j.sD, { children: A }), (0, i.jsxs)(j.Ym, {
 className: ie.footer,
children: [(0, i.jsx)('div', { className: ie.message, children: b && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(w.Z, { icon: S.D, customClassName: ie.messageIcon }), (0, i.jsx)(T.xv, { size: T.yH.M, weight: T.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, i.jsxs)('div', {
 className: ie.footerBtns,
children: [(0, i.jsx)(D.zx, {
                            theme: D.bn.OUTLINE, className: ie.footerBtn, onClick: F, children: (0, i.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Отмена' }), 
}), (0, i.jsxs)(D.zx, {
                            theme: D.bn.ERROR, className: (0, m.A)(ie.footerBtn, {}, [ie.redBtn]), onClick() { s(g), z(); }, disabled: N || E || !!O, children: [(0, i.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Удалить' }), (0, i.jsx)(w.Z, { icon: Q.N, className: ie.btnIcon })], 
}), (0, i.jsxs)(D.zx, {
                            type: 'submit', className: (0, m.A)(ie.footerBtn, {}, [ie.greenBtn]), disabled: N || E || !!O, children: [(0, i.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Сохранить' }), (0, i.jsx)(w.Z, { icon: U.F, className: ie.btnIcon })], 
})] 
})] 
})],
                    }),
                }), (0, i.jsx)(j.KF, { ref: f, push: d, placement: 'top-end' })],
            });
        }; const se = { footerBtn: 'FKbrChSP', redBtn: 'I0ZNozJO', deleteText: 'oOMgKgH9' }; const le = (0, c.hg)('residenceTypes/deleteResidenceType', ((e, t) => {
            return n = void 0, i = void 0, a = function () {
                let n; let i; let r; let a; return (function (e, t) {
                    let n; let i; let r; let a; let s = {
                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                    }; return a = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, l[0] && (s = 0)), s;) try { if (n = 1, i && (r = 2 & l[0] ? i.return : l[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, l[1])).done) return r; switch (i = 0, r && (l = [2 & l[0], r.value]), l[0]) { case 0: case 1: r = l; break; case 4: return s.label++, { value: l[1], done: !1 }; case 5: s.label++, i = l[1], l = [0]; continue; case 7: l = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || l[0] !== 6 && l[0] !== 2)) { s = 0; continue; } if (l[0] === 3 && (!r || l[1] > r[0] && l[1] < r[3])) { s.label = l[1]; break; } if (l[0] === 6 && s.label < r[1]) { s.label = r[1], r = l; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(l); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }l = t.call(e, s); } catch (e) { l = [6, e], i = 0; } finally { n = r = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                }(this, ((s) => { switch (s.label) { case 0: n = t.rejectWithValue, i = t.extra, r = t.dispatch, s.label = 1; case 1: return s.trys.push([1, 3,, 4]), [4, i.api.delete('/college/residence-types/'.concat(e))]; case 2: return a = s.sent(), r(p()), [2, a.data]; case 3: return s.sent().message === 'Failed to fetch' ? [2, n('timeout')] : [2, n('ERROR')]; case 4: return [2]; } })));
            }, new ((r = void 0) || (r = Promise))(((e, t) => { function s(e) { try { o(a.next(e)); } catch (e) { t(e); } } function l(e) { try { o(a.throw(e)); } catch (e) { t(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(s, l); }o((a = a.apply(n, i || [])).next()); })); let n; let i; let r; let a;
        })); let oe = function () { return oe = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, oe.apply(this, arguments); }; const ce = function (e) {
            const t = e.className; const n = e.residenceType; const r = e.visible; const a = e.setVisible; const s = (0, R.T)(); const l = (0, o.useState)(); const c = l[0]; const d = l[1]; const u = (0, o.useRef)(null); const f = (0, o.useState)(!1); const h = f[0]; const p = f[1]; const v = function () { a(!1); }; return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsxs)(j.Tk, {
                    className: (0, m.A)(se.DeleteResidenceType, {}, [t]),
visible: r,
onClose: v,
size: 'lg',
alignment: 'center',
children: [(0, i.jsx)(j.p0, { children: (0, i.jsxs)(j.fl, { children: ['Удаление местожительства №', n == null ? void 0 : n.id_typeofareaofresidence] }) }), (0, i.jsx)(j.sD, { children: (0, i.jsxs)(T.xv, { size: T.yH.XM, className: se.deleteText, children: ['Вы действительно хотите удалить местожительство', ' ', (0, i.jsxs)('span', { children: ['№', n == null ? void 0 : n.id_typeofareaofresidence, ' ', '-', ' ', '"'.concat(n == null ? void 0 : n.typeofareaofresidence, '"')] }), ' ', 'и все связанные с ним данные?'] }) }), (0, i.jsx)(j.Ym, {
 className: se.footer,
children: (0, i.jsxs)('div', {
 className: se.footerBtns,
children: [(0, i.jsx)(D.zx, {
                        theme: D.bn.OUTLINE, className: se.footerBtn, onClick: v, children: (0, i.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Отмена' }), 
}), (0, i.jsxs)(D.zx, {
                        theme: D.bn.ERROR, className: (0, m.A)(se.footerBtn, {}, [se.redBtn]), onClick() { let e; e = n.id_typeofareaofresidence.toString(), p(!0), s(le(e)).then(((e) => { e.meta.requestStatus === 'fulfilled' ? (d(C.F.success('Местожительство №'.concat(n == null ? void 0 : n.id_typeofareaofresidence, ' удалено'))), v(), p(!1)) : e.meta.requestStatus === 'rejected' && (d(C.F.error('Произошла ошибка при удалении, попробуйте снова')), p(!1)); })); }, disabled: h, children: [(0, i.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Удалить' }), (0, i.jsx)(w.Z, { icon: Q.N, className: se.btnIcon })], 
})] 
}) 
})],
                }), (0, i.jsx)(j.KF, { ref: u, push: c, placement: 'top-end' })],
            });
        }; const de = n(779); const ue = {
            'modal-dialog': 'fycwOG0u', tabBtn: 'H02Z4r00', tabsButtonsBlock: 'AsbxGKH0', title: 'coFNEaKe', footerBtn: 'XbT9q_7Z', redBtn: 'su56Zbs5', settings: 'TfbxHuM7', newAddField: 'r4puE5dF', tabBlock: 'Napsjvec', footer: 'CDhBOhRg', message: 'Q1j6jMsX', messageIcon: 'NyYe7hOs', checkboxText: 'JKu1kOf6',
        }; let fe = function () { return fe = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, fe.apply(this, arguments); }; const he = function (e) {
            const t = e.className; const n = e.visible; const r = e.setVisible; const a = e.residenceTypeId; const s = e.onDeleteResidenceType; const l = e.onEditResidenceType; const c = (0, R.T)(); const d = (0, B.v9)(Y); const u = (0, B.v9)(K); const f = (0, B.v9)(W); (0, o.useEffect)((() => { a && c(P(a)); }), [c, a]); let h; const p = function () { r(!1); }; return h = u ? (0, i.jsx)(V.O, { width: '100%', height: 120 }) : f ? (0, i.jsx)(T.xv, {
                theme: T.lg.ERROR, size: T.yH.M, weight: T.fs.BOLD, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, i.jsx)('div', { className: ue.tab, children: (0, i.jsxs)('div', { className: ue.tabBlock, children: [(0, i.jsx)('div', { className: ue.settings, children: (0, i.jsxs)('div', { className: ue.newAddField, children: [(0, i.jsx)('h6', { className: ue.newAddFieldTitle, children: 'ID местожительства' }), (0, i.jsx)(T.xv, { size: T.yH.S, weight: T.fs.BOLD, children: d == null ? void 0 : d.id_typeofareaofresidence })] }) }), (0, i.jsx)('div', { className: ue.settings, children: (0, i.jsxs)('div', { className: ue.newAddField, children: [(0, i.jsx)('h6', { className: ue.newAddFieldTitle, children: 'Наименование' }), (0, i.jsx)(T.xv, { size: T.yH.S, weight: T.fs.BOLD, children: d == null ? void 0 : d.typeofareaofresidence })] }) })] }) }), (0, i.jsxs)(j.Tk, {
                className: (0, m.A)(ue.ViewResidenceType, {}, [t, 'view-student-modal']),
visible: n,
onClose: p,
alignment: 'center',
children: [(0, i.jsx)(j.p0, { children: u ? (0, i.jsx)(V.O, { width: 200, height: 30 }) : (0, i.jsxs)(j.fl, { children: ['Местожительство №', d == null ? void 0 : d.id_typeofareaofresidence] }) }), (0, i.jsx)(j.sD, { children: h }), (0, i.jsxs)(j.Ym, {
 className: ue.footer,
children: [(0, i.jsx)('div', {}), (0, i.jsxs)('div', {
 className: ue.footerBtns,
children: [(0, i.jsx)(D.zx, {
                    theme: D.bn.OUTLINE, className: ue.footerBtn, onClick: p, children: (0, i.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Закрыть' }), 
}), (0, i.jsxs)(D.zx, {
                    theme: D.bn.ERROR, className: (0, m.A)(ue.footerBtn, {}, [ue.redBtn]), onClick() { s(d), p(); }, disabled: u || !!f, children: [(0, i.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Удалить' }), (0, i.jsx)(w.Z, { icon: Q.N, className: ue.btnIcon })], 
}), (0, i.jsxs)(D.zx, {
                    color: 'primary', className: ue.footerBtn, onClick() { l(a), p(); }, disabled: u || !!f, children: [(0, i.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Редактировать' }), (0, i.jsx)(w.Z, { icon: de.C, className: ue.btnIcon })], 
})] 
})] 
})],
            });
        }; const pe = n(6837); const ve = n(1353); const ye = n(773); const be = n(5606); const xe = n(2008); const ge = n(596); const me = n(4164); const je = {
            TableBlock: 'fyrYVFe6', table: 'r0DsnVqq', tableRow: 'ljE1Ccge', tableCell: 'yH5H38_a', tableHead: 'lIbQBLgB', tableCellId: 'qWQurLm1', tableBody: 'DsADM7TX', tableSortIcon: 'H4GscPps', active: 'oByUtZ78', cellTextBg: 'ybgk_pcr', tableCellBtns: 'uJSGG6cw', tableCellBtnsWrapper: 'Fu8AP39g', editBtn: 'aHDwC0m8', checkbox: 'PjfvgjSt', tableWithCheckboxes: 'lCe9xoO5',
        }; let we = function () { return we = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, we.apply(this, arguments); }; const Se = function (e) {
            let t; let n; let r; let a; const s = e.className; const l = e.data; const c = e.exportDisabled; const u = (0, R.T)(); const f = (0, B.v9)(z); const h = (0, B.v9)(F); const v = (0, B.v9)(d.DU); const y = (0, B.v9)(d.Qg); const b = (0, o.useState)(); const x = b[0]; const g = b[1]; const j = (0, o.useState)(!1); const w = j[0]; const S = j[1]; const N = (0, o.useState)(!1); const k = N[0]; const C = N[1]; const O = (0, o.useState)(!1); const E = O[0]; const L = O[1]; const I = (0, o.useState)(); const A = I[0]; const M = I[1]; const H = function (e) { C(!0), M(e); }; const _ = (0, o.useCallback)(((e) => { L(!0), g(e); }), []); (0, o.useEffect)((() => { u(d.f$.setSort('id_typeofareaofresidence')); }), [u]); let P; const X = (0, o.useCallback)(((e) => { u(d.f$.setSort(e)), u(p()); }), [u]); P = f ? (0, i.jsx)(V.O, { height: 250 }) : h ? (0, i.jsx)(T.xv, {
                theme: T.lg.ERROR, size: T.yH.M, weight: T.fs.SEMIBOLD, className: je.error, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : l.length ? (0, i.jsxs)('div', {
 className: (0, m.A)(je.table, (t = {}, t[je.tableWithCheckboxes] = !c, t), []),
children: [(0, i.jsx)('div', {
 className: je.tableHead,
children: (0, i.jsxs)('div', {
 className: je.tableRow,
children: [!c && (0, i.jsx)(pe.X, { className: je.checkbox, id: 'checkbox-residence-types-all' }), (0, i.jsxs)(D.zx, {
                theme: D.bn.CLEAR, className: (0, m.A)(je.tableCell, {}, [je.tableCellId]), onClick() { X('id_typeofareaofresidence'); }, children: [(0, i.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'ID местожительства' }), (0, i.jsx)(ve.J, { Svg: y === 'asc' ? ye.Z : be.Z, className: (0, m.A)(je.tableSortIcon, (n = {}, n[je.active] = v === 'id_typeofareaofresidence', n), []) })], 
}), (0, i.jsxs)(D.zx, {
                theme: D.bn.CLEAR, className: je.tableCell, onClick() { X('typeofareaofresidence'); }, children: [(0, i.jsx)(T.xv, { size: T.yH.XS, weight: T.fs.SEMIBOLD, children: 'Наименование' }), (0, i.jsx)(ve.J, { Svg: y === 'asc' ? ye.Z : be.Z, className: (0, m.A)(je.tableSortIcon, (r = {}, r[je.active] = v === 'typeofareaofresidence', r), []) })], 
}), (0, i.jsx)('div', { className: (0, m.A)(je.tableCell, {}, [je.tableCellBtnsWrapper]) })] 
}) 
}), (0, i.jsx)('div', { className: je.tableBody, children: l == null ? void 0 : l.map(((e) => (0, i.jsxs)('div', { className: je.tableRow, children: [!c && (0, i.jsx)(pe.X, { className: je.checkbox, id: 'checkbox-residence-types-'.concat(e.id_typeofareaofresidence) }), (0, i.jsx)('div', { className: (0, m.A)(je.tableCell, {}, [je.tableCellId]), children: (0, i.jsx)(T.xv, { size: T.yH.XS, children: e.id_typeofareaofresidence }) }), (0, i.jsx)('div', { className: je.tableCell, children: (0, i.jsx)(T.xv, { size: T.yH.XS, children: e.typeofareaofresidence }) }), (0, i.jsxs)('div', { className: (0, m.A)(je.tableCell, {}, [je.tableCellBtns]), children: [(0, i.jsx)(D.zx, { theme: D.bn.CLEAR, title: 'Просмотр', className: je.editBtn, onClick () { var t; t = e.id_typeofareaofresidence.toString(), S(!0), M(t) }, children: (0, i.jsx)(ve.J, { Svg: xe.Z }) }), (0, i.jsx)(D.zx, { theme: D.bn.CLEAR, title: 'Редактировать', className: je.editBtn, onClick () { H(e.id_typeofareaofresidence.toString()) }, children: (0, i.jsx)(ve.J, { Svg: ge.Z }) }), (0, i.jsx)(D.zx, { theme: D.bn.CLEAR, title: 'Удалить', className: je.editBtn, onClick () { _(e) }, children: (0, i.jsx)(ve.J, { Svg: me.Z }) })] })] }, e.id_typeofareaofresidence))) })] 
}) : (0, i.jsx)(T.xv, { children: 'Ничего не найдено...' }); const Z = ((a = {})[je.error] = !!h, a); return (0, i.jsxs)('div', {
                className: (0, m.A)(je.TableBlock, Z, [s]),
                children: [P, (0, i.jsx)(he, {
                    visible: w, setVisible: S, residenceTypeId: A, onDeleteResidenceType: _, onEditResidenceType: H,
                }), (0, i.jsx)(ae, {
                    visible: k, setVisible: C, residenceTypeId: A, onDeleteResidenceType: _,
                }), (0, i.jsx)(ce, { residenceType: x, visible: E, setVisible: L })],
            });
        }; const Ne = n(7730); const Te = n(7687); const ke = n(5375); const Be = n(2556); let Re = function () { return Re = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, Re.apply(this, arguments); }; const Ce = {
            residenceTypes: _, addResidenceType: g, residenceTypeDetail: ee, editResidenceType: G,
        }; const De = function (e) {
            e.className; const t = (0, R.T)(); const n = (0, o.useState)(!1); const c = n[0]; const d = n[1]; const u = (0, B.v9)(A); const v = (0, B.v9)(z); const y = (0, B.v9)(F); const b = (0, B.v9)(h); const x = (0, B.v9)(f); const g = (0, o.useState)(''); const m = g[0]; const j = g[1]; const w = (0, o.useState)(); const S = w[0]; const N = w[1]; const T = (0, o.useCallback)(((e) => { j(e); }), []); const k = (0, o.useCallback)(((e) => { t(H.setLimit(e)), t(p()); }), [t]); const C = (0, o.useCallback)(((e) => { t(H.setPage(e)), t(p()); }), [t]); return (0, o.useEffect)((() => { N((u == null ? void 0 : u.data) || []); }), [u]), (0, o.useEffect)((() => { const e = (0, Ne.eJ)(m, (u == null ? void 0 : u.data) || []); N(e || []); }), [u, m]), (0, o.useEffect)((() => { t(p()); }), [t]), (0, i.jsx)(l.B, {
                title: 'LMS - Местожительства',
                children: (0, i.jsxs)(r.W, {
                    reducers: Ce,
                    removeAfterUnmount: !0,
                    children: [(0, i.jsxs)('div', {
                        children: [(0, i.jsxs)('div', {
                            className: 'page-settings '.concat(!1),
                            children: [(0, i.jsx)(a.o, {
                                value: m, onChange: T, searchText: 'Поиск по наименованию', error: y, isLoading: v,
                            }), (0, i.jsx)(s.X, {
                                onlyAdding: !0, setVisibleAddNewField: d, addingModalText: 'Добавить местожительство', error: y, isLoading: v, references: Be.x, referencesTitle: 'Справочники', children: (0, i.jsx)(I, { visible: c, setVisible: d }),
                            })],
                        }), (0, i.jsx)(Se, { data: S || [], exportDisabled: !0 }), (0, i.jsxs)('div', {
                            className: 'page-table-settings',
                            children: [(0, i.jsx)(Te.K, {
                                data: S || [], onChange: k, onChangePage: C, paginationData: u == null ? void 0 : u.pagination, itemsLimit: b, withRecords: !0, isLoading: v, error: y,
                            }), (0, i.jsx)(Te.N, {
                                data: S || [], onChange: C, itemsPage: x, isLoading: v, error: y, paginationData: u == null ? void 0 : u.pagination,
                            })],
                        })],
                    }), y && (0, i.jsx)(ke.d, { error: y })],
                }),
            });
        };
    },
}]);
