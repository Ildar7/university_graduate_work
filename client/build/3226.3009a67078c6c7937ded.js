!(function () { try { const e = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; const t = (new Error()).stack; t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = '3c5cb4bc-e941-46d2-953f-3ee3218752e0', e._sentryDebugIdIdentifier = 'sentry-dbid-3c5cb4bc-e941-46d2-953f-3ee3218752e0'); } catch (e) {} }()); const _global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; _global.SENTRY_RELEASE = { id: '45ee1168f5cf48e9753bace26323152d3b61cb67' }, (self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[3226], {
    751: (e, t, n) => {
        n.r(t), n.d(t, { default: () => Fe }); const i = n(5893); const s = n(1150); const a = n(9649); const r = n(5306); const l = n(918); const o = n(7294); const c = n(6458); const d = n(5461); const u = n(7687); const f = n(7168); const h = n(1759); const p = n(121); const v = function (e) { let t; return (t = e.finishedEduTypes) === null || void 0 === t ? void 0 : t.page; }; const b = function (e) { let t; return (t = e.finishedEduTypes) === null || void 0 === t ? void 0 : t.limit; }; const x = (0, f.hg)('students/fetchFinishedEduTypes', ((e, t) => {
            return n = void 0, i = void 0, a = function () {
                let e; let n; let i; let s; let a; let r; return (function (e, t) {
                    let n; let i; let s; let a; let r = {
                        label: 0, sent() { if (1 & s[0]) throw s[1]; return s[1]; }, trys: [], ops: [],
                    }; return a = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, l[0] && (r = 0)), r;) try { if (n = 1, i && (s = 2 & l[0] ? i.return : l[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, l[1])).done) return s; switch (i = 0, s && (l = [2 & l[0], s.value]), l[0]) { case 0: case 1: s = l; break; case 4: return r.label++, { value: l[1], done: !1 }; case 5: r.label++, i = l[1], l = [0]; continue; case 7: l = r.ops.pop(), r.trys.pop(); continue; default: if (!((s = (s = r.trys).length > 0 && s[s.length - 1]) || l[0] !== 6 && l[0] !== 2)) { r = 0; continue; } if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) { r.label = l[1]; break; } if (l[0] === 6 && r.label < s[1]) { r.label = s[1], s = l; break; } if (s && r.label < s[2]) { r.label = s[2], r.ops.push(l); break; }s[2] && r.ops.pop(), r.trys.pop(); continue; }l = t.call(e, r); } catch (e) { l = [6, e], i = 0; } finally { n = s = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                }(this, ((l) => {
                    switch (l.label) {
                    case 0: e = t.rejectWithValue, n = t.extra, i = t.getState, s = {
                        pageSelector: v, limitSelector: b, sortFieldSelector: h.DU, sortOrderSelector: h.Qg,
                    }, a = (0, p.o)('/college/finished-education-types', s, i()), l.label = 1; case 1: return l.trys.push([1, 3,, 4]), [4, n.api.get(a)]; case 2: return [2, l.sent().data]; case 3: return (r = l.sent()).message === 'Failed to fetch' ? [2, e({ status: 500, error: 'timeout' })] : [2, e({ status: r.response.status, error: r.response.data.message })]; case 4: return [2];
                    }
                })));
            }, new ((s = void 0) || (s = Promise))(((e, t) => { function r(e) { try { o(a.next(e)); } catch (e) { t(e); } } function l(e) { try { o(a.throw(e)); } catch (e) { t(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof s ? n : new s(((e) => { e(n); }))).then(r, l); }o((a = a.apply(n, i || [])).next()); })); let n; let i; let s; let a;
        })); const y = n(4387); const m = n(1138); const g = n(4809); const j = n(4475); const w = n(2308); const E = n(1783); const S = n(530); const N = n(9161); const T = { footerBtn: 'bRZQ8eRz', redBtn: 'kuOwYa56', deleteText: 'lP7G8o5y' }; const k = (0, f.hg)('finishedEduTypes/deleteFinishedEduType', ((e, t) => {
            return n = void 0, i = void 0, a = function () {
                let n; let i; let s; let a; return (function (e, t) {
                    let n; let i; let s; let a; let r = {
                        label: 0, sent() { if (1 & s[0]) throw s[1]; return s[1]; }, trys: [], ops: [],
                    }; return a = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, l[0] && (r = 0)), r;) try { if (n = 1, i && (s = 2 & l[0] ? i.return : l[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, l[1])).done) return s; switch (i = 0, s && (l = [2 & l[0], s.value]), l[0]) { case 0: case 1: s = l; break; case 4: return r.label++, { value: l[1], done: !1 }; case 5: r.label++, i = l[1], l = [0]; continue; case 7: l = r.ops.pop(), r.trys.pop(); continue; default: if (!((s = (s = r.trys).length > 0 && s[s.length - 1]) || l[0] !== 6 && l[0] !== 2)) { r = 0; continue; } if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) { r.label = l[1]; break; } if (l[0] === 6 && r.label < s[1]) { r.label = s[1], s = l; break; } if (s && r.label < s[2]) { r.label = s[2], r.ops.push(l); break; }s[2] && r.ops.pop(), r.trys.pop(); continue; }l = t.call(e, r); } catch (e) { l = [6, e], i = 0; } finally { n = s = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                }(this, ((r) => { switch (r.label) { case 0: n = t.rejectWithValue, i = t.extra, s = t.dispatch, r.label = 1; case 1: return r.trys.push([1, 3,, 4]), [4, i.api.delete('/college/finished-education-types/'.concat(e))]; case 2: return a = r.sent(), s(x()), [2, a.data]; case 3: return r.sent().message === 'Failed to fetch' ? [2, n('timeout')] : [2, n('ERROR')]; case 4: return [2]; } })));
            }, new ((s = void 0) || (s = Promise))(((e, t) => { function r(e) { try { o(a.next(e)); } catch (e) { t(e); } } function l(e) { try { o(a.throw(e)); } catch (e) { t(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof s ? n : new s(((e) => { e(n); }))).then(r, l); }o((a = a.apply(n, i || [])).next()); })); let n; let i; let s; let a;
        })); let B = function () { return B = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const s in t = arguments[n])Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]); return e; }, B.apply(this, arguments); }; const C = function (e) {
            const t = e.className; const n = e.finishedEduType; const s = e.visible; const a = e.setVisible; const r = (0, d.T)(); const l = (0, o.useState)(); const c = l[0]; const u = l[1]; const f = (0, o.useRef)(null); const h = (0, o.useState)(!1); const p = h[0]; const v = h[1]; const b = function () { a(!1); }; return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsxs)(j.Tk, {
                    className: (0, y.A)(T.DeleteFinishedEduType, {}, [t]),
visible: s,
onClose: b,
size: 'lg',
alignment: 'center',
children: [(0, i.jsx)(j.p0, { children: (0, i.jsxs)(j.fl, { children: ['Удаление типа окончания обучения №', n == null ? void 0 : n.id_fromacceptedfinished] }) }), (0, i.jsx)(j.sD, { children: (0, i.jsxs)(g.xv, { size: g.yH.XM, className: T.deleteText, children: ['Вы действительно хотите удалить тип окончания обучения', ' ', (0, i.jsxs)('span', { children: ['№', n == null ? void 0 : n.id_fromacceptedfinished, ' ', '-', ' ', '"'.concat(n == null ? void 0 : n.fromacceptedfinished, '"')] }), ' ', 'и все связанные с ним данные?'] }) }), (0, i.jsx)(j.Ym, {
 className: T.footer,
children: (0, i.jsxs)('div', {
 className: T.footerBtns,
children: [(0, i.jsx)(N.zx, {
                        theme: N.bn.OUTLINE, className: T.footerBtn, onClick: b, children: (0, i.jsx)(g.xv, { size: g.yH.XS, weight: g.fs.SEMIBOLD, children: 'Отмена' }), 
}), (0, i.jsxs)(N.zx, {
                        theme: N.bn.ERROR, className: (0, y.A)(T.footerBtn, {}, [T.redBtn]), onClick() { let e; e = n.id_fromacceptedfinished.toString(), v(!0), r(k(e)).then(((e) => { e.meta.requestStatus === 'fulfilled' ? (u(S.F.success('Тип окончания обучения №'.concat(n == null ? void 0 : n.id_fromacceptedfinished, ' удален'))), b(), v(!1)) : e.meta.requestStatus === 'rejected' && (u(S.F.error('Произошла ошибка при удалении, попробуйте снова')), v(!1)); })); }, disabled: p, children: [(0, i.jsx)(g.xv, { size: g.yH.XS, weight: g.fs.SEMIBOLD, children: 'Удалить' }), (0, i.jsx)(w.Z, { icon: E.N, className: T.btnIcon })], 
})] 
}) 
})],
                }), (0, i.jsx)(j.KF, { ref: f, push: c, placement: 'top-end' })],
            });
        }; const F = (0, f.hg)('finishedEduTypes/fetchFinishedEduTypeDetail', ((e, t) => {
            return n = void 0, i = void 0, a = function () {
                let n; let i; let s; let a; return (function (e, t) {
                    let n; let i; let s; let a; let r = {
                        label: 0, sent() { if (1 & s[0]) throw s[1]; return s[1]; }, trys: [], ops: [],
                    }; return a = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, l[0] && (r = 0)), r;) try { if (n = 1, i && (s = 2 & l[0] ? i.return : l[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, l[1])).done) return s; switch (i = 0, s && (l = [2 & l[0], s.value]), l[0]) { case 0: case 1: s = l; break; case 4: return r.label++, { value: l[1], done: !1 }; case 5: r.label++, i = l[1], l = [0]; continue; case 7: l = r.ops.pop(), r.trys.pop(); continue; default: if (!((s = (s = r.trys).length > 0 && s[s.length - 1]) || l[0] !== 6 && l[0] !== 2)) { r = 0; continue; } if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) { r.label = l[1]; break; } if (l[0] === 6 && r.label < s[1]) { r.label = s[1], s = l; break; } if (s && r.label < s[2]) { r.label = s[2], r.ops.push(l); break; }s[2] && r.ops.pop(), r.trys.pop(); continue; }l = t.call(e, r); } catch (e) { l = [6, e], i = 0; } finally { n = s = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                }(this, ((r) => { switch (r.label) { case 0: n = t.rejectWithValue, i = t.extra, s = t.dispatch, r.label = 1; case 1: return r.trys.push([1, 3,, 4]), [4, i.api.get('/college/finished-education-types/'.concat(e))]; case 2: return a = r.sent(), s(I.setFinishedEduTypeData(a.data)), [2, a.data]; case 3: return r.sent().message === 'Failed to fetch' ? [2, n('timeout')] : [2, n('ERROR')]; case 4: return [2]; } })));
            }, new ((s = void 0) || (s = Promise))(((e, t) => { function r(e) { try { o(a.next(e)); } catch (e) { t(e); } } function l(e) { try { o(a.throw(e)); } catch (e) { t(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof s ? n : new s(((e) => { e(n); }))).then(r, l); }o((a = a.apply(n, i || [])).next()); })); let n; let i; let s; let a;
        })); const O = function (e) { let t; let n; return (n = (t = e.editFinishedEduType) === null || void 0 === t ? void 0 : t.newFields) === null || void 0 === n ? void 0 : n.title; }; const D = (0, f.hg)('finishedEduTypes/editFinishedEduType', ((e, t) => {
            return n = void 0, i = void 0, a = function () {
                let n; let i; let s; let a; let r; let l; let o; let c; return (function (e, t) {
                    let n; let i; let s; let a; let r = {
                        label: 0, sent() { if (1 & s[0]) throw s[1]; return s[1]; }, trys: [], ops: [],
                    }; return a = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, l[0] && (r = 0)), r;) try { if (n = 1, i && (s = 2 & l[0] ? i.return : l[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, l[1])).done) return s; switch (i = 0, s && (l = [2 & l[0], s.value]), l[0]) { case 0: case 1: s = l; break; case 4: return r.label++, { value: l[1], done: !1 }; case 5: r.label++, i = l[1], l = [0]; continue; case 7: l = r.ops.pop(), r.trys.pop(); continue; default: if (!((s = (s = r.trys).length > 0 && s[s.length - 1]) || l[0] !== 6 && l[0] !== 2)) { r = 0; continue; } if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) { r.label = l[1]; break; } if (l[0] === 6 && r.label < s[1]) { r.label = s[1], s = l; break; } if (s && r.label < s[2]) { r.label = s[2], r.ops.push(l); break; }s[2] && r.ops.pop(), r.trys.pop(); continue; }l = t.call(e, r); } catch (e) { l = [6, e], i = 0; } finally { n = s = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                }(this, ((d) => { switch (d.label) { case 0: n = t.rejectWithValue, i = t.extra, s = t.dispatch, a = t.getState, r = O(a()), l = { name: r }, d.label = 1; case 1: return d.trys.push([1, 3,, 4]), [4, i.api.put('/college/finished-education-types/'.concat(e), l)]; case 2: return o = d.sent(), s(x()), s(F(e)), [2, o.data]; case 3: return c = d.sent(), [2, n({ errors: c.response.data.errors, status: c.response.status })]; case 4: return [2]; } })));
            }, new ((s = void 0) || (s = Promise))(((e, t) => { function r(e) { try { o(a.next(e)); } catch (e) { t(e); } } function l(e) { try { o(a.throw(e)); } catch (e) { t(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof s ? n : new s(((e) => { e(n); }))).then(r, l); }o((a = a.apply(n, i || [])).next()); })); let n; let i; let s; let a;
        })); const L = (0, f.oM)({
            name: 'editFinishedEduType',
            initialState: {
                data: void 0, newFields: void 0, isLoading: !1, errors: void 0,
            },
            reducers: { setFinishedEduTypeData(e, t) { t.payload && (e.data = t.payload, e.newFields = { title: e.data.fromacceptedfinished }); }, setTitle(e, t) { e.newFields.title = t.payload; }, clearNewFields(e) { let t; e.newFields = { title: ((t = e.data) === null || void 0 === t ? void 0 : t.fromacceptedfinished) || null }, e.errors = void 0; } },
            extraReducers(e) { e.addCase(D.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(D.fulfilled, ((e) => { e.isLoading = !1; })).addCase(D.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })); },
        }); var I = L.actions; const R = L.reducer; const z = n(5044); const A = n(8263); const V = n(1385); const M = function (e) { let t; return (t = e.finishedEduTypesDetail) === null || void 0 === t ? void 0 : t.error; }; const _ = function (e) { let t; return (t = e.finishedEduTypesDetail) === null || void 0 === t ? void 0 : t.isLoading; }; const H = function (e) { let t; return (t = e.finishedEduTypesDetail) === null || void 0 === t ? void 0 : t.data; }; const P = (0, f.oM)({
            name: 'finishedEduTypeDetail', initialState: { data: void 0, isLoading: !1, error: void 0 }, reducers: {}, extraReducers(e) { e.addCase(F.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(F.fulfilled, ((e, t) => { e.isLoading = !1, e.data = t.payload; })).addCase(F.rejected, ((e, t) => { e.isLoading = !1, e.error = t.payload; })); },
        }); const X = (P.actions, P.reducer); const Z = function (e) { let t; return (t = e.editFinishedEduType) === null || void 0 === t ? void 0 : t.isLoading; }; const Y = function (e) { let t; return (t = e.editFinishedEduType) === null || void 0 === t ? void 0 : t.errors; }; const U = {
            tabBtn: 'Oc0sCMeD', tabsButtonsBlock: 'NETMjgYp', title: 'q_RCFC8R', footerBtn: 'gocn_7fY', greenBtn: 'NzcsL9Uu', redBtn: 'Nv83oyLX', settings: 'llUG3yjB', newAddField: 'Sr3UVc46', tabBlock: 'udmG7eUu', form: 'fUii2OaS', footer: 'w6q0YKwp', message: 'dgADjR1S', messageIcon: 'PkO16M4d',
        }; let q = function () { return q = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const s in t = arguments[n])Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]); return e; }, q.apply(this, arguments); }; const G = function (e) {
            const t = e.className; const n = e.visible; const s = e.setVisible; const a = e.finishedEduTypeId; const r = e.onDeleteFinishedEduType; const l = (0, d.T)(); const u = (0, o.useState)(); const f = u[0]; const h = u[1]; const p = (0, o.useRef)(null); const v = (0, o.useState)(!1); const b = v[0]; const x = v[1]; const T = (0, o.useState)(!1); const k = T[0]; const B = T[1]; const C = (0, c.v9)(H); const L = (0, c.v9)(_); const R = (0, c.v9)(M); const P = (0, c.v9)(Z); const X = (0, c.v9)(O); const G = (0, c.v9)(Y); (0, o.useEffect)((() => { a && l(F(a)); }), [l, a]); let W; const J = function () { s(!1), x(!1), B(!1); }; const Q = function () { J(), l(I.clearNewFields()); }; return W = P || L ? (0, i.jsx)(m.O, { width: '100%', height: 80 }) : R ? (0, i.jsx)(g.xv, {
                theme: g.lg.ERROR, size: g.yH.M, weight: g.fs.SEMIBOLD, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, i.jsx)('div', {
                className: U.tab,
                children: (0, i.jsx)('div', {
                    className: U.tabBlock,
                    children: (0, i.jsx)('div', {
                        className: U.settings,
                        children: (0, i.jsxs)('div', {
                            className: U.newAddField,
                            children: [(0, i.jsx)('h6', { className: U.newAddFieldTitle, children: 'Наименование' }), (0, i.jsx)(V.h, {
                                type: 'text', placeholder: 'основную школу', feedbackValid: G ? '' : 'Здорово!', invalid: !!G, feedbackInvalid: 'Введите корректные данные', value: X || '', onChange(e) { l(I.setTitle(e.target.value)); },
                            })], 
})
                    }), 
})
            }), (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(j.Tk, {
                    className: (0, y.A)(U.EditFinishedEduType, {}, [t]),
                    visible: n,
                    onClose: J,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, i.jsxs)(j.lx, {
                        className: (0, y.A)(U.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: b,
                        onSubmit(e) {
                            return t = void 0, n = void 0, s = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let i; let s; let a; let r = {
                                        label: 0, sent() { if (1 & s[0]) throw s[1]; return s[1]; }, trys: [], ops: [],
                                    }; return a = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, l[0] && (r = 0)), r;) try { if (n = 1, i && (s = 2 & l[0] ? i.return : l[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, l[1])).done) return s; switch (i = 0, s && (l = [2 & l[0], s.value]), l[0]) { case 0: case 1: s = l; break; case 4: return r.label++, { value: l[1], done: !1 }; case 5: r.label++, i = l[1], l = [0]; continue; case 7: l = r.ops.pop(), r.trys.pop(); continue; default: if (!((s = (s = r.trys).length > 0 && s[s.length - 1]) || l[0] !== 6 && l[0] !== 2)) { r = 0; continue; } if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) { r.label = l[1]; break; } if (l[0] === 6 && r.label < s[1]) { r.label = s[1], s = l; break; } if (s && r.label < s[2]) { r.label = s[2], r.ops.push(l); break; }s[2] && r.ops.pop(), r.trys.pop(); continue; }l = t.call(e, r); } catch (e) { l = [6, e], i = 0; } finally { n = s = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                                }(this, ((i) => { switch (i.label) { case 0: return e.preventDefault(), t = e.currentTarget, B(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), x(!0), t.checkValidity() ? (C == null ? void 0 : C.id_fromacceptedfinished) !== X ? [3, 1] : (h(S.F.error('Для сохранения вы должны внести изменения!')), [3, 3]) : [3, 3]; case 1: return [4, l(D(a))]; case 2: (n = i.sent()).meta.requestStatus === 'fulfilled' && (h(S.F.success('Информация о типе окончания обучения успешно обновлена')), Q()), n.meta.requestStatus === 'rejected' && B(!0), i.label = 3; case 3: return [2]; } })));
                            }, new ((i = void 0) || (i = Promise))(((e, a) => { function r(e) { try { o(s.next(e)); } catch (e) { a(e); } } function l(e) { try { o(s.throw(e)); } catch (e) { a(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i(((e) => { e(n); }))).then(r, l); }o((s = s.apply(t, n || [])).next()); })); let t; let n; let i; let s;
                        },
                        children: [(0, i.jsx)(j.p0, { children: P || L ? (0, i.jsx)(m.O, { width: 200, height: 30 }) : (0, i.jsxs)(j.fl, { children: ['Изменение типа окончания обучения №', C == null ? void 0 : C.id_fromacceptedfinished] }) }), (0, i.jsx)(j.sD, { children: W }), (0, i.jsxs)(j.Ym, { className: U.footer, children: [(0, i.jsx)('div', { className: U.message, children: k && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(w.Z, { icon: z.D, customClassName: U.messageIcon }), (0, i.jsx)(g.xv, { size: g.yH.M, weight: g.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, i.jsxs)('div', { className: U.footerBtns, children: [(0, i.jsx)(N.zx, {
 theme: N.bn.OUTLINE, className: U.footerBtn, onClick: Q, children: (0, i.jsx)(g.xv, { size: g.yH.XS, weight: g.fs.SEMIBOLD, children: 'Отмена'}) 
}), (0, i.jsxs)(N.zx, {
 theme: N.bn.ERROR, className: (0, y.A)(U.footerBtn, {}, [U.redBtn]), onClick() { r(C), J(); }, disabled: L || P || !!R, children: [(0, i.jsx)(g.xv, { size: g.yH.XS, weight: g.fs.SEMIBOLD, children: 'Удалить'}), (0, i.jsx)(w.Z, { icon: E.N, className: U.btnIcon })] 
}), (0, i.jsxs)(N.zx, {
 type: 'submit', className: (0, y.A)(U.footerBtn, {}, [U.greenBtn]), disabled: L || P || !!R, children: [(0, i.jsx)(g.xv, { size: g.yH.XS, weight: g.fs.SEMIBOLD, children: 'Сохранить'}), (0, i.jsx)(w.Z, { icon: A.F, className: U.btnIcon })] 
})] })] })],
                    }),
                }), (0, i.jsx)(j.KF, { ref: p, push: f, placement: 'top-end' })],
            });
        }; const W = n(779); const J = {
            'modal-dialog': 'V12hN4wy', tabBtn: 'FKpWZqPJ', tabsButtonsBlock: 'b0BeYQo7', title: 'n8Nq0eGP', footerBtn: 'UunFoim4', redBtn: 'ItgsTTeT', settings: 'pVZIpovm', newAddField: 'D9qjlclR', tabBlock: 'OQ_1tnks', footer: 'SuHJppYz', message: 'FCHdjORs', messageIcon: 'hoq421at', checkboxText: 'UJoelSNv',
        }; let Q = function () { return Q = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const s in t = arguments[n])Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]); return e; }, Q.apply(this, arguments); }; const K = function (e) {
            const t = e.className; const n = e.visible; const s = e.setVisible; const a = e.finishedEduTypeId; const r = e.onDeleteFinishedEduType; const l = e.onEditFinishedEduType; const u = (0, d.T)(); const f = (0, c.v9)(H); const h = (0, c.v9)(_); const p = (0, c.v9)(M); (0, o.useEffect)((() => { a && u(F(a)); }), [u, a]); let v; const b = function () { s(!1); }; return v = h ? (0, i.jsx)(m.O, { width: '100%', height: 120 }) : p ? (0, i.jsx)(g.xv, {
                theme: g.lg.ERROR, size: g.yH.M, weight: g.fs.BOLD, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, i.jsx)('div', { className: J.tab, children: (0, i.jsxs)('div', { className: J.tabBlock, children: [(0, i.jsx)('div', { className: J.settings, children: (0, i.jsxs)('div', { className: J.newAddField, children: [(0, i.jsx)('h6', { className: J.newAddFieldTitle, children: 'ID типа окончания обучения' }), (0, i.jsx)(g.xv, { size: g.yH.S, weight: g.fs.BOLD, children: f == null ? void 0 : f.id_fromacceptedfinished })] }) }), (0, i.jsx)('div', { className: J.settings, children: (0, i.jsxs)('div', { className: J.newAddField, children: [(0, i.jsx)('h6', { className: J.newAddFieldTitle, children: 'Наименование' }), (0, i.jsx)(g.xv, { size: g.yH.S, weight: g.fs.BOLD, children: f == null ? void 0 : f.fromacceptedfinished })] }) })] }) }), (0, i.jsxs)(j.Tk, {
                className: (0, y.A)(J.ViewFinishedEduType, {}, [t, 'view-student-modal']),
visible: n,
onClose: b,
alignment: 'center',
children: [(0, i.jsx)(j.p0, { children: h ? (0, i.jsx)(m.O, { width: 200, height: 30 }) : (0, i.jsxs)(j.fl, { children: ['Тип окончания обучения №', f == null ? void 0 : f.id_fromacceptedfinished] }) }), (0, i.jsx)(j.sD, { children: v }), (0, i.jsxs)(j.Ym, {
 className: J.footer,
children: [(0, i.jsx)('div', {}), (0, i.jsxs)('div', {
 className: J.footerBtns,
children: [(0, i.jsx)(N.zx, {
                    theme: N.bn.OUTLINE, className: J.footerBtn, onClick: b, children: (0, i.jsx)(g.xv, { size: g.yH.XS, weight: g.fs.SEMIBOLD, children: 'Закрыть' }), 
}), (0, i.jsxs)(N.zx, {
                    theme: N.bn.ERROR, className: (0, y.A)(J.footerBtn, {}, [J.redBtn]), onClick() { r(f), b(); }, disabled: h || !!p, children: [(0, i.jsx)(g.xv, { size: g.yH.XS, weight: g.fs.SEMIBOLD, children: 'Удалить' }), (0, i.jsx)(w.Z, { icon: E.N, className: J.btnIcon })], 
}), (0, i.jsxs)(N.zx, {
                    color: 'primary', className: J.footerBtn, onClick() { l(a), b(); }, disabled: h || !!p, children: [(0, i.jsx)(g.xv, { size: g.yH.XS, weight: g.fs.SEMIBOLD, children: 'Редактировать' }), (0, i.jsx)(w.Z, { icon: W.C, className: J.btnIcon })], 
})] 
})] 
})],
            });
        }; const $ = n(6837); const ee = n(1353); const te = n(773); const ne = n(5606); const ie = n(2008); const se = n(596); const ae = n(4164); const re = function (e) { let t; return (t = e.finishedEduTypes) === null || void 0 === t ? void 0 : t.error; }; const le = function (e) { let t; return (t = e.finishedEduTypes) === null || void 0 === t ? void 0 : t.isLoading; }; const oe = {
            TableBlock: 'rzP5_Jim', table: 'p8ElzxsB', tableRow: 'KYxbYGAV', tableCell: 'R9l4Qhyo', tableHead: 'cp1z695t', tableCellId: 'BxztXf_L', tableBody: 'xGj0vzeT', tableSortIcon: 'BtuxXU7h', active: 'rb7sDgGa', cellTextBg: 'KjBclMku', tableCellBtns: 'Dhp50QQA', tableCellBtnsWrapper: 'WfQ_7CEe', editBtn: 'ZnYJB7XP', checkbox: 'cewYfQX_', tableWithCheckboxes: 'IxgSf5jx',
        }; let ce = function () { return ce = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const s in t = arguments[n])Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]); return e; }, ce.apply(this, arguments); }; const de = function (e) {
            let t; let n; let s; let a; const r = e.className; const l = e.data; const u = e.exportDisabled; const f = (0, d.T)(); const p = (0, c.v9)(le); const v = (0, c.v9)(re); const b = (0, c.v9)(h.DU); const j = (0, c.v9)(h.Qg); const w = (0, o.useState)(); const E = w[0]; const S = w[1]; const T = (0, o.useState)(!1); const k = T[0]; const B = T[1]; const F = (0, o.useState)(!1); const O = F[0]; const D = F[1]; const L = (0, o.useState)(!1); const I = L[0]; const R = L[1]; const z = (0, o.useState)(); const A = z[0]; const V = z[1]; const M = function (e) { D(!0), V(e); }; const _ = (0, o.useCallback)(((e) => { R(!0), S(e); }), []); (0, o.useEffect)((() => { f(h.f$.setSort('id_fromacceptedfinished')); }), [f]); let H; const P = (0, o.useCallback)(((e) => { f(h.f$.setSort(e)), f(x()); }), [f]); H = p ? (0, i.jsx)(m.O, { height: 250 }) : v ? (0, i.jsx)(g.xv, {
                theme: g.lg.ERROR, size: g.yH.M, weight: g.fs.SEMIBOLD, className: oe.error, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : l.length ? (0, i.jsxs)('div', {
 className: (0, y.A)(oe.table, (t = {}, t[oe.tableWithCheckboxes] = !u, t), []),
children: [(0, i.jsx)('div', {
 className: oe.tableHead,
children: (0, i.jsxs)('div', {
 className: oe.tableRow,
children: [!u && (0, i.jsx)($.X, { className: oe.checkbox, id: 'checkbox-finished-edu-types-all' }), (0, i.jsxs)(N.zx, {
                theme: N.bn.CLEAR, className: (0, y.A)(oe.tableCell, {}, [oe.tableCellId]), onClick() { P('id_fromacceptedfinished'); }, children: [(0, i.jsx)(g.xv, { size: g.yH.XS, weight: g.fs.SEMIBOLD, children: 'ID типа окончания обучения' }), (0, i.jsx)(ee.J, { Svg: j === 'asc' ? te.Z : ne.Z, className: (0, y.A)(oe.tableSortIcon, (n = {}, n[oe.active] = b === 'id_fromacceptedfinished', n), []) })], 
}), (0, i.jsxs)(N.zx, {
                theme: N.bn.CLEAR, className: oe.tableCell, onClick() { P('fromacceptedfinished'); }, children: [(0, i.jsx)(g.xv, { size: g.yH.XS, weight: g.fs.SEMIBOLD, children: 'Наименование' }), (0, i.jsx)(ee.J, { Svg: j === 'asc' ? te.Z : ne.Z, className: (0, y.A)(oe.tableSortIcon, (s = {}, s[oe.active] = b === 'fromacceptedfinished', s), []) })], 
}), (0, i.jsx)('div', { className: (0, y.A)(oe.tableCell, {}, [oe.tableCellBtnsWrapper]) })] 
}) 
}), (0, i.jsx)('div', { className: oe.tableBody, children: l == null ? void 0 : l.map(((e) => (0, i.jsxs)('div', { className: oe.tableRow, children: [!u && (0, i.jsx)($.X, { className: oe.checkbox, id: 'checkbox-finished-edu-types-'.concat(e.id_fromacceptedfinished) }), (0, i.jsx)('div', { className: (0, y.A)(oe.tableCell, {}, [oe.tableCellId]), children: (0, i.jsx)(g.xv, { size: g.yH.XS, children: e.id_fromacceptedfinished }) }), (0, i.jsx)('div', { className: oe.tableCell, children: (0, i.jsx)(g.xv, { size: g.yH.XS, children: e.fromacceptedfinished }) }), (0, i.jsxs)('div', { className: (0, y.A)(oe.tableCell, {}, [oe.tableCellBtns]), children: [(0, i.jsx)(N.zx, { theme: N.bn.CLEAR, title: 'Просмотр', className: oe.editBtn, onClick () { var t; t = e.id_fromacceptedfinished.toString(), B(!0), V(t) }, children: (0, i.jsx)(ee.J, { Svg: ie.Z }) }), (0, i.jsx)(N.zx, { theme: N.bn.CLEAR, title: 'Редактировать', className: oe.editBtn, onClick () { M(e.id_fromacceptedfinished.toString()) }, children: (0, i.jsx)(ee.J, { Svg: se.Z }) }), (0, i.jsx)(N.zx, { theme: N.bn.CLEAR, title: 'Удалить', className: oe.editBtn, onClick () { _(e) }, children: (0, i.jsx)(ee.J, { Svg: ae.Z }) })] })] }, e.id_fromacceptedfinished))) })] 
}) : (0, i.jsx)(g.xv, { children: 'Ничего не найдено...' }); const X = ((a = {})[oe.error] = !!v, a); return (0, i.jsxs)('div', {
                className: (0, y.A)(oe.TableBlock, X, [r]),
                children: [H, (0, i.jsx)(K, {
                    visible: k, setVisible: B, finishedEduTypeId: A, onDeleteFinishedEduType: _, onEditFinishedEduType: M,
                }), (0, i.jsx)(G, {
                    visible: O, setVisible: D, finishedEduTypeId: A, onDeleteFinishedEduType: _,
                }), (0, i.jsx)(C, { finishedEduType: E, visible: I, setVisible: R })],
            });
        }; const ue = function (e) { let t; return (t = e.finishedEduTypes) === null || void 0 === t ? void 0 : t.data; }; const fe = (0, f.oM)({
            name: 'finishedEduTypes',
            initialState: {
                data: void 0, isLoading: !0, error: void 0, page: '1', limit: '50',
            },
            reducers: { setPage(e, t) { e.page = t.payload; }, setLimit(e, t) { e.limit = t.payload; } },
            extraReducers(e) { e.addCase(x.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(x.fulfilled, ((e, t) => { e.isLoading = !1, e.data = { data: t.payload.data, pagination: t.payload.pagination }; })).addCase(x.rejected, ((e, t) => { e.isLoading = !1, e.error = t.payload; })); },
        }); const he = fe.actions; const pe = fe.reducer; const ve = n(7730); const be = function (e) { let t; return (t = e.addFinishedEduType) === null || void 0 === t ? void 0 : t.data.title; }; const xe = (0, f.hg)('finishedEduTypes/addFinishedEduType', ((e, t) => {
            return n = void 0, i = void 0, a = function () {
                let e; let n; let i; let s; let a; let r; let l; let o; return (function (e, t) {
                    let n; let i; let s; let a; let r = {
                        label: 0, sent() { if (1 & s[0]) throw s[1]; return s[1]; }, trys: [], ops: [],
                    }; return a = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, l[0] && (r = 0)), r;) try { if (n = 1, i && (s = 2 & l[0] ? i.return : l[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, l[1])).done) return s; switch (i = 0, s && (l = [2 & l[0], s.value]), l[0]) { case 0: case 1: s = l; break; case 4: return r.label++, { value: l[1], done: !1 }; case 5: r.label++, i = l[1], l = [0]; continue; case 7: l = r.ops.pop(), r.trys.pop(); continue; default: if (!((s = (s = r.trys).length > 0 && s[s.length - 1]) || l[0] !== 6 && l[0] !== 2)) { r = 0; continue; } if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) { r.label = l[1]; break; } if (l[0] === 6 && r.label < s[1]) { r.label = s[1], s = l; break; } if (s && r.label < s[2]) { r.label = s[2], r.ops.push(l); break; }s[2] && r.ops.pop(), r.trys.pop(); continue; }l = t.call(e, r); } catch (e) { l = [6, e], i = 0; } finally { n = s = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                }(this, ((c) => { switch (c.label) { case 0: e = t.rejectWithValue, n = t.extra, i = t.dispatch, s = t.getState, a = be(s()), r = { name: a }, c.label = 1; case 1: return c.trys.push([1, 3,, 4]), [4, n.api.post('/college/finished-education-types/', r)]; case 2: return l = c.sent(), i(x()), i(me.clearData()), [2, l.data]; case 3: return o = c.sent(), [2, e({ errors: o.response.data.errors, status: o.response.status })]; case 4: return [2]; } })));
            }, new ((s = void 0) || (s = Promise))(((e, t) => { function r(e) { try { o(a.next(e)); } catch (e) { t(e); } } function l(e) { try { o(a.throw(e)); } catch (e) { t(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof s ? n : new s(((e) => { e(n); }))).then(r, l); }o((a = a.apply(n, i || [])).next()); })); let n; let i; let s; let a;
        })); const ye = (0, f.oM)({
            name: 'addFinishedEduType', initialState: { data: { title: null }, isLoading: !1, errors: void 0 }, reducers: { setTitle(e, t) { e.data.title = t.payload; }, clearData(e) { e.data = { title: null }, e.errors = void 0; } }, extraReducers(e) { e.addCase(xe.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(xe.fulfilled, ((e) => { e.isLoading = !1; })).addCase(xe.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })); },
        }); var me = ye.actions; const ge = ye.reducer; const je = n(3280); const we = function (e) { let t; return (t = e.addFinishedEduType) === null || void 0 === t ? void 0 : t.errors; }; const Ee = {
            tabBtn: 'pVbkDygP', tabsButtonsBlock: 'zYqspU9B', title: 'dQmhyPXo', settings: 'VF5vh3W2', newAddField: 'CJXLZa45', tabBlock: 'Gfbru9aR', form: 'kYl8ExB1', footerBtn: 'KYvKsZL1', greenBtn: 'cOjeUhm3', footer: 'c1IEajSN', message: 'DAaEV44Z', messageIcon: 'BAf6Y24V',
        }; let Se = function () { return Se = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const s in t = arguments[n])Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]); return e; }, Se.apply(this, arguments); }; const Ne = function (e) {
            const t = e.className; const n = e.visible; const s = e.setVisible; const a = (0, d.T)(); const r = (0, o.useState)(!1); const l = r[0]; const u = r[1]; const f = (0, o.useState)(!1); const h = f[0]; const p = f[1]; const v = (0, o.useState)(); const b = v[0]; const x = v[1]; const m = (0, o.useRef)(null); const E = (0, c.v9)(be); const T = (0, c.v9)(we); const k = (0, o.useCallback)((() => { s(!1); }), [s]); const B = function () { k(), u(!1), p(!1); }; return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(j.Tk, {
                    className: (0, y.A)(Ee.AddFinishedEduType, {}, [t]),
                    visible: n,
                    onClose: k,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, i.jsxs)(j.lx, {
                        className: (0, y.A)(Ee.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: l,
                        onSubmit(e) {
                            return t = void 0, n = void 0, s = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let i; let s; let a; let r = {
                                        label: 0, sent() { if (1 & s[0]) throw s[1]; return s[1]; }, trys: [], ops: [],
                                    }; return a = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, l[0] && (r = 0)), r;) try { if (n = 1, i && (s = 2 & l[0] ? i.return : l[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, l[1])).done) return s; switch (i = 0, s && (l = [2 & l[0], s.value]), l[0]) { case 0: case 1: s = l; break; case 4: return r.label++, { value: l[1], done: !1 }; case 5: r.label++, i = l[1], l = [0]; continue; case 7: l = r.ops.pop(), r.trys.pop(); continue; default: if (!((s = (s = r.trys).length > 0 && s[s.length - 1]) || l[0] !== 6 && l[0] !== 2)) { r = 0; continue; } if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) { r.label = l[1]; break; } if (l[0] === 6 && r.label < s[1]) { r.label = s[1], s = l; break; } if (s && r.label < s[2]) { r.label = s[2], r.ops.push(l); break; }s[2] && r.ops.pop(), r.trys.pop(); continue; }l = t.call(e, r); } catch (e) { l = [6, e], i = 0; } finally { n = s = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                                }(this, ((i) => { switch (i.label) { case 0: return e.preventDefault(), t = e.currentTarget, p(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), u(!0), t.checkValidity() ? E ? [4, a(xe())] : [3, 2] : [3, 3]; case 1: return (n = i.sent()).meta.requestStatus === 'fulfilled' && (x(S.F.success('Тип окончания обучения добавлен')), B()), n.meta.requestStatus === 'rejected' && p(!0), [3, 3]; case 2: p(!0), i.label = 3; case 3: return [2]; } })));
                            }, new ((i = void 0) || (i = Promise))(((e, a) => { function r(e) { try { o(s.next(e)); } catch (e) { a(e); } } function l(e) { try { o(s.throw(e)); } catch (e) { a(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i(((e) => { e(n); }))).then(r, l); }o((s = s.apply(t, n || [])).next()); })); let t; let n; let i; let s;
                        },
                        children: [(0, i.jsx)(j.p0, { children: (0, i.jsx)(j.fl, { children: 'Добавление типа окончания обучения' }) }), (0, i.jsx)(j.sD, { children: (0, i.jsx)('div', { className: Ee.tab, children: (0, i.jsx)('div', { className: Ee.tabBlock, children: (0, i.jsx)('div', { className: Ee.settings, children: (0, i.jsxs)('div', { className: Ee.newAddField, children: [(0, i.jsx)('h6', {className: Ee.newAddFieldTitle, children: "Наименование*"}), (0, i.jsx)(V.h, {
 type: 'text', placeholder: 'основную школу', feedbackValid: T ? '' : 'Здорово!', invalid: !!T, feedbackInvalid: 'Введите корректные данные!', value: E || '', onChange (e) { a(me.setTitle(e.target.value)) }, required: !0 
})] }) }) }) }) }), (0, i.jsxs)(j.Ym, { className: Ee.footer, children: [(0, i.jsx)('div', { className: Ee.message, children: h && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(w.Z, { icon: z.D, customClassName: Ee.messageIcon }), (0, i.jsx)(g.xv, { size: g.yH.M, weight: g.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, i.jsxs)('div', { className: Ee.footerBtns, children: [(0, i.jsx)(N.zx, {
 theme: N.bn.OUTLINE, className: Ee.footerBtn, onClick: B, children: (0, i.jsx)(g.xv, { size: g.yH.XS, weight: g.fs.SEMIBOLD, children: 'Отмена'}) 
}), (0, i.jsxs)(N.zx, { type: 'submit', className: (0, y.A)(Ee.footerBtn, {}, [Ee.greenBtn]), children: [(0, i.jsx)(g.xv, { size: g.yH.XS, weight: g.fs.SEMIBOLD, children: 'Добавить'}), (0, i.jsx)(w.Z, { icon: je.q, className: Ee.btnIcon })] })] })] })],
                    }),
                }), (0, i.jsx)(j.KF, { ref: m, push: b, placement: 'top-end' })],
            });
        }; const Te = n(5375); const ke = n(2556); let Be = function () { return Be = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const s in t = arguments[n])Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]); return e; }, Be.apply(this, arguments); }; const Ce = {
            finishedEduTypes: pe, finishedEduTypesDetail: X, addFinishedEduType: ge, editFinishedEduType: R,
        }; const Fe = function (e) {
            const t = e.className; const n = (0, d.T)(); const f = (0, o.useState)(!1); const h = f[0]; const p = f[1]; const m = (0, c.v9)(ue); const g = (0, c.v9)(le); const j = (0, c.v9)(re); const w = (0, c.v9)(b); const E = (0, c.v9)(v); const S = (0, o.useState)(''); const N = S[0]; const T = S[1]; const k = (0, o.useState)(); const B = k[0]; const C = k[1]; const F = (0, o.useCallback)(((e) => { T(e); }), []); const O = (0, o.useCallback)(((e) => { n(he.setLimit(e)), n(x()); }), [n]); const D = (0, o.useCallback)(((e) => { n(he.setPage(e)), n(x()); }), [n]); return (0, o.useEffect)((() => { C((m == null ? void 0 : m.data) || []); }), [m]), (0, o.useEffect)((() => { const e = (0, ve.z4)(N, (m == null ? void 0 : m.data) || []); C(e || []); }), [m, N]), (0, o.useEffect)((() => { n(x()); }), [n]), (0, i.jsx)(l.B, {
                title: 'LMS - Типы окончания обучения',
                children: (0, i.jsxs)(s.W, {
                    reducers: Ce,
                    removeAfterUnmount: !0,
                    children: [(0, i.jsxs)('div', {
                        className: (0, y.A)('', {}, [t]),
                        children: [(0, i.jsxs)('div', {
                            className: 'page-settings '.concat(!1),
                            children: [(0, i.jsx)(a.o, {
                                value: N, onChange: F, searchText: 'Поиск по наименованию', error: j, isLoading: g,
                            }), (0, i.jsx)(r.X, {
                                onlyAdding: !0, setVisibleAddNewField: p, addingModalText: 'Добавить тип окончания обучения', error: j, isLoading: g, references: ke.x, referencesTitle: 'Справочники', children: (0, i.jsx)(Ne, { visible: h, setVisible: p }),
                            })],
                        }), (0, i.jsx)(de, { data: B || [], exportDisabled: !0 }), (0, i.jsxs)('div', {
                            className: 'page-table-settings',
                            children: [(0, i.jsx)(u.K, {
                                data: B || [], onChange: O, onChangePage: D, paginationData: m == null ? void 0 : m.pagination, itemsLimit: w, withRecords: !0, isLoading: g, error: j,
                            }), (0, i.jsx)(u.N, {
                                data: B || [], onChange: D, itemsPage: E, isLoading: g, error: j, paginationData: m == null ? void 0 : m.pagination,
                            })],
                        })],
                    }), j && (0, i.jsx)(Te.d, { error: j })],
                }),
            });
        };
    },
}]);
