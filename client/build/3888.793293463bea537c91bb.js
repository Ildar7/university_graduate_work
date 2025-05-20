!(function () { try { const e = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; const n = (new Error()).stack; n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = 'd24134e2-0fcc-4429-8de2-544d6aa3f5ce', e._sentryDebugIdIdentifier = 'sentry-dbid-d24134e2-0fcc-4429-8de2-544d6aa3f5ce'); } catch (e) {} }()); const _global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; _global.SENTRY_RELEASE = { id: '45ee1168f5cf48e9753bace26323152d3b61cb67' }, (self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[3888], {
    3481: (e, n, t) => {
        t.r(n), t.d(n, { default: () => K }); const a = t(5893); const r = t(1150); const o = t(9649); const i = t(5306); const s = t(918); const l = t(7294); const c = t(6458); const u = t(5461); const d = t(7687); const f = t(5502); const p = t(7730); const v = t(7168); const h = function (e) { let n; return (n = e.addEmployeePosition) === null || void 0 === n ? void 0 : n.data; }; const y = function (e) { let n; return (n = e.addEmployeePosition) === null || void 0 === n ? void 0 : n.errors; }; const b = function (e) { let n; return (n = e.addEmployeePosition) === null || void 0 === n ? void 0 : n.isLoading; }; const g = (0, v.hg)('employeePositions/addEmployeeEducation', ((e, n) => {
            return t = void 0, a = void 0, o = function () {
                let e; let t; let a; let r; let o; let i; let s; return (function (e, n) {
                    let t; let a; let r; let o; let i = {
                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                    }; return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol === 'function' && (o[Symbol.iterator] = function () { return this; }), o; function s(s) { return function (l) { return (function (s) { if (t) throw new TypeError('Generator is already executing.'); for (;o && (o = 0, s[0] && (i = 0)), i;) try { if (t = 1, a && (r = 2 & s[0] ? a.return : s[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, s[1])).done) return r; switch (a = 0, r && (s = [2 & s[0], r.value]), s[0]) { case 0: case 1: r = s; break; case 4: return i.label++, { value: s[1], done: !1 }; case 5: i.label++, a = s[1], s = [0]; continue; case 7: s = i.ops.pop(), i.trys.pop(); continue; default: if (!((r = (r = i.trys).length > 0 && r[r.length - 1]) || s[0] !== 6 && s[0] !== 2)) { i = 0; continue; } if (s[0] === 3 && (!r || s[1] > r[0] && s[1] < r[3])) { i.label = s[1]; break; } if (s[0] === 6 && i.label < r[1]) { i.label = r[1], r = s; break; } if (r && i.label < r[2]) { i.label = r[2], i.ops.push(s); break; }r[2] && i.ops.pop(), i.trys.pop(); continue; }s = n.call(e, i); } catch (e) { s = [6, e], a = 0; } finally { t = r = 0; } if (5 & s[0]) throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; }([s, l])); }; }
                }(this, ((l) => { switch (l.label) { case 0: e = n.rejectWithValue, t = n.extra, a = n.dispatch, r = n.getState, o = h(r()), l.label = 1; case 1: return l.trys.push([1, 3,, 4]), [4, t.api.post('/human-resources/positions/', o)]; case 2: return i = l.sent(), a((0, f.ud)()), a(j.clearData()), [2, i.data]; case 3: return s = l.sent(), [2, e({ errors: s.response.data.errors, status: s.response.status })]; case 4: return [2]; } })));
            }, new ((r = void 0) || (r = Promise))(((e, n) => { function i(e) { try { l(o.next(e)); } catch (e) { n(e); } } function s(e) { try { l(o.throw(e)); } catch (e) { n(e); } } function l(n) { let t; n.done ? e(n.value) : (t = n.value, t instanceof r ? t : new r(((e) => { e(t); }))).then(i, s); }l((o = o.apply(t, a || [])).next()); })); let t; let a; let r; let o;
        })); let m = function () { return m = Object.assign || function (e) { for (var n, t = 1, a = arguments.length; t < a; t++) for (const r in n = arguments[t])Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]); return e; }, m.apply(this, arguments); }; const x = { data: { name: null }, isLoading: !1, errors: void 0 }; const w = (0, v.oM)({
            name: 'addEmployeePosition', initialState: x, reducers: { setInputData(e, n) { let t; let a; const r = n.payload; const o = r[0]; const i = r[1]; e.data = { ...e.data, ...(i ? ((a = {})[o] = i, a) : ((t = {})[o] = null, t)) }; }, clearData(e) { e.data = x.data, e.errors = void 0; } }, extraReducers(e) { e.addCase(g.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(g.fulfilled, ((e) => { e.isLoading = !1; })).addCase(g.rejected, ((e, n) => { e.isLoading = !1, e.errors = n.payload; })); },
        }); var j = w.actions; const S = w.reducer; const C = t(4387); const k = t(238); const D = t(6925); const E = t(4475); const P = t(4809); const O = t(9161); const L = t(1353); const N = t(9456); const _ = t(8683); const A = t(530); const I = t(7926); const T = 'vXmPFn5X'; let R = function () { return R = Object.assign || function (e) { for (var n, t = 1, a = arguments.length; t < a; t++) for (const r in n = arguments[t])Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]); return e; }, R.apply(this, arguments); }; const F = (0, l.memo)(((e) => {
            const n = e.className; const t = e.onClose; const r = e.isOpen; const o = (0, u.T)(); const i = (0, l.useState)(); const s = i[0]; const d = i[1]; const f = (0, l.useRef)(null); const p = (0, l.useState)(!1); const v = p[0]; const m = p[1]; const x = (0, c.v9)(h); const w = (0, c.v9)(b); const S = (0, c.v9)(y); (0, I.f)(S); const F = (0, l.useCallback)((() => { t(), o(j.clearData()); }), [o, t]); const V = w; return (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(k.u, {
                    className: (0, C.A)('QmZHedVT', {}, [n]),
                    onClose: t,
                    isOpen: r,
                    title: 'Создание должности',
                    children: (0, a.jsxs)(E.lx, {
                        className: (0, C.A)('xoaSAcSG', {}, ['needs-validation']),
                        noValidate: !0,
                        validated: v,
                        onSubmit(e) {
                            return n = void 0, t = void 0, r = function () {
                                let n; return (function (e, n) {
                                    let t; let a; let r; let o; let i = {
                                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                                    }; return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol === 'function' && (o[Symbol.iterator] = function () { return this; }), o; function s(s) { return function (l) { return (function (s) { if (t) throw new TypeError('Generator is already executing.'); for (;o && (o = 0, s[0] && (i = 0)), i;) try { if (t = 1, a && (r = 2 & s[0] ? a.return : s[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, s[1])).done) return r; switch (a = 0, r && (s = [2 & s[0], r.value]), s[0]) { case 0: case 1: r = s; break; case 4: return i.label++, { value: s[1], done: !1 }; case 5: i.label++, a = s[1], s = [0]; continue; case 7: s = i.ops.pop(), i.trys.pop(); continue; default: if (!((r = (r = i.trys).length > 0 && r[r.length - 1]) || s[0] !== 6 && s[0] !== 2)) { i = 0; continue; } if (s[0] === 3 && (!r || s[1] > r[0] && s[1] < r[3])) { i.label = s[1]; break; } if (s[0] === 6 && i.label < r[1]) { i.label = r[1], r = s; break; } if (r && i.label < r[2]) { i.label = r[2], i.ops.push(s); break; }r[2] && i.ops.pop(), i.trys.pop(); continue; }s = n.call(e, i); } catch (e) { s = [6, e], a = 0; } finally { t = r = 0; } if (5 & s[0]) throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; }([s, l])); }; }
                                }(this, ((t) => { switch (t.label) { case 0: return e.preventDefault(), (n = e.currentTarget).checkValidity() || e.stopPropagation(), m(!0), n.checkValidity() ? (x == null ? void 0 : x.name) ? [4, o(g())] : [3, 2] : [3, 3]; case 1: return t.sent().meta.requestStatus === 'fulfilled' && (d(A.F.success('Должность добавлена')), F()), [3, 3]; case 2: d(A.F.error('Заполните все поля!')), t.label = 3; case 3: return [2]; } })));
                            }, new ((a = void 0) || (a = Promise))(((e, o) => { function i(e) { try { l(r.next(e)); } catch (e) { o(e); } } function s(e) { try { l(r.throw(e)); } catch (e) { o(e); } } function l(n) { let t; n.done ? e(n.value) : (t = n.value, t instanceof a ? t : new a(((e) => { e(t); }))).then(i, s); }l((r = r.apply(n, t || [])).next()); })); let n; let t; let a; let r;
                        },
                        children: [(0, a.jsx)(D.I, { placeholder: 'Наименование', value: (x == null ? void 0 : x.name) || '', onChange(e) { !(function (e, n) { o(j.setInputData(['name', e.target.value])); }(e)); } }), (0, a.jsxs)('div', {
 className: 'pycFWp_p',
children: [(0, a.jsxs)(O.zx, {
                            theme: O.bn.BACKGROUND_DARK, className: T, onClick: F, children: [(0, a.jsx)(P.xv, { size: P.yH.XS, weight: P.fs.SEMIBOLD, children: 'Отмена' }), (0, a.jsx)(L.J, { Svg: N.Z })], 
}), (0, a.jsxs)(O.zx, {
                            type: 'submit', theme: O.bn.BACKGROUND, className: T, disabled: V, children: [(0, a.jsx)(P.xv, { size: P.yH.XS, weight: P.fs.SEMIBOLD, children: 'Добавить' }), (0, a.jsx)(L.J, { Svg: _.Z })], 
})] 
})],
                    }),
                }), (0, a.jsx)(E.KF, { ref: f, push: s, placement: 'top-end' })],
            });
        })); const V = t(3160); const M = t(8093); const B = t(5375); const G = t(6432); let H = function () { return H = Object.assign || function (e) { for (var n, t = 1, a = arguments.length; t < a; t++) for (const r in n = arguments[t])Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]); return e; }, H.apply(this, arguments); }; const J = {
            employeePositions: f.H6, employeePositionDetail: V.Qn, addEmployeePosition: S, editEmployeePosition: M.jE,
        }; const K = function (e) {
            e.className; const n = (0, u.T)(); const t = (0, l.useState)(!1); const v = t[0]; const h = t[1]; const y = (0, c.v9)(f.qA); const b = (0, c.v9)(f.JJ); const g = (0, c.v9)(f.pg); const m = (0, c.v9)(f.yV); const x = (0, c.v9)(f._9); const w = (0, l.useState)(''); const j = w[0]; const S = w[1]; const C = (0, l.useState)(); const k = C[0]; const D = C[1]; const E = (0, l.useCallback)(((e) => { S(e); }), []); const P = (0, l.useCallback)((() => { h(!1); }), []); const O = (0, l.useCallback)(((e) => { n(f.DC.setLimit(e)), n((0, f.ud)()); }), [n]); const L = (0, l.useCallback)(((e) => { n(f.DC.setPage(e)), n((0, f.ud)()); }), [n]); return (0, l.useEffect)((() => { D((y == null ? void 0 : y.data) || []); }), [y]), (0, l.useEffect)((() => { const e = (0, p.Ui)(j, (y == null ? void 0 : y.data) || []); D(e || []); }), [y, j]), (0, l.useEffect)((() => { n((0, f.ud)()); }), [n]), (0, a.jsx)(s.B, {
                title: 'LMS - Должности',
                children: (0, a.jsxs)(r.W, {
                    reducers: J,
                    removeAfterUnmount: !0,
                    children: [(0, a.jsxs)('div', {
                        children: [(0, a.jsxs)('div', {
                            className: 'page-settings '.concat(!1),
                            children: [(0, a.jsx)(o.o, {
                                value: j, onChange: E, searchText: 'Поиск по наименованию', error: g, isLoading: b,
                            }), (0, a.jsx)(i.X, {
                                onlyAdding: !0, setVisibleAddNewField: h, addingModalText: 'Добавить должность', error: g, isLoading: b, references: G.J, referencesTitle: 'Справочники', children: (0, a.jsx)(F, { isOpen: v, onClose: P }),
                            })],
                        }), (0, a.jsx)(f.M7, { data: k || [], exportDisabled: !0 }), (0, a.jsxs)('div', {
                            className: 'page-table-settings',
                            children: [(0, a.jsx)(d.K, {
                                data: k || [], onChange: O, onChangePage: L, paginationData: y == null ? void 0 : y.pagination, itemsLimit: m, withRecords: !0, isLoading: b, error: g,
                            }), (0, a.jsx)(d.N, {
                                data: k || [], onChange: L, itemsPage: x, isLoading: b, error: g, paginationData: y == null ? void 0 : y.pagination,
                            })],
                        })],
                    }), g && (0, a.jsx)(B.d, { error: g })],
                }),
            });
        };
    },
}]);
