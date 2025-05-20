!(function () { try { const e = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; const t = (new Error()).stack; t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = '7e4e6891-f665-4c30-9643-20f6eda50c25', e._sentryDebugIdIdentifier = 'sentry-dbid-7e4e6891-f665-4c30-9643-20f6eda50c25'); } catch (e) {} }()); const _global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; _global.SENTRY_RELEASE = { id: '45ee1168f5cf48e9753bace26323152d3b61cb67' }, (self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[6674], {
    5668: (e, t, n) => {
        n.r(t), n.d(t, { default: () => Le }); const r = n(5893); const a = n(1150); const i = n(9649); const s = n(5306); const o = n(918); const l = n(7294); const c = n(7168); const u = n(1759); const d = n(121); const f = function (e) { let t; return (t = e.arrivalSources) === null || void 0 === t ? void 0 : t.page; }; const v = function (e) { let t; return (t = e.arrivalSources) === null || void 0 === t ? void 0 : t.limit; }; const h = (0, c.hg)('students/fetchArrivalSources', ((e, t) => {
            return n = void 0, r = void 0, i = function () {
                let e; let n; let r; let a; let i; let s; return (function (e, t) {
                    let n; let r; let a; let i; let s = {
                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                    }; return i = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function o(o) { return function (l) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, o[0] && (s = 0)), s;) try { if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a; switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) { case 0: case 1: a = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, r = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((a = (a = s.trys).length > 0 && a[a.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!a || o[1] > a[0] && o[1] < a[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < a[1]) { s.label = a[1], a = o; break; } if (a && s.label < a[2]) { s.label = a[2], s.ops.push(o); break; }a[2] && s.ops.pop(), s.trys.pop(); continue; }o = t.call(e, s); } catch (e) { o = [6, e], r = 0; } finally { n = a = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                }(this, ((o) => {
                    switch (o.label) {
                    case 0: e = t.rejectWithValue, n = t.extra, r = t.getState, a = {
                        pageSelector: f, limitSelector: v, sortFieldSelector: u.DU, sortOrderSelector: u.Qg,
                    }, i = (0, d.o)('/college/student-arrival-sources', a, r()), o.label = 1; case 1: return o.trys.push([1, 3,, 4]), [4, n.api.get(i)]; case 2: return [2, o.sent().data]; case 3: return (s = o.sent()).message === 'Failed to fetch' ? [2, e({ status: 500, error: 'timeout' })] : [2, e({ status: s.response.status, error: s.response.data.message })]; case 4: return [2];
                    }
                })));
            }, new ((a = void 0) || (a = Promise))(((e, t) => { function s(e) { try { l(i.next(e)); } catch (e) { t(e); } } function o(e) { try { l(i.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(s, o); }l((i = i.apply(n, r || [])).next()); })); let n; let r; let a; let i;
        })); const b = function (e) { let t; return (t = e.addArrivalSource) === null || void 0 === t ? void 0 : t.data.title; }; const p = (0, c.hg)('arrivalSources/addArrivalSource', ((e, t) => {
            return n = void 0, r = void 0, i = function () {
                let e; let n; let r; let a; let i; let s; let o; let l; return (function (e, t) {
                    let n; let r; let a; let i; let s = {
                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                    }; return i = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function o(o) { return function (l) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, o[0] && (s = 0)), s;) try { if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a; switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) { case 0: case 1: a = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, r = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((a = (a = s.trys).length > 0 && a[a.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!a || o[1] > a[0] && o[1] < a[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < a[1]) { s.label = a[1], a = o; break; } if (a && s.label < a[2]) { s.label = a[2], s.ops.push(o); break; }a[2] && s.ops.pop(), s.trys.pop(); continue; }o = t.call(e, s); } catch (e) { o = [6, e], r = 0; } finally { n = a = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                }(this, ((c) => { switch (c.label) { case 0: e = t.rejectWithValue, n = t.extra, r = t.dispatch, a = t.getState, i = b(a()), s = { name: i }, c.label = 1; case 1: return c.trys.push([1, 3,, 4]), [4, n.api.post('/college/student-arrival-sources/', s)]; case 2: return o = c.sent(), r(h()), r(m.clearData()), [2, o.data]; case 3: return l = c.sent(), [2, e({ errors: l.response.data.errors, status: l.response.status })]; case 4: return [2]; } })));
            }, new ((a = void 0) || (a = Promise))(((e, t) => { function s(e) { try { l(i.next(e)); } catch (e) { t(e); } } function o(e) { try { l(i.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(s, o); }l((i = i.apply(n, r || [])).next()); })); let n; let r; let a; let i;
        })); const x = (0, c.oM)({
            name: 'addArrivalSource', initialState: { data: { title: null }, isLoading: !1, errors: void 0 }, reducers: { setTitle(e, t) { e.data.title = t.payload; }, clearData(e) { e.data = { title: null }, e.errors = void 0; } }, extraReducers(e) { e.addCase(p.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(p.fulfilled, ((e) => { e.isLoading = !1; })).addCase(p.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })); },
        }); var m = x.actions; const g = x.reducer; const y = n(4387); const j = n(4475); const S = n(2308); const w = n(5044); const N = n(3280); const k = n(4809); const B = n(1385); const C = n(6458); const A = n(5461); const E = n(530); const L = n(9161); const O = function (e) { let t; return (t = e.addArrivalSource) === null || void 0 === t ? void 0 : t.errors; }; const D = {
            tabBtn: 'bBxPpSQ5', tabsButtonsBlock: 'XAs1Po94', title: 'xm1fyBXc', settings: 'Ikgnfd73', newAddField: 'EruoUiWx', tabBlock: 'i8Z20S8E', form: 'qvusXfC8', footerBtn: 'PAdwZ1Jv', greenBtn: 'jQ_PBLGk', footer: 'eE2zz5ak', message: 'LBhozPKK', messageIcon: 'kkrr5s_k',
        }; let I = function () { return I = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++) for (const a in t = arguments[n])Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e; }, I.apply(this, arguments); }; const z = function (e) {
            const t = e.className; const n = e.visible; const a = e.setVisible; const i = (0, A.T)(); const s = (0, l.useState)(!1); const o = s[0]; const c = s[1]; const u = (0, l.useState)(!1); const d = u[0]; const f = u[1]; const v = (0, l.useState)(); const h = v[0]; const x = v[1]; const g = (0, l.useRef)(null); const z = (0, C.v9)(b); const R = (0, C.v9)(O); const T = (0, l.useCallback)((() => { a(!1); }), [a]); const F = function () { T(), c(!1), f(!1); }; return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(j.Tk, {
                    className: (0, y.A)(D.AddArrivalSource, {}, [t]),
                    visible: n,
                    onClose: T,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, r.jsxs)(j.lx, {
                        className: (0, y.A)(D.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: o,
                        onSubmit(e) {
                            return t = void 0, n = void 0, a = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let r; let a; let i; let s = {
                                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                                    }; return i = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function o(o) { return function (l) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, o[0] && (s = 0)), s;) try { if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a; switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) { case 0: case 1: a = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, r = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((a = (a = s.trys).length > 0 && a[a.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!a || o[1] > a[0] && o[1] < a[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < a[1]) { s.label = a[1], a = o; break; } if (a && s.label < a[2]) { s.label = a[2], s.ops.push(o); break; }a[2] && s.ops.pop(), s.trys.pop(); continue; }o = t.call(e, s); } catch (e) { o = [6, e], r = 0; } finally { n = a = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                                }(this, ((r) => { switch (r.label) { case 0: return e.preventDefault(), t = e.currentTarget, f(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), c(!0), t.checkValidity() ? z ? [4, i(p())] : [3, 2] : [3, 3]; case 1: return (n = r.sent()).meta.requestStatus === 'fulfilled' && (x(E.F.success('Место рождения добавлено')), F()), n.meta.requestStatus === 'rejected' && f(!0), [3, 3]; case 2: f(!0), r.label = 3; case 3: return [2]; } })));
                            }, new ((r = void 0) || (r = Promise))(((e, i) => { function s(e) { try { l(a.next(e)); } catch (e) { i(e); } } function o(e) { try { l(a.throw(e)); } catch (e) { i(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(s, o); }l((a = a.apply(t, n || [])).next()); })); let t; let n; let r; let a;
                        },
                        children: [(0, r.jsx)(j.p0, { children: (0, r.jsx)(j.fl, { children: 'Добавление места рождения' }) }), (0, r.jsx)(j.sD, { children: (0, r.jsx)('div', { className: D.tab, children: (0, r.jsx)('div', { className: D.tabBlock, children: (0, r.jsx)('div', { className: D.settings, children: (0, r.jsxs)('div', { className: D.newAddField, children: [(0, r.jsx)('h6', {className: D.newAddFieldTitle, children: "Наименование*"}), (0, r.jsx)(B.h, {
 type: 'text', placeholder: 'другой области', feedbackValid: R ? '' : 'Здорово!', invalid: !!R, feedbackInvalid: 'Введите корректные данные!', value: z || '', onChange (e) { i(m.setTitle(e.target.value)) }, required: !0 
})] }) }) }) }) }), (0, r.jsxs)(j.Ym, { className: D.footer, children: [(0, r.jsx)('div', { className: D.message, children: d && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(S.Z, { icon: w.D, customClassName: D.messageIcon }), (0, r.jsx)(k.xv, { size: k.yH.M, weight: k.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, r.jsxs)('div', { className: D.footerBtns, children: [(0, r.jsx)(L.zx, {
 theme: L.bn.OUTLINE, className: D.footerBtn, onClick: F, children: (0, r.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Отмена'}) 
}), (0, r.jsxs)(L.zx, { type: 'submit', className: (0, y.A)(D.footerBtn, {}, [D.greenBtn]), children: [(0, r.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Добавить'}), (0, r.jsx)(S.Z, { icon: N.q, className: D.btnIcon })] })] })] })],
                    }),
                }), (0, r.jsx)(j.KF, { ref: g, push: h, placement: 'top-end' })],
            });
        }; const R = function (e) { let t; return (t = e.arrivalSources) === null || void 0 === t ? void 0 : t.data; }; const T = function (e) { let t; return (t = e.arrivalSources) === null || void 0 === t ? void 0 : t.isLoading; }; const F = function (e) { let t; return (t = e.arrivalSources) === null || void 0 === t ? void 0 : t.error; }; const M = (0, c.oM)({
            name: 'arrivalSources',
            initialState: {
                data: void 0, isLoading: !0, error: void 0, page: '1', limit: '50',
            },
            reducers: { setPage(e, t) { e.page = t.payload; }, setLimit(e, t) { e.limit = t.payload; } },
            extraReducers(e) { e.addCase(h.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(h.fulfilled, ((e, t) => { e.isLoading = !1, e.data = { data: t.payload.data, pagination: t.payload.pagination }; })).addCase(h.rejected, ((e, t) => { e.isLoading = !1, e.error = t.payload; })); },
        }); const H = M.actions; const P = M.reducer; const V = n(1138); const X = (0, c.hg)('arrivalSources/fetchArrivalSourceDetail', ((e, t) => {
            return n = void 0, r = void 0, i = function () {
                let n; let r; let a; let i; return (function (e, t) {
                    let n; let r; let a; let i; let s = {
                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                    }; return i = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function o(o) { return function (l) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, o[0] && (s = 0)), s;) try { if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a; switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) { case 0: case 1: a = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, r = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((a = (a = s.trys).length > 0 && a[a.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!a || o[1] > a[0] && o[1] < a[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < a[1]) { s.label = a[1], a = o; break; } if (a && s.label < a[2]) { s.label = a[2], s.ops.push(o); break; }a[2] && s.ops.pop(), s.trys.pop(); continue; }o = t.call(e, s); } catch (e) { o = [6, e], r = 0; } finally { n = a = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                }(this, ((s) => { switch (s.label) { case 0: n = t.rejectWithValue, r = t.extra, a = t.dispatch, s.label = 1; case 1: return s.trys.push([1, 3,, 4]), [4, r.api.get('/college/student-arrival-sources/'.concat(e))]; case 2: return i = s.sent(), a(q.setArrivalSourceData(i.data)), [2, i.data]; case 3: return s.sent().message === 'Failed to fetch' ? [2, n('timeout')] : [2, n('ERROR')]; case 4: return [2]; } })));
            }, new ((a = void 0) || (a = Promise))(((e, t) => { function s(e) { try { l(i.next(e)); } catch (e) { t(e); } } function o(e) { try { l(i.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(s, o); }l((i = i.apply(n, r || [])).next()); })); let n; let r; let a; let i;
        })); const _ = function (e) { let t; let n; return (n = (t = e.editArrivalSource) === null || void 0 === t ? void 0 : t.newFields) === null || void 0 === n ? void 0 : n.title; }; const Z = (0, c.hg)('arrivalSources/editArrivalSource', ((e, t) => {
            return n = void 0, r = void 0, i = function () {
                let n; let r; let a; let i; let s; let o; let l; let c; return (function (e, t) {
                    let n; let r; let a; let i; let s = {
                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                    }; return i = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function o(o) { return function (l) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, o[0] && (s = 0)), s;) try { if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a; switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) { case 0: case 1: a = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, r = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((a = (a = s.trys).length > 0 && a[a.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!a || o[1] > a[0] && o[1] < a[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < a[1]) { s.label = a[1], a = o; break; } if (a && s.label < a[2]) { s.label = a[2], s.ops.push(o); break; }a[2] && s.ops.pop(), s.trys.pop(); continue; }o = t.call(e, s); } catch (e) { o = [6, e], r = 0; } finally { n = a = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                }(this, ((u) => { switch (u.label) { case 0: n = t.rejectWithValue, r = t.extra, a = t.dispatch, i = t.getState, s = _(i()), o = { name: s }, u.label = 1; case 1: return u.trys.push([1, 3,, 4]), [4, r.api.put('/college/student-arrival-sources/'.concat(e), o)]; case 2: return l = u.sent(), a(h()), a(X(e)), [2, l.data]; case 3: return c = u.sent(), [2, n({ errors: c.response.data.errors, status: c.response.status })]; case 4: return [2]; } })));
            }, new ((a = void 0) || (a = Promise))(((e, t) => { function s(e) { try { l(i.next(e)); } catch (e) { t(e); } } function o(e) { try { l(i.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(s, o); }l((i = i.apply(n, r || [])).next()); })); let n; let r; let a; let i;
        })); const W = (0, c.oM)({
            name: 'editArrivalSource',
            initialState: {
                data: void 0, newFields: void 0, isLoading: !1, errors: void 0,
            },
            reducers: { setArrivalSourceData(e, t) { t.payload && (e.data = t.payload, e.newFields = { title: e.data.comesfrom }); }, setTitle(e, t) { e.newFields.title = t.payload; }, clearNewFields(e) { let t; e.newFields = { title: ((t = e.data) === null || void 0 === t ? void 0 : t.comesfrom) || null }, e.errors = void 0; } },
            extraReducers(e) { e.addCase(Z.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(Z.fulfilled, ((e) => { e.isLoading = !1; })).addCase(Z.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })); },
        }); var q = W.actions; const K = W.reducer; const J = n(1783); const U = n(8263); const G = function (e) { let t; return (t = e.arrivalSourceDetail) === null || void 0 === t ? void 0 : t.error; }; const Q = function (e) { let t; return (t = e.arrivalSourceDetail) === null || void 0 === t ? void 0 : t.isLoading; }; const Y = function (e) { let t; return (t = e.arrivalSourceDetail) === null || void 0 === t ? void 0 : t.data; }; const $ = (0, c.oM)({
            name: 'arrivalSourceDetail', initialState: { data: void 0, isLoading: !1, error: void 0 }, reducers: {}, extraReducers(e) { e.addCase(X.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(X.fulfilled, ((e, t) => { e.isLoading = !1, e.data = t.payload; })).addCase(X.rejected, ((e, t) => { e.isLoading = !1, e.error = t.payload; })); },
        }); const ee = ($.actions, $.reducer); const te = function (e) { let t; return (t = e.editArrivalSource) === null || void 0 === t ? void 0 : t.isLoading; }; const ne = function (e) { let t; return (t = e.editArrivalSource) === null || void 0 === t ? void 0 : t.errors; }; const re = {
            tabBtn: 'tzMqDQJi', tabsButtonsBlock: 'di9EnE6T', title: 'ZF6F0PIJ', footerBtn: 'fD3snYVO', greenBtn: 'bPNWDqo1', redBtn: 'AiTzyJaO', settings: 'z9UPuvzL', newAddField: 'p2jpLMSf', tabBlock: 'luHJw5ZF', form: 'idEe3MCT', footer: 'rBwXDhWT', message: 'PRKmXVf3', messageIcon: 'KmIdRSgW',
        }; let ae = function () { return ae = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++) for (const a in t = arguments[n])Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e; }, ae.apply(this, arguments); }; const ie = function (e) {
            const t = e.className; const n = e.visible; const a = e.setVisible; const i = e.arrivalSourceId; const s = e.onDeleteArrivalSource; const o = (0, A.T)(); const c = (0, l.useState)(); const u = c[0]; const d = c[1]; const f = (0, l.useRef)(null); const v = (0, l.useState)(!1); const h = v[0]; const b = v[1]; const p = (0, l.useState)(!1); const x = p[0]; const m = p[1]; const g = (0, C.v9)(Y); const N = (0, C.v9)(Q); const O = (0, C.v9)(G); const D = (0, C.v9)(te); const I = (0, C.v9)(_); const z = (0, C.v9)(ne); (0, l.useEffect)((() => { i && o(X(i)); }), [o, i]); let R; const T = function () { a(!1), b(!1), m(!1); }; const F = function () { T(), o(q.clearNewFields()); }; return R = D || N ? (0, r.jsx)(V.O, { width: '100%', height: 80 }) : O ? (0, r.jsx)(k.xv, {
                theme: k.lg.ERROR, size: k.yH.M, weight: k.fs.SEMIBOLD, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, r.jsx)('div', {
                className: re.tab,
                children: (0, r.jsx)('div', {
                    className: re.tabBlock,
                    children: (0, r.jsx)('div', {
                        className: re.settings,
                        children: (0, r.jsxs)('div', {
                            className: re.newAddField,
                            children: [(0, r.jsx)('h6', { className: re.newAddFieldTitle, children: 'Наименование' }), (0, r.jsx)(B.h, {
                                type: 'text', placeholder: 'другой области', feedbackValid: z ? '' : 'Здорово!', invalid: !!z, feedbackInvalid: 'Введите корректные данные', value: I || '', onChange(e) { o(q.setTitle(e.target.value)); },
                            })],
                        }),
                    }),
                }),
            }), (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(j.Tk, {
                    className: (0, y.A)(re.EditArrivalSource, {}, [t]),
                    visible: n,
                    onClose: T,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, r.jsxs)(j.lx, {
                        className: (0, y.A)(re.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: h,
                        onSubmit(e) {
                            return t = void 0, n = void 0, a = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let r; let a; let i; let s = {
                                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                                    }; return i = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function o(o) { return function (l) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, o[0] && (s = 0)), s;) try { if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a; switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) { case 0: case 1: a = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, r = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((a = (a = s.trys).length > 0 && a[a.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!a || o[1] > a[0] && o[1] < a[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < a[1]) { s.label = a[1], a = o; break; } if (a && s.label < a[2]) { s.label = a[2], s.ops.push(o); break; }a[2] && s.ops.pop(), s.trys.pop(); continue; }o = t.call(e, s); } catch (e) { o = [6, e], r = 0; } finally { n = a = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                                }(this, ((r) => { switch (r.label) { case 0: return e.preventDefault(), t = e.currentTarget, m(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), b(!0), t.checkValidity() ? (g == null ? void 0 : g.comesfrom) !== I ? [3, 1] : (d(E.F.error('Для сохранения вы должны внести изменения!')), [3, 3]) : [3, 3]; case 1: return [4, o(Z(i))]; case 2: (n = r.sent()).meta.requestStatus === 'fulfilled' && (d(E.F.success('Информация о месте рождения успешно обновлена')), F()), n.meta.requestStatus === 'rejected' && m(!0), r.label = 3; case 3: return [2]; } })));
                            }, new ((r = void 0) || (r = Promise))(((e, i) => { function s(e) { try { l(a.next(e)); } catch (e) { i(e); } } function o(e) { try { l(a.throw(e)); } catch (e) { i(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(s, o); }l((a = a.apply(t, n || [])).next()); })); let t; let n; let r; let a;
                        },
                        children: [(0, r.jsx)(j.p0, { children: D || N ? (0, r.jsx)(V.O, { width: 200, height: 30 }) : (0, r.jsxs)(j.fl, { children: ['Изменение места рождения №', g == null ? void 0 : g.id_comesfrom] }) }), (0, r.jsx)(j.sD, { children: R }), (0, r.jsxs)(j.Ym, {
 className: re.footer,
children: [(0, r.jsx)('div', { className: re.message, children: x && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(S.Z, { icon: w.D, customClassName: re.messageIcon }), (0, r.jsx)(k.xv, { size: k.yH.M, weight: k.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, r.jsxs)('div', {
 className: re.footerBtns,
children: [(0, r.jsx)(L.zx, {
                            theme: L.bn.OUTLINE, className: re.footerBtn, onClick: F, children: (0, r.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Отмена' }), 
}), (0, r.jsxs)(L.zx, {
                            theme: L.bn.ERROR, className: (0, y.A)(re.footerBtn, {}, [re.redBtn]), onClick() { s(g), T(); }, disabled: N || D || !!O, children: [(0, r.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Удалить' }), (0, r.jsx)(S.Z, { icon: J.N, className: re.btnIcon })], 
}), (0, r.jsxs)(L.zx, {
                            type: 'submit', className: (0, y.A)(re.footerBtn, {}, [re.greenBtn]), disabled: N || D || !!O, children: [(0, r.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Сохранить' }), (0, r.jsx)(S.Z, { icon: U.F, className: re.btnIcon })], 
})] 
})] 
})],
                    }),
                }), (0, r.jsx)(j.KF, { ref: f, push: u, placement: 'top-end' })],
            });
        }; const se = { footerBtn: 'S7aP01DH', redBtn: 'XHIonCsa', deleteText: 'HKmbRxxC' }; const oe = (0, c.hg)('arrivalSources/deleteArrivalSource', ((e, t) => {
            return n = void 0, r = void 0, i = function () {
                let n; let r; let a; let i; return (function (e, t) {
                    let n; let r; let a; let i; let s = {
                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                    }; return i = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function o(o) { return function (l) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, o[0] && (s = 0)), s;) try { if (n = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a; switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) { case 0: case 1: a = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, r = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((a = (a = s.trys).length > 0 && a[a.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!a || o[1] > a[0] && o[1] < a[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < a[1]) { s.label = a[1], a = o; break; } if (a && s.label < a[2]) { s.label = a[2], s.ops.push(o); break; }a[2] && s.ops.pop(), s.trys.pop(); continue; }o = t.call(e, s); } catch (e) { o = [6, e], r = 0; } finally { n = a = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                }(this, ((s) => { switch (s.label) { case 0: n = t.rejectWithValue, r = t.extra, a = t.dispatch, s.label = 1; case 1: return s.trys.push([1, 3,, 4]), [4, r.api.delete('/college/student-arrival-sources/'.concat(e))]; case 2: return i = s.sent(), a(h()), [2, i.data]; case 3: return s.sent().message === 'Failed to fetch' ? [2, n('timeout')] : [2, n('ERROR')]; case 4: return [2]; } })));
            }, new ((a = void 0) || (a = Promise))(((e, t) => { function s(e) { try { l(i.next(e)); } catch (e) { t(e); } } function o(e) { try { l(i.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(s, o); }l((i = i.apply(n, r || [])).next()); })); let n; let r; let a; let i;
        })); let le = function () { return le = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++) for (const a in t = arguments[n])Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e; }, le.apply(this, arguments); }; const ce = function (e) {
            const t = e.className; const n = e.arrivalSource; const a = e.visible; const i = e.setVisible; const s = (0, A.T)(); const o = (0, l.useState)(); const c = o[0]; const u = o[1]; const d = (0, l.useRef)(null); const f = (0, l.useState)(!1); const v = f[0]; const h = f[1]; const b = function () { i(!1); }; return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsxs)(j.Tk, {
                    className: (0, y.A)(se.DeleteArrivalSource, {}, [t]),
visible: a,
onClose: b,
size: 'lg',
alignment: 'center',
children: [(0, r.jsx)(j.p0, { children: (0, r.jsxs)(j.fl, { children: ['Удаление места рождения №', n == null ? void 0 : n.id_comesfrom] }) }), (0, r.jsx)(j.sD, { children: (0, r.jsxs)(k.xv, { size: k.yH.XM, className: se.deleteText, children: ['Вы действительно хотите удалить место рождения', ' ', (0, r.jsxs)('span', { children: ['№', n == null ? void 0 : n.id_comesfrom, ' ', '-', ' ', '"'.concat(n == null ? void 0 : n.comesfrom, '"')] }), ' ', 'и все связанные с ним данные?'] }) }), (0, r.jsx)(j.Ym, {
 className: se.footer,
children: (0, r.jsxs)('div', {
 className: se.footerBtns,
children: [(0, r.jsx)(L.zx, {
                        theme: L.bn.OUTLINE, className: se.footerBtn, onClick: b, children: (0, r.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Отмена' }), 
}), (0, r.jsxs)(L.zx, {
                        theme: L.bn.ERROR, className: (0, y.A)(se.footerBtn, {}, [se.redBtn]), onClick() { let e; e = n.id_comesfrom.toString(), h(!0), s(oe(e)).then(((e) => { e.meta.requestStatus === 'fulfilled' ? (u(E.F.success('Место рождения №'.concat(n == null ? void 0 : n.id_comesfrom, ' удалено'))), b(), h(!1)) : e.meta.requestStatus === 'rejected' && (u(E.F.error('Произошла ошибка при удалении, попробуйте снова')), h(!1)); })); }, disabled: v, children: [(0, r.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Удалить' }), (0, r.jsx)(S.Z, { icon: J.N, className: se.btnIcon })], 
})] 
}) 
})],
                }), (0, r.jsx)(j.KF, { ref: d, push: c, placement: 'top-end' })],
            });
        }; const ue = n(779); const de = {
            'modal-dialog': 'rswKVxvS', tabBtn: 'jXaj8OWu', tabsButtonsBlock: 'FKRjmrG0', title: 'sSlmOEMc', footerBtn: 'WbssFOd0', redBtn: 'jjDy60yT', settings: 'Xh9Qhha6', newAddField: 'DTRuy2O0', tabBlock: 'Hqcd7CU7', footer: '_g8VmS7q', message: 'e1b7s3EX', messageIcon: 'nqHkOEum', checkboxText: 'MF5eiwmx',
        }; let fe = function () { return fe = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++) for (const a in t = arguments[n])Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e; }, fe.apply(this, arguments); }; const ve = function (e) {
            const t = e.className; const n = e.visible; const a = e.setVisible; const i = e.arrivalSourceId; const s = e.onDeleteArrivalSource; const o = e.onEditArrivalSource; const c = (0, A.T)(); const u = (0, C.v9)(Y); const d = (0, C.v9)(Q); const f = (0, C.v9)(G); (0, l.useEffect)((() => { i && c(X(i)); }), [c, i]); let v; const h = function () { a(!1); }; return (0, l.useEffect)((() => { f === 'timeout' && console.log('Bla-bla-bla'); }), [f]), v = d ? (0, r.jsx)(V.O, { width: '100%', height: 120 }) : f ? (0, r.jsx)(k.xv, {
                theme: k.lg.ERROR, size: k.yH.M, weight: k.fs.BOLD, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, r.jsx)('div', { className: de.tab, children: (0, r.jsxs)('div', { className: de.tabBlock, children: [(0, r.jsx)('div', { className: de.settings, children: (0, r.jsxs)('div', { className: de.newAddField, children: [(0, r.jsx)('h6', { className: de.newAddFieldTitle, children: 'ID места рождения' }), (0, r.jsx)(k.xv, { size: k.yH.S, weight: k.fs.BOLD, children: u == null ? void 0 : u.id_comesfrom })] }) }), (0, r.jsx)('div', { className: de.settings, children: (0, r.jsxs)('div', { className: de.newAddField, children: [(0, r.jsx)('h6', { className: de.newAddFieldTitle, children: 'Наименование' }), (0, r.jsx)(k.xv, { size: k.yH.S, weight: k.fs.BOLD, children: u == null ? void 0 : u.comesfrom })] }) })] }) }), (0, r.jsxs)(j.Tk, {
                className: (0, y.A)(de.ViewArrivalSource, {}, [t, 'view-student-modal']),
visible: n,
onClose: h,
alignment: 'center',
children: [(0, r.jsx)(j.p0, { children: d ? (0, r.jsx)(V.O, { width: 200, height: 30 }) : (0, r.jsxs)(j.fl, { children: ['Место рождения №', u == null ? void 0 : u.id_comesfrom] }) }), (0, r.jsx)(j.sD, { children: v }), (0, r.jsxs)(j.Ym, {
 className: de.footer,
children: [(0, r.jsx)('div', {}), (0, r.jsxs)('div', {
 className: de.footerBtns,
children: [(0, r.jsx)(L.zx, {
                    theme: L.bn.OUTLINE, className: de.footerBtn, onClick: h, children: (0, r.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Закрыть' }), 
}), (0, r.jsxs)(L.zx, {
                    theme: L.bn.ERROR, className: (0, y.A)(de.footerBtn, {}, [de.redBtn]), onClick() { s(u), h(); }, disabled: d || !!f, children: [(0, r.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Удалить' }), (0, r.jsx)(S.Z, { icon: J.N, className: de.btnIcon })], 
}), (0, r.jsxs)(L.zx, {
                    color: 'primary', className: de.footerBtn, onClick() { o(i), h(); }, disabled: d || !!f, children: [(0, r.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Редактировать' }), (0, r.jsx)(S.Z, { icon: ue.C, className: de.btnIcon })], 
})] 
})] 
})],
            });
        }; const he = n(6837); const be = n(1353); const pe = n(773); const xe = n(5606); const me = n(2008); const ge = n(596); const ye = n(4164); const je = {
            TableBlock: 'UxP92z27', table: 'LA5eLeiQ', tableRow: 'OO6OlCxF', tableCell: 'Peagm7Aw', tableHead: 'MgEFfg8e', tableCellId: 'VeJfz9B2', tableBody: 'KTgBt3gE', tableSortIcon: 'wmfN43Lh', active: 'US0R4gwX', cellTextBg: 'tWfC6fJn', tableCellBtns: 'dpZoyp8P', tableCellBtnsWrapper: 'Ow5XpL_L', editBtn: 'ehbEIq8v', checkbox: 'qrLCTFH9', tableWithCheckboxes: '_QRz7IeH',
        }; let Se = function () { return Se = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++) for (const a in t = arguments[n])Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e; }, Se.apply(this, arguments); }; const we = function (e) {
            let t; let n; let a; let i; const s = e.className; const o = e.data; const c = e.exportDisabled; const d = (0, A.T)(); const f = (0, C.v9)(T); const v = (0, C.v9)(F); const b = (0, C.v9)(u.DU); const p = (0, C.v9)(u.Qg); const x = (0, l.useState)(); const m = x[0]; const g = x[1]; const j = (0, l.useState)(!1); const S = j[0]; const w = j[1]; const N = (0, l.useState)(!1); const B = N[0]; const E = N[1]; const O = (0, l.useState)(!1); const D = O[0]; const I = O[1]; const z = (0, l.useState)(); const R = z[0]; const M = z[1]; const H = function (e) { E(!0), M(e); }; const P = (0, l.useCallback)(((e) => { I(!0), g(e); }), []); (0, l.useEffect)((() => { d(u.f$.setSort('id_comesfrom')); }), [d]); let X; const _ = (0, l.useCallback)(((e) => { d(u.f$.setSort(e)), d(h()); }), [d]); X = f ? (0, r.jsx)(V.O, { height: 250 }) : v ? (0, r.jsx)(k.xv, {
                theme: k.lg.ERROR, size: k.yH.M, weight: k.fs.SEMIBOLD, className: je.error, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : o.length ? (0, r.jsxs)('div', {
 className: (0, y.A)(je.table, (t = {}, t[je.tableWithCheckboxes] = !c, t), []),
children: [(0, r.jsx)('div', {
 className: je.tableHead,
children: (0, r.jsxs)('div', {
 className: je.tableRow,
children: [!c && (0, r.jsx)(he.X, { className: je.checkbox, id: 'checkbox-arrival-sources-all' }), (0, r.jsxs)(L.zx, {
                theme: L.bn.CLEAR, className: (0, y.A)(je.tableCell, {}, [je.tableCellId]), onClick() { _('id_comesfrom'); }, children: [(0, r.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'ID места рождения' }), (0, r.jsx)(be.J, { Svg: p === 'asc' ? pe.Z : xe.Z, className: (0, y.A)(je.tableSortIcon, (n = {}, n[je.active] = b === 'id_comesfrom', n), []) })], 
}), (0, r.jsxs)(L.zx, {
                theme: L.bn.CLEAR, className: je.tableCell, onClick() { _('comesfrom'); }, children: [(0, r.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Наименование' }), (0, r.jsx)(be.J, { Svg: p === 'asc' ? pe.Z : xe.Z, className: (0, y.A)(je.tableSortIcon, (a = {}, a[je.active] = b === 'comesfrom', a), []) })], 
}), (0, r.jsx)('div', { className: (0, y.A)(je.tableCell, {}, [je.tableCellBtnsWrapper]) })] 
}) 
}), (0, r.jsx)('div', { className: je.tableBody, children: o == null ? void 0 : o.map(((e) => (0, r.jsxs)('div', { className: je.tableRow, children: [!c && (0, r.jsx)(he.X, { className: je.checkbox, id: 'checkbox-arrival-sources-'.concat(e.id_comesfrom) }), (0, r.jsx)('div', { className: (0, y.A)(je.tableCell, {}, [je.tableCellId]), children: (0, r.jsx)(k.xv, { size: k.yH.XS, children: e.id_comesfrom }) }), (0, r.jsx)('div', { className: je.tableCell, children: (0, r.jsx)(k.xv, { size: k.yH.XS, children: e.comesfrom }) }), (0, r.jsxs)('div', { className: (0, y.A)(je.tableCell, {}, [je.tableCellBtns]), children: [(0, r.jsx)(L.zx, { theme: L.bn.CLEAR, title: 'Просмотр', className: je.editBtn, onClick () { var t; t = e.id_comesfrom.toString(), w(!0), M(t) }, children: (0, r.jsx)(be.J, { Svg: me.Z }) }), (0, r.jsx)(L.zx, { theme: L.bn.CLEAR, title: 'Редактировать', className: je.editBtn, onClick () { H(e.id_comesfrom.toString()) }, children: (0, r.jsx)(be.J, { Svg: ge.Z }) }), (0, r.jsx)(L.zx, { theme: L.bn.CLEAR, title: 'Удалить', className: je.editBtn, onClick () { P(e) }, children: (0, r.jsx)(be.J, { Svg: ye.Z }) })] })] }, e.id_comesfrom))) })] 
}) : (0, r.jsx)(k.xv, { children: 'Ничего не найдено...' }); const Z = ((i = {})[je.error] = !!v, i); return (0, r.jsxs)('div', {
                className: (0, y.A)(je.TableBlock, Z, [s]),
                children: [X, (0, r.jsx)(ve, {
                    visible: S, setVisible: w, arrivalSourceId: R, onDeleteArrivalSource: P, onEditArrivalSource: H,
                }), (0, r.jsx)(ie, {
                    visible: B, setVisible: E, arrivalSourceId: R, onDeleteArrivalSource: P,
                }), (0, r.jsx)(ce, { arrivalSource: m, visible: D, setVisible: I })],
            });
        }; const Ne = n(7730); const ke = n(7687); const Be = n(5375); const Ce = n(2556); let Ae = function () { return Ae = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++) for (const a in t = arguments[n])Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e; }, Ae.apply(this, arguments); }; const Ee = {
            arrivalSources: P, addArrivalSource: g, arrivalSourceDetail: ee, editArrivalSource: K,
        }; const Le = function (e) {
            e.className; const t = (0, A.T)(); const n = (0, l.useState)(!1); const c = n[0]; const u = n[1]; const d = (0, C.v9)(R); const b = (0, C.v9)(T); const p = (0, C.v9)(F); const x = (0, C.v9)(v); const m = (0, C.v9)(f); const g = (0, l.useState)(''); const y = g[0]; const j = g[1]; const S = (0, l.useState)(); const w = S[0]; const N = S[1]; const k = (0, l.useCallback)(((e) => { j(e); }), []); const B = (0, l.useCallback)(((e) => { t(H.setLimit(e)), t(h()); }), [t]); const E = (0, l.useCallback)(((e) => { t(H.setPage(e)), t(h()); }), [t]); return (0, l.useEffect)((() => { N((d == null ? void 0 : d.data) || []); }), [d]), (0, l.useEffect)((() => { const e = (0, Ne.tK)(y, (d == null ? void 0 : d.data) || []); N(e || []); }), [d, y]), (0, l.useEffect)((() => { t(h()); }), [t]), (0, r.jsx)(o.B, {
                title: 'LMS - Место рождения',
                children: (0, r.jsxs)(a.W, {
                    reducers: Ee,
                    removeAfterUnmount: !0,
                    children: [(0, r.jsxs)('div', {
                        children: [(0, r.jsxs)('div', {
                            className: 'page-settings '.concat(!1),
                            children: [(0, r.jsx)(i.o, {
                                value: y, onChange: k, searchText: 'Поиск по наименованию', error: p, isLoading: b,
                            }), (0, r.jsx)(s.X, {
                                onlyAdding: !0, setVisibleAddNewField: u, addingModalText: 'Добавить место рождения', error: p, isLoading: b, references: Ce.x, referencesTitle: 'Справочники', children: (0, r.jsx)(z, { visible: c, setVisible: u }),
                            })],
                        }), (0, r.jsx)(we, { data: w || [], exportDisabled: !0 }), (0, r.jsxs)('div', {
                            className: 'page-table-settings',
                            children: [(0, r.jsx)(ke.K, {
                                data: w || [], onChange: B, onChangePage: E, paginationData: d == null ? void 0 : d.pagination, itemsLimit: x, withRecords: !0, isLoading: b, error: p,
                            }), (0, r.jsx)(ke.N, {
                                data: w || [], onChange: E, itemsPage: m, isLoading: b, error: p, paginationData: d == null ? void 0 : d.pagination,
                            })],
                        })],
                    }), p && (0, r.jsx)(Be.d, { error: p })],
                }),
            });
        };
    },
}]);
