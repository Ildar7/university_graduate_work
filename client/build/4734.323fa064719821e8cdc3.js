!(function () { try { const e = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; const t = (new Error()).stack; t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = '7bea59f6-98c9-4149-a2a3-f189e3a6d747', e._sentryDebugIdIdentifier = 'sentry-dbid-7bea59f6-98c9-4149-a2a3-f189e3a6d747'); } catch (e) {} }()); const _global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; _global.SENTRY_RELEASE = { id: '45ee1168f5cf48e9753bace26323152d3b61cb67' }, (self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[4734], {
    7514: (e, t, n) => {
        n.r(t), n.d(t, { default: () => De }); const i = n(5893); const s = n(1150); const a = n(9649); const r = n(5306); const o = n(918); const l = n(7294); const c = n(7168); const d = n(1759); const u = n(121); const f = function (e) { let t; return (t = e.studentSections) === null || void 0 === t ? void 0 : t.page; }; const h = function (e) { let t; return (t = e.studentSections) === null || void 0 === t ? void 0 : t.limit; }; const v = (0, c.hg)('students/fetchStudentSections', ((e, t) => {
            return n = void 0, i = void 0, a = function () {
                let e; let n; let i; let s; let a; let r; return (function (e, t) {
                    let n; let i; let s; let a; let r = {
                        label: 0, sent() { if (1 & s[0]) throw s[1]; return s[1]; }, trys: [], ops: [],
                    }; return a = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function o(o) { return function (l) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, o[0] && (r = 0)), r;) try { if (n = 1, i && (s = 2 & o[0] ? i.return : o[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, o[1])).done) return s; switch (i = 0, s && (o = [2 & o[0], s.value]), o[0]) { case 0: case 1: s = o; break; case 4: return r.label++, { value: o[1], done: !1 }; case 5: r.label++, i = o[1], o = [0]; continue; case 7: o = r.ops.pop(), r.trys.pop(); continue; default: if (!((s = (s = r.trys).length > 0 && s[s.length - 1]) || o[0] !== 6 && o[0] !== 2)) { r = 0; continue; } if (o[0] === 3 && (!s || o[1] > s[0] && o[1] < s[3])) { r.label = o[1]; break; } if (o[0] === 6 && r.label < s[1]) { r.label = s[1], s = o; break; } if (s && r.label < s[2]) { r.label = s[2], r.ops.push(o); break; }s[2] && r.ops.pop(), r.trys.pop(); continue; }o = t.call(e, r); } catch (e) { o = [6, e], i = 0; } finally { n = s = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                }(this, ((o) => {
                    switch (o.label) {
                    case 0: e = t.rejectWithValue, n = t.extra, i = t.getState, s = {
                        pageSelector: f, limitSelector: h, sortFieldSelector: d.DU, sortOrderSelector: d.Qg,
                    }, a = (0, u.o)('/college/student-sections', s, i()), o.label = 1; case 1: return o.trys.push([1, 3,, 4]), [4, n.api.get(a)]; case 2: return [2, o.sent().data]; case 3: return (r = o.sent()).message === 'Failed to fetch' ? [2, e({ status: 500, error: 'timeout' })] : [2, e({ status: r.response.status, error: r.response.data.message })]; case 4: return [2];
                    }
                })));
            }, new ((s = void 0) || (s = Promise))(((e, t) => { function r(e) { try { l(a.next(e)); } catch (e) { t(e); } } function o(e) { try { l(a.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof s ? n : new s(((e) => { e(n); }))).then(r, o); }l((a = a.apply(n, i || [])).next()); })); let n; let i; let s; let a;
        })); const b = function (e) { let t; return (t = e.addStudentSection) === null || void 0 === t ? void 0 : t.data.title; }; const p = (0, c.hg)('studentSections/addStudentSection', ((e, t) => {
            return n = void 0, i = void 0, a = function () {
                let e; let n; let i; let s; let a; let r; let o; let l; return (function (e, t) {
                    let n; let i; let s; let a; let r = {
                        label: 0, sent() { if (1 & s[0]) throw s[1]; return s[1]; }, trys: [], ops: [],
                    }; return a = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function o(o) { return function (l) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, o[0] && (r = 0)), r;) try { if (n = 1, i && (s = 2 & o[0] ? i.return : o[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, o[1])).done) return s; switch (i = 0, s && (o = [2 & o[0], s.value]), o[0]) { case 0: case 1: s = o; break; case 4: return r.label++, { value: o[1], done: !1 }; case 5: r.label++, i = o[1], o = [0]; continue; case 7: o = r.ops.pop(), r.trys.pop(); continue; default: if (!((s = (s = r.trys).length > 0 && s[s.length - 1]) || o[0] !== 6 && o[0] !== 2)) { r = 0; continue; } if (o[0] === 3 && (!s || o[1] > s[0] && o[1] < s[3])) { r.label = o[1]; break; } if (o[0] === 6 && r.label < s[1]) { r.label = s[1], s = o; break; } if (s && r.label < s[2]) { r.label = s[2], r.ops.push(o); break; }s[2] && r.ops.pop(), r.trys.pop(); continue; }o = t.call(e, r); } catch (e) { o = [6, e], i = 0; } finally { n = s = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                }(this, ((c) => { switch (c.label) { case 0: e = t.rejectWithValue, n = t.extra, i = t.dispatch, s = t.getState, a = b(s()), r = { name: a }, c.label = 1; case 1: return c.trys.push([1, 3,, 4]), [4, n.api.post('/college/student-sections/', r)]; case 2: return o = c.sent(), i(v()), i(g.clearData()), [2, o.data]; case 3: return l = c.sent(), [2, e({ errors: l.response.data.errors, status: l.response.status })]; case 4: return [2]; } })));
            }, new ((s = void 0) || (s = Promise))(((e, t) => { function r(e) { try { l(a.next(e)); } catch (e) { t(e); } } function o(e) { try { l(a.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof s ? n : new s(((e) => { e(n); }))).then(r, o); }l((a = a.apply(n, i || [])).next()); })); let n; let i; let s; let a;
        })); const x = (0, c.oM)({
            name: 'addStudentSection', initialState: { data: { title: null }, isLoading: !1, errors: void 0 }, reducers: { setTitle(e, t) { e.data.title = t.payload; }, clearData(e) { e.data = { title: null }, e.errors = void 0; } }, extraReducers(e) { e.addCase(p.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(p.fulfilled, ((e) => { e.isLoading = !1; })).addCase(p.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })); },
        }); var g = x.actions; const m = x.reducer; const y = n(4387); const S = n(4475); const j = n(2308); const w = n(5044); const N = n(3280); const k = n(4809); const B = n(1385); const C = n(6458); const O = n(5461); const L = n(530); const D = n(9161); const I = function (e) { let t; return (t = e.addStudentSection) === null || void 0 === t ? void 0 : t.errors; }; const E = {
            tabBtn: 'lHERxu84', tabsButtonsBlock: 'NkDNKVHd', title: 'meqffTGN', settings: 'GjNpY4yo', newAddField: 'QdOn1Yji', tabBlock: 'cu14dXdY', form: 'exl7zLqK', footerBtn: 'KveByWC6', greenBtn: 'DbJuZnTf', footer: 'OK9dg6ng', message: 'ERuGZJZQ', messageIcon: 'wIgHkBci',
        }; let R = function () { return R = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const s in t = arguments[n])Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]); return e; }, R.apply(this, arguments); }; const z = function (e) {
            const t = e.className; const n = e.visible; const s = e.setVisible; const a = (0, O.T)(); const r = (0, l.useState)(!1); const o = r[0]; const c = r[1]; const d = (0, l.useState)(!1); const u = d[0]; const f = d[1]; const h = (0, l.useState)(); const v = h[0]; const x = h[1]; const m = (0, l.useRef)(null); const z = (0, C.v9)(b); const T = (0, C.v9)(I); const A = (0, l.useCallback)((() => { s(!1); }), [s]); const F = function () { A(), c(!1), f(!1); }; return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(S.Tk, {
                    className: (0, y.A)(E.AddStudentSection, {}, [t]),
                    visible: n,
                    onClose: A,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, i.jsxs)(S.lx, {
                        className: (0, y.A)(E.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: o,
                        onSubmit(e) {
                            return t = void 0, n = void 0, s = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let i; let s; let a; let r = {
                                        label: 0, sent() { if (1 & s[0]) throw s[1]; return s[1]; }, trys: [], ops: [],
                                    }; return a = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function o(o) { return function (l) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, o[0] && (r = 0)), r;) try { if (n = 1, i && (s = 2 & o[0] ? i.return : o[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, o[1])).done) return s; switch (i = 0, s && (o = [2 & o[0], s.value]), o[0]) { case 0: case 1: s = o; break; case 4: return r.label++, { value: o[1], done: !1 }; case 5: r.label++, i = o[1], o = [0]; continue; case 7: o = r.ops.pop(), r.trys.pop(); continue; default: if (!((s = (s = r.trys).length > 0 && s[s.length - 1]) || o[0] !== 6 && o[0] !== 2)) { r = 0; continue; } if (o[0] === 3 && (!s || o[1] > s[0] && o[1] < s[3])) { r.label = o[1]; break; } if (o[0] === 6 && r.label < s[1]) { r.label = s[1], s = o; break; } if (s && r.label < s[2]) { r.label = s[2], r.ops.push(o); break; }s[2] && r.ops.pop(), r.trys.pop(); continue; }o = t.call(e, r); } catch (e) { o = [6, e], i = 0; } finally { n = s = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                                }(this, ((i) => { switch (i.label) { case 0: return e.preventDefault(), t = e.currentTarget, f(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), c(!0), t.checkValidity() ? z ? [4, a(p())] : [3, 2] : [3, 3]; case 1: return (n = i.sent()).meta.requestStatus === 'fulfilled' && (x(L.F.success('Секция добавлена')), F()), n.meta.requestStatus === 'rejected' && f(!0), [3, 3]; case 2: f(!0), i.label = 3; case 3: return [2]; } })));
                            }, new ((i = void 0) || (i = Promise))(((e, a) => { function r(e) { try { l(s.next(e)); } catch (e) { a(e); } } function o(e) { try { l(s.throw(e)); } catch (e) { a(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i(((e) => { e(n); }))).then(r, o); }l((s = s.apply(t, n || [])).next()); })); let t; let n; let i; let s;
                        },
                        children: [(0, i.jsx)(S.p0, { children: (0, i.jsx)(S.fl, { children: 'Добавление секции' }) }), (0, i.jsx)(S.sD, { children: (0, i.jsx)('div', { className: E.tab, children: (0, i.jsx)('div', { className: E.tabBlock, children: (0, i.jsx)('div', { className: E.settings, children: (0, i.jsxs)('div', { className: E.newAddField, children: [(0, i.jsx)('h6', {className: E.newAddFieldTitle, children: "Наименование*"}), (0, i.jsx)(B.h, {
 type: 'text', placeholder: 'футбол', feedbackValid: T ? '' : 'Здорово!', invalid: !!T, feedbackInvalid: 'Введите корректные данные!', value: z || '', onChange (e) { a(g.setTitle(e.target.value)) }, required: !0 
})] }) }) }) }) }), (0, i.jsxs)(S.Ym, { className: E.footer, children: [(0, i.jsx)('div', { className: E.message, children: u && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(j.Z, { icon: w.D, customClassName: E.messageIcon }), (0, i.jsx)(k.xv, { size: k.yH.M, weight: k.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, i.jsxs)('div', { className: E.footerBtns, children: [(0, i.jsx)(D.zx, {
 theme: D.bn.OUTLINE, className: E.footerBtn, onClick: F, children: (0, i.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Отмена'}) 
}), (0, i.jsxs)(D.zx, { type: 'submit', className: (0, y.A)(E.footerBtn, {}, [E.greenBtn]), children: [(0, i.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Добавить'}), (0, i.jsx)(j.Z, { icon: N.q, className: E.btnIcon })] })] })] })],
                    }),
                }), (0, i.jsx)(S.KF, { ref: m, push: v, placement: 'top-end' })],
            });
        }; const T = function (e) { let t; return (t = e.studentSections) === null || void 0 === t ? void 0 : t.data; }; const A = function (e) { let t; return (t = e.studentSections) === null || void 0 === t ? void 0 : t.isLoading; }; const F = function (e) { let t; return (t = e.studentSections) === null || void 0 === t ? void 0 : t.error; }; const M = (0, c.oM)({
            name: 'studentSections',
            initialState: {
                data: void 0, isLoading: !0, error: void 0, page: '1', limit: '50',
            },
            reducers: { setPage(e, t) { e.page = t.payload; }, setLimit(e, t) { e.limit = t.payload; } },
            extraReducers(e) { e.addCase(v.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(v.fulfilled, ((e, t) => { e.isLoading = !1, e.data = { data: t.payload.data, pagination: t.payload.pagination }; })).addCase(v.rejected, ((e, t) => { e.isLoading = !1, e.error = t.payload; })); },
        }); const H = M.actions; const V = M.reducer; const P = n(1138); const _ = (0, c.hg)('studentSections/fetchStudentSectionDetail', ((e, t) => {
            return n = void 0, i = void 0, a = function () {
                let n; let i; let s; let a; return (function (e, t) {
                    let n; let i; let s; let a; let r = {
                        label: 0, sent() { if (1 & s[0]) throw s[1]; return s[1]; }, trys: [], ops: [],
                    }; return a = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function o(o) { return function (l) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, o[0] && (r = 0)), r;) try { if (n = 1, i && (s = 2 & o[0] ? i.return : o[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, o[1])).done) return s; switch (i = 0, s && (o = [2 & o[0], s.value]), o[0]) { case 0: case 1: s = o; break; case 4: return r.label++, { value: o[1], done: !1 }; case 5: r.label++, i = o[1], o = [0]; continue; case 7: o = r.ops.pop(), r.trys.pop(); continue; default: if (!((s = (s = r.trys).length > 0 && s[s.length - 1]) || o[0] !== 6 && o[0] !== 2)) { r = 0; continue; } if (o[0] === 3 && (!s || o[1] > s[0] && o[1] < s[3])) { r.label = o[1]; break; } if (o[0] === 6 && r.label < s[1]) { r.label = s[1], s = o; break; } if (s && r.label < s[2]) { r.label = s[2], r.ops.push(o); break; }s[2] && r.ops.pop(), r.trys.pop(); continue; }o = t.call(e, r); } catch (e) { o = [6, e], i = 0; } finally { n = s = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                }(this, ((r) => { switch (r.label) { case 0: n = t.rejectWithValue, i = t.extra, s = t.dispatch, r.label = 1; case 1: return r.trys.push([1, 3,, 4]), [4, i.api.get('/college/student-sections/'.concat(e))]; case 2: return a = r.sent(), s(J.setStudentSectionData(a.data)), [2, a.data]; case 3: return r.sent().message === 'Failed to fetch' ? [2, n('timeout')] : [2, n('ERROR')]; case 4: return [2]; } })));
            }, new ((s = void 0) || (s = Promise))(((e, t) => { function r(e) { try { l(a.next(e)); } catch (e) { t(e); } } function o(e) { try { l(a.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof s ? n : new s(((e) => { e(n); }))).then(r, o); }l((a = a.apply(n, i || [])).next()); })); let n; let i; let s; let a;
        })); const X = function (e) { let t; let n; return (n = (t = e.editStudentSection) === null || void 0 === t ? void 0 : t.newFields) === null || void 0 === n ? void 0 : n.title; }; const Z = (0, c.hg)('studentSections/editStudentSection', ((e, t) => {
            return n = void 0, i = void 0, a = function () {
                let n; let i; let s; let a; let r; let o; let l; let c; return (function (e, t) {
                    let n; let i; let s; let a; let r = {
                        label: 0, sent() { if (1 & s[0]) throw s[1]; return s[1]; }, trys: [], ops: [],
                    }; return a = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function o(o) { return function (l) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, o[0] && (r = 0)), r;) try { if (n = 1, i && (s = 2 & o[0] ? i.return : o[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, o[1])).done) return s; switch (i = 0, s && (o = [2 & o[0], s.value]), o[0]) { case 0: case 1: s = o; break; case 4: return r.label++, { value: o[1], done: !1 }; case 5: r.label++, i = o[1], o = [0]; continue; case 7: o = r.ops.pop(), r.trys.pop(); continue; default: if (!((s = (s = r.trys).length > 0 && s[s.length - 1]) || o[0] !== 6 && o[0] !== 2)) { r = 0; continue; } if (o[0] === 3 && (!s || o[1] > s[0] && o[1] < s[3])) { r.label = o[1]; break; } if (o[0] === 6 && r.label < s[1]) { r.label = s[1], s = o; break; } if (s && r.label < s[2]) { r.label = s[2], r.ops.push(o); break; }s[2] && r.ops.pop(), r.trys.pop(); continue; }o = t.call(e, r); } catch (e) { o = [6, e], i = 0; } finally { n = s = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                }(this, ((d) => { switch (d.label) { case 0: n = t.rejectWithValue, i = t.extra, s = t.dispatch, a = t.getState, r = X(a()), o = { name: r }, d.label = 1; case 1: return d.trys.push([1, 3,, 4]), [4, i.api.put('/college/student-sections/'.concat(e), o)]; case 2: return l = d.sent(), s(v()), s(_(e)), [2, l.data]; case 3: return c = d.sent(), [2, n({ errors: c.response.data.errors, status: c.response.status })]; case 4: return [2]; } })));
            }, new ((s = void 0) || (s = Promise))(((e, t) => { function r(e) { try { l(a.next(e)); } catch (e) { t(e); } } function o(e) { try { l(a.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof s ? n : new s(((e) => { e(n); }))).then(r, o); }l((a = a.apply(n, i || [])).next()); })); let n; let i; let s; let a;
        })); const G = (0, c.oM)({
            name: 'editStudentSection',
            initialState: {
                data: void 0, newFields: void 0, isLoading: !1, errors: void 0,
            },
            reducers: { setStudentSectionData(e, t) { t.payload && (e.data = t.payload, e.newFields = { title: e.data.sections }); }, setTitle(e, t) { e.newFields.title = t.payload; }, clearNewFields(e) { let t; e.newFields = { title: ((t = e.data) === null || void 0 === t ? void 0 : t.sections) || null }, e.errors = void 0; } },
            extraReducers(e) { e.addCase(Z.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(Z.fulfilled, ((e) => { e.isLoading = !1; })).addCase(Z.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })); },
        }); var J = G.actions; const K = G.reducer; const Q = n(1783); const W = n(8263); const Y = function (e) { let t; return (t = e.studentSectionDetail) === null || void 0 === t ? void 0 : t.error; }; const q = function (e) { let t; return (t = e.studentSectionDetail) === null || void 0 === t ? void 0 : t.isLoading; }; const U = function (e) { let t; return (t = e.studentSectionDetail) === null || void 0 === t ? void 0 : t.data; }; const $ = (0, c.oM)({
            name: 'studentSectionDetail', initialState: { data: void 0, isLoading: !1, error: void 0 }, reducers: {}, extraReducers(e) { e.addCase(_.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(_.fulfilled, ((e, t) => { e.isLoading = !1, e.data = t.payload; })).addCase(_.rejected, ((e, t) => { e.isLoading = !1, e.error = t.payload; })); },
        }); const ee = ($.actions, $.reducer); const te = function (e) { let t; return (t = e.editStudentSection) === null || void 0 === t ? void 0 : t.isLoading; }; const ne = function (e) { let t; return (t = e.editStudentSection) === null || void 0 === t ? void 0 : t.errors; }; const ie = {
            tabBtn: 'l86CSVWg', tabsButtonsBlock: 'GOXw5OC5', title: 'yJYYBgIO', footerBtn: 'p1AYJj5r', greenBtn: 'Q7QMqjl5', redBtn: 'K3vWMv6D', settings: 'ksQyUcXu', newAddField: 'BIvy9Bm3', tabBlock: 'j7ve0GPo', form: 'UGXgNCbx', footer: 'tyzEbnG2', message: 'A0xI3Jme', messageIcon: 'jPJhc0C9',
        }; let se = function () { return se = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const s in t = arguments[n])Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]); return e; }, se.apply(this, arguments); }; const ae = function (e) {
            const t = e.className; const n = e.visible; const s = e.setVisible; const a = e.studentSectionId; const r = e.onDeleteStudentSection; const o = (0, O.T)(); const c = (0, l.useState)(); const d = c[0]; const u = c[1]; const f = (0, l.useRef)(null); const h = (0, l.useState)(!1); const v = h[0]; const b = h[1]; const p = (0, l.useState)(!1); const x = p[0]; const g = p[1]; const m = (0, C.v9)(U); const N = (0, C.v9)(q); const I = (0, C.v9)(Y); const E = (0, C.v9)(te); const R = (0, C.v9)(X); const z = (0, C.v9)(ne); (0, l.useEffect)((() => { a && o(_(a)); }), [o, a]); let T; const A = function () { s(!1), b(!1), g(!1); }; const F = function () { A(), o(J.clearNewFields()); }; return T = E || N ? (0, i.jsx)(P.O, { width: '100%', height: 80 }) : I ? (0, i.jsx)(k.xv, {
                theme: k.lg.ERROR, size: k.yH.M, weight: k.fs.SEMIBOLD, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, i.jsx)('div', {
                className: ie.tab,
                children: (0, i.jsx)('div', {
                    className: ie.tabBlock,
                    children: (0, i.jsx)('div', {
                        className: ie.settings,
                        children: (0, i.jsxs)('div', {
                            className: ie.newAddField,
                            children: [(0, i.jsx)('h6', { className: ie.newAddFieldTitle, children: 'Наименование' }), (0, i.jsx)(B.h, {
                                type: 'text', placeholder: 'футбол', feedbackValid: z ? '' : 'Здорово!', invalid: !!z, feedbackInvalid: 'Введите корректные данные', value: R || '', onChange(e) { o(J.setTitle(e.target.value)); },
                            })],
                        }),
                    }),
                }),
            }), (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(S.Tk, {
                    className: (0, y.A)(ie.EditStudentSection, {}, [t]),
                    visible: n,
                    onClose: A,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, i.jsxs)(S.lx, {
                        className: (0, y.A)(ie.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: v,
                        onSubmit(e) {
                            return t = void 0, n = void 0, s = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let i; let s; let a; let r = {
                                        label: 0, sent() { if (1 & s[0]) throw s[1]; return s[1]; }, trys: [], ops: [],
                                    }; return a = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function o(o) { return function (l) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, o[0] && (r = 0)), r;) try { if (n = 1, i && (s = 2 & o[0] ? i.return : o[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, o[1])).done) return s; switch (i = 0, s && (o = [2 & o[0], s.value]), o[0]) { case 0: case 1: s = o; break; case 4: return r.label++, { value: o[1], done: !1 }; case 5: r.label++, i = o[1], o = [0]; continue; case 7: o = r.ops.pop(), r.trys.pop(); continue; default: if (!((s = (s = r.trys).length > 0 && s[s.length - 1]) || o[0] !== 6 && o[0] !== 2)) { r = 0; continue; } if (o[0] === 3 && (!s || o[1] > s[0] && o[1] < s[3])) { r.label = o[1]; break; } if (o[0] === 6 && r.label < s[1]) { r.label = s[1], s = o; break; } if (s && r.label < s[2]) { r.label = s[2], r.ops.push(o); break; }s[2] && r.ops.pop(), r.trys.pop(); continue; }o = t.call(e, r); } catch (e) { o = [6, e], i = 0; } finally { n = s = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                                }(this, ((i) => { switch (i.label) { case 0: return e.preventDefault(), t = e.currentTarget, g(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), b(!0), t.checkValidity() ? (m == null ? void 0 : m.sections) !== R ? [3, 1] : (u(L.F.error('Для сохранения вы должны внести изменения!')), [3, 3]) : [3, 3]; case 1: return [4, o(Z(a))]; case 2: (n = i.sent()).meta.requestStatus === 'fulfilled' && (u(L.F.success('Информация о секции успешно обновлена')), F()), n.meta.requestStatus === 'rejected' && g(!0), i.label = 3; case 3: return [2]; } })));
                            }, new ((i = void 0) || (i = Promise))(((e, a) => { function r(e) { try { l(s.next(e)); } catch (e) { a(e); } } function o(e) { try { l(s.throw(e)); } catch (e) { a(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i(((e) => { e(n); }))).then(r, o); }l((s = s.apply(t, n || [])).next()); })); let t; let n; let i; let s;
                        },
                        children: [(0, i.jsx)(S.p0, { children: E || N ? (0, i.jsx)(P.O, { width: 200, height: 30 }) : (0, i.jsxs)(S.fl, { children: ['Изменение секции №', m == null ? void 0 : m.id_sections] }) }), (0, i.jsx)(S.sD, { children: T }), (0, i.jsxs)(S.Ym, {
 className: ie.footer,
children: [(0, i.jsx)('div', { className: ie.message, children: x && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(j.Z, { icon: w.D, customClassName: ie.messageIcon }), (0, i.jsx)(k.xv, { size: k.yH.M, weight: k.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, i.jsxs)('div', {
 className: ie.footerBtns,
children: [(0, i.jsx)(D.zx, {
                            theme: D.bn.OUTLINE, className: ie.footerBtn, onClick: F, children: (0, i.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Отмена' }), 
}), (0, i.jsxs)(D.zx, {
                            theme: D.bn.ERROR, className: (0, y.A)(ie.footerBtn, {}, [ie.redBtn]), onClick() { r(m), A(); }, disabled: N || E || !!I, children: [(0, i.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Удалить' }), (0, i.jsx)(j.Z, { icon: Q.N, className: ie.btnIcon })], 
}), (0, i.jsxs)(D.zx, {
                            type: 'submit', className: (0, y.A)(ie.footerBtn, {}, [ie.greenBtn]), disabled: N || E || !!I, children: [(0, i.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Сохранить' }), (0, i.jsx)(j.Z, { icon: W.F, className: ie.btnIcon })], 
})] 
})] 
})],
                    }),
                }), (0, i.jsx)(S.KF, { ref: f, push: d, placement: 'top-end' })],
            });
        }; const re = { footerBtn: 'TvfBk5nc', redBtn: 'zYKKJKpQ', deleteText: 'X0w9vvQA' }; const oe = (0, c.hg)('studentSections/deleteStudentSection', ((e, t) => {
            return n = void 0, i = void 0, a = function () {
                let n; let i; let s; let a; return (function (e, t) {
                    let n; let i; let s; let a; let r = {
                        label: 0, sent() { if (1 & s[0]) throw s[1]; return s[1]; }, trys: [], ops: [],
                    }; return a = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function o(o) { return function (l) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, o[0] && (r = 0)), r;) try { if (n = 1, i && (s = 2 & o[0] ? i.return : o[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, o[1])).done) return s; switch (i = 0, s && (o = [2 & o[0], s.value]), o[0]) { case 0: case 1: s = o; break; case 4: return r.label++, { value: o[1], done: !1 }; case 5: r.label++, i = o[1], o = [0]; continue; case 7: o = r.ops.pop(), r.trys.pop(); continue; default: if (!((s = (s = r.trys).length > 0 && s[s.length - 1]) || o[0] !== 6 && o[0] !== 2)) { r = 0; continue; } if (o[0] === 3 && (!s || o[1] > s[0] && o[1] < s[3])) { r.label = o[1]; break; } if (o[0] === 6 && r.label < s[1]) { r.label = s[1], s = o; break; } if (s && r.label < s[2]) { r.label = s[2], r.ops.push(o); break; }s[2] && r.ops.pop(), r.trys.pop(); continue; }o = t.call(e, r); } catch (e) { o = [6, e], i = 0; } finally { n = s = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                }(this, ((r) => { switch (r.label) { case 0: n = t.rejectWithValue, i = t.extra, s = t.dispatch, r.label = 1; case 1: return r.trys.push([1, 3,, 4]), [4, i.api.delete('/college/student-sections/'.concat(e))]; case 2: return a = r.sent(), s(v()), [2, a.data]; case 3: return r.sent().message === 'Failed to fetch' ? [2, n('timeout')] : [2, n('ERROR')]; case 4: return [2]; } })));
            }, new ((s = void 0) || (s = Promise))(((e, t) => { function r(e) { try { l(a.next(e)); } catch (e) { t(e); } } function o(e) { try { l(a.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof s ? n : new s(((e) => { e(n); }))).then(r, o); }l((a = a.apply(n, i || [])).next()); })); let n; let i; let s; let a;
        })); let le = function () { return le = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const s in t = arguments[n])Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]); return e; }, le.apply(this, arguments); }; const ce = function (e) {
            const t = e.className; const n = e.studentSection; const s = e.visible; const a = e.setVisible; const r = (0, O.T)(); const o = (0, l.useState)(); const c = o[0]; const d = o[1]; const u = (0, l.useRef)(null); const f = (0, l.useState)(!1); const h = f[0]; const v = f[1]; const b = function () { a(!1); }; return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsxs)(S.Tk, {
                    className: (0, y.A)(re.DeleteStudentSection, {}, [t]),
visible: s,
onClose: b,
size: 'lg',
alignment: 'center',
children: [(0, i.jsx)(S.p0, { children: (0, i.jsxs)(S.fl, { children: ['Удаление секции №', n == null ? void 0 : n.id_sections] }) }), (0, i.jsx)(S.sD, { children: (0, i.jsxs)(k.xv, { size: k.yH.XM, className: re.deleteText, children: ['Вы действительно хотите удалить секцию', ' ', (0, i.jsxs)('span', { children: ['№', n == null ? void 0 : n.id_sections, ' ', '-', ' ', '"'.concat(n == null ? void 0 : n.sections, '"')] }), ' ', 'и все связанные с ним данные?'] }) }), (0, i.jsx)(S.Ym, {
 className: re.footer,
children: (0, i.jsxs)('div', {
 className: re.footerBtns,
children: [(0, i.jsx)(D.zx, {
                        theme: D.bn.OUTLINE, className: re.footerBtn, onClick: b, children: (0, i.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Отмена' }), 
}), (0, i.jsxs)(D.zx, {
                        theme: D.bn.ERROR, className: (0, y.A)(re.footerBtn, {}, [re.redBtn]), onClick() { let e; e = n.id_sections.toString(), v(!0), r(oe(e)).then(((e) => { e.meta.requestStatus === 'fulfilled' ? (d(L.F.success('Секция №'.concat(n == null ? void 0 : n.id_sections, ' удалена'))), b(), v(!1)) : e.meta.requestStatus === 'rejected' && (d(L.F.error('Произошла ошибка при удалении, попробуйте снова')), v(!1)); })); }, disabled: h, children: [(0, i.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Удалить' }), (0, i.jsx)(j.Z, { icon: Q.N, className: re.btnIcon })], 
})] 
}) 
})],
                }), (0, i.jsx)(S.KF, { ref: u, push: c, placement: 'top-end' })],
            });
        }; const de = n(779); const ue = {
            'modal-dialog': 'AHJRF7w_', tabBtn: 'MAGCZRk4', tabsButtonsBlock: 'PWpvrJRJ', title: 'QPrmozqK', footerBtn: 'NloHH0et', redBtn: 'G6kks2ts', settings: 'SFPjTEEV', newAddField: 'yQCOA3Sw', tabBlock: 'IOhLegRM', footer: 'PvgGL_Dm', message: 'psvkLlVm', messageIcon: 'QmQCTZUi', checkboxText: 'zdvugmhC',
        }; let fe = function () { return fe = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const s in t = arguments[n])Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]); return e; }, fe.apply(this, arguments); }; const he = function (e) {
            const t = e.className; const n = e.visible; const s = e.setVisible; const a = e.studentSectionId; const r = e.onDeleteStudentSection; const o = e.onEditStudentSection; const c = (0, O.T)(); const d = (0, C.v9)(U); const u = (0, C.v9)(q); const f = (0, C.v9)(Y); (0, l.useEffect)((() => { a && c(_(a)); }), [c, a]); let h; const v = function () { s(!1); }; return h = u ? (0, i.jsx)(P.O, { width: '100%', height: 120 }) : f ? (0, i.jsx)(k.xv, {
                theme: k.lg.ERROR, size: k.yH.M, weight: k.fs.BOLD, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, i.jsx)('div', { className: ue.tab, children: (0, i.jsxs)('div', { className: ue.tabBlock, children: [(0, i.jsx)('div', { className: ue.settings, children: (0, i.jsxs)('div', { className: ue.newAddField, children: [(0, i.jsx)('h6', { className: ue.newAddFieldTitle, children: 'ID секции' }), (0, i.jsx)(k.xv, { size: k.yH.S, weight: k.fs.BOLD, children: d == null ? void 0 : d.id_sections })] }) }), (0, i.jsx)('div', { className: ue.settings, children: (0, i.jsxs)('div', { className: ue.newAddField, children: [(0, i.jsx)('h6', { className: ue.newAddFieldTitle, children: 'Наименование' }), (0, i.jsx)(k.xv, { size: k.yH.S, weight: k.fs.BOLD, children: d == null ? void 0 : d.sections })] }) })] }) }), (0, i.jsxs)(S.Tk, {
                className: (0, y.A)(ue.ViewStudentSection, {}, [t, 'view-student-modal']),
visible: n,
onClose: v,
alignment: 'center',
children: [(0, i.jsx)(S.p0, { children: u ? (0, i.jsx)(P.O, { width: 200, height: 30 }) : (0, i.jsxs)(S.fl, { children: ['Секция №', d == null ? void 0 : d.id_sections] }) }), (0, i.jsx)(S.sD, { children: h }), (0, i.jsxs)(S.Ym, {
 className: ue.footer,
children: [(0, i.jsx)('div', {}), (0, i.jsxs)('div', {
 className: ue.footerBtns,
children: [(0, i.jsx)(D.zx, {
                    theme: D.bn.OUTLINE, className: ue.footerBtn, onClick: v, children: (0, i.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Закрыть' }), 
}), (0, i.jsxs)(D.zx, {
                    theme: D.bn.ERROR, className: (0, y.A)(ue.footerBtn, {}, [ue.redBtn]), onClick() { r(d), v(); }, disabled: u || !!f, children: [(0, i.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Удалить' }), (0, i.jsx)(j.Z, { icon: Q.N, className: ue.btnIcon })], 
}), (0, i.jsxs)(D.zx, {
                    color: 'primary', className: ue.footerBtn, onClick() { o(a), v(); }, disabled: u || !!f, children: [(0, i.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Редактировать' }), (0, i.jsx)(j.Z, { icon: de.C, className: ue.btnIcon })], 
})] 
})] 
})],
            });
        }; const ve = n(6837); const be = n(1353); const pe = n(773); const xe = n(5606); const ge = n(2008); const me = n(596); const ye = n(4164); const Se = {
            TableBlock: 'YM0p3hQf', table: 'I80eMgBA', tableRow: 'ZoJaMDTL', tableCell: 'Mmcz59FI', tableHead: 'MR0h4fNu', tableCellId: 'aIO9Z2cK', tableBody: 'MS6zMbyC', tableSortIcon: 'BqbU43Oz', active: 'uVsLQDKT', cellTextBg: 'IckPK_ER', tableCellBtns: 'UU97C4IN', tableCellBtnsWrapper: 'OPYkzfoy', editBtn: 'hAKzDTJ4', checkbox: 'lc7sIbDM', tableWithCheckboxes: 'lR7Llscw',
        }; let je = function () { return je = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const s in t = arguments[n])Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]); return e; }, je.apply(this, arguments); }; const we = function (e) {
            let t; let n; let s; let a; const r = e.className; const o = e.data; const c = e.exportDisabled; const u = (0, O.T)(); const f = (0, C.v9)(A); const h = (0, C.v9)(F); const b = (0, C.v9)(d.DU); const p = (0, C.v9)(d.Qg); const x = (0, l.useState)(); const g = x[0]; const m = x[1]; const S = (0, l.useState)(!1); const j = S[0]; const w = S[1]; const N = (0, l.useState)(!1); const B = N[0]; const L = N[1]; const I = (0, l.useState)(!1); const E = I[0]; const R = I[1]; const z = (0, l.useState)(); const T = z[0]; const M = z[1]; const H = function (e) { L(!0), M(e); }; const V = (0, l.useCallback)(((e) => { R(!0), m(e); }), []); (0, l.useEffect)((() => { u(d.f$.setSort('id_sections')); }), [u]); let _; const X = (0, l.useCallback)(((e) => { u(d.f$.setSort(e)), u(v()); }), [u]); _ = f ? (0, i.jsx)(P.O, { height: 250 }) : h ? (0, i.jsx)(k.xv, {
                theme: k.lg.ERROR, size: k.yH.M, weight: k.fs.SEMIBOLD, className: Se.error, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : o.length ? (0, i.jsxs)('div', {
 className: (0, y.A)(Se.table, (t = {}, t[Se.tableWithCheckboxes] = !c, t), []),
children: [(0, i.jsx)('div', {
 className: Se.tableHead,
children: (0, i.jsxs)('div', {
 className: Se.tableRow,
children: [!c && (0, i.jsx)(ve.X, { className: Se.checkbox, id: 'checkbox-student-sections-all' }), (0, i.jsxs)(D.zx, {
                theme: D.bn.CLEAR, className: (0, y.A)(Se.tableCell, {}, [Se.tableCellId]), onClick() { X('id_sections'); }, children: [(0, i.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'ID секции' }), (0, i.jsx)(be.J, { Svg: p === 'asc' ? pe.Z : xe.Z, className: (0, y.A)(Se.tableSortIcon, (n = {}, n[Se.active] = b === 'id_sections', n), []) })], 
}), (0, i.jsxs)(D.zx, {
                theme: D.bn.CLEAR, className: Se.tableCell, onClick() { X('sections'); }, children: [(0, i.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Наименование' }), (0, i.jsx)(be.J, { Svg: p === 'asc' ? pe.Z : xe.Z, className: (0, y.A)(Se.tableSortIcon, (s = {}, s[Se.active] = b === 'sections', s), []) })], 
}), (0, i.jsx)('div', { className: (0, y.A)(Se.tableCell, {}, [Se.tableCellBtnsWrapper]) })] 
}) 
}), (0, i.jsx)('div', { className: Se.tableBody, children: o == null ? void 0 : o.map(((e) => (0, i.jsxs)('div', { className: Se.tableRow, children: [!c && (0, i.jsx)(ve.X, { className: Se.checkbox, id: 'checkbox-student-sections-'.concat(e.id_sections) }), (0, i.jsx)('div', { className: (0, y.A)(Se.tableCell, {}, [Se.tableCellId]), children: (0, i.jsx)(k.xv, { size: k.yH.XS, children: e.id_sections }) }), (0, i.jsx)('div', { className: Se.tableCell, children: (0, i.jsx)(k.xv, { size: k.yH.XS, children: e.sections }) }), (0, i.jsxs)('div', { className: (0, y.A)(Se.tableCell, {}, [Se.tableCellBtns]), children: [(0, i.jsx)(D.zx, { theme: D.bn.CLEAR, title: 'Просмотр', className: Se.editBtn, onClick () { var t; t = e.id_sections.toString(), w(!0), M(t) }, children: (0, i.jsx)(be.J, { Svg: ge.Z }) }), (0, i.jsx)(D.zx, { theme: D.bn.CLEAR, title: 'Редактировать', className: Se.editBtn, onClick () { H(e.id_sections.toString()) }, children: (0, i.jsx)(be.J, { Svg: me.Z }) }), (0, i.jsx)(D.zx, { theme: D.bn.CLEAR, title: 'Удалить', className: Se.editBtn, onClick () { V(e) }, children: (0, i.jsx)(be.J, { Svg: ye.Z }) })] })] }, e.id_sections))) })] 
}) : (0, i.jsx)(k.xv, { children: 'Ничего не найдено...' }); const Z = ((a = {})[Se.error] = !!h, a); return (0, i.jsxs)('div', {
                className: (0, y.A)(Se.TableBlock, Z, [r]),
                children: [_, (0, i.jsx)(he, {
                    visible: j, setVisible: w, studentSectionId: T, onDeleteStudentSection: V, onEditStudentSection: H,
                }), (0, i.jsx)(ae, {
                    visible: B, setVisible: L, studentSectionId: T, onDeleteStudentSection: V,
                }), (0, i.jsx)(ce, { studentSection: g, visible: E, setVisible: R })],
            });
        }; const Ne = n(7730); const ke = n(7687); const Be = n(5375); const Ce = n(2556); let Oe = function () { return Oe = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const s in t = arguments[n])Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]); return e; }, Oe.apply(this, arguments); }; const Le = {
            studentSections: V, addStudentSection: m, studentSectionDetail: ee, editStudentSection: K,
        }; const De = function (e) {
            e.className; const t = (0, O.T)(); const n = (0, l.useState)(!1); const c = n[0]; const d = n[1]; const u = (0, C.v9)(T); const b = (0, C.v9)(A); const p = (0, C.v9)(F); const x = (0, C.v9)(h); const g = (0, C.v9)(f); const m = (0, l.useState)(''); const y = m[0]; const S = m[1]; const j = (0, l.useState)(); const w = j[0]; const N = j[1]; const k = (0, l.useCallback)(((e) => { S(e); }), []); const B = (0, l.useCallback)(((e) => { t(H.setLimit(e)), t(v()); }), [t]); const L = (0, l.useCallback)(((e) => { t(H.setPage(e)), t(v()); }), [t]); return (0, l.useEffect)((() => { N((u == null ? void 0 : u.data) || []); }), [u]), (0, l.useEffect)((() => { const e = (0, Ne.i1)(y, (u == null ? void 0 : u.data) || []); N(e || []); }), [u, y]), (0, l.useEffect)((() => { t(v()); }), [t]), (0, i.jsx)(o.B, {
                title: 'LMS - Секции',
                children: (0, i.jsxs)(s.W, {
                    reducers: Le,
                    removeAfterUnmount: !0,
                    children: [(0, i.jsxs)('div', {
                        children: [(0, i.jsxs)('div', {
                            className: 'page-settings '.concat(!1),
                            children: [(0, i.jsx)(a.o, {
                                value: y, onChange: k, searchText: 'Поиск по наименованию', error: p, isLoading: b,
                            }), (0, i.jsx)(r.X, {
                                onlyAdding: !0, setVisibleAddNewField: d, addingModalText: 'Добавить секцию', error: p, isLoading: b, references: Ce.x, referencesTitle: 'Справочники', children: (0, i.jsx)(z, { visible: c, setVisible: d }),
                            })],
                        }), (0, i.jsx)(we, { data: w || [], exportDisabled: !0 }), (0, i.jsxs)('div', {
                            className: 'page-table-settings',
                            children: [(0, i.jsx)(ke.K, {
                                data: w || [], onChange: B, onChangePage: L, paginationData: u == null ? void 0 : u.pagination, itemsLimit: x, withRecords: !0, isLoading: b, error: p,
                            }), (0, i.jsx)(ke.N, {
                                data: w || [], onChange: L, itemsPage: g, isLoading: b, error: p, paginationData: u == null ? void 0 : u.pagination,
                            })],
                        })],
                    }), p && (0, i.jsx)(Be.d, { error: p })],
                }),
            });
        };
    },
}]);
