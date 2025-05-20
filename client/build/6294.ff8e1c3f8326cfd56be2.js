!(function () { try { const e = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; const t = (new Error()).stack; t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = 'a81a62cc-5769-4c9c-81a8-789a47dae2e5', e._sentryDebugIdIdentifier = 'sentry-dbid-a81a62cc-5769-4c9c-81a8-789a47dae2e5'); } catch (e) {} }()); const _global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; _global.SENTRY_RELEASE = { id: '45ee1168f5cf48e9753bace26323152d3b61cb67' }, (self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[6294], {
    9635: (e, t, n) => {
        n.r(t), n.d(t, { default: () => De }); const a = n(5893); const s = n(1150); const i = n(9649); const r = n(5306); const l = n(918); const o = n(7294); const c = n(7168); const u = n(1759); const d = n(121); const f = function (e) { let t; return (t = e.studentClubs) === null || void 0 === t ? void 0 : t.page; }; const h = function (e) { let t; return (t = e.studentClubs) === null || void 0 === t ? void 0 : t.limit; }; const b = (0, c.hg)('students/fetchStudentClubs', ((e, t) => {
            return n = void 0, a = void 0, i = function () {
                let e; let n; let a; let s; let i; let r; return (function (e, t) {
                    let n; let a; let s; let i; let r = {
                        label: 0, sent() { if (1 & s[0]) throw s[1]; return s[1]; }, trys: [], ops: [],
                    }; return i = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, l[0] && (r = 0)), r;) try { if (n = 1, a && (s = 2 & l[0] ? a.return : l[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, l[1])).done) return s; switch (a = 0, s && (l = [2 & l[0], s.value]), l[0]) { case 0: case 1: s = l; break; case 4: return r.label++, { value: l[1], done: !1 }; case 5: r.label++, a = l[1], l = [0]; continue; case 7: l = r.ops.pop(), r.trys.pop(); continue; default: if (!((s = (s = r.trys).length > 0 && s[s.length - 1]) || l[0] !== 6 && l[0] !== 2)) { r = 0; continue; } if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) { r.label = l[1]; break; } if (l[0] === 6 && r.label < s[1]) { r.label = s[1], s = l; break; } if (s && r.label < s[2]) { r.label = s[2], r.ops.push(l); break; }s[2] && r.ops.pop(), r.trys.pop(); continue; }l = t.call(e, r); } catch (e) { l = [6, e], a = 0; } finally { n = s = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                }(this, ((l) => {
                    switch (l.label) {
                    case 0: e = t.rejectWithValue, n = t.extra, a = t.getState, s = {
                        pageSelector: f, limitSelector: h, sortFieldSelector: u.DU, sortOrderSelector: u.Qg,
                    }, i = (0, d.o)('/college/students/clubs', s, a()), l.label = 1; case 1: return l.trys.push([1, 3,, 4]), [4, n.api.get(i)]; case 2: return [2, l.sent().data]; case 3: return (r = l.sent()).message === 'Failed to fetch' ? [2, e({ status: 500, error: 'timeout' })] : [2, e({ status: r.response.status, error: r.response.data.message })]; case 4: return [2];
                    }
                })));
            }, new ((s = void 0) || (s = Promise))(((e, t) => { function r(e) { try { o(i.next(e)); } catch (e) { t(e); } } function l(e) { try { o(i.throw(e)); } catch (e) { t(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof s ? n : new s(((e) => { e(n); }))).then(r, l); }o((i = i.apply(n, a || [])).next()); })); let n; let a; let s; let i;
        })); const v = function (e) { let t; return (t = e.addStudentClub) === null || void 0 === t ? void 0 : t.data.title; }; const p = (0, c.hg)('studentClubs/addStudentClub', ((e, t) => {
            return n = void 0, a = void 0, i = function () {
                let e; let n; let a; let s; let i; let r; let l; let o; return (function (e, t) {
                    let n; let a; let s; let i; let r = {
                        label: 0, sent() { if (1 & s[0]) throw s[1]; return s[1]; }, trys: [], ops: [],
                    }; return i = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, l[0] && (r = 0)), r;) try { if (n = 1, a && (s = 2 & l[0] ? a.return : l[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, l[1])).done) return s; switch (a = 0, s && (l = [2 & l[0], s.value]), l[0]) { case 0: case 1: s = l; break; case 4: return r.label++, { value: l[1], done: !1 }; case 5: r.label++, a = l[1], l = [0]; continue; case 7: l = r.ops.pop(), r.trys.pop(); continue; default: if (!((s = (s = r.trys).length > 0 && s[s.length - 1]) || l[0] !== 6 && l[0] !== 2)) { r = 0; continue; } if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) { r.label = l[1]; break; } if (l[0] === 6 && r.label < s[1]) { r.label = s[1], s = l; break; } if (s && r.label < s[2]) { r.label = s[2], r.ops.push(l); break; }s[2] && r.ops.pop(), r.trys.pop(); continue; }l = t.call(e, r); } catch (e) { l = [6, e], a = 0; } finally { n = s = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                }(this, ((c) => { switch (c.label) { case 0: e = t.rejectWithValue, n = t.extra, a = t.dispatch, s = t.getState, i = v(s()), r = { name: i }, c.label = 1; case 1: return c.trys.push([1, 3,, 4]), [4, n.api.post('/college/students/clubs/', r)]; case 2: return l = c.sent(), a(b()), a(g.clearData()), [2, l.data]; case 3: return o = c.sent(), [2, e({ errors: o.response.data.errors, status: o.response.status })]; case 4: return [2]; } })));
            }, new ((s = void 0) || (s = Promise))(((e, t) => { function r(e) { try { o(i.next(e)); } catch (e) { t(e); } } function l(e) { try { o(i.throw(e)); } catch (e) { t(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof s ? n : new s(((e) => { e(n); }))).then(r, l); }o((i = i.apply(n, a || [])).next()); })); let n; let a; let s; let i;
        })); const x = (0, c.oM)({
            name: 'addStudentClub', initialState: { data: { title: null }, isLoading: !1, errors: void 0 }, reducers: { setTitle(e, t) { e.data.title = t.payload; }, clearData(e) { e.data = { title: null }, e.errors = void 0; } }, extraReducers(e) { e.addCase(p.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(p.fulfilled, ((e) => { e.isLoading = !1; })).addCase(p.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })); },
        }); var g = x.actions; const m = x.reducer; const y = n(4387); const j = n(4475); const w = n(2308); const S = n(5044); const C = n(3280); const N = n(4809); const k = n(1385); const B = n(6458); const O = n(5461); const L = n(530); const D = n(9161); const E = function (e) { let t; return (t = e.addStudentClub) === null || void 0 === t ? void 0 : t.errors; }; const I = {
            tabBtn: 'w4WWUvkW', tabsButtonsBlock: 'GEPNtekV', title: 'XKlcog9V', settings: 'WHqnXDTO', newAddField: 'LjtBnw3_', tabBlock: 'E3Sg3Grr', form: 'JQasHlrO', footerBtn: 'BKqGX8uV', greenBtn: 'txj7VfMg', footer: 'MUpuehOq', message: 'WBuPqvbs', messageIcon: 'tFdyb8L9',
        }; let T = function () { return T = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const s in t = arguments[n])Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]); return e; }, T.apply(this, arguments); }; const z = function (e) {
            const t = e.className; const n = e.visible; const s = e.setVisible; const i = (0, O.T)(); const r = (0, o.useState)(!1); const l = r[0]; const c = r[1]; const u = (0, o.useState)(!1); const d = u[0]; const f = u[1]; const h = (0, o.useState)(); const b = h[0]; const x = h[1]; const m = (0, o.useRef)(null); const z = (0, B.v9)(v); const A = (0, B.v9)(E); const F = (0, o.useCallback)((() => { s(!1); }), [s]); const R = function () { F(), c(!1), f(!1); }; return (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(j.Tk, {
                    className: (0, y.A)(I.AddStudentClub, {}, [t]),
                    visible: n,
                    onClose: F,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, a.jsxs)(j.lx, {
                        className: (0, y.A)(I.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: l,
                        onSubmit(e) {
                            return t = void 0, n = void 0, s = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let a; let s; let i; let r = {
                                        label: 0, sent() { if (1 & s[0]) throw s[1]; return s[1]; }, trys: [], ops: [],
                                    }; return i = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, l[0] && (r = 0)), r;) try { if (n = 1, a && (s = 2 & l[0] ? a.return : l[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, l[1])).done) return s; switch (a = 0, s && (l = [2 & l[0], s.value]), l[0]) { case 0: case 1: s = l; break; case 4: return r.label++, { value: l[1], done: !1 }; case 5: r.label++, a = l[1], l = [0]; continue; case 7: l = r.ops.pop(), r.trys.pop(); continue; default: if (!((s = (s = r.trys).length > 0 && s[s.length - 1]) || l[0] !== 6 && l[0] !== 2)) { r = 0; continue; } if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) { r.label = l[1]; break; } if (l[0] === 6 && r.label < s[1]) { r.label = s[1], s = l; break; } if (s && r.label < s[2]) { r.label = s[2], r.ops.push(l); break; }s[2] && r.ops.pop(), r.trys.pop(); continue; }l = t.call(e, r); } catch (e) { l = [6, e], a = 0; } finally { n = s = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                                }(this, ((a) => { switch (a.label) { case 0: return e.preventDefault(), t = e.currentTarget, f(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), c(!0), t.checkValidity() ? z ? [4, i(p())] : [3, 2] : [3, 3]; case 1: return (n = a.sent()).meta.requestStatus === 'fulfilled' && (x(L.F.success('Студенческий клуб добавлен')), R()), n.meta.requestStatus === 'rejected' && f(!0), [3, 3]; case 2: f(!0), a.label = 3; case 3: return [2]; } })));
                            }, new ((a = void 0) || (a = Promise))(((e, i) => { function r(e) { try { o(s.next(e)); } catch (e) { i(e); } } function l(e) { try { o(s.throw(e)); } catch (e) { i(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(r, l); }o((s = s.apply(t, n || [])).next()); })); let t; let n; let a; let s;
                        },
                        children: [(0, a.jsx)(j.p0, { children: (0, a.jsx)(j.fl, { children: 'Добавление студенческого клуба' }) }), (0, a.jsx)(j.sD, { children: (0, a.jsx)('div', { className: I.tab, children: (0, a.jsx)('div', { className: I.tabBlock, children: (0, a.jsx)('div', { className: I.settings, children: (0, a.jsxs)('div', { className: I.newAddField, children: [(0, a.jsx)('h6', {className: I.newAddFieldTitle, children: "Наименование*"}), (0, a.jsx)(k.h, {
 type: 'text', placeholder: 'танцевальный', feedbackValid: A ? '' : 'Здорово!', invalid: !!A, feedbackInvalid: 'Введите корректные данные!', value: z || '', onChange (e) { i(g.setTitle(e.target.value)) }, required: !0 
})] }) }) }) }) }), (0, a.jsxs)(j.Ym, { className: I.footer, children: [(0, a.jsx)('div', { className: I.message, children: d && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(w.Z, { icon: S.D, customClassName: I.messageIcon }), (0, a.jsx)(N.xv, { size: N.yH.M, weight: N.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, a.jsxs)('div', { className: I.footerBtns, children: [(0, a.jsx)(D.zx, {
 theme: D.bn.OUTLINE, className: I.footerBtn, onClick: R, children: (0, a.jsx)(N.xv, { size: N.yH.XS, weight: N.fs.SEMIBOLD, children: 'Отмена'}) 
}), (0, a.jsxs)(D.zx, { type: 'submit', className: (0, y.A)(I.footerBtn, {}, [I.greenBtn]), children: [(0, a.jsx)(N.xv, { size: N.yH.XS, weight: N.fs.SEMIBOLD, children: 'Добавить'}), (0, a.jsx)(w.Z, { icon: C.q, className: I.btnIcon })] })] })] })],
                    }),
                }), (0, a.jsx)(j.KF, { ref: m, push: b, placement: 'top-end' })],
            });
        }; const A = function (e) { let t; return (t = e.studentClubs) === null || void 0 === t ? void 0 : t.data; }; const F = function (e) { let t; return (t = e.studentClubs) === null || void 0 === t ? void 0 : t.isLoading; }; const R = function (e) { let t; return (t = e.studentClubs) === null || void 0 === t ? void 0 : t.error; }; const M = (0, c.oM)({
            name: 'studentClubs',
            initialState: {
                data: void 0, isLoading: !0, error: void 0, page: '1', limit: '50',
            },
            reducers: { setPage(e, t) { e.page = t.payload; }, setLimit(e, t) { e.limit = t.payload; } },
            extraReducers(e) { e.addCase(b.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(b.fulfilled, ((e, t) => { e.isLoading = !1, e.data = { data: t.payload.data, pagination: t.payload.pagination }; })).addCase(b.rejected, ((e, t) => { e.isLoading = !1, e.error = t.payload; })); },
        }); const V = M.actions; const H = M.reducer; const P = n(1138); const _ = (0, c.hg)('studentClubs/fetchStudentClubDetail', ((e, t) => {
            return n = void 0, a = void 0, i = function () {
                let n; let a; let s; let i; return (function (e, t) {
                    let n; let a; let s; let i; let r = {
                        label: 0, sent() { if (1 & s[0]) throw s[1]; return s[1]; }, trys: [], ops: [],
                    }; return i = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, l[0] && (r = 0)), r;) try { if (n = 1, a && (s = 2 & l[0] ? a.return : l[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, l[1])).done) return s; switch (a = 0, s && (l = [2 & l[0], s.value]), l[0]) { case 0: case 1: s = l; break; case 4: return r.label++, { value: l[1], done: !1 }; case 5: r.label++, a = l[1], l = [0]; continue; case 7: l = r.ops.pop(), r.trys.pop(); continue; default: if (!((s = (s = r.trys).length > 0 && s[s.length - 1]) || l[0] !== 6 && l[0] !== 2)) { r = 0; continue; } if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) { r.label = l[1]; break; } if (l[0] === 6 && r.label < s[1]) { r.label = s[1], s = l; break; } if (s && r.label < s[2]) { r.label = s[2], r.ops.push(l); break; }s[2] && r.ops.pop(), r.trys.pop(); continue; }l = t.call(e, r); } catch (e) { l = [6, e], a = 0; } finally { n = s = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                }(this, ((r) => { switch (r.label) { case 0: n = t.rejectWithValue, a = t.extra, s = t.dispatch, r.label = 1; case 1: return r.trys.push([1, 3,, 4]), [4, a.api.get('/college/students/clubs/'.concat(e))]; case 2: return i = r.sent(), s(q.setStudentClubData(i.data)), [2, i.data]; case 3: return r.sent().message === 'Failed to fetch' ? [2, n('timeout')] : [2, n('ERROR')]; case 4: return [2]; } })));
            }, new ((s = void 0) || (s = Promise))(((e, t) => { function r(e) { try { o(i.next(e)); } catch (e) { t(e); } } function l(e) { try { o(i.throw(e)); } catch (e) { t(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof s ? n : new s(((e) => { e(n); }))).then(r, l); }o((i = i.apply(n, a || [])).next()); })); let n; let a; let s; let i;
        })); const X = function (e) { let t; let n; return (n = (t = e.editStudentClub) === null || void 0 === t ? void 0 : t.newFields) === null || void 0 === n ? void 0 : n.title; }; const Z = (0, c.hg)('studentClubs/editStudentClub', ((e, t) => {
            return n = void 0, a = void 0, i = function () {
                let n; let a; let s; let i; let r; let l; let o; let c; return (function (e, t) {
                    let n; let a; let s; let i; let r = {
                        label: 0, sent() { if (1 & s[0]) throw s[1]; return s[1]; }, trys: [], ops: [],
                    }; return i = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, l[0] && (r = 0)), r;) try { if (n = 1, a && (s = 2 & l[0] ? a.return : l[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, l[1])).done) return s; switch (a = 0, s && (l = [2 & l[0], s.value]), l[0]) { case 0: case 1: s = l; break; case 4: return r.label++, { value: l[1], done: !1 }; case 5: r.label++, a = l[1], l = [0]; continue; case 7: l = r.ops.pop(), r.trys.pop(); continue; default: if (!((s = (s = r.trys).length > 0 && s[s.length - 1]) || l[0] !== 6 && l[0] !== 2)) { r = 0; continue; } if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) { r.label = l[1]; break; } if (l[0] === 6 && r.label < s[1]) { r.label = s[1], s = l; break; } if (s && r.label < s[2]) { r.label = s[2], r.ops.push(l); break; }s[2] && r.ops.pop(), r.trys.pop(); continue; }l = t.call(e, r); } catch (e) { l = [6, e], a = 0; } finally { n = s = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                }(this, ((u) => { switch (u.label) { case 0: n = t.rejectWithValue, a = t.extra, s = t.dispatch, i = t.getState, r = X(i()), l = { name: r }, u.label = 1; case 1: return u.trys.push([1, 3,, 4]), [4, a.api.put('/college/students/clubs/'.concat(e), l)]; case 2: return o = u.sent(), s(b()), s(_(e)), [2, o.data]; case 3: return c = u.sent(), [2, n({ errors: c.response.data.errors, status: c.response.status })]; case 4: return [2]; } })));
            }, new ((s = void 0) || (s = Promise))(((e, t) => { function r(e) { try { o(i.next(e)); } catch (e) { t(e); } } function l(e) { try { o(i.throw(e)); } catch (e) { t(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof s ? n : new s(((e) => { e(n); }))).then(r, l); }o((i = i.apply(n, a || [])).next()); })); let n; let a; let s; let i;
        })); const W = (0, c.oM)({
            name: 'editStudentClub',
            initialState: {
                data: void 0, newFields: void 0, isLoading: !1, errors: void 0,
            },
            reducers: { setStudentClubData(e, t) { t.payload && (e.data = t.payload, e.newFields = { title: e.data.clubs }); }, setTitle(e, t) { e.newFields.title = t.payload; }, clearNewFields(e) { let t; e.newFields = { title: ((t = e.data) === null || void 0 === t ? void 0 : t.clubs) || null }, e.errors = void 0; } },
            extraReducers(e) { e.addCase(Z.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(Z.fulfilled, ((e) => { e.isLoading = !1; })).addCase(Z.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })); },
        }); var q = W.actions; const G = W.reducer; const K = n(1783); const J = n(8263); const U = function (e) { let t; return (t = e.studentClubDetail) === null || void 0 === t ? void 0 : t.error; }; const Y = function (e) { let t; return (t = e.studentClubDetail) === null || void 0 === t ? void 0 : t.isLoading; }; const Q = function (e) { let t; return (t = e.studentClubDetail) === null || void 0 === t ? void 0 : t.data; }; const $ = (0, c.oM)({
            name: 'studentClubDetail', initialState: { data: void 0, isLoading: !1, error: void 0 }, reducers: {}, extraReducers(e) { e.addCase(_.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(_.fulfilled, ((e, t) => { e.isLoading = !1, e.data = t.payload; })).addCase(_.rejected, ((e, t) => { e.isLoading = !1, e.error = t.payload; })); },
        }); const ee = ($.actions, $.reducer); const te = function (e) { let t; return (t = e.editStudentClub) === null || void 0 === t ? void 0 : t.isLoading; }; const ne = function (e) { let t; return (t = e.editStudentClub) === null || void 0 === t ? void 0 : t.errors; }; const ae = {
            tabBtn: 'Fk9MqaiJ', tabsButtonsBlock: 'lTTOv1t9', title: 'bN35euu_', footerBtn: 'KO6IWgu0', greenBtn: 'BSnShYsF', redBtn: 'BynojfOz', settings: 't7Gd7Z6Z', newAddField: 'zP0dra7g', tabBlock: 'xpKDf3mo', form: 'u1y3nm9S', footer: 's_DgJFPs', message: 'uAXlwK7H', messageIcon: 'x1OQhqwV',
        }; let se = function () { return se = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const s in t = arguments[n])Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]); return e; }, se.apply(this, arguments); }; const ie = function (e) {
            const t = e.className; const n = e.visible; const s = e.setVisible; const i = e.studentClubId; const r = e.onDeleteStudentClub; const l = (0, O.T)(); const c = (0, o.useState)(); const u = c[0]; const d = c[1]; const f = (0, o.useRef)(null); const h = (0, o.useState)(!1); const b = h[0]; const v = h[1]; const p = (0, o.useState)(!1); const x = p[0]; const g = p[1]; const m = (0, B.v9)(Q); const C = (0, B.v9)(Y); const E = (0, B.v9)(U); const I = (0, B.v9)(te); const T = (0, B.v9)(X); const z = (0, B.v9)(ne); (0, o.useEffect)((() => { i && l(_(i)); }), [l, i]); let A; const F = function () { s(!1), v(!1), g(!1); }; const R = function () { F(), l(q.clearNewFields()); }; return A = I || C ? (0, a.jsx)(P.O, { width: '100%', height: 80 }) : E ? (0, a.jsx)(N.xv, {
                theme: N.lg.ERROR, size: N.yH.M, weight: N.fs.SEMIBOLD, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, a.jsx)('div', {
                className: ae.tab,
                children: (0, a.jsx)('div', {
                    className: ae.tabBlock,
                    children: (0, a.jsx)('div', {
                        className: ae.settings,
                        children: (0, a.jsxs)('div', {
                            className: ae.newAddField,
                            children: [(0, a.jsx)('h6', { className: ae.newAddFieldTitle, children: 'Наименование' }), (0, a.jsx)(k.h, {
                                type: 'text', placeholder: 'танцевальный', feedbackValid: z ? '' : 'Здорово!', invalid: !!z, feedbackInvalid: 'Введите корректные данные', value: T || '', onChange(e) { l(q.setTitle(e.target.value)); },
                            })],
                        }),
                    }),
                }),
            }), (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(j.Tk, {
                    className: (0, y.A)(ae.EditStudentClub, {}, [t]),
                    visible: n,
                    onClose: F,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, a.jsxs)(j.lx, {
                        className: (0, y.A)(ae.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: b,
                        onSubmit(e) {
                            return t = void 0, n = void 0, s = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let a; let s; let i; let r = {
                                        label: 0, sent() { if (1 & s[0]) throw s[1]; return s[1]; }, trys: [], ops: [],
                                    }; return i = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, l[0] && (r = 0)), r;) try { if (n = 1, a && (s = 2 & l[0] ? a.return : l[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, l[1])).done) return s; switch (a = 0, s && (l = [2 & l[0], s.value]), l[0]) { case 0: case 1: s = l; break; case 4: return r.label++, { value: l[1], done: !1 }; case 5: r.label++, a = l[1], l = [0]; continue; case 7: l = r.ops.pop(), r.trys.pop(); continue; default: if (!((s = (s = r.trys).length > 0 && s[s.length - 1]) || l[0] !== 6 && l[0] !== 2)) { r = 0; continue; } if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) { r.label = l[1]; break; } if (l[0] === 6 && r.label < s[1]) { r.label = s[1], s = l; break; } if (s && r.label < s[2]) { r.label = s[2], r.ops.push(l); break; }s[2] && r.ops.pop(), r.trys.pop(); continue; }l = t.call(e, r); } catch (e) { l = [6, e], a = 0; } finally { n = s = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                                }(this, ((a) => { switch (a.label) { case 0: return e.preventDefault(), t = e.currentTarget, g(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), v(!0), t.checkValidity() ? (m == null ? void 0 : m.clubs) !== T ? [3, 1] : (d(L.F.error('Для сохранения вы должны внести изменения!')), [3, 3]) : [3, 3]; case 1: return [4, l(Z(i))]; case 2: (n = a.sent()).meta.requestStatus === 'fulfilled' && (d(L.F.success('Информация о студенческом клубе успешно обновлена')), R()), n.meta.requestStatus === 'rejected' && g(!0), a.label = 3; case 3: return [2]; } })));
                            }, new ((a = void 0) || (a = Promise))(((e, i) => { function r(e) { try { o(s.next(e)); } catch (e) { i(e); } } function l(e) { try { o(s.throw(e)); } catch (e) { i(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(r, l); }o((s = s.apply(t, n || [])).next()); })); let t; let n; let a; let s;
                        },
                        children: [(0, a.jsx)(j.p0, { children: I || C ? (0, a.jsx)(P.O, { width: 200, height: 30 }) : (0, a.jsxs)(j.fl, { children: ['Изменение студенческого клуба №', m == null ? void 0 : m.id_clubs] }) }), (0, a.jsx)(j.sD, { children: A }), (0, a.jsxs)(j.Ym, {
 className: ae.footer,
children: [(0, a.jsx)('div', { className: ae.message, children: x && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(w.Z, { icon: S.D, customClassName: ae.messageIcon }), (0, a.jsx)(N.xv, { size: N.yH.M, weight: N.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, a.jsxs)('div', {
 className: ae.footerBtns,
children: [(0, a.jsx)(D.zx, {
                            theme: D.bn.OUTLINE, className: ae.footerBtn, onClick: R, children: (0, a.jsx)(N.xv, { size: N.yH.XS, weight: N.fs.SEMIBOLD, children: 'Отмена' }), 
}), (0, a.jsxs)(D.zx, {
                            theme: D.bn.ERROR, className: (0, y.A)(ae.footerBtn, {}, [ae.redBtn]), onClick() { r(m), F(); }, disabled: C || I || !!E, children: [(0, a.jsx)(N.xv, { size: N.yH.XS, weight: N.fs.SEMIBOLD, children: 'Удалить' }), (0, a.jsx)(w.Z, { icon: K.N, className: ae.btnIcon })], 
}), (0, a.jsxs)(D.zx, {
                            type: 'submit', className: (0, y.A)(ae.footerBtn, {}, [ae.greenBtn]), disabled: C || I || !!E, children: [(0, a.jsx)(N.xv, { size: N.yH.XS, weight: N.fs.SEMIBOLD, children: 'Сохранить' }), (0, a.jsx)(w.Z, { icon: J.F, className: ae.btnIcon })], 
})] 
})] 
})],
                    }),
                }), (0, a.jsx)(j.KF, { ref: f, push: u, placement: 'top-end' })],
            });
        }; const re = { footerBtn: 'IapmbgDy', redBtn: 'o6gvtOM3', deleteText: 't1YjAk12' }; const le = (0, c.hg)('studentClubs/deleteStudentClub', ((e, t) => {
            return n = void 0, a = void 0, i = function () {
                let n; let a; let s; let i; return (function (e, t) {
                    let n; let a; let s; let i; let r = {
                        label: 0, sent() { if (1 & s[0]) throw s[1]; return s[1]; }, trys: [], ops: [],
                    }; return i = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, l[0] && (r = 0)), r;) try { if (n = 1, a && (s = 2 & l[0] ? a.return : l[0] ? a.throw || ((s = a.return) && s.call(a), 0) : a.next) && !(s = s.call(a, l[1])).done) return s; switch (a = 0, s && (l = [2 & l[0], s.value]), l[0]) { case 0: case 1: s = l; break; case 4: return r.label++, { value: l[1], done: !1 }; case 5: r.label++, a = l[1], l = [0]; continue; case 7: l = r.ops.pop(), r.trys.pop(); continue; default: if (!((s = (s = r.trys).length > 0 && s[s.length - 1]) || l[0] !== 6 && l[0] !== 2)) { r = 0; continue; } if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) { r.label = l[1]; break; } if (l[0] === 6 && r.label < s[1]) { r.label = s[1], s = l; break; } if (s && r.label < s[2]) { r.label = s[2], r.ops.push(l); break; }s[2] && r.ops.pop(), r.trys.pop(); continue; }l = t.call(e, r); } catch (e) { l = [6, e], a = 0; } finally { n = s = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                }(this, ((r) => { switch (r.label) { case 0: n = t.rejectWithValue, a = t.extra, s = t.dispatch, r.label = 1; case 1: return r.trys.push([1, 3,, 4]), [4, a.api.delete('/college/students/clubs/'.concat(e))]; case 2: return i = r.sent(), s(b()), [2, i.data]; case 3: return r.sent().message === 'Failed to fetch' ? [2, n('timeout')] : [2, n('ERROR')]; case 4: return [2]; } })));
            }, new ((s = void 0) || (s = Promise))(((e, t) => { function r(e) { try { o(i.next(e)); } catch (e) { t(e); } } function l(e) { try { o(i.throw(e)); } catch (e) { t(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof s ? n : new s(((e) => { e(n); }))).then(r, l); }o((i = i.apply(n, a || [])).next()); })); let n; let a; let s; let i;
        })); let oe = function () { return oe = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const s in t = arguments[n])Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]); return e; }, oe.apply(this, arguments); }; const ce = function (e) {
            const t = e.className; const n = e.studentClub; const s = e.visible; const i = e.setVisible; const r = (0, O.T)(); const l = (0, o.useState)(); const c = l[0]; const u = l[1]; const d = (0, o.useRef)(null); const f = (0, o.useState)(!1); const h = f[0]; const b = f[1]; const v = function () { i(!1); }; return (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsxs)(j.Tk, {
                    className: (0, y.A)(re.DeleteStudentClub, {}, [t]),
visible: s,
onClose: v,
size: 'lg',
alignment: 'center',
children: [(0, a.jsx)(j.p0, { children: (0, a.jsxs)(j.fl, { children: ['Удаление студенческого клуба №', n == null ? void 0 : n.id_clubs] }) }), (0, a.jsx)(j.sD, { children: (0, a.jsxs)(N.xv, { size: N.yH.XM, className: re.deleteText, children: ['Вы действительно хотите удалить студенческий клуб', ' ', (0, a.jsxs)('span', { children: ['№', n == null ? void 0 : n.id_clubs, ' ', '-', ' ', '"'.concat(n == null ? void 0 : n.clubs, '"')] }), ' ', 'и все связанные с ним данные?'] }) }), (0, a.jsx)(j.Ym, {
 className: re.footer,
children: (0, a.jsxs)('div', {
 className: re.footerBtns,
children: [(0, a.jsx)(D.zx, {
                        theme: D.bn.OUTLINE, className: re.footerBtn, onClick: v, children: (0, a.jsx)(N.xv, { size: N.yH.XS, weight: N.fs.SEMIBOLD, children: 'Отмена' }), 
}), (0, a.jsxs)(D.zx, {
                        theme: D.bn.ERROR, className: (0, y.A)(re.footerBtn, {}, [re.redBtn]), onClick() { let e; e = n.id_clubs.toString(), b(!0), r(le(e)).then(((e) => { e.meta.requestStatus === 'fulfilled' ? (u(L.F.success('Студенческий клуб №'.concat(n == null ? void 0 : n.id_clubs, ' удален'))), v(), b(!1)) : e.meta.requestStatus === 'rejected' && (u(L.F.error('Произошла ошибка при удалении, попробуйте снова')), b(!1)); })); }, disabled: h, children: [(0, a.jsx)(N.xv, { size: N.yH.XS, weight: N.fs.SEMIBOLD, children: 'Удалить' }), (0, a.jsx)(w.Z, { icon: K.N, className: re.btnIcon })], 
})] 
}) 
})],
                }), (0, a.jsx)(j.KF, { ref: d, push: c, placement: 'top-end' })],
            });
        }; const ue = n(779); const de = {
            'modal-dialog': 'QkyGYms7', tabBtn: 'gdiI8rKP', tabsButtonsBlock: 'prHjZDaU', title: 'Q73mw99M', footerBtn: 'kKESIZw0', redBtn: 'zVV6j5jP', settings: 'o80azFpZ', newAddField: 'Mi8r5a2o', tabBlock: 'hNq2aeVL', footer: 'bHnQsqFP', message: 'vBBpqiJJ', messageIcon: 'ZTVumSWi', checkboxText: 'pc4u1yM4',
        }; let fe = function () { return fe = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const s in t = arguments[n])Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]); return e; }, fe.apply(this, arguments); }; const he = function (e) {
            const t = e.className; const n = e.visible; const s = e.setVisible; const i = e.studentClubId; const r = e.onDeleteStudentClub; const l = e.onEditStudentClub; const c = (0, O.T)(); const u = (0, B.v9)(Q); const d = (0, B.v9)(Y); const f = (0, B.v9)(U); (0, o.useEffect)((() => { i && c(_(i)); }), [c, i]); let h; const b = function () { s(!1); }; return h = d ? (0, a.jsx)(P.O, { width: '100%', height: 120 }) : f ? (0, a.jsx)(N.xv, {
                theme: N.lg.ERROR, size: N.yH.M, weight: N.fs.BOLD, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, a.jsx)('div', { className: de.tab, children: (0, a.jsxs)('div', { className: de.tabBlock, children: [(0, a.jsx)('div', { className: de.settings, children: (0, a.jsxs)('div', { className: de.newAddField, children: [(0, a.jsx)('h6', { className: de.newAddFieldTitle, children: 'ID студенческого клуба' }), (0, a.jsx)(N.xv, { size: N.yH.S, weight: N.fs.BOLD, children: u == null ? void 0 : u.id_clubs })] }) }), (0, a.jsx)('div', { className: de.settings, children: (0, a.jsxs)('div', { className: de.newAddField, children: [(0, a.jsx)('h6', { className: de.newAddFieldTitle, children: 'Наименование' }), (0, a.jsx)(N.xv, { size: N.yH.S, weight: N.fs.BOLD, children: u == null ? void 0 : u.clubs })] }) })] }) }), (0, a.jsxs)(j.Tk, {
                className: (0, y.A)(de.ViewStudentClub, {}, [t, 'view-student-modal']),
visible: n,
onClose: b,
alignment: 'center',
children: [(0, a.jsx)(j.p0, { children: d ? (0, a.jsx)(P.O, { width: 200, height: 30 }) : (0, a.jsxs)(j.fl, { children: ['Студенческий клуб №', u == null ? void 0 : u.id_clubs] }) }), (0, a.jsx)(j.sD, { children: h }), (0, a.jsxs)(j.Ym, {
 className: de.footer,
children: [(0, a.jsx)('div', {}), (0, a.jsxs)('div', {
 className: de.footerBtns,
children: [(0, a.jsx)(D.zx, {
                    theme: D.bn.OUTLINE, className: de.footerBtn, onClick: b, children: (0, a.jsx)(N.xv, { size: N.yH.XS, weight: N.fs.SEMIBOLD, children: 'Закрыть' }), 
}), (0, a.jsxs)(D.zx, {
                    theme: D.bn.ERROR, className: (0, y.A)(de.footerBtn, {}, [de.redBtn]), onClick() { r(u), b(); }, disabled: d || !!f, children: [(0, a.jsx)(N.xv, { size: N.yH.XS, weight: N.fs.SEMIBOLD, children: 'Удалить' }), (0, a.jsx)(w.Z, { icon: K.N, className: de.btnIcon })], 
}), (0, a.jsxs)(D.zx, {
                    color: 'primary', className: de.footerBtn, onClick() { l(i), b(); }, disabled: d || !!f, children: [(0, a.jsx)(N.xv, { size: N.yH.XS, weight: N.fs.SEMIBOLD, children: 'Редактировать' }), (0, a.jsx)(w.Z, { icon: ue.C, className: de.btnIcon })], 
})] 
})] 
})],
            });
        }; const be = n(6837); const ve = n(1353); const pe = n(773); const xe = n(5606); const ge = n(2008); const me = n(596); const ye = n(4164); const je = {
            TableBlock: 'h96oh9Ha', table: 'pKBqDZPD', tableRow: 'mdSnS1Yl', tableCell: 'LuMPZQB2', tableHead: 'Ud5LGpVp', tableCellId: 'a9LWNxVy', tableBody: 'bmhlwXTp', tableSortIcon: 'cJTq2XdM', active: 'uWRWgkkB', cellTextBg: 'vepl96Jq', tableCellBtns: 'OnimLPXC', tableCellBtnsWrapper: 'WYeNKgNO', editBtn: 'YLBSDkdZ', checkbox: 'njdDwWxW', tableWithCheckboxes: 'zNrmdAZa',
        }; let we = function () { return we = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const s in t = arguments[n])Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]); return e; }, we.apply(this, arguments); }; const Se = function (e) {
            let t; let n; let s; let i; const r = e.className; const l = e.data; const c = e.exportDisabled; const d = (0, O.T)(); const f = (0, B.v9)(F); const h = (0, B.v9)(R); const v = (0, B.v9)(u.DU); const p = (0, B.v9)(u.Qg); const x = (0, o.useState)(); const g = x[0]; const m = x[1]; const j = (0, o.useState)(!1); const w = j[0]; const S = j[1]; const C = (0, o.useState)(!1); const k = C[0]; const L = C[1]; const E = (0, o.useState)(!1); const I = E[0]; const T = E[1]; const z = (0, o.useState)(); const A = z[0]; const M = z[1]; const V = function (e) { L(!0), M(e); }; const H = (0, o.useCallback)(((e) => { T(!0), m(e); }), []); (0, o.useEffect)((() => { d(u.f$.setSort('id_clubs')); }), [d]); let _; const X = (0, o.useCallback)(((e) => { d(u.f$.setSort(e)), d(b()); }), [d]); _ = f ? (0, a.jsx)(P.O, { height: 250 }) : h ? (0, a.jsx)(N.xv, {
                theme: N.lg.ERROR, size: N.yH.M, weight: N.fs.SEMIBOLD, className: je.error, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : l.length ? (0, a.jsxs)('div', {
 className: (0, y.A)(je.table, (t = {}, t[je.tableWithCheckboxes] = !c, t), []),
children: [(0, a.jsx)('div', {
 className: je.tableHead,
children: (0, a.jsxs)('div', {
 className: je.tableRow,
children: [!c && (0, a.jsx)(be.X, { className: je.checkbox, id: 'checkbox-student-clubs-all' }), (0, a.jsxs)(D.zx, {
                theme: D.bn.CLEAR, className: (0, y.A)(je.tableCell, {}, [je.tableCellId]), onClick() { X('id_clubs'); }, children: [(0, a.jsx)(N.xv, { size: N.yH.XS, weight: N.fs.SEMIBOLD, children: 'ID клуба' }), (0, a.jsx)(ve.J, { Svg: p === 'asc' ? pe.Z : xe.Z, className: (0, y.A)(je.tableSortIcon, (n = {}, n[je.active] = v === 'id_clubs', n), []) })], 
}), (0, a.jsxs)(D.zx, {
                theme: D.bn.CLEAR, className: je.tableCell, onClick() { X('clubs'); }, children: [(0, a.jsx)(N.xv, { size: N.yH.XS, weight: N.fs.SEMIBOLD, children: 'Наименование' }), (0, a.jsx)(ve.J, { Svg: p === 'asc' ? pe.Z : xe.Z, className: (0, y.A)(je.tableSortIcon, (s = {}, s[je.active] = v === 'clubs', s), []) })], 
}), (0, a.jsx)('div', { className: (0, y.A)(je.tableCell, {}, [je.tableCellBtnsWrapper]) })] 
}) 
}), (0, a.jsx)('div', { className: je.tableBody, children: l == null ? void 0 : l.map(((e) => (0, a.jsxs)('div', { className: je.tableRow, children: [!c && (0, a.jsx)(be.X, { className: je.checkbox, id: 'checkbox-student-clubs-'.concat(e.id_clubs) }), (0, a.jsx)('div', { className: (0, y.A)(je.tableCell, {}, [je.tableCellId]), children: (0, a.jsx)(N.xv, { size: N.yH.XS, children: e.id_clubs }) }), (0, a.jsx)('div', { className: je.tableCell, children: (0, a.jsx)(N.xv, { size: N.yH.XS, children: e.clubs }) }), (0, a.jsxs)('div', { className: (0, y.A)(je.tableCell, {}, [je.tableCellBtns]), children: [(0, a.jsx)(D.zx, { theme: D.bn.CLEAR, title: 'Просмотр', className: je.editBtn, onClick () { var t; t = e.id_clubs.toString(), S(!0), M(t) }, children: (0, a.jsx)(ve.J, { Svg: ge.Z }) }), (0, a.jsx)(D.zx, { theme: D.bn.CLEAR, title: 'Редактировать', className: je.editBtn, onClick () { V(e.id_clubs.toString()) }, children: (0, a.jsx)(ve.J, { Svg: me.Z }) }), (0, a.jsx)(D.zx, { theme: D.bn.CLEAR, title: 'Удалить', className: je.editBtn, onClick () { H(e) }, children: (0, a.jsx)(ve.J, { Svg: ye.Z }) })] })] }, e.id_clubs))) })] 
}) : (0, a.jsx)(N.xv, { children: 'Ничего не найдено...' }); const Z = ((i = {})[je.error] = !!h, i); return (0, a.jsxs)('div', {
                className: (0, y.A)(je.TableBlock, Z, [r]),
                children: [_, (0, a.jsx)(he, {
                    visible: w, setVisible: S, studentClubId: A, onDeleteStudentClub: H, onEditStudentClub: V,
                }), (0, a.jsx)(ie, {
                    visible: k, setVisible: L, studentClubId: A, onDeleteStudentClub: H,
                }), (0, a.jsx)(ce, { studentClub: g, visible: I, setVisible: T })],
            });
        }; const Ce = n(7730); const Ne = n(7687); const ke = n(5375); const Be = n(2556); let Oe = function () { return Oe = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const s in t = arguments[n])Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]); return e; }, Oe.apply(this, arguments); }; const Le = {
            studentClubs: H, addStudentClub: m, studentClubDetail: ee, editStudentClub: G,
        }; const De = function (e) {
            e.className; const t = (0, O.T)(); const n = (0, o.useState)(!1); const c = n[0]; const u = n[1]; const d = (0, B.v9)(A); const v = (0, B.v9)(F); const p = (0, B.v9)(R); const x = (0, B.v9)(h); const g = (0, B.v9)(f); const m = (0, o.useState)(''); const y = m[0]; const j = m[1]; const w = (0, o.useState)(); const S = w[0]; const C = w[1]; const N = (0, o.useCallback)(((e) => { j(e); }), []); const k = (0, o.useCallback)(((e) => { t(V.setLimit(e)), t(b()); }), [t]); const L = (0, o.useCallback)(((e) => { t(V.setPage(e)), t(b()); }), [t]); return (0, o.useEffect)((() => { C((d == null ? void 0 : d.data) || []); }), [d]), (0, o.useEffect)((() => { const e = (0, Ce.tM)(y, (d == null ? void 0 : d.data) || []); C(e || []); }), [d, y]), (0, o.useEffect)((() => { t(b()); }), [t]), (0, a.jsx)(l.B, {
                title: 'LMS - Студенческие клубы',
                children: (0, a.jsxs)(s.W, {
                    reducers: Le,
                    removeAfterUnmount: !0,
                    children: [(0, a.jsxs)('div', {
                        children: [(0, a.jsxs)('div', {
                            className: 'page-settings '.concat(!1),
                            children: [(0, a.jsx)(i.o, {
                                value: y, onChange: N, searchText: 'Поиск по наименованию', error: p, isLoading: v,
                            }), (0, a.jsx)(r.X, {
                                onlyAdding: !0, setVisibleAddNewField: u, addingModalText: 'Добавить студенческий клуб', error: p, isLoading: v, references: Be.x, referencesTitle: 'Справочники', children: (0, a.jsx)(z, { visible: c, setVisible: u }),
                            })],
                        }), (0, a.jsx)(Se, { data: S || [], exportDisabled: !0 }), (0, a.jsxs)('div', {
                            className: 'page-table-settings',
                            children: [(0, a.jsx)(Ne.K, {
                                data: S || [], onChange: k, onChangePage: L, paginationData: d == null ? void 0 : d.pagination, itemsLimit: x, withRecords: !0, isLoading: v, error: p,
                            }), (0, a.jsx)(Ne.N, {
                                data: S || [], onChange: L, itemsPage: g, isLoading: v, error: p, paginationData: d == null ? void 0 : d.pagination,
                            })],
                        })],
                    }), p && (0, a.jsx)(ke.d, { error: p })],
                }),
            });
        };
    },
}]);
