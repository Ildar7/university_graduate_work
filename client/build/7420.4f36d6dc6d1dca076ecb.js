!(function () { try { const e = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; const t = (new Error()).stack; t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = '302ad1d2-8a92-4a8c-93ea-28bd830d2d8a', e._sentryDebugIdIdentifier = 'sentry-dbid-302ad1d2-8a92-4a8c-93ea-28bd830d2d8a'); } catch (e) {} }()); const _global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; _global.SENTRY_RELEASE = { id: '45ee1168f5cf48e9753bace26323152d3b61cb67' }, (self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[7420], {
    2563: (e, t, n) => {
        n.r(t), n.d(t, { default: () => Oe }); const a = n(5893); const r = n(1150); const i = n(9649); const s = n(5306); const c = n(918); const l = n(7294); const o = n(7168); const u = n(1759); const d = n(121); const f = function (e) { let t; return (t = e.practiceTypes) === null || void 0 === t ? void 0 : t.page; }; const h = function (e) { let t; return (t = e.practiceTypes) === null || void 0 === t ? void 0 : t.limit; }; const p = (0, o.hg)('students/fetchPracticeTypes', ((e, t) => {
            return n = void 0, a = void 0, i = function () {
                let e; let n; let a; let r; let i; let s; return (function (e, t) {
                    let n; let a; let r; let i; let s = {
                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                    }; return i = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function c(c) { return function (l) { return (function (c) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, c[0] && (s = 0)), s;) try { if (n = 1, a && (r = 2 & c[0] ? a.return : c[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, c[1])).done) return r; switch (a = 0, r && (c = [2 & c[0], r.value]), c[0]) { case 0: case 1: r = c; break; case 4: return s.label++, { value: c[1], done: !1 }; case 5: s.label++, a = c[1], c = [0]; continue; case 7: c = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || c[0] !== 6 && c[0] !== 2)) { s = 0; continue; } if (c[0] === 3 && (!r || c[1] > r[0] && c[1] < r[3])) { s.label = c[1]; break; } if (c[0] === 6 && s.label < r[1]) { s.label = r[1], r = c; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(c); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }c = t.call(e, s); } catch (e) { c = [6, e], a = 0; } finally { n = r = 0; } if (5 & c[0]) throw c[1]; return { value: c[0] ? c[1] : void 0, done: !0 }; }([c, l])); }; }
                }(this, ((c) => {
                    switch (c.label) {
                    case 0: e = t.rejectWithValue, n = t.extra, a = t.getState, r = {
                        pageSelector: f, limitSelector: h, sortFieldSelector: u.DU, sortOrderSelector: u.Qg,
                    }, i = (0, d.o)('/college/practice-types', r, a()), c.label = 1; case 1: return c.trys.push([1, 3,, 4]), [4, n.api.get(i)]; case 2: return [2, c.sent().data]; case 3: return (s = c.sent()).message === 'Failed to fetch' ? [2, e({ status: 500, error: 'timeout' })] : [2, e({ status: s.response.status, error: s.response.data.message })]; case 4: return [2];
                    }
                })));
            }, new ((r = void 0) || (r = Promise))(((e, t) => { function s(e) { try { l(i.next(e)); } catch (e) { t(e); } } function c(e) { try { l(i.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(s, c); }l((i = i.apply(n, a || [])).next()); })); let n; let a; let r; let i;
        })); const v = function (e) { let t; return (t = e.addPracticeType) === null || void 0 === t ? void 0 : t.data.title; }; const x = (0, o.hg)('practiceTypes/addPracticeType', ((e, t) => {
            return n = void 0, a = void 0, i = function () {
                let e; let n; let a; let r; let i; let s; let c; let l; return (function (e, t) {
                    let n; let a; let r; let i; let s = {
                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                    }; return i = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function c(c) { return function (l) { return (function (c) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, c[0] && (s = 0)), s;) try { if (n = 1, a && (r = 2 & c[0] ? a.return : c[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, c[1])).done) return r; switch (a = 0, r && (c = [2 & c[0], r.value]), c[0]) { case 0: case 1: r = c; break; case 4: return s.label++, { value: c[1], done: !1 }; case 5: s.label++, a = c[1], c = [0]; continue; case 7: c = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || c[0] !== 6 && c[0] !== 2)) { s = 0; continue; } if (c[0] === 3 && (!r || c[1] > r[0] && c[1] < r[3])) { s.label = c[1]; break; } if (c[0] === 6 && s.label < r[1]) { s.label = r[1], r = c; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(c); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }c = t.call(e, s); } catch (e) { c = [6, e], a = 0; } finally { n = r = 0; } if (5 & c[0]) throw c[1]; return { value: c[0] ? c[1] : void 0, done: !0 }; }([c, l])); }; }
                }(this, ((o) => { switch (o.label) { case 0: e = t.rejectWithValue, n = t.extra, a = t.dispatch, r = t.getState, i = v(r()), s = { name: i }, o.label = 1; case 1: return o.trys.push([1, 3,, 4]), [4, n.api.post('/college/practice-types/', s)]; case 2: return c = o.sent(), a(p()), a(g.clearData()), [2, c.data]; case 3: return l = o.sent(), [2, e({ errors: l.response.data.errors, status: l.response.status })]; case 4: return [2]; } })));
            }, new ((r = void 0) || (r = Promise))(((e, t) => { function s(e) { try { l(i.next(e)); } catch (e) { t(e); } } function c(e) { try { l(i.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(s, c); }l((i = i.apply(n, a || [])).next()); })); let n; let a; let r; let i;
        })); const b = (0, o.oM)({
            name: 'addPracticeType', initialState: { data: { title: null }, isLoading: !1, errors: void 0 }, reducers: { setTitle(e, t) { e.data.title = t.payload; }, clearData(e) { e.data = { title: null }, e.errors = void 0; } }, extraReducers(e) { e.addCase(x.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(x.fulfilled, ((e) => { e.isLoading = !1; })).addCase(x.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })); },
        }); var g = b.actions; const y = b.reducer; const m = n(4387); const j = n(4475); const w = n(2308); const S = n(5044); const N = n(3280); const k = n(4809); const T = n(1385); const C = n(6458); const B = n(5461); const O = n(530); const E = n(9161); const L = function (e) { let t; return (t = e.addPracticeType) === null || void 0 === t ? void 0 : t.errors; }; const A = {
            tabBtn: 'fef6O_bD', tabsButtonsBlock: 'm2xfv7uA', title: 'aDXz5IrA', settings: 'tiMb6W8V', newAddField: 'RNrd8dLd', tabBlock: 'RG3s_b6J', form: 'dHRkBW4M', footerBtn: 'g8LHwxvs', greenBtn: 'gjdqaq7b', footer: 'RmoCXpHX', message: 'tMOR3e2z', messageIcon: 'BtOvOKTn',
        }; let D = function () { return D = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, D.apply(this, arguments); }; const R = function (e) {
            const t = e.className; const n = e.visible; const r = e.setVisible; const i = (0, B.T)(); const s = (0, l.useState)(!1); const c = s[0]; const o = s[1]; const u = (0, l.useState)(!1); const d = u[0]; const f = u[1]; const h = (0, l.useState)(); const p = h[0]; const b = h[1]; const y = (0, l.useRef)(null); const R = (0, C.v9)(v); const _ = (0, C.v9)(L); const P = (0, l.useCallback)((() => { r(!1); }), [r]); const I = function () { P(), o(!1), f(!1); }; return (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(j.Tk, {
                    className: (0, m.A)(A.AddPracticeType, {}, [t]),
                    visible: n,
                    onClose: P,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, a.jsxs)(j.lx, {
                        className: (0, m.A)(A.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: c,
                        onSubmit(e) {
                            return t = void 0, n = void 0, r = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let a; let r; let i; let s = {
                                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                                    }; return i = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function c(c) { return function (l) { return (function (c) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, c[0] && (s = 0)), s;) try { if (n = 1, a && (r = 2 & c[0] ? a.return : c[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, c[1])).done) return r; switch (a = 0, r && (c = [2 & c[0], r.value]), c[0]) { case 0: case 1: r = c; break; case 4: return s.label++, { value: c[1], done: !1 }; case 5: s.label++, a = c[1], c = [0]; continue; case 7: c = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || c[0] !== 6 && c[0] !== 2)) { s = 0; continue; } if (c[0] === 3 && (!r || c[1] > r[0] && c[1] < r[3])) { s.label = c[1]; break; } if (c[0] === 6 && s.label < r[1]) { s.label = r[1], r = c; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(c); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }c = t.call(e, s); } catch (e) { c = [6, e], a = 0; } finally { n = r = 0; } if (5 & c[0]) throw c[1]; return { value: c[0] ? c[1] : void 0, done: !0 }; }([c, l])); }; }
                                }(this, ((a) => { switch (a.label) { case 0: return e.preventDefault(), t = e.currentTarget, f(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), o(!0), t.checkValidity() ? R ? [4, i(x())] : [3, 2] : [3, 3]; case 1: return (n = a.sent()).meta.requestStatus === 'fulfilled' && (b(O.F.success('Вид практики добавлен')), I()), n.meta.requestStatus === 'rejected' && f(!0), [3, 3]; case 2: f(!0), a.label = 3; case 3: return [2]; } })));
                            }, new ((a = void 0) || (a = Promise))(((e, i) => { function s(e) { try { l(r.next(e)); } catch (e) { i(e); } } function c(e) { try { l(r.throw(e)); } catch (e) { i(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(s, c); }l((r = r.apply(t, n || [])).next()); })); let t; let n; let a; let r;
                        },
                        children: [(0, a.jsx)(j.p0, { children: (0, a.jsx)(j.fl, { children: 'Добавление вида практики' }) }), (0, a.jsx)(j.sD, { children: (0, a.jsx)('div', { className: A.tab, children: (0, a.jsx)('div', { className: A.tabBlock, children: (0, a.jsx)('div', { className: A.settings, children: (0, a.jsxs)('div', { className: A.newAddField, children: [(0, a.jsx)('h6', {className: A.newAddFieldTitle, children: "Наименование*"}), (0, a.jsx)(T.h, {
 type: 'text', placeholder: 'не проходил', feedbackValid: _ ? '' : 'Здорово!', invalid: !!_, feedbackInvalid: 'Введите корректные данные!', value: R || '', onChange (e) { i(g.setTitle(e.target.value)) }, required: !0 
})] }) }) }) }) }), (0, a.jsxs)(j.Ym, { className: A.footer, children: [(0, a.jsx)('div', { className: A.message, children: d && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(w.Z, { icon: S.D, customClassName: A.messageIcon }), (0, a.jsx)(k.xv, { size: k.yH.M, weight: k.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, a.jsxs)('div', { className: A.footerBtns, children: [(0, a.jsx)(E.zx, {
 theme: E.bn.OUTLINE, className: A.footerBtn, onClick: I, children: (0, a.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Отмена'}) 
}), (0, a.jsxs)(E.zx, { type: 'submit', className: (0, m.A)(A.footerBtn, {}, [A.greenBtn]), children: [(0, a.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Добавить'}), (0, a.jsx)(w.Z, { icon: N.q, className: A.btnIcon })] })] })] })],
                    }),
                }), (0, a.jsx)(j.KF, { ref: y, push: p, placement: 'top-end' })],
            });
        }; const _ = function (e) { let t; return (t = e.practiceTypes) === null || void 0 === t ? void 0 : t.data; }; const P = function (e) { let t; return (t = e.practiceTypes) === null || void 0 === t ? void 0 : t.isLoading; }; const I = function (e) { let t; return (t = e.practiceTypes) === null || void 0 === t ? void 0 : t.error; }; const z = (0, o.oM)({
            name: 'practiceTypes',
            initialState: {
                data: void 0, isLoading: !0, error: void 0, page: '1', limit: '50',
            },
            reducers: { setPage(e, t) { e.page = t.payload; }, setLimit(e, t) { e.limit = t.payload; } },
            extraReducers(e) { e.addCase(p.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(p.fulfilled, ((e, t) => { e.isLoading = !1, e.data = { data: t.payload.data, pagination: t.payload.pagination }; })).addCase(p.rejected, ((e, t) => { e.isLoading = !1, e.error = t.payload; })); },
        }); const F = z.actions; const M = z.reducer; const H = n(1138); const V = (0, o.hg)('practiceTypes/fetchPracticeTypeDetail', ((e, t) => {
            return n = void 0, a = void 0, i = function () {
                let n; let a; let r; let i; return (function (e, t) {
                    let n; let a; let r; let i; let s = {
                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                    }; return i = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function c(c) { return function (l) { return (function (c) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, c[0] && (s = 0)), s;) try { if (n = 1, a && (r = 2 & c[0] ? a.return : c[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, c[1])).done) return r; switch (a = 0, r && (c = [2 & c[0], r.value]), c[0]) { case 0: case 1: r = c; break; case 4: return s.label++, { value: c[1], done: !1 }; case 5: s.label++, a = c[1], c = [0]; continue; case 7: c = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || c[0] !== 6 && c[0] !== 2)) { s = 0; continue; } if (c[0] === 3 && (!r || c[1] > r[0] && c[1] < r[3])) { s.label = c[1]; break; } if (c[0] === 6 && s.label < r[1]) { s.label = r[1], r = c; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(c); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }c = t.call(e, s); } catch (e) { c = [6, e], a = 0; } finally { n = r = 0; } if (5 & c[0]) throw c[1]; return { value: c[0] ? c[1] : void 0, done: !0 }; }([c, l])); }; }
                }(this, ((s) => { switch (s.label) { case 0: n = t.rejectWithValue, a = t.extra, r = t.dispatch, s.label = 1; case 1: return s.trys.push([1, 3,, 4]), [4, a.api.get('/college/practice-types/'.concat(e))]; case 2: return i = s.sent(), r(W.setPracticeTypeData(i.data)), [2, i.data]; case 3: return s.sent().message === 'Failed to fetch' ? [2, n('timeout')] : [2, n('ERROR')]; case 4: return [2]; } })));
            }, new ((r = void 0) || (r = Promise))(((e, t) => { function s(e) { try { l(i.next(e)); } catch (e) { t(e); } } function c(e) { try { l(i.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(s, c); }l((i = i.apply(n, a || [])).next()); })); let n; let a; let r; let i;
        })); const X = function (e) { let t; let n; return (n = (t = e.editPracticeType) === null || void 0 === t ? void 0 : t.newFields) === null || void 0 === n ? void 0 : n.title; }; const Z = (0, o.hg)('practiceTypes/editPracticeType', ((e, t) => {
            return n = void 0, a = void 0, i = function () {
                let n; let a; let r; let i; let s; let c; let l; let o; return (function (e, t) {
                    let n; let a; let r; let i; let s = {
                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                    }; return i = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function c(c) { return function (l) { return (function (c) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, c[0] && (s = 0)), s;) try { if (n = 1, a && (r = 2 & c[0] ? a.return : c[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, c[1])).done) return r; switch (a = 0, r && (c = [2 & c[0], r.value]), c[0]) { case 0: case 1: r = c; break; case 4: return s.label++, { value: c[1], done: !1 }; case 5: s.label++, a = c[1], c = [0]; continue; case 7: c = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || c[0] !== 6 && c[0] !== 2)) { s = 0; continue; } if (c[0] === 3 && (!r || c[1] > r[0] && c[1] < r[3])) { s.label = c[1]; break; } if (c[0] === 6 && s.label < r[1]) { s.label = r[1], r = c; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(c); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }c = t.call(e, s); } catch (e) { c = [6, e], a = 0; } finally { n = r = 0; } if (5 & c[0]) throw c[1]; return { value: c[0] ? c[1] : void 0, done: !0 }; }([c, l])); }; }
                }(this, ((u) => { switch (u.label) { case 0: n = t.rejectWithValue, a = t.extra, r = t.dispatch, i = t.getState, s = X(i()), c = { name: s }, u.label = 1; case 1: return u.trys.push([1, 3,, 4]), [4, a.api.put('/college/practice-types/'.concat(e), c)]; case 2: return l = u.sent(), r(p()), r(V(e)), [2, l.data]; case 3: return o = u.sent(), [2, n({ errors: o.response.data.errors, status: o.response.status })]; case 4: return [2]; } })));
            }, new ((r = void 0) || (r = Promise))(((e, t) => { function s(e) { try { l(i.next(e)); } catch (e) { t(e); } } function c(e) { try { l(i.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(s, c); }l((i = i.apply(n, a || [])).next()); })); let n; let a; let r; let i;
        })); const J = (0, o.oM)({
            name: 'editPracticeType',
            initialState: {
                data: void 0, newFields: void 0, isLoading: !1, errors: void 0,
            },
            reducers: { setPracticeTypeData(e, t) { t.payload && (e.data = t.payload, e.newFields = { title: e.data.practice }); }, setTitle(e, t) { e.newFields.title = t.payload; }, clearNewFields(e) { let t; e.newFields = { title: ((t = e.data) === null || void 0 === t ? void 0 : t.practice) || null }, e.errors = void 0; } },
            extraReducers(e) { e.addCase(Z.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(Z.fulfilled, ((e) => { e.isLoading = !1; })).addCase(Z.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })); },
        }); var W = J.actions; const G = J.reducer; const K = n(1783); const q = n(8263); const U = function (e) { let t; return (t = e.practiceTypeDetail) === null || void 0 === t ? void 0 : t.error; }; const Y = function (e) { let t; return (t = e.practiceTypeDetail) === null || void 0 === t ? void 0 : t.isLoading; }; const Q = function (e) { let t; return (t = e.practiceTypeDetail) === null || void 0 === t ? void 0 : t.data; }; const $ = (0, o.oM)({
            name: 'practiceTypeDetail', initialState: { data: void 0, isLoading: !1, error: void 0 }, reducers: {}, extraReducers(e) { e.addCase(V.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(V.fulfilled, ((e, t) => { e.isLoading = !1, e.data = t.payload; })).addCase(V.rejected, ((e, t) => { e.isLoading = !1, e.error = t.payload; })); },
        }); const ee = ($.actions, $.reducer); const te = function (e) { let t; return (t = e.editPracticeType) === null || void 0 === t ? void 0 : t.isLoading; }; const ne = function (e) { let t; return (t = e.editPracticeType) === null || void 0 === t ? void 0 : t.errors; }; const ae = {
            tabBtn: 'y_CFcV2X', tabsButtonsBlock: 'lyxVjwXa', title: '_EwB3IVP', footerBtn: 'ui_qONKe', greenBtn: 'OSQuF0Kr', redBtn: 'myhK0xGk', settings: 'T2z4eWME', newAddField: 'yPLYrH8f', tabBlock: 'FJcE2gSl', form: 'TcbEW_9u', footer: 'jVPl6e6v', message: 'asCQecnQ', messageIcon: 'cz8AKf9f',
        }; let re = function () { return re = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, re.apply(this, arguments); }; const ie = function (e) {
            const t = e.className; const n = e.visible; const r = e.setVisible; const i = e.practiceTypeId; const s = e.onDeletePracticeType; const c = (0, B.T)(); const o = (0, l.useState)(); const u = o[0]; const d = o[1]; const f = (0, l.useRef)(null); const h = (0, l.useState)(!1); const p = h[0]; const v = h[1]; const x = (0, l.useState)(!1); const b = x[0]; const g = x[1]; const y = (0, C.v9)(Q); const N = (0, C.v9)(Y); const L = (0, C.v9)(U); const A = (0, C.v9)(te); const D = (0, C.v9)(X); const R = (0, C.v9)(ne); (0, l.useEffect)((() => { i && c(V(i)); }), [c, i]); let _; const P = function () { r(!1), v(!1), g(!1); }; const I = function () { P(), c(W.clearNewFields()); }; return _ = A || N ? (0, a.jsx)(H.O, { width: '100%', height: 80 }) : L ? (0, a.jsx)(k.xv, {
                theme: k.lg.ERROR, size: k.yH.M, weight: k.fs.SEMIBOLD, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, a.jsx)('div', {
                className: ae.tab,
                children: (0, a.jsx)('div', {
                    className: ae.tabBlock,
                    children: (0, a.jsx)('div', {
                        className: ae.settings,
                        children: (0, a.jsxs)('div', {
                            className: ae.newAddField,
                            children: [(0, a.jsx)('h6', { className: ae.newAddFieldTitle, children: 'Наименование' }), (0, a.jsx)(T.h, {
                                type: 'text', placeholder: 'не проходил', feedbackValid: R ? '' : 'Здорово!', invalid: !!R, feedbackInvalid: 'Введите корректные данные', value: D || '', onChange(e) { c(W.setTitle(e.target.value)); },
                            })],
                        }),
                    }),
                }),
            }), (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(j.Tk, {
                    className: (0, m.A)(ae.EditPracticeType, {}, [t]),
                    visible: n,
                    onClose: P,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, a.jsxs)(j.lx, {
                        className: (0, m.A)(ae.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: p,
                        onSubmit(e) {
                            return t = void 0, n = void 0, r = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let a; let r; let i; let s = {
                                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                                    }; return i = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function c(c) { return function (l) { return (function (c) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, c[0] && (s = 0)), s;) try { if (n = 1, a && (r = 2 & c[0] ? a.return : c[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, c[1])).done) return r; switch (a = 0, r && (c = [2 & c[0], r.value]), c[0]) { case 0: case 1: r = c; break; case 4: return s.label++, { value: c[1], done: !1 }; case 5: s.label++, a = c[1], c = [0]; continue; case 7: c = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || c[0] !== 6 && c[0] !== 2)) { s = 0; continue; } if (c[0] === 3 && (!r || c[1] > r[0] && c[1] < r[3])) { s.label = c[1]; break; } if (c[0] === 6 && s.label < r[1]) { s.label = r[1], r = c; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(c); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }c = t.call(e, s); } catch (e) { c = [6, e], a = 0; } finally { n = r = 0; } if (5 & c[0]) throw c[1]; return { value: c[0] ? c[1] : void 0, done: !0 }; }([c, l])); }; }
                                }(this, ((a) => { switch (a.label) { case 0: return e.preventDefault(), t = e.currentTarget, g(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), v(!0), t.checkValidity() ? (y == null ? void 0 : y.practice) !== D ? [3, 1] : (d(O.F.error('Для сохранения вы должны внести изменения!')), [3, 3]) : [3, 3]; case 1: return [4, c(Z(i))]; case 2: (n = a.sent()).meta.requestStatus === 'fulfilled' && (d(O.F.success('Информация о виде практики успешно обновлена')), I()), n.meta.requestStatus === 'rejected' && g(!0), a.label = 3; case 3: return [2]; } })));
                            }, new ((a = void 0) || (a = Promise))(((e, i) => { function s(e) { try { l(r.next(e)); } catch (e) { i(e); } } function c(e) { try { l(r.throw(e)); } catch (e) { i(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(s, c); }l((r = r.apply(t, n || [])).next()); })); let t; let n; let a; let r;
                        },
                        children: [(0, a.jsx)(j.p0, { children: A || N ? (0, a.jsx)(H.O, { width: 200, height: 30 }) : (0, a.jsxs)(j.fl, { children: ['Изменение вида практики №', y == null ? void 0 : y.id_practice] }) }), (0, a.jsx)(j.sD, { children: _ }), (0, a.jsxs)(j.Ym, {
 className: ae.footer,
children: [(0, a.jsx)('div', { className: ae.message, children: b && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(w.Z, { icon: S.D, customClassName: ae.messageIcon }), (0, a.jsx)(k.xv, { size: k.yH.M, weight: k.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, a.jsxs)('div', {
 className: ae.footerBtns,
children: [(0, a.jsx)(E.zx, {
                            theme: E.bn.OUTLINE, className: ae.footerBtn, onClick: I, children: (0, a.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Отмена' }), 
}), (0, a.jsxs)(E.zx, {
                            theme: E.bn.ERROR, className: (0, m.A)(ae.footerBtn, {}, [ae.redBtn]), onClick() { s(y), P(); }, disabled: N || A || !!L, children: [(0, a.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Удалить' }), (0, a.jsx)(w.Z, { icon: K.N, className: ae.btnIcon })], 
}), (0, a.jsxs)(E.zx, {
                            type: 'submit', className: (0, m.A)(ae.footerBtn, {}, [ae.greenBtn]), disabled: N || A || !!L, children: [(0, a.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Сохранить' }), (0, a.jsx)(w.Z, { icon: q.F, className: ae.btnIcon })], 
})] 
})] 
})],
                    }),
                }), (0, a.jsx)(j.KF, { ref: f, push: u, placement: 'top-end' })],
            });
        }; const se = { footerBtn: '_4wceOkc', redBtn: 'creaf3LW', deleteText: 'PoAEgejs' }; const ce = (0, o.hg)('practiceTypes/deletePracticeType', ((e, t) => {
            return n = void 0, a = void 0, i = function () {
                let n; let a; let r; let i; return (function (e, t) {
                    let n; let a; let r; let i; let s = {
                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                    }; return i = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function c(c) { return function (l) { return (function (c) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, c[0] && (s = 0)), s;) try { if (n = 1, a && (r = 2 & c[0] ? a.return : c[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, c[1])).done) return r; switch (a = 0, r && (c = [2 & c[0], r.value]), c[0]) { case 0: case 1: r = c; break; case 4: return s.label++, { value: c[1], done: !1 }; case 5: s.label++, a = c[1], c = [0]; continue; case 7: c = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || c[0] !== 6 && c[0] !== 2)) { s = 0; continue; } if (c[0] === 3 && (!r || c[1] > r[0] && c[1] < r[3])) { s.label = c[1]; break; } if (c[0] === 6 && s.label < r[1]) { s.label = r[1], r = c; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(c); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }c = t.call(e, s); } catch (e) { c = [6, e], a = 0; } finally { n = r = 0; } if (5 & c[0]) throw c[1]; return { value: c[0] ? c[1] : void 0, done: !0 }; }([c, l])); }; }
                }(this, ((s) => { switch (s.label) { case 0: n = t.rejectWithValue, a = t.extra, r = t.dispatch, s.label = 1; case 1: return s.trys.push([1, 3,, 4]), [4, a.api.delete('/college/practice-types/'.concat(e))]; case 2: return i = s.sent(), r(p()), [2, i.data]; case 3: return s.sent().message === 'Failed to fetch' ? [2, n('timeout')] : [2, n('ERROR')]; case 4: return [2]; } })));
            }, new ((r = void 0) || (r = Promise))(((e, t) => { function s(e) { try { l(i.next(e)); } catch (e) { t(e); } } function c(e) { try { l(i.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(s, c); }l((i = i.apply(n, a || [])).next()); })); let n; let a; let r; let i;
        })); let le = function () { return le = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, le.apply(this, arguments); }; const oe = function (e) {
            const t = e.className; const n = e.practiceType; const r = e.visible; const i = e.setVisible; const s = (0, B.T)(); const c = (0, l.useState)(); const o = c[0]; const u = c[1]; const d = (0, l.useRef)(null); const f = (0, l.useState)(!1); const h = f[0]; const p = f[1]; const v = function () { i(!1); }; return (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsxs)(j.Tk, {
                    className: (0, m.A)(se.DeletePracticeType, {}, [t]),
visible: r,
onClose: v,
size: 'lg',
alignment: 'center',
children: [(0, a.jsx)(j.p0, { children: (0, a.jsxs)(j.fl, { children: ['Удаление вида практики №', n == null ? void 0 : n.id_practice] }) }), (0, a.jsx)(j.sD, { children: (0, a.jsxs)(k.xv, { size: k.yH.XM, className: se.deleteText, children: ['Вы действительно хотите удалить вид практики', ' ', (0, a.jsxs)('span', { children: ['№', n == null ? void 0 : n.id_practice, ' ', '-', ' ', '"'.concat(n == null ? void 0 : n.practice, '"')] }), ' ', 'и все связанные с ним данные?'] }) }), (0, a.jsx)(j.Ym, {
 className: se.footer,
children: (0, a.jsxs)('div', {
 className: se.footerBtns,
children: [(0, a.jsx)(E.zx, {
                        theme: E.bn.OUTLINE, className: se.footerBtn, onClick: v, children: (0, a.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Отмена' }), 
}), (0, a.jsxs)(E.zx, {
                        theme: E.bn.ERROR, className: (0, m.A)(se.footerBtn, {}, [se.redBtn]), onClick() { let e; e = n.id_practice.toString(), p(!0), s(ce(e)).then(((e) => { e.meta.requestStatus === 'fulfilled' ? (u(O.F.success('Вид практики №'.concat(n == null ? void 0 : n.id_practice, ' удален'))), v(), p(!1)) : e.meta.requestStatus === 'rejected' && (u(O.F.error('Произошла ошибка при удалении, попробуйте снова')), p(!1)); })); }, disabled: h, children: [(0, a.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Удалить' }), (0, a.jsx)(w.Z, { icon: K.N, className: se.btnIcon })], 
})] 
}) 
})],
                }), (0, a.jsx)(j.KF, { ref: d, push: o, placement: 'top-end' })],
            });
        }; const ue = n(779); const de = {
            'modal-dialog': 'vgLmuMnx', tabBtn: 'UBRXBGCS', tabsButtonsBlock: 'DTL1df6B', title: 'l_xPXATr', footerBtn: 'nVer3hWD', redBtn: 'GrlODoej', settings: 'JtieeM_l', newAddField: 'yM1FYIcY', tabBlock: 'CEmIr3Xt', footer: 'uRm1Qyas', message: 'obmSDq85', messageIcon: 'XzDSfS6A', checkboxText: 'eBGWChrb',
        }; let fe = function () { return fe = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, fe.apply(this, arguments); }; const he = function (e) {
            const t = e.className; const n = e.visible; const r = e.setVisible; const i = e.practiceTypeId; const s = e.onDeletePracticeType; const c = e.onEditPracticeType; const o = (0, B.T)(); const u = (0, C.v9)(Q); const d = (0, C.v9)(Y); const f = (0, C.v9)(U); (0, l.useEffect)((() => { i && o(V(i)); }), [o, i]); let h; const p = function () { r(!1); }; return h = d ? (0, a.jsx)(H.O, { width: '100%', height: 120 }) : f ? (0, a.jsx)(k.xv, {
                theme: k.lg.ERROR, size: k.yH.M, weight: k.fs.BOLD, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, a.jsx)('div', { className: de.tab, children: (0, a.jsxs)('div', { className: de.tabBlock, children: [(0, a.jsx)('div', { className: de.settings, children: (0, a.jsxs)('div', { className: de.newAddField, children: [(0, a.jsx)('h6', { className: de.newAddFieldTitle, children: 'ID вида практики' }), (0, a.jsx)(k.xv, { size: k.yH.S, weight: k.fs.BOLD, children: u == null ? void 0 : u.id_practice })] }) }), (0, a.jsx)('div', { className: de.settings, children: (0, a.jsxs)('div', { className: de.newAddField, children: [(0, a.jsx)('h6', { className: de.newAddFieldTitle, children: 'Наименование' }), (0, a.jsx)(k.xv, { size: k.yH.S, weight: k.fs.BOLD, children: u == null ? void 0 : u.practice })] }) })] }) }), (0, a.jsxs)(j.Tk, {
                className: (0, m.A)(de.ViewPracticeType, {}, [t, 'view-student-modal']),
visible: n,
onClose: p,
alignment: 'center',
children: [(0, a.jsx)(j.p0, { children: d ? (0, a.jsx)(H.O, { width: 200, height: 30 }) : (0, a.jsxs)(j.fl, { children: ['Вид практики №', u == null ? void 0 : u.id_practice] }) }), (0, a.jsx)(j.sD, { children: h }), (0, a.jsxs)(j.Ym, {
 className: de.footer,
children: [(0, a.jsx)('div', {}), (0, a.jsxs)('div', {
 className: de.footerBtns,
children: [(0, a.jsx)(E.zx, {
                    theme: E.bn.OUTLINE, className: de.footerBtn, onClick: p, children: (0, a.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Закрыть' }), 
}), (0, a.jsxs)(E.zx, {
                    theme: E.bn.ERROR, className: (0, m.A)(de.footerBtn, {}, [de.redBtn]), onClick() { s(u), p(); }, disabled: d || !!f, children: [(0, a.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Удалить' }), (0, a.jsx)(w.Z, { icon: K.N, className: de.btnIcon })], 
}), (0, a.jsxs)(E.zx, {
                    color: 'primary', className: de.footerBtn, onClick() { c(i), p(); }, disabled: d || !!f, children: [(0, a.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Редактировать' }), (0, a.jsx)(w.Z, { icon: ue.C, className: de.btnIcon })], 
})] 
})] 
})],
            });
        }; const pe = n(6837); const ve = n(1353); const xe = n(773); const be = n(5606); const ge = n(2008); const ye = n(596); const me = n(4164); const je = {
            TableBlock: 'g6mQnXyJ', table: 'Zriv0vEN', tableRow: 'y5rwBG8H', tableCell: 'pc1nJwYn', tableHead: 'dTtJOGt3', tableCellId: '_ZzXyJZg', tableBody: 'ZKYC7fxD', tableSortIcon: 'Jfb3DsSu', active: 'DayaAhfn', cellTextBg: 'qYq3tnxy', tableCellBtns: 'zORSMktS', tableCellBtnsWrapper: 'wKh71WRh', editBtn: 'TxtfVGEI', checkbox: 'itgkyxfG', tableWithCheckboxes: 'kp6ydN88',
        }; let we = function () { return we = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, we.apply(this, arguments); }; const Se = function (e) {
            let t; let n; let r; let i; const s = e.className; const c = e.data; const o = e.exportDisabled; const d = (0, B.T)(); const f = (0, C.v9)(P); const h = (0, C.v9)(I); const v = (0, C.v9)(u.DU); const x = (0, C.v9)(u.Qg); const b = (0, l.useState)(); const g = b[0]; const y = b[1]; const j = (0, l.useState)(!1); const w = j[0]; const S = j[1]; const N = (0, l.useState)(!1); const T = N[0]; const O = N[1]; const L = (0, l.useState)(!1); const A = L[0]; const D = L[1]; const R = (0, l.useState)(); const _ = R[0]; const z = R[1]; const F = function (e) { O(!0), z(e); }; const M = (0, l.useCallback)(((e) => { D(!0), y(e); }), []); (0, l.useEffect)((() => { d(u.f$.setSort('id_practice')); }), [d]); let V; const X = (0, l.useCallback)(((e) => { d(u.f$.setSort(e)), d(p()); }), [d]); V = f ? (0, a.jsx)(H.O, { height: 250 }) : h ? (0, a.jsx)(k.xv, {
                theme: k.lg.ERROR, size: k.yH.M, weight: k.fs.SEMIBOLD, className: je.error, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : c.length ? (0, a.jsxs)('div', {
 className: (0, m.A)(je.table, (t = {}, t[je.tableWithCheckboxes] = !o, t), []),
children: [(0, a.jsx)('div', {
 className: je.tableHead,
children: (0, a.jsxs)('div', {
 className: je.tableRow,
children: [!o && (0, a.jsx)(pe.X, { className: je.checkbox, id: 'checkbox-practice-types-all' }), (0, a.jsxs)(E.zx, {
                theme: E.bn.CLEAR, className: (0, m.A)(je.tableCell, {}, [je.tableCellId]), onClick() { X('id_practice'); }, children: [(0, a.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'ID вида практики' }), (0, a.jsx)(ve.J, { Svg: x === 'asc' ? xe.Z : be.Z, className: (0, m.A)(je.tableSortIcon, (n = {}, n[je.active] = v === 'id_practice', n), []) })], 
}), (0, a.jsxs)(E.zx, {
                theme: E.bn.CLEAR, className: je.tableCell, onClick() { X('practice'); }, children: [(0, a.jsx)(k.xv, { size: k.yH.XS, weight: k.fs.SEMIBOLD, children: 'Наименование' }), (0, a.jsx)(ve.J, { Svg: x === 'asc' ? xe.Z : be.Z, className: (0, m.A)(je.tableSortIcon, (r = {}, r[je.active] = v === 'practice', r), []) })], 
}), (0, a.jsx)('div', { className: (0, m.A)(je.tableCell, {}, [je.tableCellBtnsWrapper]) })] 
}) 
}), (0, a.jsx)('div', { className: je.tableBody, children: c == null ? void 0 : c.map(((e) => (0, a.jsxs)('div', { className: je.tableRow, children: [!o && (0, a.jsx)(pe.X, { className: je.checkbox, id: 'checkbox-practice-types-'.concat(e.id_practice) }), (0, a.jsx)('div', { className: (0, m.A)(je.tableCell, {}, [je.tableCellId]), children: (0, a.jsx)(k.xv, { size: k.yH.XS, children: e.id_practice }) }), (0, a.jsx)('div', { className: je.tableCell, children: (0, a.jsx)(k.xv, { size: k.yH.XS, children: e.practice }) }), (0, a.jsxs)('div', { className: (0, m.A)(je.tableCell, {}, [je.tableCellBtns]), children: [(0, a.jsx)(E.zx, { theme: E.bn.CLEAR, title: 'Просмотр', className: je.editBtn, onClick () { var t; t = e.id_practice.toString(), S(!0), z(t) }, children: (0, a.jsx)(ve.J, { Svg: ge.Z }) }), (0, a.jsx)(E.zx, { theme: E.bn.CLEAR, title: 'Редактировать', className: je.editBtn, onClick () { F(e.id_practice.toString()) }, children: (0, a.jsx)(ve.J, { Svg: ye.Z }) }), (0, a.jsx)(E.zx, { theme: E.bn.CLEAR, title: 'Удалить', className: je.editBtn, onClick () { M(e) }, children: (0, a.jsx)(ve.J, { Svg: me.Z }) })] })] }, e.id_practice))) })] 
}) : (0, a.jsx)(k.xv, { children: 'Ничего не найдено...' }); const Z = ((i = {})[je.error] = !!h, i); return (0, a.jsxs)('div', {
                className: (0, m.A)(je.TableBlock, Z, [s]),
                children: [V, (0, a.jsx)(he, {
                    visible: w, setVisible: S, practiceTypeId: _, onDeletePracticeType: M, onEditPracticeType: F,
                }), (0, a.jsx)(ie, {
                    visible: T, setVisible: O, practiceTypeId: _, onDeletePracticeType: M,
                }), (0, a.jsx)(oe, { practiceType: g, visible: A, setVisible: D })],
            });
        }; const Ne = n(7730); const ke = n(7687); const Te = n(5375); let Ce = function () { return Ce = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, Ce.apply(this, arguments); }; const Be = {
            practiceTypes: M, addPracticeType: y, practiceTypeDetail: ee, editPracticeType: G,
        }; const Oe = function (e) {
            e.className; const t = (0, B.T)(); const n = (0, l.useState)(!1); const o = n[0]; const u = n[1]; const d = (0, C.v9)(_); const v = (0, C.v9)(P); const x = (0, C.v9)(I); const b = (0, C.v9)(h); const g = (0, C.v9)(f); const y = (0, l.useState)(''); const m = y[0]; const j = y[1]; const w = (0, l.useState)(); const S = w[0]; const N = w[1]; const k = (0, l.useCallback)(((e) => { j(e); }), []); const T = (0, l.useCallback)(((e) => { t(F.setLimit(e)), t(p()); }), [t]); const O = (0, l.useCallback)(((e) => { t(F.setPage(e)), t(p()); }), [t]); return (0, l.useEffect)((() => { N((d == null ? void 0 : d.data) || []); }), [d]), (0, l.useEffect)((() => { const e = (0, Ne.zM)(m, (d == null ? void 0 : d.data) || []); N(e || []); }), [d, m]), (0, l.useEffect)((() => { t(p()); }), [t]), (0, a.jsx)(c.B, {
                title: 'LMS - Виды практики',
                children: (0, a.jsxs)(r.W, {
                    reducers: Be,
                    removeAfterUnmount: !0,
                    children: [(0, a.jsxs)('div', {
                        children: [(0, a.jsxs)('div', {
                            className: 'page-settings '.concat(!1),
                            children: [(0, a.jsx)(i.o, {
                                value: m, onChange: k, searchText: 'Поиск по наименованию', error: x, isLoading: v,
                            }), (0, a.jsx)(s.X, {
                                onlyAdding: !0, setVisibleAddNewField: u, addingModalText: 'Добавить вид практики', error: x, isLoading: v, children: (0, a.jsx)(R, { visible: o, setVisible: u }),
                            })],
                        }), (0, a.jsx)(Se, { data: S || [], exportDisabled: !0 }), (0, a.jsxs)('div', {
                            className: 'page-table-settings',
                            children: [(0, a.jsx)(ke.K, {
                                data: S || [], onChange: T, onChangePage: O, paginationData: d == null ? void 0 : d.pagination, itemsLimit: b, withRecords: !0, isLoading: v, error: x,
                            }), (0, a.jsx)(ke.N, {
                                data: S || [], onChange: O, itemsPage: g, isLoading: v, error: x, paginationData: d == null ? void 0 : d.pagination,
                            })],
                        })],
                    }), x && (0, a.jsx)(Te.d, { error: x })],
                }),
            });
        };
    },
    5375: (e, t, n) => { n.d(t, { d: () => l }); const a = n(5893); const r = n(7294); const i = n(530); const s = n(4475); function c(e) { return c = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) { return typeof e; } : function (e) { return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e; }, c(e); } var l = (0, r.memo)(((e) => { const t = e.error; const n = (0, r.useState)(); const l = n[0]; const o = n[1]; const u = (0, r.useRef)(null); return (0, r.useEffect)((() => { (typeof t === 'string' && t === 'timeout' || c(t) === 'object' && t.status === 500 && t.error === 'timeout') && o(i.F.error('Соединение с сервером потеряно')); }), [t]), (0, a.jsx)(s.KF, { ref: u, push: l, placement: 'top-end' }); })); },
    7687: (e, t, n) => {
        n.d(t, { K: () => S, N: () => _ }); let a; const r = n(5893); const i = n(4387); const s = n(7294); const c = ['25', '50', '100', '200', '500']; const l = n(1138); const o = n(4809); const u = n(1353); const d = n(8896); function f() { return f = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const a in n)Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]); } return e; }, f.apply(this, arguments); } const h = function (e) { return s.createElement('svg', f({ width: 20, height: 20, xmlns: 'http://www.w3.org/2000/svg' }, e), a || (a = s.createElement('path', { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M8.565 9.731 5.229 6.396A.79.79 0 0 1 5 5.813a.79.79 0 0 1 .23-.584A.79.79 0 0 1 5.811 5a.79.79 0 0 1 .584.23l3.25 3.25 3.25-3.25a.79.79 0 0 1 .583-.23.79.79 0 0 1 .584.23.79.79 0 0 1 .229.582.79.79 0 0 1-.23.584l-3.33 3.331 3.335 3.335a.79.79 0 0 1 .229.584.79.79 0 0 1-.23.583.79.79 0 0 1-.583.23.79.79 0 0 1-.583-.23l-3.25-3.25-3.25 3.25a.79.79 0 0 1-.583.23.79.79 0 0 1-.584-.23.79.79 0 0 1-.229-.583.79.79 0 0 1 .23-.584l3.33-3.33Z' }))); }; const p = n(9161); const v = n(8863); const x = 'lJhrM3nh'; const b = 'zZgj2JgW'; let g = function () { return g = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, g.apply(this, arguments); }; const y = (0, s.memo)(((e) => {
            let t; const n = e.className; const a = e.items; const c = e.value; const l = e.onChange; const f = (0, s.useState)(c); const y = f[0]; const m = f[1]; const j = (0, s.useState)(!1); const w = j[0]; const S = j[1]; const N = (0, s.useRef)(null); (0, v.p)(N, S); const k = (0, s.useCallback)((() => { S(!0); }), []); const T = (0, s.useCallback)((() => { S(!1); }), []); const C = (0, s.useCallback)(((e) => { l(e), m(e), T(); }), [T, l]); return (0, r.jsxs)('div', {
                className: (0, i.A)('eXu4wq7K', {}, [n]),
                ref: N,
                children: [!w && (0, r.jsxs)(p.zx, {
                    className: 'bAUrWG2D', theme: p.bn.CLEAR, onClick: k, children: [(0, r.jsx)(o.xv, { weight: o.fs.SEMIBOLD, className: x, children: y }), (0, r.jsx)(u.J, { Svg: d.Z })],
                }), (0, r.jsx)('div', {
 className: (0, i.A)('Jh9c6KnL', (t = {}, t.fpG6Af4B = w, t), []),
style: { top: ''.concat(-40 * a.indexOf(y), 'px') },
children: a.map(((e) => (y === e ? (0, r.jsxs)('div', { className: (0, i.A)(b, {}, ['rKHhU8sR']), children: [(0, r.jsx)(o.xv, { weight: o.fs.SEMIBOLD, className: x, children: e }), (0, r.jsx)(p.zx, {
 theme: p.bn.CLEAR, className: 'HkrPDu6E', onClick: T, children: (0, r.jsx)(u.J, { Svg: h }) 
})] }, e) : (0, r.jsx)(p.zx, {
                    theme: p.bn.CLEAR, className: b, size: p.qE.XS, onClick() { C(e); }, children: (0, r.jsx)(o.xv, { weight: o.fs.SEMIBOLD, className: x, children: e }), 
}, e)))) 
})],
            });
        })); const m = {
            LimitShow: 'eQ6pERU2', selectLimit: 'hKaByxY3', limitSelectWrapper: 'XhlPZwOr', recordsText: 'Shn48cNg', textResults: 'MlwyceC_',
        }; let j; let w = function () { return w = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, w.apply(this, arguments); }; var S = (0, s.memo)(((e) => {
            const t = e.className; const n = e.onChange; const a = e.itemsLimit; const s = e.withRecords; const u = e.paginationData; const d = e.isLoading; const f = e.error; const h = e.data; const p = e.onChangePage; const v = (u == null ? void 0 : u.current_page) ? (u.current_page - 1) * Number(a) + 1 : 0; const x = (u == null ? void 0 : u.current_page) ? u.current_page * Number(a) : 0; return d ? (0, r.jsx)(l.O, {
                width: '100%', height: 40, border: '6px', className: m.skeleton,
            }) : f ? (0, r.jsx)('div', {}) : h.length ? (0, r.jsxs)('div', { className: (0, i.A)(m.LimitShow, {}, [t]), children: [s && v && x && (0, r.jsxs)(o.xv, { theme: o.lg.LIGHT, className: m.recordsText, children: ['Записи', ' ', v, ' ', '-', ' ', x, ' ', '| Всего', ' ', u == null ? void 0 : u.total_records] }), (0, r.jsxs)('div', { className: m.limitSelectWrapper, children: [(0, r.jsx)(o.xv, { theme: o.lg.LIGHT, className: m.textResults, children: 'Результатов на странице' }), (0, r.jsx)(y, { items: c, value: a, onChange(e) { n(e), p('1'); } })] })] }) : (0, r.jsx)('div', {});
        })); const N = n(4475); function k() { return k = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const a in n)Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]); } return e; }, k.apply(this, arguments); } const T = function (e) {
            return s.createElement('svg', k({
                width: 30, height: 30, fill: 'none', xmlns: 'http://www.w3.org/2000/svg',
            }, e), j || (j = s.createElement('path', { d: 'M9.514 5.763A1.739 1.739 0 0 0 9 6.994a1.73 1.73 0 0 0 .514 1.231l6.822 6.777-6.822 6.776a1.735 1.735 0 0 0 0 2.462 1.759 1.759 0 0 0 2.48 0l8.07-8.016a1.74 1.74 0 0 0 .514-1.231 1.73 1.73 0 0 0-.514-1.231l-8.07-8.016c-.669-.664-1.794-.664-2.48.017Z', fill: '#EB8247' })));
        }; let C; function B() { return B = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const a in n)Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]); } return e; }, B.apply(this, arguments); } const O = function (e) {
            return s.createElement('svg', B({
                width: 30, height: 30, fill: 'none', xmlns: 'http://www.w3.org/2000/svg',
            }, e), C || (C = s.createElement('path', { d: 'M6.175 8.2a1.875 1.875 0 0 1 2.65-2.65l8.125 8.125a1.875 1.875 0 0 1 0 2.65L8.825 24.45a1.875 1.875 0 0 1-2.65-2.65l6.8-6.8-6.8-6.8Zm18.2 16.8a1.875 1.875 0 0 0 1.875-1.875V6.875a1.875 1.875 0 0 0-3.75 0v16.25c0 1.035.84 1.875 1.875 1.875Z', fill: '#EB8247' })));
        }; const E = 'ytJMbyx3'; const L = 'SRBkd4oW'; const A = '_DUi30wm'; let D = function () { return D = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, D.apply(this, arguments); }; const R = function (e, t, n) { if (n || arguments.length === 2) for (var a, r = 0, i = t.length; r < i; r++)!a && r in t || (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]); return e.concat(a || Array.prototype.slice.call(t)); }; var _ = (0, s.memo)(((e) => {
            const t = e.className; const n = e.data; const a = e.isLoading; const s = e.error; const c = e.paginationData; const o = e.onChange; const d = e.itemsPage; return a ? (0, r.jsx)(l.O, {
                width: 250, height: 40, border: '6px', className: 'nlgg7yYk',
            }) : s || n.length === 0 ? (0, r.jsx)('div', {}) : (0, r.jsx)('div', {
                className: (0, i.A)('AuxB6Ddw', {}, [t]),
                children: (0, r.jsxs)(N.E7, {
                    'aria-label': 'TrainingSchedule pagination',
                    align: 'end',
                    children: [(c == null ? void 0 : c.prev_page) && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(N.tn, { onClick() { o('1'); }, className: (0, i.A)(E, {}, [L]), children: (0, r.jsx)(u.J, { className: 'uBUXyeMF', Svg: O }) }), (0, r.jsx)(N.tn, { onClick() { o(''.concat(+d - 1)); }, className: (0, i.A)(E, {}, [L]), children: (0, r.jsx)(u.J, { className: 'jKQ4PRf5', Svg: T }) })] }), (c == null ? void 0 : c.total_pages) ? (0, r.jsxs)(r.Fragment, {
                        children: [c.total_pages <= 7 && R([], Array(c.total_pages), !0).map(((e, t) => (0, r.jsx)(N.tn, {
                            className: (0, i.A)(E, {}, [A]), active: +d === t + 1, onClick() { o(''.concat(t + 1)); }, children: t + 1,
                        }, t))), c.total_pages > 7 && (0, r.jsxs)(r.Fragment, {
                            children: [R([], Array(c.total_pages), !0).map(((e, t) => {
                                if ((+d === t + 1 || +d + 1 === t + 1 || +d + 2 === t + 1) && +d !== c.total_pages && t + 1 !== c.total_pages && t + 2 !== c.total_pages && t + 3 !== c.total_pages) {
                                    return (0, r.jsx)(N.tn, {
                                        className: (0, i.A)(E, {}, [A]), active: +d === t + 1, onClick() { o(''.concat(t + 1)); }, children: t + 1,
                                    }, t);
                                }
                            })), c.total_pages === +d || c.total_pages - 1 == +d || c.total_pages - 2 == +d || c.total_pages - 2 - +d == 3 || c.total_pages - 2 - +d == 2 || c.total_pages - 2 - +d == 1 ? '' : (0, r.jsx)(N.tn, { className: (0, i.A)(E, {}, [A, 'JQSOdsCs']), onClick() { o(''.concat(+d + 1)); }, children: '...' }), R([], Array(c.total_pages), !0).map(((e, t) => {
                                if (c.total_pages - t + 1 == 4 || c.total_pages - t + 1 == 3 || c.total_pages - t + 1 == 2 || c.total_pages - t + 1 == 1) {
                                    return (0, r.jsx)(N.tn, {
                                        className: (0, i.A)(E, {}, [A]), active: +d === t + 1, onClick() { o(''.concat(t + 1)); }, children: t + 1,
                                    }, t);
                                }
                            }))],
                        })],
                    }) : (0, r.jsx)('div', {}), (c == null ? void 0 : c.next_page) && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(N.tn, { onClick() { o(''.concat(+d + 1)); }, className: (0, i.A)(E, {}, [L]), children: (0, r.jsx)(u.J, { Svg: T }) }), (0, r.jsx)(N.tn, { onClick() { o(''.concat(c == null ? void 0 : c.total_pages)); }, className: (0, i.A)(E, {}, [L]), children: (0, r.jsx)(u.J, { Svg: O }) })] })],
                }),
            });
        }));
    },
}]);
