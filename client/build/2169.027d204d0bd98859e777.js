!(function () { try { const e = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; const t = (new Error()).stack; t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = '590a6d8c-6a88-421c-b54b-4e6b4485a596', e._sentryDebugIdIdentifier = 'sentry-dbid-590a6d8c-6a88-421c-b54b-4e6b4485a596'); } catch (e) {} }()); const _global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; _global.SENTRY_RELEASE = { id: '45ee1168f5cf48e9753bace26323152d3b61cb67' }, (self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[2169], {
    8888: (e, t, n) => {
        n.r(t), n.d(t, { default: () => Be }); const a = n(5893); const r = n(1150); const i = n(9649); const s = n(5306); const o = n(918); const l = n(7294); const c = n(7168); const u = n(1759); const d = n(121); const f = function (e) { let t; return (t = e.eduForms) === null || void 0 === t ? void 0 : t.page; }; const h = function (e) { let t; return (t = e.eduForms) === null || void 0 === t ? void 0 : t.limit; }; const v = (0, c.hg)('students/fetchEduForms', ((e, t) => {
            return n = void 0, a = void 0, i = function () {
                let e; let n; let a; let r; let i; let s; return (function (e, t) {
                    let n; let a; let r; let i; let s = {
                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                    }; return i = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function o(o) { return function (l) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, o[0] && (s = 0)), s;) try { if (n = 1, a && (r = 2 & o[0] ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, o[1])).done) return r; switch (a = 0, r && (o = [2 & o[0], r.value]), o[0]) { case 0: case 1: r = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, a = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < r[1]) { s.label = r[1], r = o; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(o); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }o = t.call(e, s); } catch (e) { o = [6, e], a = 0; } finally { n = r = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                }(this, ((o) => {
                    switch (o.label) {
                    case 0: e = t.rejectWithValue, n = t.extra, a = t.getState, r = {
                        pageSelector: f, limitSelector: h, sortFieldSelector: u.DU, sortOrderSelector: u.Qg,
                    }, i = (0, d.o)('/college/education-forms', r, a()), o.label = 1; case 1: return o.trys.push([1, 3,, 4]), [4, n.api.get(i)]; case 2: return [2, o.sent().data]; case 3: return (s = o.sent()).message === 'Failed to fetch' ? [2, e({ status: 500, error: 'timeout' })] : [2, e({ status: s.response.status, error: s.response.data.message })]; case 4: return [2];
                    }
                })));
            }, new ((r = void 0) || (r = Promise))(((e, t) => { function s(e) { try { l(i.next(e)); } catch (e) { t(e); } } function o(e) { try { l(i.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(s, o); }l((i = i.apply(n, a || [])).next()); })); let n; let a; let r; let i;
        })); const p = function (e) { let t; return (t = e.addEduForm) === null || void 0 === t ? void 0 : t.data.title; }; const m = (0, c.hg)('eduForms/addEduForm', ((e, t) => {
            return n = void 0, a = void 0, i = function () {
                let e; let n; let a; let r; let i; let s; let o; let l; return (function (e, t) {
                    let n; let a; let r; let i; let s = {
                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                    }; return i = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function o(o) { return function (l) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, o[0] && (s = 0)), s;) try { if (n = 1, a && (r = 2 & o[0] ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, o[1])).done) return r; switch (a = 0, r && (o = [2 & o[0], r.value]), o[0]) { case 0: case 1: r = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, a = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < r[1]) { s.label = r[1], r = o; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(o); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }o = t.call(e, s); } catch (e) { o = [6, e], a = 0; } finally { n = r = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                }(this, ((c) => { switch (c.label) { case 0: e = t.rejectWithValue, n = t.extra, a = t.dispatch, r = t.getState, i = p(r()), s = { title: i }, c.label = 1; case 1: return c.trys.push([1, 3,, 4]), [4, n.api.post('/college/education-forms/', s)]; case 2: return o = c.sent(), a(v()), a(x.clearData()), [2, o.data]; case 3: return l = c.sent(), [2, e({ errors: l.response.data.errors, status: l.response.status })]; case 4: return [2]; } })));
            }, new ((r = void 0) || (r = Promise))(((e, t) => { function s(e) { try { l(i.next(e)); } catch (e) { t(e); } } function o(e) { try { l(i.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(s, o); }l((i = i.apply(n, a || [])).next()); })); let n; let a; let r; let i;
        })); const g = (0, c.oM)({
            name: 'addEduForm', initialState: { data: { title: null }, isLoading: !1, errors: void 0 }, reducers: { setTitle(e, t) { e.data.title = t.payload; }, clearData(e) { e.data = { title: null }, e.errors = void 0; } }, extraReducers(e) { e.addCase(m.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(m.fulfilled, ((e) => { e.isLoading = !1; })).addCase(m.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })); },
        }); var x = g.actions; const b = g.reducer; const y = n(4387); const j = n(4475); const w = n(2308); const N = n(5044); const S = n(3280); const k = n(4809); const E = n(1385); const C = n(6458); const F = n(5461); const B = n(530); const O = n(9161); const L = function (e) { let t; return (t = e.addEduForm) === null || void 0 === t ? void 0 : t.errors; }; const A = {
            tabBtn: 'WHCgixD3', tabsButtonsBlock: 'uPEmVN5j', title: 'epe0GjFq', settings: 'vtxNHTRL', newAddField: 'j2DIsrpw', tabBlock: 'Gkre_zd8', form: 'FwyzlLyM', footerBtn: 'FOPEje52', greenBtn: 'Zkg_4M4D', footer: 'g23LB7bD', message: 'xuXGrAy0', messageIcon: 'ey8moqpB',
        }; let D = function () { return D = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, D.apply(this, arguments); }; const R = function (e) {
            const t = e.className; const n = e.visible; const r = e.setVisible; const i = (0, F.T)(); const s = (0, l.useState)(!1); const o = s[0]; const c = s[1]; const u = (0, l.useState)(!1); const d = u[0]; const f = u[1]; const h = (0, l.useState)(); const v = h[0]; const g = h[1]; const b = (0, l.useRef)(null); const R = (0, C.v9)(p); const I = (0, C.v9)(L); const _ = (0, l.useCallback)((() => { r(!1); }), [r]); const z = function () { _(), c(!1), f(!1); }; return (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(j.Tk, {
                    className: (0, y.A)(A.AddEduForm, {}, [t]),
                    visible: n,
                    onClose: _,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, a.jsxs)(j.lx, {
                        className: (0, y.A)(A.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: o,
                        onSubmit(e) {
                            return t = void 0, n = void 0, r = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let a; let r; let i; let s = {
                                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                                    }; return i = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function o(o) { return function (l) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, o[0] && (s = 0)), s;) try { if (n = 1, a && (r = 2 & o[0] ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, o[1])).done) return r; switch (a = 0, r && (o = [2 & o[0], r.value]), o[0]) { case 0: case 1: r = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, a = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < r[1]) { s.label = r[1], r = o; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(o); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }o = t.call(e, s); } catch (e) { o = [6, e], a = 0; } finally { n = r = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                                }(this, ((a) => { switch (a.label) { case 0: return e.preventDefault(), t = e.currentTarget, f(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), c(!0), t.checkValidity() ? R ? [4, i(m())] : [3, 2] : [3, 3]; case 1: return (n = a.sent()).meta.requestStatus === 'fulfilled' && (g(B.F.success('Форма обучения добавлена')), z()), n.meta.requestStatus === 'rejected' && f(!0), [3, 3]; case 2: f(!0), a.label = 3; case 3: return [2]; } })));
                            }, new ((a = void 0) || (a = Promise))(((e, i) => { function s(e) { try { l(r.next(e)); } catch (e) { i(e); } } function o(e) { try { l(r.throw(e)); } catch (e) { i(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(s, o); }l((r = r.apply(t, n || [])).next()); })); let t; let n; let a; let r;
                        },
                        children: [(0, a.jsx)(j.p0, { children: (0, a.jsx)(j.fl, { children: 'Добавление формы обучения' }) }), (0, a.jsx)(j.sD, { children: (0, a.jsx)('div', { className: A.tab, children: (0, a.jsx)('div', { className: A.tabBlock, children: (0, a.jsx)('div', { className: A.settings, children: (0, a.jsxs)('div', { className: A.newAddField, children: [(0, a.jsx)('h6', {className: A.newAddFieldTitle, children: "Наименование*"}), (0, a.jsx)(E.h, {
 type: 'text', placeholder: 'очная', feedbackValid: I ? '' : 'Здорово!', invalid: !!I, feedbackInvalid: 'Введите корректные данные!', value: R || '', onChange (e) { i(x.setTitle(e.target.value)) }, required: !0 
})] }) }) }) }) }), (0, a.jsxs)(j.Ym, { className: A.footer, children: [(0, a.jsx)('div', { className: A.message, children: d && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(w.Z, { icon: N.D, customClassName: A.messageIcon }), (0, a.jsx)(k.xv, { size: k.yH.M, weight: k.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, a.jsxs)('div', { className: A.footerBtns, children: [(0, a.jsx)(O.zx, {
 theme: O.bn.OUTLINE, className: A.footerBtn, onClick: z, children: (0, a.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Отмена'}) 
}), (0, a.jsxs)(O.zx, { type: 'submit', className: (0, y.A)(A.footerBtn, {}, [A.greenBtn]), children: [(0, a.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Добавить'}), (0, a.jsx)(w.Z, { icon: S.q, className: A.btnIcon })] })] })] })],
                    }),
                }), (0, a.jsx)(j.KF, { ref: b, push: v, placement: 'top-end' })],
            });
        }; const I = function (e) { let t; return (t = e.eduForms) === null || void 0 === t ? void 0 : t.data; }; const _ = function (e) { let t; return (t = e.eduForms) === null || void 0 === t ? void 0 : t.isLoading; }; const z = function (e) { let t; return (t = e.eduForms) === null || void 0 === t ? void 0 : t.error; }; const T = (0, c.oM)({
            name: 'eduForms',
            initialState: {
                data: void 0, isLoading: !0, error: void 0, page: '1', limit: '50',
            },
            reducers: { setPage(e, t) { e.page = t.payload; }, setLimit(e, t) { e.limit = t.payload; } },
            extraReducers(e) { e.addCase(v.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(v.fulfilled, ((e, t) => { e.isLoading = !1, e.data = { data: t.payload.data, pagination: t.payload.pagination }; })).addCase(v.rejected, ((e, t) => { e.isLoading = !1, e.error = t.payload; })); },
        }); const M = T.actions; const H = T.reducer; const P = n(1138); const V = (0, c.hg)('eduForms/fetchEduFormDetail', ((e, t) => {
            return n = void 0, a = void 0, i = function () {
                let n; let a; let r; let i; return (function (e, t) {
                    let n; let a; let r; let i; let s = {
                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                    }; return i = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function o(o) { return function (l) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, o[0] && (s = 0)), s;) try { if (n = 1, a && (r = 2 & o[0] ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, o[1])).done) return r; switch (a = 0, r && (o = [2 & o[0], r.value]), o[0]) { case 0: case 1: r = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, a = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < r[1]) { s.label = r[1], r = o; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(o); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }o = t.call(e, s); } catch (e) { o = [6, e], a = 0; } finally { n = r = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                }(this, ((s) => { switch (s.label) { case 0: n = t.rejectWithValue, a = t.extra, r = t.dispatch, s.label = 1; case 1: return s.trys.push([1, 3,, 4]), [4, a.api.get('/college/education-forms/'.concat(e))]; case 2: return i = s.sent(), r(J.setEduFormData(i.data)), [2, i.data]; case 3: return s.sent().message === 'Failed to fetch' ? [2, n('timeout')] : [2, n('ERROR')]; case 4: return [2]; } })));
            }, new ((r = void 0) || (r = Promise))(((e, t) => { function s(e) { try { l(i.next(e)); } catch (e) { t(e); } } function o(e) { try { l(i.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(s, o); }l((i = i.apply(n, a || [])).next()); })); let n; let a; let r; let i;
        })); const Z = function (e) { let t; let n; return (n = (t = e.editEduForm) === null || void 0 === t ? void 0 : t.newFields) === null || void 0 === n ? void 0 : n.title; }; const X = (0, c.hg)('eduForms/editEduForm', ((e, t) => {
            return n = void 0, a = void 0, i = function () {
                let n; let a; let r; let i; let s; let o; let l; let c; return (function (e, t) {
                    let n; let a; let r; let i; let s = {
                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                    }; return i = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function o(o) { return function (l) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, o[0] && (s = 0)), s;) try { if (n = 1, a && (r = 2 & o[0] ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, o[1])).done) return r; switch (a = 0, r && (o = [2 & o[0], r.value]), o[0]) { case 0: case 1: r = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, a = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < r[1]) { s.label = r[1], r = o; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(o); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }o = t.call(e, s); } catch (e) { o = [6, e], a = 0; } finally { n = r = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                }(this, ((u) => { switch (u.label) { case 0: n = t.rejectWithValue, a = t.extra, r = t.dispatch, i = t.getState, s = Z(i()), o = { title: s }, u.label = 1; case 1: return u.trys.push([1, 3,, 4]), [4, a.api.put('/college/education-forms/'.concat(e), o)]; case 2: return l = u.sent(), r(v()), r(V(e)), [2, l.data]; case 3: return c = u.sent(), [2, n({ errors: c.response.data.errors, status: c.response.status })]; case 4: return [2]; } })));
            }, new ((r = void 0) || (r = Promise))(((e, t) => { function s(e) { try { l(i.next(e)); } catch (e) { t(e); } } function o(e) { try { l(i.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(s, o); }l((i = i.apply(n, a || [])).next()); })); let n; let a; let r; let i;
        })); const G = (0, c.oM)({
            name: 'editEduForm',
            initialState: {
                data: void 0, newFields: void 0, isLoading: !1, errors: void 0,
            },
            reducers: { setEduFormData(e, t) { t.payload && (e.data = t.payload, e.newFields = { title: e.data.typeoftraining }); }, setTitle(e, t) { e.newFields.title = t.payload; }, clearNewFields(e) { let t; e.newFields = { title: ((t = e.data) === null || void 0 === t ? void 0 : t.typeoftraining) || null }, e.errors = void 0; } },
            extraReducers(e) { e.addCase(X.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(X.fulfilled, ((e) => { e.isLoading = !1; })).addCase(X.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })); },
        }); var J = G.actions; const K = G.reducer; const U = n(1783); const W = n(8263); const q = function (e) { let t; return (t = e.eduFormDetail) === null || void 0 === t ? void 0 : t.error; }; const Q = function (e) { let t; return (t = e.eduFormDetail) === null || void 0 === t ? void 0 : t.isLoading; }; const Y = function (e) { let t; return (t = e.eduFormDetail) === null || void 0 === t ? void 0 : t.data; }; const $ = (0, c.oM)({
            name: 'eduFormDetail', initialState: { data: void 0, isLoading: !1, error: void 0 }, reducers: {}, extraReducers(e) { e.addCase(V.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(V.fulfilled, ((e, t) => { e.isLoading = !1, e.data = t.payload; })).addCase(V.rejected, ((e, t) => { e.isLoading = !1, e.error = t.payload; })); },
        }); const ee = ($.actions, $.reducer); const te = function (e) { let t; return (t = e.editEduForm) === null || void 0 === t ? void 0 : t.isLoading; }; const ne = function (e) { let t; return (t = e.editEduForm) === null || void 0 === t ? void 0 : t.errors; }; const ae = {
            tabBtn: 'FsKXqeuR', tabsButtonsBlock: 'ltR4fG3y', title: 'kKalJLO5', footerBtn: 'ZDRM5cqU', greenBtn: 'kLdercdW', redBtn: 'bKnAo7VQ', settings: 'CDCpBOFG', newAddField: 'VH2aEGAu', tabBlock: 'pdmGzsAl', form: 'HBNjQ0dk', footer: 'BUobz43A', message: 'd3ZIqpvg', messageIcon: 'wfSxuTwZ',
        }; let re = function () { return re = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, re.apply(this, arguments); }; const ie = function (e) {
            const t = e.className; const n = e.visible; const r = e.setVisible; const i = e.eduFormId; const s = e.onDeleteEduForm; const o = (0, F.T)(); const c = (0, l.useState)(); const u = c[0]; const d = c[1]; const f = (0, l.useRef)(null); const h = (0, l.useState)(!1); const v = h[0]; const p = h[1]; const m = (0, l.useState)(!1); const g = m[0]; const x = m[1]; const b = (0, C.v9)(Y); const S = (0, C.v9)(Q); const L = (0, C.v9)(q); const A = (0, C.v9)(te); const D = (0, C.v9)(Z); const R = (0, C.v9)(ne); (0, l.useEffect)((() => { i && o(V(i)); }), [o, i]); let I; const _ = function () { r(!1), p(!1), x(!1); }; const z = function () { _(), o(J.clearNewFields()); }; return I = A || S ? (0, a.jsx)(P.O, { width: '100%', height: 80 }) : L ? (0, a.jsx)(k.xv, {
                theme: k.lg.ERROR, size: k.yH.M, weight: k.fs.SEMIBOLD, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, a.jsx)('div', {
                className: ae.tab,
                children: (0, a.jsx)('div', {
                    className: ae.tabBlock,
                    children: (0, a.jsx)('div', {
                        className: ae.settings,
                        children: (0, a.jsxs)('div', {
                            className: ae.newAddField,
                            children: [(0, a.jsx)('h6', { className: ae.newAddFieldTitle, children: 'Наименование' }), (0, a.jsx)(E.h, {
                                type: 'text', placeholder: 'очная', feedbackValid: R ? '' : 'Здорово!', invalid: !!R, feedbackInvalid: 'Введите корректные данные', value: D || '', onChange(e) { o(J.setTitle(e.target.value)); },
                            })],
                        }),
                    }),
                }),
            }), (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(j.Tk, {
                    className: (0, y.A)(ae.EditEduForm, {}, [t]),
                    visible: n,
                    onClose: _,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, a.jsxs)(j.lx, {
                        className: (0, y.A)(ae.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: v,
                        onSubmit(e) {
                            return t = void 0, n = void 0, r = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let a; let r; let i; let s = {
                                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                                    }; return i = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function o(o) { return function (l) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, o[0] && (s = 0)), s;) try { if (n = 1, a && (r = 2 & o[0] ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, o[1])).done) return r; switch (a = 0, r && (o = [2 & o[0], r.value]), o[0]) { case 0: case 1: r = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, a = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < r[1]) { s.label = r[1], r = o; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(o); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }o = t.call(e, s); } catch (e) { o = [6, e], a = 0; } finally { n = r = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                                }(this, ((a) => { switch (a.label) { case 0: return e.preventDefault(), t = e.currentTarget, x(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), p(!0), t.checkValidity() ? (b == null ? void 0 : b.typeoftraining) !== D ? [3, 1] : (d(B.F.error('Для сохранения вы должны внести изменения!')), [3, 3]) : [3, 3]; case 1: return [4, o(X(i))]; case 2: (n = a.sent()).meta.requestStatus === 'fulfilled' && (d(B.F.success('Информация о форме обучения успешно обновлена')), z()), n.meta.requestStatus === 'rejected' && x(!0), a.label = 3; case 3: return [2]; } })));
                            }, new ((a = void 0) || (a = Promise))(((e, i) => { function s(e) { try { l(r.next(e)); } catch (e) { i(e); } } function o(e) { try { l(r.throw(e)); } catch (e) { i(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(s, o); }l((r = r.apply(t, n || [])).next()); })); let t; let n; let a; let r;
                        },
                        children: [(0, a.jsx)(j.p0, { children: A || S ? (0, a.jsx)(P.O, { width: 200, height: 30 }) : (0, a.jsxs)(j.fl, { children: ['Изменение формы обучения №', b == null ? void 0 : b.id_typeoftraining] }) }), (0, a.jsx)(j.sD, { children: I }), (0, a.jsxs)(j.Ym, {
 className: ae.footer,
children: [(0, a.jsx)('div', { className: ae.message, children: g && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(w.Z, { icon: N.D, customClassName: ae.messageIcon }), (0, a.jsx)(k.xv, { size: k.yH.M, weight: k.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, a.jsxs)('div', {
 className: ae.footerBtns,
children: [(0, a.jsx)(O.zx, {
                            theme: O.bn.OUTLINE, className: ae.footerBtn, onClick: z, children: (0, a.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Отмена' }), 
}), (0, a.jsxs)(O.zx, {
                            theme: O.bn.ERROR, className: (0, y.A)(ae.footerBtn, {}, [ae.redBtn]), onClick() { s(b), _(); }, disabled: S || A || !!L, children: [(0, a.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Удалить' }), (0, a.jsx)(w.Z, { icon: U.N, className: ae.btnIcon })], 
}), (0, a.jsxs)(O.zx, {
                            type: 'submit', className: (0, y.A)(ae.footerBtn, {}, [ae.greenBtn]), disabled: S || A || !!L, children: [(0, a.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Сохранить' }), (0, a.jsx)(w.Z, { icon: W.F, className: ae.btnIcon })], 
})] 
})] 
})],
                    }),
                }), (0, a.jsx)(j.KF, { ref: f, push: u, placement: 'top-end' })],
            });
        }; const se = { footerBtn: 'HAXcg9Ey', redBtn: 'TaPsy8ao', deleteText: '_BK9jK8b' }; const oe = (0, c.hg)('eduForms/deleteEduForm', ((e, t) => {
            return n = void 0, a = void 0, i = function () {
                let n; let a; let r; let i; return (function (e, t) {
                    let n; let a; let r; let i; let s = {
                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                    }; return i = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function o(o) { return function (l) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, o[0] && (s = 0)), s;) try { if (n = 1, a && (r = 2 & o[0] ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, o[1])).done) return r; switch (a = 0, r && (o = [2 & o[0], r.value]), o[0]) { case 0: case 1: r = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, a = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < r[1]) { s.label = r[1], r = o; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(o); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }o = t.call(e, s); } catch (e) { o = [6, e], a = 0; } finally { n = r = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                }(this, ((s) => { switch (s.label) { case 0: n = t.rejectWithValue, a = t.extra, r = t.dispatch, s.label = 1; case 1: return s.trys.push([1, 3,, 4]), [4, a.api.delete('/college/education-forms/'.concat(e))]; case 2: return i = s.sent(), r(v()), [2, i.data]; case 3: return s.sent().message === 'Failed to fetch' ? [2, n('timeout')] : [2, n('ERROR')]; case 4: return [2]; } })));
            }, new ((r = void 0) || (r = Promise))(((e, t) => { function s(e) { try { l(i.next(e)); } catch (e) { t(e); } } function o(e) { try { l(i.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(s, o); }l((i = i.apply(n, a || [])).next()); })); let n; let a; let r; let i;
        })); let le = function () { return le = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, le.apply(this, arguments); }; const ce = function (e) {
            const t = e.className; const n = e.eduForm; const r = e.visible; const i = e.setVisible; const s = (0, F.T)(); const o = (0, l.useState)(); const c = o[0]; const u = o[1]; const d = (0, l.useRef)(null); const f = (0, l.useState)(!1); const h = f[0]; const v = f[1]; const p = function () { i(!1); }; return (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsxs)(j.Tk, {
                    className: (0, y.A)(se.DeleteEduForm, {}, [t]),
visible: r,
onClose: p,
size: 'lg',
alignment: 'center',
children: [(0, a.jsx)(j.p0, { children: (0, a.jsxs)(j.fl, { children: ['Удаление формы обучения №', n == null ? void 0 : n.id_typeoftraining] }) }), (0, a.jsx)(j.sD, { children: (0, a.jsxs)(k.xv, { size: k.yH.XM, className: se.deleteText, children: ['Вы действительно хотите удалить форму обучения', ' ', (0, a.jsxs)('span', { children: ['№', n == null ? void 0 : n.id_typeoftraining, ' ', '-', ' ', '"'.concat(n == null ? void 0 : n.typeoftraining, '"')] }), ' ', 'и все связанные с ним данные?'] }) }), (0, a.jsx)(j.Ym, {
 className: se.footer,
children: (0, a.jsxs)('div', {
 className: se.footerBtns,
children: [(0, a.jsx)(O.zx, {
                        theme: O.bn.OUTLINE, className: se.footerBtn, onClick: p, children: (0, a.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Отмена' }), 
}), (0, a.jsxs)(O.zx, {
                        theme: O.bn.ERROR, className: (0, y.A)(se.footerBtn, {}, [se.redBtn]), onClick() { let e; e = n.id_typeoftraining.toString(), v(!0), s(oe(e)).then(((e) => { e.meta.requestStatus === 'fulfilled' ? (u(B.F.success('Форма обучения №'.concat(n == null ? void 0 : n.id_typeoftraining, ' удалена'))), p(), v(!1)) : e.meta.requestStatus === 'rejected' && (u(B.F.error('Произошла ошибка при удалении, попробуйте снова')), v(!1)); })); }, disabled: h, children: [(0, a.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Удалить' }), (0, a.jsx)(w.Z, { icon: U.N, className: se.btnIcon })], 
})] 
}) 
})],
                }), (0, a.jsx)(j.KF, { ref: d, push: c, placement: 'top-end' })],
            });
        }; const ue = n(779); const de = {
            'modal-dialog': 'Oo9r3VzU', tabBtn: 'vruYs5zk', tabsButtonsBlock: 'mUw4nVmB', title: 'p8h1Hd0E', footerBtn: 'xgpA142c', redBtn: 'WGx17Cnc', settings: 'DJgDT5fK', newAddField: 'fvE9jihI', tabBlock: 'X2hacCZV', footer: 'NaDrq5Zn', message: 'Fb4WC6iR', messageIcon: 'xg8t_RIj', checkboxText: 'Fth849YQ',
        }; let fe = function () { return fe = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, fe.apply(this, arguments); }; const he = function (e) {
            const t = e.className; const n = e.visible; const r = e.setVisible; const i = e.eduFormId; const s = e.onDeleteEduForm; const o = e.onEditEduForm; const c = (0, F.T)(); const u = (0, C.v9)(Y); const d = (0, C.v9)(Q); const f = (0, C.v9)(q); (0, l.useEffect)((() => { i && c(V(i)); }), [c, i]); let h; const v = function () { r(!1); }; return h = d ? (0, a.jsx)(P.O, { width: '100%', height: 120 }) : f ? (0, a.jsx)(k.xv, {
                theme: k.lg.ERROR, size: k.yH.M, weight: k.fs.BOLD, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, a.jsx)('div', { className: de.tab, children: (0, a.jsxs)('div', { className: de.tabBlock, children: [(0, a.jsx)('div', { className: de.settings, children: (0, a.jsxs)('div', { className: de.newAddField, children: [(0, a.jsx)('h6', { className: de.newAddFieldTitle, children: 'ID формы обучения' }), (0, a.jsx)(k.xv, { size: k.yH.S, weight: k.fs.BOLD, children: u == null ? void 0 : u.id_typeoftraining })] }) }), (0, a.jsx)('div', { className: de.settings, children: (0, a.jsxs)('div', { className: de.newAddField, children: [(0, a.jsx)('h6', { className: de.newAddFieldTitle, children: 'Наименование' }), (0, a.jsx)(k.xv, { size: k.yH.S, weight: k.fs.BOLD, children: u == null ? void 0 : u.typeoftraining })] }) })] }) }), (0, a.jsxs)(j.Tk, {
                className: (0, y.A)(de.ViewEduForm, {}, [t, 'view-student-modal']),
visible: n,
onClose: v,
alignment: 'center',
children: [(0, a.jsx)(j.p0, { children: d ? (0, a.jsx)(P.O, { width: 200, height: 30 }) : (0, a.jsxs)(j.fl, { children: ['Форма обучения №', u == null ? void 0 : u.id_typeoftraining] }) }), (0, a.jsx)(j.sD, { children: h }), (0, a.jsxs)(j.Ym, {
 className: de.footer,
children: [(0, a.jsx)('div', {}), (0, a.jsxs)('div', {
 className: de.footerBtns,
children: [(0, a.jsx)(O.zx, {
                    theme: O.bn.OUTLINE, className: de.footerBtn, onClick: v, children: (0, a.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Закрыть' }), 
}), (0, a.jsxs)(O.zx, {
                    theme: O.bn.ERROR, className: (0, y.A)(de.footerBtn, {}, [de.redBtn]), onClick() { s(u), v(); }, disabled: d || !!f, children: [(0, a.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Удалить' }), (0, a.jsx)(w.Z, { icon: U.N, className: de.btnIcon })], 
}), (0, a.jsxs)(O.zx, {
                    color: 'primary', className: de.footerBtn, onClick() { o(i), v(); }, disabled: d || !!f, children: [(0, a.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Редактировать' }), (0, a.jsx)(w.Z, { icon: ue.C, className: de.btnIcon })], 
})] 
})] 
})],
            });
        }; const ve = n(6837); const pe = n(1353); const me = n(773); const ge = n(5606); const xe = n(2008); const be = n(596); const ye = n(4164); const je = {
            TableBlock: 'J1XbP2FO', table: 'zwiRYHN6', tableRow: 'DzKqQG8C', tableCell: 'tbC7rFUn', tableHead: 'NMn43pIm', tableCellId: 'SJi9CPrH', tableBody: 'hopjFxe2', tableSortIcon: 'BolMsm0v', active: 'Q_pu7fUp', cellTextBg: 'bgtOerBc', tableCellBtns: 'of_Cxto8', tableCellBtnsWrapper: 'KCdir_qn', editBtn: 'DyS9BGUB', checkbox: 'n5fCoPGM', tableWithCheckboxes: 'w92mF1CI',
        }; let we = function () { return we = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, we.apply(this, arguments); }; const Ne = function (e) {
            let t; let n; let r; let i; const s = e.className; const o = e.data; const c = e.exportDisabled; const d = (0, F.T)(); const f = (0, C.v9)(_); const h = (0, C.v9)(z); const p = (0, C.v9)(u.DU); const m = (0, C.v9)(u.Qg); const g = (0, l.useState)(); const x = g[0]; const b = g[1]; const j = (0, l.useState)(!1); const w = j[0]; const N = j[1]; const S = (0, l.useState)(!1); const E = S[0]; const B = S[1]; const L = (0, l.useState)(!1); const A = L[0]; const D = L[1]; const R = (0, l.useState)(); const I = R[0]; const T = R[1]; const M = function (e) { B(!0), T(e); }; const H = (0, l.useCallback)(((e) => { D(!0), b(e); }), []); (0, l.useEffect)((() => { d(u.f$.setSort('id_typeoftraining')); }), [d]); let V; const Z = (0, l.useCallback)(((e) => { d(u.f$.setSort(e)), d(v()); }), [d]); V = f ? (0, a.jsx)(P.O, { height: 250 }) : h ? (0, a.jsx)(k.xv, {
                theme: k.lg.ERROR, size: k.yH.M, weight: k.fs.SEMIBOLD, className: je.error, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : o.length ? (0, a.jsxs)('div', {
 className: (0, y.A)(je.table, (t = {}, t[je.tableWithCheckboxes] = !c, t), []),
children: [(0, a.jsx)('div', {
 className: je.tableHead,
children: (0, a.jsxs)('div', {
 className: je.tableRow,
children: [!c && (0, a.jsx)(ve.X, { className: je.checkbox, id: 'checkbox-edu-forms-all' }), (0, a.jsxs)(O.zx, {
                theme: O.bn.CLEAR, className: (0, y.A)(je.tableCell, {}, [je.tableCellId]), onClick() { Z('id_typeoftraining'); }, children: [(0, a.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'ID формы обучения' }), (0, a.jsx)(pe.J, { Svg: m === 'asc' ? me.Z : ge.Z, className: (0, y.A)(je.tableSortIcon, (n = {}, n[je.active] = p === 'id_typeoftraining', n), []) })], 
}), (0, a.jsxs)(O.zx, {
                theme: O.bn.CLEAR, className: je.tableCell, onClick() { Z('typeoftraining'); }, children: [(0, a.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Наименование' }), (0, a.jsx)(pe.J, { Svg: m === 'asc' ? me.Z : ge.Z, className: (0, y.A)(je.tableSortIcon, (r = {}, r[je.active] = p === 'typeoftraining', r), []) })], 
}), (0, a.jsx)('div', { className: (0, y.A)(je.tableCell, {}, [je.tableCellBtnsWrapper]) })] 
}) 
}), (0, a.jsx)('div', { className: je.tableBody, children: o == null ? void 0 : o.map(((e) => (0, a.jsxs)('div', { className: je.tableRow, children: [!c && (0, a.jsx)(ve.X, { className: je.checkbox, id: 'checkbox-edu-forms-'.concat(e.id_typeoftraining) }), (0, a.jsx)('div', { className: (0, y.A)(je.tableCell, {}, [je.tableCellId]), children: (0, a.jsx)(k.xv, { size: k.yH.XS, children: e.id_typeoftraining }) }), (0, a.jsx)('div', { className: je.tableCell, children: (0, a.jsx)(k.xv, { size: k.yH.XS, children: e.typeoftraining }) }), (0, a.jsxs)('div', { className: (0, y.A)(je.tableCell, {}, [je.tableCellBtns]), children: [(0, a.jsx)(O.zx, { theme: O.bn.CLEAR, title: 'Просмотр', className: je.editBtn, onClick () { var t; t = e.id_typeoftraining.toString(), N(!0), T(t) }, children: (0, a.jsx)(pe.J, { Svg: xe.Z }) }), (0, a.jsx)(O.zx, { theme: O.bn.CLEAR, title: 'Редактировать', className: je.editBtn, onClick () { M(e.id_typeoftraining.toString()) }, children: (0, a.jsx)(pe.J, { Svg: be.Z }) }), (0, a.jsx)(O.zx, { theme: O.bn.CLEAR, title: 'Удалить', className: je.editBtn, onClick () { H(e) }, children: (0, a.jsx)(pe.J, { Svg: ye.Z }) })] })] }, e.id_typeoftraining))) })] 
}) : (0, a.jsx)(k.xv, { children: 'Ничего не найдено...' }); const X = ((i = {})[je.error] = !!h, i); return (0, a.jsxs)('div', {
                className: (0, y.A)(je.TableBlock, X, [s]),
                children: [V, (0, a.jsx)(he, {
                    visible: w, setVisible: N, eduFormId: I, onDeleteEduForm: H, onEditEduForm: M,
                }), (0, a.jsx)(ie, {
                    visible: E, setVisible: B, eduFormId: I, onDeleteEduForm: H,
                }), (0, a.jsx)(ce, { eduForm: x, visible: A, setVisible: D })],
            });
        }; const Se = n(7730); const ke = n(7687); const Ee = n(5375); let Ce = function () { return Ce = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, Ce.apply(this, arguments); }; const Fe = {
            eduForms: H, addEduForm: b, eduFormDetail: ee, editEduForm: K,
        }; const Be = function (e) {
            e.className; const t = (0, F.T)(); const n = (0, l.useState)(!1); const c = n[0]; const u = n[1]; const d = (0, C.v9)(I); const p = (0, C.v9)(_); const m = (0, C.v9)(z); const g = (0, C.v9)(h); const x = (0, C.v9)(f); const b = (0, l.useState)(''); const y = b[0]; const j = b[1]; const w = (0, l.useState)(); const N = w[0]; const S = w[1]; const k = (0, l.useCallback)(((e) => { j(e); }), []); const E = (0, l.useCallback)(((e) => { t(M.setLimit(e)), t(v()); }), [t]); const B = (0, l.useCallback)(((e) => { t(M.setPage(e)), t(v()); }), [t]); return (0, l.useEffect)((() => { S((d == null ? void 0 : d.data) || []); }), [d]), (0, l.useEffect)((() => { const e = (0, Se.oZ)(y, (d == null ? void 0 : d.data) || []); S(e || []); }), [d, y]), (0, l.useEffect)((() => { t(v()); }), [t]), (0, a.jsx)(o.B, {
                title: 'LMS - Форма обучения',
                children: (0, a.jsxs)(r.W, {
                    reducers: Fe,
                    removeAfterUnmount: !0,
                    children: [(0, a.jsxs)('div', {
                        children: [(0, a.jsxs)('div', {
                            className: 'page-settings '.concat(!1),
                            children: [(0, a.jsx)(i.o, {
                                value: y, onChange: k, searchText: 'Поиск по наименованию', error: m, isLoading: p,
                            }), (0, a.jsx)(s.X, {
                                onlyAdding: !0, setVisibleAddNewField: u, addingModalText: 'Добавить форму обучения', error: m, isLoading: p, children: (0, a.jsx)(R, { visible: c, setVisible: u }),
                            })],
                        }), (0, a.jsx)(Ne, { data: N || [], exportDisabled: !0 }), (0, a.jsxs)('div', {
                            className: 'page-table-settings',
                            children: [(0, a.jsx)(ke.K, {
                                data: N || [], onChange: E, onChangePage: B, paginationData: d == null ? void 0 : d.pagination, itemsLimit: g, withRecords: !0, isLoading: p, error: m,
                            }), (0, a.jsx)(ke.N, {
                                data: N || [], onChange: B, itemsPage: x, isLoading: p, error: m, paginationData: d == null ? void 0 : d.pagination,
                            })],
                        })],
                    }), m && (0, a.jsx)(Ee.d, { error: m })],
                }),
            });
        };
    },
    5375: (e, t, n) => { n.d(t, { d: () => l }); const a = n(5893); const r = n(7294); const i = n(530); const s = n(4475); function o(e) { return o = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) { return typeof e; } : function (e) { return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e; }, o(e); } var l = (0, r.memo)(((e) => { const t = e.error; const n = (0, r.useState)(); const l = n[0]; const c = n[1]; const u = (0, r.useRef)(null); return (0, r.useEffect)((() => { (typeof t === 'string' && t === 'timeout' || o(t) === 'object' && t.status === 500 && t.error === 'timeout') && c(i.F.error('Соединение с сервером потеряно')); }), [t]), (0, a.jsx)(s.KF, { ref: u, push: l, placement: 'top-end' }); })); },
    7687: (e, t, n) => {
        n.d(t, { K: () => N, N: () => I }); let a; const r = n(5893); const i = n(4387); const s = n(7294); const o = ['25', '50', '100', '200', '500']; const l = n(1138); const c = n(4809); const u = n(1353); const d = n(8896); function f() { return f = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const a in n)Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]); } return e; }, f.apply(this, arguments); } const h = function (e) { return s.createElement('svg', f({ width: 20, height: 20, xmlns: 'http://www.w3.org/2000/svg' }, e), a || (a = s.createElement('path', { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M8.565 9.731 5.229 6.396A.79.79 0 0 1 5 5.813a.79.79 0 0 1 .23-.584A.79.79 0 0 1 5.811 5a.79.79 0 0 1 .584.23l3.25 3.25 3.25-3.25a.79.79 0 0 1 .583-.23.79.79 0 0 1 .584.23.79.79 0 0 1 .229.582.79.79 0 0 1-.23.584l-3.33 3.331 3.335 3.335a.79.79 0 0 1 .229.584.79.79 0 0 1-.23.583.79.79 0 0 1-.583.23.79.79 0 0 1-.583-.23l-3.25-3.25-3.25 3.25a.79.79 0 0 1-.583.23.79.79 0 0 1-.584-.23.79.79 0 0 1-.229-.583.79.79 0 0 1 .23-.584l3.33-3.33Z' }))); }; const v = n(9161); const p = n(8863); const m = 'lJhrM3nh'; const g = 'zZgj2JgW'; let x = function () { return x = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, x.apply(this, arguments); }; const b = (0, s.memo)(((e) => {
            let t; const n = e.className; const a = e.items; const o = e.value; const l = e.onChange; const f = (0, s.useState)(o); const b = f[0]; const y = f[1]; const j = (0, s.useState)(!1); const w = j[0]; const N = j[1]; const S = (0, s.useRef)(null); (0, p.p)(S, N); const k = (0, s.useCallback)((() => { N(!0); }), []); const E = (0, s.useCallback)((() => { N(!1); }), []); const C = (0, s.useCallback)(((e) => { l(e), y(e), E(); }), [E, l]); return (0, r.jsxs)('div', {
                className: (0, i.A)('eXu4wq7K', {}, [n]),
                ref: S,
                children: [!w && (0, r.jsxs)(v.zx, {
                    className: 'bAUrWG2D', theme: v.bn.CLEAR, onClick: k, children: [(0, r.jsx)(c.xv, { weight: c.fs.SEMIBOLD, className: m, children: b }), (0, r.jsx)(u.J, { Svg: d.Z })],
                }), (0, r.jsx)('div', {
 className: (0, i.A)('Jh9c6KnL', (t = {}, t.fpG6Af4B = w, t), []),
style: { top: ''.concat(-40 * a.indexOf(b), 'px') },
children: a.map(((e) => (b === e ? (0, r.jsxs)('div', { className: (0, i.A)(g, {}, ['rKHhU8sR']), children: [(0, r.jsx)(c.xv, { weight: c.fs.SEMIBOLD, className: m, children: e }), (0, r.jsx)(v.zx, {
 theme: v.bn.CLEAR, className: 'HkrPDu6E', onClick: E, children: (0, r.jsx)(u.J, { Svg: h }) 
})] }, e) : (0, r.jsx)(v.zx, {
                    theme: v.bn.CLEAR, className: g, size: v.qE.XS, onClick() { C(e); }, children: (0, r.jsx)(c.xv, { weight: c.fs.SEMIBOLD, className: m, children: e }), 
}, e)))) 
})],
            });
        })); const y = {
            LimitShow: 'eQ6pERU2', selectLimit: 'hKaByxY3', limitSelectWrapper: 'XhlPZwOr', recordsText: 'Shn48cNg', textResults: 'MlwyceC_',
        }; let j; let w = function () { return w = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, w.apply(this, arguments); }; var N = (0, s.memo)(((e) => {
            const t = e.className; const n = e.onChange; const a = e.itemsLimit; const s = e.withRecords; const u = e.paginationData; const d = e.isLoading; const f = e.error; const h = e.data; const v = e.onChangePage; const p = (u == null ? void 0 : u.current_page) ? (u.current_page - 1) * Number(a) + 1 : 0; const m = (u == null ? void 0 : u.current_page) ? u.current_page * Number(a) : 0; return d ? (0, r.jsx)(l.O, {
                width: '100%', height: 40, border: '6px', className: y.skeleton,
            }) : f ? (0, r.jsx)('div', {}) : h.length ? (0, r.jsxs)('div', { className: (0, i.A)(y.LimitShow, {}, [t]), children: [s && p && m && (0, r.jsxs)(c.xv, { theme: c.lg.LIGHT, className: y.recordsText, children: ['Записи', ' ', p, ' ', '-', ' ', m, ' ', '| Всего', ' ', u == null ? void 0 : u.total_records] }), (0, r.jsxs)('div', { className: y.limitSelectWrapper, children: [(0, r.jsx)(c.xv, { theme: c.lg.LIGHT, className: y.textResults, children: 'Результатов на странице' }), (0, r.jsx)(b, { items: o, value: a, onChange(e) { n(e), v('1'); } })] })] }) : (0, r.jsx)('div', {});
        })); const S = n(4475); function k() { return k = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const a in n)Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]); } return e; }, k.apply(this, arguments); } const E = function (e) {
            return s.createElement('svg', k({
                width: 30, height: 30, fill: 'none', xmlns: 'http://www.w3.org/2000/svg',
            }, e), j || (j = s.createElement('path', { d: 'M9.514 5.763A1.739 1.739 0 0 0 9 6.994a1.73 1.73 0 0 0 .514 1.231l6.822 6.777-6.822 6.776a1.735 1.735 0 0 0 0 2.462 1.759 1.759 0 0 0 2.48 0l8.07-8.016a1.74 1.74 0 0 0 .514-1.231 1.73 1.73 0 0 0-.514-1.231l-8.07-8.016c-.669-.664-1.794-.664-2.48.017Z', fill: '#EB8247' })));
        }; let C; function F() { return F = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const a in n)Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]); } return e; }, F.apply(this, arguments); } const B = function (e) {
            return s.createElement('svg', F({
                width: 30, height: 30, fill: 'none', xmlns: 'http://www.w3.org/2000/svg',
            }, e), C || (C = s.createElement('path', { d: 'M6.175 8.2a1.875 1.875 0 0 1 2.65-2.65l8.125 8.125a1.875 1.875 0 0 1 0 2.65L8.825 24.45a1.875 1.875 0 0 1-2.65-2.65l6.8-6.8-6.8-6.8Zm18.2 16.8a1.875 1.875 0 0 0 1.875-1.875V6.875a1.875 1.875 0 0 0-3.75 0v16.25c0 1.035.84 1.875 1.875 1.875Z', fill: '#EB8247' })));
        }; const O = 'ytJMbyx3'; const L = 'SRBkd4oW'; const A = '_DUi30wm'; let D = function () { return D = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, D.apply(this, arguments); }; const R = function (e, t, n) { if (n || arguments.length === 2) for (var a, r = 0, i = t.length; r < i; r++)!a && r in t || (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]); return e.concat(a || Array.prototype.slice.call(t)); }; var I = (0, s.memo)(((e) => {
            const t = e.className; const n = e.data; const a = e.isLoading; const s = e.error; const o = e.paginationData; const c = e.onChange; const d = e.itemsPage; return a ? (0, r.jsx)(l.O, {
                width: 250, height: 40, border: '6px', className: 'nlgg7yYk',
            }) : s || n.length === 0 ? (0, r.jsx)('div', {}) : (0, r.jsx)('div', {
                className: (0, i.A)('AuxB6Ddw', {}, [t]),
                children: (0, r.jsxs)(S.E7, {
                    'aria-label': 'TrainingSchedule pagination',
                    align: 'end',
                    children: [(o == null ? void 0 : o.prev_page) && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(S.tn, { onClick() { c('1'); }, className: (0, i.A)(O, {}, [L]), children: (0, r.jsx)(u.J, { className: 'uBUXyeMF', Svg: B }) }), (0, r.jsx)(S.tn, { onClick() { c(''.concat(+d - 1)); }, className: (0, i.A)(O, {}, [L]), children: (0, r.jsx)(u.J, { className: 'jKQ4PRf5', Svg: E }) })] }), (o == null ? void 0 : o.total_pages) ? (0, r.jsxs)(r.Fragment, {
                        children: [o.total_pages <= 7 && R([], Array(o.total_pages), !0).map(((e, t) => (0, r.jsx)(S.tn, {
                            className: (0, i.A)(O, {}, [A]), active: +d === t + 1, onClick() { c(''.concat(t + 1)); }, children: t + 1,
                        }, t))), o.total_pages > 7 && (0, r.jsxs)(r.Fragment, {
                            children: [R([], Array(o.total_pages), !0).map(((e, t) => {
                                if ((+d === t + 1 || +d + 1 === t + 1 || +d + 2 === t + 1) && +d !== o.total_pages && t + 1 !== o.total_pages && t + 2 !== o.total_pages && t + 3 !== o.total_pages) {
                                    return (0, r.jsx)(S.tn, {
                                        className: (0, i.A)(O, {}, [A]), active: +d === t + 1, onClick() { c(''.concat(t + 1)); }, children: t + 1,
                                    }, t);
                                }
                            })), o.total_pages === +d || o.total_pages - 1 == +d || o.total_pages - 2 == +d || o.total_pages - 2 - +d == 3 || o.total_pages - 2 - +d == 2 || o.total_pages - 2 - +d == 1 ? '' : (0, r.jsx)(S.tn, { className: (0, i.A)(O, {}, [A, 'JQSOdsCs']), onClick() { c(''.concat(+d + 1)); }, children: '...' }), R([], Array(o.total_pages), !0).map(((e, t) => {
                                if (o.total_pages - t + 1 == 4 || o.total_pages - t + 1 == 3 || o.total_pages - t + 1 == 2 || o.total_pages - t + 1 == 1) {
                                    return (0, r.jsx)(S.tn, {
                                        className: (0, i.A)(O, {}, [A]), active: +d === t + 1, onClick() { c(''.concat(t + 1)); }, children: t + 1,
                                    }, t);
                                }
                            }))],
                        })],
                    }) : (0, r.jsx)('div', {}), (o == null ? void 0 : o.next_page) && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(S.tn, { onClick() { c(''.concat(+d + 1)); }, className: (0, i.A)(O, {}, [L]), children: (0, r.jsx)(u.J, { Svg: E }) }), (0, r.jsx)(S.tn, { onClick() { c(''.concat(o == null ? void 0 : o.total_pages)); }, className: (0, i.A)(O, {}, [L]), children: (0, r.jsx)(u.J, { Svg: B }) })] })],
                }),
            });
        }));
    },
}]);
