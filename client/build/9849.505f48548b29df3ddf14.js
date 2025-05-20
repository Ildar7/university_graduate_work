!(function () { try { const e = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; const n = (new Error()).stack; n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = '3fc41d5b-1652-4623-a059-0dfa6db06843', e._sentryDebugIdIdentifier = 'sentry-dbid-3fc41d5b-1652-4623-a059-0dfa6db06843'); } catch (e) {} }()); const _global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; _global.SENTRY_RELEASE = { id: '45ee1168f5cf48e9753bace26323152d3b61cb67' }, (self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[9849], {
    8271: (e, n, t) => {
        t.r(n), t.d(n, { default: () => Le }); const i = t(5893); const a = t(1150); const r = t(9649); const s = t(5306); const o = t(918); const l = t(7294); const c = t(7168); const u = t(1759); const d = t(121); const f = function (e) { let n; return (n = e.finSources) === null || void 0 === n ? void 0 : n.page; }; const h = function (e) { let n; return (n = e.finSources) === null || void 0 === n ? void 0 : n.limit; }; const v = (0, c.hg)('students/fetchFinSources', ((e, n) => {
            return t = void 0, i = void 0, r = function () {
                let e; let t; let i; let a; let r; let s; return (function (e, n) {
                    let t; let i; let a; let r; let s = {
                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (l) { return (function (o) { if (t) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (s = 0)), s;) try { if (t = 1, i && (a = 2 & o[0] ? i.return : o[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, o[1])).done) return a; switch (i = 0, a && (o = [2 & o[0], a.value]), o[0]) { case 0: case 1: a = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, i = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((a = (a = s.trys).length > 0 && a[a.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!a || o[1] > a[0] && o[1] < a[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < a[1]) { s.label = a[1], a = o; break; } if (a && s.label < a[2]) { s.label = a[2], s.ops.push(o); break; }a[2] && s.ops.pop(), s.trys.pop(); continue; }o = n.call(e, s); } catch (e) { o = [6, e], i = 0; } finally { t = a = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                }(this, ((o) => {
                    switch (o.label) {
                    case 0: e = n.rejectWithValue, t = n.extra, i = n.getState, a = {
                        pageSelector: f, limitSelector: h, sortFieldSelector: u.DU, sortOrderSelector: u.Qg,
                    }, r = (0, d.o)('/college/students/financing-sources', a, i()), o.label = 1; case 1: return o.trys.push([1, 3,, 4]), [4, t.api.get(r)]; case 2: return [2, o.sent().data]; case 3: return (s = o.sent()).message === 'Failed to fetch' ? [2, e({ status: 500, error: 'timeout' })] : [2, e({ status: s.response.status, error: s.response.data.message })]; case 4: return [2];
                    }
                })));
            }, new ((a = void 0) || (a = Promise))(((e, n) => { function s(e) { try { l(r.next(e)); } catch (e) { n(e); } } function o(e) { try { l(r.throw(e)); } catch (e) { n(e); } } function l(n) { let t; n.done ? e(n.value) : (t = n.value, t instanceof a ? t : new a(((e) => { e(t); }))).then(s, o); }l((r = r.apply(t, i || [])).next()); })); let t; let i; let a; let r;
        })); const p = function (e) { let n; return (n = e.addFinSource) === null || void 0 === n ? void 0 : n.data.title; }; const b = (0, c.hg)('finSources/addFinSource', ((e, n) => {
            return t = void 0, i = void 0, r = function () {
                let e; let t; let i; let a; let r; let s; let o; let l; return (function (e, n) {
                    let t; let i; let a; let r; let s = {
                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (l) { return (function (o) { if (t) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (s = 0)), s;) try { if (t = 1, i && (a = 2 & o[0] ? i.return : o[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, o[1])).done) return a; switch (i = 0, a && (o = [2 & o[0], a.value]), o[0]) { case 0: case 1: a = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, i = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((a = (a = s.trys).length > 0 && a[a.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!a || o[1] > a[0] && o[1] < a[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < a[1]) { s.label = a[1], a = o; break; } if (a && s.label < a[2]) { s.label = a[2], s.ops.push(o); break; }a[2] && s.ops.pop(), s.trys.pop(); continue; }o = n.call(e, s); } catch (e) { o = [6, e], i = 0; } finally { t = a = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                }(this, ((c) => { switch (c.label) { case 0: e = n.rejectWithValue, t = n.extra, i = n.dispatch, a = n.getState, r = p(a()), s = { source: r }, c.label = 1; case 1: return c.trys.push([1, 3,, 4]), [4, t.api.post('/college/students/financing-sources/', s)]; case 2: return o = c.sent(), i(v()), i(g.clearData()), [2, o.data]; case 3: return l = c.sent(), [2, e({ errors: l.response.data.errors, status: l.response.status })]; case 4: return [2]; } })));
            }, new ((a = void 0) || (a = Promise))(((e, n) => { function s(e) { try { l(r.next(e)); } catch (e) { n(e); } } function o(e) { try { l(r.throw(e)); } catch (e) { n(e); } } function l(n) { let t; n.done ? e(n.value) : (t = n.value, t instanceof a ? t : new a(((e) => { e(t); }))).then(s, o); }l((r = r.apply(t, i || [])).next()); })); let t; let i; let a; let r;
        })); const x = (0, c.oM)({
            name: 'addFinSource', initialState: { data: { title: null }, isLoading: !1, errors: void 0 }, reducers: { setTitle(e, n) { e.data.title = n.payload; }, clearData(e) { e.data = { title: null }, e.errors = void 0; } }, extraReducers(e) { e.addCase(b.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(b.fulfilled, ((e) => { e.isLoading = !1; })).addCase(b.rejected, ((e, n) => { e.isLoading = !1, e.errors = n.payload; })); },
        }); var g = x.actions; const y = x.reducer; const m = t(4387); const j = t(4475); const w = t(2308); const S = t(5044); const N = t(3280); const k = t(4809); const B = t(1385); const C = t(6458); const F = t(5461); const O = t(530); const E = t(9161); const L = function (e) { let n; return (n = e.addFinSource) === null || void 0 === n ? void 0 : n.errors; }; const D = {
            tabBtn: 'G8dfTRk3', tabsButtonsBlock: 'B4Iilugi', title: 'M1LHhmAS', settings: 'l3Ap27Yc', newAddField: 'YGgEELC1', tabBlock: 'IJIPdICX', form: 'Yie0zOqZ', footerBtn: 'MkKrcvaY', greenBtn: 'EJAixhem', footer: 'Ca4AzerO', message: 'fZIs4bOE', messageIcon: 'I7FUE0L6',
        }; let I = function () { return I = Object.assign || function (e) { for (var n, t = 1, i = arguments.length; t < i; t++) for (const a in n = arguments[t])Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]); return e; }, I.apply(this, arguments); }; const R = function (e) {
            const n = e.className; const t = e.visible; const a = e.setVisible; const r = (0, F.T)(); const s = (0, l.useState)(!1); const o = s[0]; const c = s[1]; const u = (0, l.useState)(!1); const d = u[0]; const f = u[1]; const h = (0, l.useState)(); const v = h[0]; const x = h[1]; const y = (0, l.useRef)(null); const R = (0, C.v9)(p); const z = (0, C.v9)(L); const A = (0, l.useCallback)((() => { a(!1); }), [a]); const T = function () { A(), c(!1), f(!1); }; return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(j.Tk, {
                    className: (0, m.A)(D.AddFinSource, {}, [n]),
                    visible: t,
                    onClose: A,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, i.jsxs)(j.lx, {
                        className: (0, m.A)(D.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: o,
                        onSubmit(e) {
                            return n = void 0, t = void 0, a = function () {
                                let n; let t; return (function (e, n) {
                                    let t; let i; let a; let r; let s = {
                                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (l) { return (function (o) { if (t) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (s = 0)), s;) try { if (t = 1, i && (a = 2 & o[0] ? i.return : o[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, o[1])).done) return a; switch (i = 0, a && (o = [2 & o[0], a.value]), o[0]) { case 0: case 1: a = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, i = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((a = (a = s.trys).length > 0 && a[a.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!a || o[1] > a[0] && o[1] < a[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < a[1]) { s.label = a[1], a = o; break; } if (a && s.label < a[2]) { s.label = a[2], s.ops.push(o); break; }a[2] && s.ops.pop(), s.trys.pop(); continue; }o = n.call(e, s); } catch (e) { o = [6, e], i = 0; } finally { t = a = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                                }(this, ((i) => { switch (i.label) { case 0: return e.preventDefault(), n = e.currentTarget, f(!n.checkValidity()), n.checkValidity() || e.stopPropagation(), c(!0), n.checkValidity() ? R ? [4, r(b())] : [3, 2] : [3, 3]; case 1: return (t = i.sent()).meta.requestStatus === 'fulfilled' && (x(O.F.success('Финансовая помощь добавлена')), T()), t.meta.requestStatus === 'rejected' && f(!0), [3, 3]; case 2: f(!0), i.label = 3; case 3: return [2]; } })));
                            }, new ((i = void 0) || (i = Promise))(((e, r) => { function s(e) { try { l(a.next(e)); } catch (e) { r(e); } } function o(e) { try { l(a.throw(e)); } catch (e) { r(e); } } function l(n) { let t; n.done ? e(n.value) : (t = n.value, t instanceof i ? t : new i(((e) => { e(t); }))).then(s, o); }l((a = a.apply(n, t || [])).next()); })); let n; let t; let i; let a;
                        },
                        children: [(0, i.jsx)(j.p0, { children: (0, i.jsx)(j.fl, { children: 'Добавление финансовой помощи' }) }), (0, i.jsx)(j.sD, { children: (0, i.jsx)('div', { className: D.tab, children: (0, i.jsx)('div', { className: D.tabBlock, children: (0, i.jsx)('div', { className: D.settings, children: (0, i.jsxs)('div', { className: D.newAddField, children: [(0, i.jsx)('h6', {className: D.newAddFieldTitle, children: "Наименование*"}), (0, i.jsx)(B.h, {
 type: 'text', placeholder: 'госзаказ', feedbackValid: z ? '' : 'Здорово!', invalid: !!z, feedbackInvalid: 'Введите корректные данные!', value: R || '', onChange (e) { r(g.setTitle(e.target.value)) }, required: !0 
})] }) }) }) }) }), (0, i.jsxs)(j.Ym, { className: D.footer, children: [(0, i.jsx)('div', { className: D.message, children: d && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(w.Z, { icon: S.D, customClassName: D.messageIcon }), (0, i.jsx)(k.xv, { size: k.yH.M, weight: k.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, i.jsxs)('div', { className: D.footerBtns, children: [(0, i.jsx)(E.zx, {
 theme: E.bn.OUTLINE, className: D.footerBtn, onClick: T, children: (0, i.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Отмена'}) 
}), (0, i.jsxs)(E.zx, { type: 'submit', className: (0, m.A)(D.footerBtn, {}, [D.greenBtn]), children: [(0, i.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Добавить'}), (0, i.jsx)(w.Z, { icon: N.q, className: D.btnIcon })] })] })] })],
                    }),
                }), (0, i.jsx)(j.KF, { ref: y, push: v, placement: 'top-end' })],
            });
        }; const z = function (e) { let n; return (n = e.finSources) === null || void 0 === n ? void 0 : n.data; }; const A = function (e) { let n; return (n = e.finSources) === null || void 0 === n ? void 0 : n.isLoading; }; const T = function (e) { let n; return (n = e.finSources) === null || void 0 === n ? void 0 : n.error; }; const M = (0, c.oM)({
            name: 'finSources',
            initialState: {
                data: void 0, isLoading: !0, error: void 0, page: '1', limit: '50',
            },
            reducers: { setPage(e, n) { e.page = n.payload; }, setLimit(e, n) { e.limit = n.payload; } },
            extraReducers(e) { e.addCase(v.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(v.fulfilled, ((e, n) => { e.isLoading = !1, e.data = { data: n.payload.data, pagination: n.payload.pagination }; })).addCase(v.rejected, ((e, n) => { e.isLoading = !1, e.error = n.payload; })); },
        }); const V = M.actions; const H = M.reducer; const _ = t(1138); const X = (0, c.hg)('finSources/fetchFinSourceDetail', ((e, n) => {
            return t = void 0, i = void 0, r = function () {
                let t; let i; let a; let r; return (function (e, n) {
                    let t; let i; let a; let r; let s = {
                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (l) { return (function (o) { if (t) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (s = 0)), s;) try { if (t = 1, i && (a = 2 & o[0] ? i.return : o[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, o[1])).done) return a; switch (i = 0, a && (o = [2 & o[0], a.value]), o[0]) { case 0: case 1: a = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, i = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((a = (a = s.trys).length > 0 && a[a.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!a || o[1] > a[0] && o[1] < a[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < a[1]) { s.label = a[1], a = o; break; } if (a && s.label < a[2]) { s.label = a[2], s.ops.push(o); break; }a[2] && s.ops.pop(), s.trys.pop(); continue; }o = n.call(e, s); } catch (e) { o = [6, e], i = 0; } finally { t = a = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                }(this, ((s) => { switch (s.label) { case 0: t = n.rejectWithValue, i = n.extra, a = n.dispatch, s.label = 1; case 1: return s.trys.push([1, 3,, 4]), [4, i.api.get('/college/students/financing-sources/'.concat(e))]; case 2: return r = s.sent(), a(q.setFinSourceData(r.data)), [2, r.data]; case 3: return s.sent().message === 'Failed to fetch' ? [2, t('timeout')] : [2, t('ERROR')]; case 4: return [2]; } })));
            }, new ((a = void 0) || (a = Promise))(((e, n) => { function s(e) { try { l(r.next(e)); } catch (e) { n(e); } } function o(e) { try { l(r.throw(e)); } catch (e) { n(e); } } function l(n) { let t; n.done ? e(n.value) : (t = n.value, t instanceof a ? t : new a(((e) => { e(t); }))).then(s, o); }l((r = r.apply(t, i || [])).next()); })); let t; let i; let a; let r;
        })); const P = function (e) { let n; let t; return (t = (n = e.editFinSource) === null || void 0 === n ? void 0 : n.newFields) === null || void 0 === t ? void 0 : t.title; }; const Z = (0, c.hg)('finSources/editFinSource', ((e, n) => {
            return t = void 0, i = void 0, r = function () {
                let t; let i; let a; let r; let s; let o; let l; let c; return (function (e, n) {
                    let t; let i; let a; let r; let s = {
                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (l) { return (function (o) { if (t) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (s = 0)), s;) try { if (t = 1, i && (a = 2 & o[0] ? i.return : o[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, o[1])).done) return a; switch (i = 0, a && (o = [2 & o[0], a.value]), o[0]) { case 0: case 1: a = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, i = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((a = (a = s.trys).length > 0 && a[a.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!a || o[1] > a[0] && o[1] < a[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < a[1]) { s.label = a[1], a = o; break; } if (a && s.label < a[2]) { s.label = a[2], s.ops.push(o); break; }a[2] && s.ops.pop(), s.trys.pop(); continue; }o = n.call(e, s); } catch (e) { o = [6, e], i = 0; } finally { t = a = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                }(this, ((u) => { switch (u.label) { case 0: t = n.rejectWithValue, i = n.extra, a = n.dispatch, r = n.getState, s = P(r()), o = { source: s }, u.label = 1; case 1: return u.trys.push([1, 3,, 4]), [4, i.api.put('/college/students/financing-sources/'.concat(e), o)]; case 2: return l = u.sent(), a(v()), a(X(e)), [2, l.data]; case 3: return c = u.sent(), [2, t({ errors: c.response.data.errors, status: c.response.status })]; case 4: return [2]; } })));
            }, new ((a = void 0) || (a = Promise))(((e, n) => { function s(e) { try { l(r.next(e)); } catch (e) { n(e); } } function o(e) { try { l(r.throw(e)); } catch (e) { n(e); } } function l(n) { let t; n.done ? e(n.value) : (t = n.value, t instanceof a ? t : new a(((e) => { e(t); }))).then(s, o); }l((r = r.apply(t, i || [])).next()); })); let t; let i; let a; let r;
        })); const Y = (0, c.oM)({
            name: 'editFinSource',
            initialState: {
                data: void 0, newFields: void 0, isLoading: !1, errors: void 0,
            },
            reducers: { setFinSourceData(e, n) { n.payload && (e.data = n.payload, e.newFields = { title: e.data.whopaying }); }, setTitle(e, n) { e.newFields.title = n.payload; }, clearNewFields(e) { let n; e.newFields = { title: ((n = e.data) === null || void 0 === n ? void 0 : n.whopaying) || null }, e.errors = void 0; } },
            extraReducers(e) { e.addCase(Z.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(Z.fulfilled, ((e) => { e.isLoading = !1; })).addCase(Z.rejected, ((e, n) => { e.isLoading = !1, e.errors = n.payload; })); },
        }); var q = Y.actions; const G = Y.reducer; const J = t(1783); const W = t(8263); const U = function (e) { let n; return (n = e.finSourcesDetail) === null || void 0 === n ? void 0 : n.error; }; const K = function (e) { let n; return (n = e.finSourcesDetail) === null || void 0 === n ? void 0 : n.isLoading; }; const Q = function (e) { let n; return (n = e.finSourcesDetail) === null || void 0 === n ? void 0 : n.data; }; const $ = (0, c.oM)({
            name: 'finSourceDetail', initialState: { data: void 0, isLoading: !1, error: void 0 }, reducers: {}, extraReducers(e) { e.addCase(X.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(X.fulfilled, ((e, n) => { e.isLoading = !1, e.data = n.payload; })).addCase(X.rejected, ((e, n) => { e.isLoading = !1, e.error = n.payload; })); },
        }); const ee = ($.actions, $.reducer); const ne = function (e) { let n; return (n = e.editFinSource) === null || void 0 === n ? void 0 : n.isLoading; }; const te = function (e) { let n; return (n = e.editFinSource) === null || void 0 === n ? void 0 : n.errors; }; const ie = {
            tabBtn: 'nEkC99XG', tabsButtonsBlock: 'EPIYpuB9', title: 'ojbF2oJP', footerBtn: 'zy2a41Bd', greenBtn: 'H47DRGzM', redBtn: 'dBN4adKi', settings: '_r1agtYc', newAddField: 'sbQDNsrR', tabBlock: 'Udwq7yue', form: 'mHla3HRp', footer: 'IOF_HQ8N', message: 'Rpf0dmIE', messageIcon: 'D1wMfGX4',
        }; let ae = function () { return ae = Object.assign || function (e) { for (var n, t = 1, i = arguments.length; t < i; t++) for (const a in n = arguments[t])Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]); return e; }, ae.apply(this, arguments); }; const re = function (e) {
            const n = e.className; const t = e.visible; const a = e.setVisible; const r = e.finSourceId; const s = e.onDeleteFinSource; const o = (0, F.T)(); const c = (0, l.useState)(); const u = c[0]; const d = c[1]; const f = (0, l.useRef)(null); const h = (0, l.useState)(!1); const v = h[0]; const p = h[1]; const b = (0, l.useState)(!1); const x = b[0]; const g = b[1]; const y = (0, C.v9)(Q); const N = (0, C.v9)(K); const L = (0, C.v9)(U); const D = (0, C.v9)(ne); const I = (0, C.v9)(P); const R = (0, C.v9)(te); (0, l.useEffect)((() => { r && o(X(r)); }), [o, r]); let z; const A = function () { a(!1), p(!1), g(!1); }; const T = function () { A(), o(q.clearNewFields()); }; return z = D || N ? (0, i.jsx)(_.O, { width: '100%', height: 80 }) : L ? (0, i.jsx)(k.xv, {
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
                                type: 'text', placeholder: 'госзаказ', feedbackValid: R ? '' : 'Здорово!', invalid: !!R, feedbackInvalid: 'Введите корректные данные', value: I || '', onChange(e) { o(q.setTitle(e.target.value)); },
                            })],
                        }),
                    }),
                }),
            }), (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(j.Tk, {
                    className: (0, m.A)(ie.EditFinSource, {}, [n]),
                    visible: t,
                    onClose: A,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, i.jsxs)(j.lx, {
                        className: (0, m.A)(ie.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: v,
                        onSubmit(e) {
                            return n = void 0, t = void 0, a = function () {
                                let n; let t; return (function (e, n) {
                                    let t; let i; let a; let r; let s = {
                                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (l) { return (function (o) { if (t) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (s = 0)), s;) try { if (t = 1, i && (a = 2 & o[0] ? i.return : o[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, o[1])).done) return a; switch (i = 0, a && (o = [2 & o[0], a.value]), o[0]) { case 0: case 1: a = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, i = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((a = (a = s.trys).length > 0 && a[a.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!a || o[1] > a[0] && o[1] < a[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < a[1]) { s.label = a[1], a = o; break; } if (a && s.label < a[2]) { s.label = a[2], s.ops.push(o); break; }a[2] && s.ops.pop(), s.trys.pop(); continue; }o = n.call(e, s); } catch (e) { o = [6, e], i = 0; } finally { t = a = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                                }(this, ((i) => { switch (i.label) { case 0: return e.preventDefault(), n = e.currentTarget, g(!n.checkValidity()), n.checkValidity() || e.stopPropagation(), p(!0), n.checkValidity() ? (y == null ? void 0 : y.whopaying) !== I ? [3, 1] : (d(O.F.error('Для сохранения вы должны внести изменения!')), [3, 3]) : [3, 3]; case 1: return [4, o(Z(r))]; case 2: (t = i.sent()).meta.requestStatus === 'fulfilled' && (d(O.F.success('Информация о финансовой помощи успешно обновлена')), T()), t.meta.requestStatus === 'rejected' && g(!0), i.label = 3; case 3: return [2]; } })));
                            }, new ((i = void 0) || (i = Promise))(((e, r) => { function s(e) { try { l(a.next(e)); } catch (e) { r(e); } } function o(e) { try { l(a.throw(e)); } catch (e) { r(e); } } function l(n) { let t; n.done ? e(n.value) : (t = n.value, t instanceof i ? t : new i(((e) => { e(t); }))).then(s, o); }l((a = a.apply(n, t || [])).next()); })); let n; let t; let i; let a;
                        },
                        children: [(0, i.jsx)(j.p0, { children: D || N ? (0, i.jsx)(_.O, { width: 200, height: 30 }) : (0, i.jsxs)(j.fl, { children: ['Изменение финансовой помощи №', y == null ? void 0 : y.id_whopaying] }) }), (0, i.jsx)(j.sD, { children: z }), (0, i.jsxs)(j.Ym, {
 className: ie.footer,
children: [(0, i.jsx)('div', { className: ie.message, children: x && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(w.Z, { icon: S.D, customClassName: ie.messageIcon }), (0, i.jsx)(k.xv, { size: k.yH.M, weight: k.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, i.jsxs)('div', {
 className: ie.footerBtns,
children: [(0, i.jsx)(E.zx, {
                            theme: E.bn.OUTLINE, className: ie.footerBtn, onClick: T, children: (0, i.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Отмена' }), 
}), (0, i.jsxs)(E.zx, {
                            theme: E.bn.ERROR, className: (0, m.A)(ie.footerBtn, {}, [ie.redBtn]), onClick() { s(y), A(); }, disabled: N || D || !!L, children: [(0, i.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Удалить' }), (0, i.jsx)(w.Z, { icon: J.N, className: ie.btnIcon })], 
}), (0, i.jsxs)(E.zx, {
                            type: 'submit', className: (0, m.A)(ie.footerBtn, {}, [ie.greenBtn]), disabled: N || D || !!L, children: [(0, i.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Сохранить' }), (0, i.jsx)(w.Z, { icon: W.F, className: ie.btnIcon })], 
})] 
})] 
})],
                    }),
                }), (0, i.jsx)(j.KF, { ref: f, push: u, placement: 'top-end' })],
            });
        }; const se = { footerBtn: 'x7BuRFfg', redBtn: 'oX0Ya_Kl', deleteText: 'nebGVXTQ' }; const oe = (0, c.hg)('finSources/deleteFinSource', ((e, n) => {
            return t = void 0, i = void 0, r = function () {
                let t; let i; let a; let r; return (function (e, n) {
                    let t; let i; let a; let r; let s = {
                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (l) { return (function (o) { if (t) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (s = 0)), s;) try { if (t = 1, i && (a = 2 & o[0] ? i.return : o[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, o[1])).done) return a; switch (i = 0, a && (o = [2 & o[0], a.value]), o[0]) { case 0: case 1: a = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, i = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((a = (a = s.trys).length > 0 && a[a.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!a || o[1] > a[0] && o[1] < a[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < a[1]) { s.label = a[1], a = o; break; } if (a && s.label < a[2]) { s.label = a[2], s.ops.push(o); break; }a[2] && s.ops.pop(), s.trys.pop(); continue; }o = n.call(e, s); } catch (e) { o = [6, e], i = 0; } finally { t = a = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                }(this, ((s) => { switch (s.label) { case 0: t = n.rejectWithValue, i = n.extra, a = n.dispatch, s.label = 1; case 1: return s.trys.push([1, 3,, 4]), [4, i.api.delete('/college/students/financing-sources/'.concat(e))]; case 2: return r = s.sent(), a(v()), [2, r.data]; case 3: return s.sent().message === 'Failed to fetch' ? [2, t('timeout')] : [2, t('ERROR')]; case 4: return [2]; } })));
            }, new ((a = void 0) || (a = Promise))(((e, n) => { function s(e) { try { l(r.next(e)); } catch (e) { n(e); } } function o(e) { try { l(r.throw(e)); } catch (e) { n(e); } } function l(n) { let t; n.done ? e(n.value) : (t = n.value, t instanceof a ? t : new a(((e) => { e(t); }))).then(s, o); }l((r = r.apply(t, i || [])).next()); })); let t; let i; let a; let r;
        })); let le = function () { return le = Object.assign || function (e) { for (var n, t = 1, i = arguments.length; t < i; t++) for (const a in n = arguments[t])Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]); return e; }, le.apply(this, arguments); }; const ce = function (e) {
            const n = e.className; const t = e.finSource; const a = e.visible; const r = e.setVisible; const s = (0, F.T)(); const o = (0, l.useState)(); const c = o[0]; const u = o[1]; const d = (0, l.useRef)(null); const f = (0, l.useState)(!1); const h = f[0]; const v = f[1]; const p = function () { r(!1); }; return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsxs)(j.Tk, {
                    className: (0, m.A)(se.DeleteFinSource, {}, [n]),
visible: a,
onClose: p,
size: 'lg',
alignment: 'center',
children: [(0, i.jsx)(j.p0, { children: (0, i.jsxs)(j.fl, { children: ['Удаление финансовой помощи №', t == null ? void 0 : t.id_whopaying] }) }), (0, i.jsx)(j.sD, { children: (0, i.jsxs)(k.xv, { size: k.yH.XM, className: se.deleteText, children: ['Вы действительно хотите удалить финансовую помощь', ' ', (0, i.jsxs)('span', { children: ['№', t == null ? void 0 : t.id_whopaying, ' ', '-', ' ', '"'.concat(t == null ? void 0 : t.whopaying, '"')] }), ' ', 'и все связанные с ним данные?'] }) }), (0, i.jsx)(j.Ym, {
 className: se.footer,
children: (0, i.jsxs)('div', {
 className: se.footerBtns,
children: [(0, i.jsx)(E.zx, {
                        theme: E.bn.OUTLINE, className: se.footerBtn, onClick: p, children: (0, i.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Отмена' }), 
}), (0, i.jsxs)(E.zx, {
                        theme: E.bn.ERROR, className: (0, m.A)(se.footerBtn, {}, [se.redBtn]), onClick() { let e; e = t.id_whopaying.toString(), v(!0), s(oe(e)).then(((e) => { e.meta.requestStatus === 'fulfilled' ? (u(O.F.success('Финансовая помощь №'.concat(t == null ? void 0 : t.id_whopaying, ' удалена'))), p(), v(!1)) : e.meta.requestStatus === 'rejected' && (u(O.F.error('Произошла ошибка при удалении, попробуйте снова')), v(!1)); })); }, disabled: h, children: [(0, i.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Удалить' }), (0, i.jsx)(w.Z, { icon: J.N, className: se.btnIcon })], 
})] 
}) 
})],
                }), (0, i.jsx)(j.KF, { ref: d, push: c, placement: 'top-end' })],
            });
        }; const ue = t(779); const de = {
            'modal-dialog': 's3QNnd7k', tabBtn: 'mE2JwzmL', tabsButtonsBlock: 'NC2zcco5', title: 'HAbZ63Jz', footerBtn: 'QV6E7d7j', redBtn: 'VRjYoPDT', settings: 'OFyea9LX', newAddField: 'celiYo0q', tabBlock: 'SIDn9Ncw', footer: 'apbcE2qB', message: 'RRwT4qM0', messageIcon: 'JBI3NguA', checkboxText: 'dW3OxdwW',
        }; let fe = function () { return fe = Object.assign || function (e) { for (var n, t = 1, i = arguments.length; t < i; t++) for (const a in n = arguments[t])Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]); return e; }, fe.apply(this, arguments); }; const he = function (e) {
            const n = e.className; const t = e.visible; const a = e.setVisible; const r = e.finSourceId; const s = e.onDeleteFinSource; const o = e.onEditFinSource; const c = (0, F.T)(); const u = (0, C.v9)(Q); const d = (0, C.v9)(K); const f = (0, C.v9)(U); (0, l.useEffect)((() => { r && c(X(r)); }), [c, r]); let h; const v = function () { a(!1); }; return h = d ? (0, i.jsx)(_.O, { width: '100%', height: 120 }) : f ? (0, i.jsx)(k.xv, {
                theme: k.lg.ERROR, size: k.yH.M, weight: k.fs.BOLD, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, i.jsx)('div', { className: de.tab, children: (0, i.jsxs)('div', { className: de.tabBlock, children: [(0, i.jsx)('div', { className: de.settings, children: (0, i.jsxs)('div', { className: de.newAddField, children: [(0, i.jsx)('h6', { className: de.newAddFieldTitle, children: 'ID финансовой помощи' }), (0, i.jsx)(k.xv, { size: k.yH.S, weight: k.fs.BOLD, children: u == null ? void 0 : u.id_whopaying })] }) }), (0, i.jsx)('div', { className: de.settings, children: (0, i.jsxs)('div', { className: de.newAddField, children: [(0, i.jsx)('h6', { className: de.newAddFieldTitle, children: 'Наименование' }), (0, i.jsx)(k.xv, { size: k.yH.S, weight: k.fs.BOLD, children: u == null ? void 0 : u.whopaying })] }) })] }) }), (0, i.jsxs)(j.Tk, {
                className: (0, m.A)(de.ViewFinSource, {}, [n, 'view-student-modal']),
visible: t,
onClose: v,
alignment: 'center',
children: [(0, i.jsx)(j.p0, { children: d ? (0, i.jsx)(_.O, { width: 200, height: 30 }) : (0, i.jsxs)(j.fl, { children: ['Финансовая помощь №', u == null ? void 0 : u.id_whopaying] }) }), (0, i.jsx)(j.sD, { children: h }), (0, i.jsxs)(j.Ym, {
 className: de.footer,
children: [(0, i.jsx)('div', {}), (0, i.jsxs)('div', {
 className: de.footerBtns,
children: [(0, i.jsx)(E.zx, {
                    theme: E.bn.OUTLINE, className: de.footerBtn, onClick: v, children: (0, i.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Закрыть' }), 
}), (0, i.jsxs)(E.zx, {
                    theme: E.bn.ERROR, className: (0, m.A)(de.footerBtn, {}, [de.redBtn]), onClick() { s(u), v(); }, disabled: d || !!f, children: [(0, i.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Удалить' }), (0, i.jsx)(w.Z, { icon: J.N, className: de.btnIcon })], 
}), (0, i.jsxs)(E.zx, {
                    color: 'primary', className: de.footerBtn, onClick() { o(r), v(); }, disabled: d || !!f, children: [(0, i.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Редактировать' }), (0, i.jsx)(w.Z, { icon: ue.C, className: de.btnIcon })], 
})] 
})] 
})],
            });
        }; const ve = t(6837); const pe = t(1353); const be = t(773); const xe = t(5606); const ge = t(2008); const ye = t(596); const me = t(4164); const je = {
            TableBlock: 'vXmcWhCp', table: 'n0ul5JdD', tableRow: 'hsXci8jS', tableCell: 'GeOgVnY_', tableHead: 'FF3b7xCb', tableCellId: 'zPD9bVdz', tableBody: 'D4rvFUY1', tableSortIcon: 'UqB9t6bh', active: 'gf_VS8Yk', cellTextBg: 'bLwkaJAg', tableCellBtns: 'KO5X58xi', tableCellBtnsWrapper: 'fSthUO4O', editBtn: 'j_2TAL2g', checkbox: 'AvR3OVt0', tableWithCheckboxes: 'jybSsqXO',
        }; let we = function () { return we = Object.assign || function (e) { for (var n, t = 1, i = arguments.length; t < i; t++) for (const a in n = arguments[t])Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]); return e; }, we.apply(this, arguments); }; const Se = function (e) {
            let n; let t; let a; let r; const s = e.className; const o = e.data; const c = e.exportDisabled; const d = (0, F.T)(); const f = (0, C.v9)(A); const h = (0, C.v9)(T); const p = (0, C.v9)(u.DU); const b = (0, C.v9)(u.Qg); const x = (0, l.useState)(); const g = x[0]; const y = x[1]; const j = (0, l.useState)(!1); const w = j[0]; const S = j[1]; const N = (0, l.useState)(!1); const B = N[0]; const O = N[1]; const L = (0, l.useState)(!1); const D = L[0]; const I = L[1]; const R = (0, l.useState)(); const z = R[0]; const M = R[1]; const V = function (e) { O(!0), M(e); }; const H = (0, l.useCallback)(((e) => { I(!0), y(e); }), []); (0, l.useEffect)((() => { d(u.f$.setSort('id_whopaying')); }), [d]); let X; const P = (0, l.useCallback)(((e) => { d(u.f$.setSort(e)), d(v()); }), [d]); X = f ? (0, i.jsx)(_.O, { height: 250 }) : h ? (0, i.jsx)(k.xv, {
                theme: k.lg.ERROR, size: k.yH.M, weight: k.fs.SEMIBOLD, className: je.error, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : o.length ? (0, i.jsxs)('div', {
 className: (0, m.A)(je.table, (n = {}, n[je.tableWithCheckboxes] = !c, n), []),
children: [(0, i.jsx)('div', {
 className: je.tableHead,
children: (0, i.jsxs)('div', {
 className: je.tableRow,
children: [!c && (0, i.jsx)(ve.X, { className: je.checkbox, id: 'checkbox-fin-sources-all' }), (0, i.jsxs)(E.zx, {
                theme: E.bn.CLEAR, className: (0, m.A)(je.tableCell, {}, [je.tableCellId]), onClick() { P('id_whopaying'); }, children: [(0, i.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'ID финансовой помощи' }), (0, i.jsx)(pe.J, { Svg: b === 'asc' ? be.Z : xe.Z, className: (0, m.A)(je.tableSortIcon, (t = {}, t[je.active] = p === 'id_whopaying', t), []) })], 
}), (0, i.jsxs)(E.zx, {
                theme: E.bn.CLEAR, className: je.tableCell, onClick() { P('whopaying'); }, children: [(0, i.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Наименование' }), (0, i.jsx)(pe.J, { Svg: b === 'asc' ? be.Z : xe.Z, className: (0, m.A)(je.tableSortIcon, (a = {}, a[je.active] = p === 'whopaying', a), []) })], 
}), (0, i.jsx)('div', { className: (0, m.A)(je.tableCell, {}, [je.tableCellBtnsWrapper]) })] 
}) 
}), (0, i.jsx)('div', { className: je.tableBody, children: o == null ? void 0 : o.map(((e) => (0, i.jsxs)('div', { className: je.tableRow, children: [!c && (0, i.jsx)(ve.X, { className: je.checkbox, id: 'checkbox-fin-sources-'.concat(e.id_whopaying) }), (0, i.jsx)('div', { className: (0, m.A)(je.tableCell, {}, [je.tableCellId]), children: (0, i.jsx)(k.xv, { size: k.yH.XS, children: e.id_whopaying }) }), (0, i.jsx)('div', { className: je.tableCell, children: (0, i.jsx)(k.xv, { size: k.yH.XS, children: e.whopaying }) }), (0, i.jsxs)('div', { className: (0, m.A)(je.tableCell, {}, [je.tableCellBtns]), children: [(0, i.jsx)(E.zx, { theme: E.bn.CLEAR, title: 'Просмотр', className: je.editBtn, onClick () { var n; n = e.id_whopaying.toString(), S(!0), M(n) }, children: (0, i.jsx)(pe.J, { Svg: ge.Z }) }), (0, i.jsx)(E.zx, { theme: E.bn.CLEAR, title: 'Редактировать', className: je.editBtn, onClick () { V(e.id_whopaying.toString()) }, children: (0, i.jsx)(pe.J, { Svg: ye.Z }) }), (0, i.jsx)(E.zx, { theme: E.bn.CLEAR, title: 'Удалить', className: je.editBtn, onClick () { H(e) }, children: (0, i.jsx)(pe.J, { Svg: me.Z }) })] })] }, e.id_whopaying))) })] 
}) : (0, i.jsx)(k.xv, { children: 'Ничего не найдено...' }); const Z = ((r = {})[je.error] = !!h, r); return (0, i.jsxs)('div', {
                className: (0, m.A)(je.TableBlock, Z, [s]),
                children: [X, (0, i.jsx)(he, {
                    visible: w, setVisible: S, finSourceId: z, onDeleteFinSource: H, onEditFinSource: V,
                }), (0, i.jsx)(re, {
                    visible: B, setVisible: O, finSourceId: z, onDeleteFinSource: H,
                }), (0, i.jsx)(ce, { finSource: g, visible: D, setVisible: I })],
            });
        }; const Ne = t(7730); const ke = t(7687); const Be = t(5375); const Ce = t(2556); const Fe = { finSourcesSettings: 'zIOdv_9b' }; let Oe = function () { return Oe = Object.assign || function (e) { for (var n, t = 1, i = arguments.length; t < i; t++) for (const a in n = arguments[t])Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]); return e; }, Oe.apply(this, arguments); }; const Ee = {
            finSources: H, addFinSource: y, finSourcesDetail: ee, editFinSource: G,
        }; const Le = function (e) {
            e.className; const n = (0, F.T)(); const t = (0, l.useState)(!1); const c = t[0]; const u = t[1]; const d = (0, C.v9)(z); const p = (0, C.v9)(A); const b = (0, C.v9)(T); const x = (0, C.v9)(h); const g = (0, C.v9)(f); const y = (0, l.useState)(''); const m = y[0]; const j = y[1]; const w = (0, l.useState)(); const S = w[0]; const N = w[1]; const k = (0, l.useCallback)(((e) => { j(e); }), []); const B = (0, l.useCallback)(((e) => { n(V.setLimit(e)), n(v()); }), [n]); const O = (0, l.useCallback)(((e) => { n(V.setPage(e)), n(v()); }), [n]); return (0, l.useEffect)((() => { N((d == null ? void 0 : d.data) || []); }), [d]), (0, l.useEffect)((() => { const e = (0, Ne.Rn)(m, (d == null ? void 0 : d.data) || []); N(e || []); }), [d, m]), (0, l.useEffect)((() => { n(v()); }), [n]), (0, i.jsx)(o.B, {
                title: 'LMS - Финансовая помощь',
                children: (0, i.jsxs)(a.W, {
                    reducers: Ee,
                    removeAfterUnmount: !0,
                    children: [(0, i.jsxs)('div', {
                        className: Fe.FinSourcesPage,
                        children: [(0, i.jsxs)('div', {
                            className: 'page-settings '.concat(!1),
                            children: [(0, i.jsx)(r.o, {
                                value: m, onChange: k, searchText: 'Поиск по наименованию', error: b, isLoading: p,
                            }), (0, i.jsx)(s.X, {
                                onlyAdding: !0, setVisibleAddNewField: u, addingModalText: 'Добавить финансовую помощь', error: b, isLoading: p, references: Ce.x, referencesTitle: 'Справочники', children: (0, i.jsx)(R, { visible: c, setVisible: u }),
                            })],
                        }), (0, i.jsx)(Se, { data: S || [], exportDisabled: !0 }), (0, i.jsxs)('div', {
                            className: 'page-table-settings',
                            children: [(0, i.jsx)(ke.K, {
                                data: S || [], onChange: B, onChangePage: O, paginationData: d == null ? void 0 : d.pagination, itemsLimit: x, withRecords: !0, isLoading: p, error: b,
                            }), (0, i.jsx)(ke.N, {
                                data: S || [], onChange: O, itemsPage: g, isLoading: p, error: b, paginationData: d == null ? void 0 : d.pagination,
                            })],
                        })],
                    }), b && (0, i.jsx)(Be.d, { error: b })],
                }),
            });
        };
    },
}]);
