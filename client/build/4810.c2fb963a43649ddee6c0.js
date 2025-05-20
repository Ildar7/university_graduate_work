!(function () { try { const e = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; const t = (new Error()).stack; t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = 'c78053da-7d31-40c1-a612-b6a2b065776b', e._sentryDebugIdIdentifier = 'sentry-dbid-c78053da-7d31-40c1-a612-b6a2b065776b'); } catch (e) {} }()); const _global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; _global.SENTRY_RELEASE = { id: '45ee1168f5cf48e9753bace26323152d3b61cb67' }, (self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[4810], {
    1978: (e, t, n) => {
        n.r(t), n.d(t, { default: () => W }); const a = n(5893); const i = n(1150); const s = n(9649); const r = n(5306); const l = n(918); const o = n(7294); const c = n(6458); const d = n(5461); const u = n(7687); const f = n(7882); const h = n(7730); const p = n(7168); const v = n(6138); const g = function (e) { let t; return (t = e.addQualification) === null || void 0 === t ? void 0 : t.data.title; }; const m = function (e) { let t; return (t = e.addQualification) === null || void 0 === t ? void 0 : t.data.code; }; const x = function (e) { let t; return (t = e.addQualification) === null || void 0 === t ? void 0 : t.data.speciality_id; }; const b = function (e) { let t; return (t = e.addQualification) === null || void 0 === t ? void 0 : t.data.sort; }; const j = (0, p.hg)('qualifications/addQualification', ((e, t) => {
            return n = void 0, a = void 0, s = function () {
                let e; let n; let a; let i; let s; let r; let l; let o; let c; let d; let u; return (function (e, t) {
                    let n; let a; let i; let s; let r = {
                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                    }; return s = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (s[Symbol.iterator] = function () { return this; }), s; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;s && (s = 0, l[0] && (r = 0)), r;) try { if (n = 1, a && (i = 2 & l[0] ? a.return : l[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, l[1])).done) return i; switch (a = 0, i && (l = [2 & l[0], i.value]), l[0]) { case 0: case 1: i = l; break; case 4: return r.label++, { value: l[1], done: !1 }; case 5: r.label++, a = l[1], l = [0]; continue; case 7: l = r.ops.pop(), r.trys.pop(); continue; default: if (!((i = (i = r.trys).length > 0 && i[i.length - 1]) || l[0] !== 6 && l[0] !== 2)) { r = 0; continue; } if (l[0] === 3 && (!i || l[1] > i[0] && l[1] < i[3])) { r.label = l[1]; break; } if (l[0] === 6 && r.label < i[1]) { r.label = i[1], i = l; break; } if (i && r.label < i[2]) { r.label = i[2], r.ops.push(l); break; }i[2] && r.ops.pop(), r.trys.pop(); continue; }l = t.call(e, r); } catch (e) { l = [6, e], a = 0; } finally { n = i = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                }(this, ((f) => {
                    switch (f.label) {
                    case 0: e = t.rejectWithValue, n = t.extra, a = t.dispatch, i = t.getState, s = g(i()), r = m(i()), l = x(i()), o = b(i()), c = {
                        name: s, code: r, specialtiesId: l, sort: o,
                    }, f.label = 1; case 1: return f.trys.push([1, 3,, 4]), [4, n.api.post('/college/qualifications/', c)]; case 2: return d = f.sent(), a((0, v.c)()), a(w.clearData()), [2, d.data]; case 3: return u = f.sent(), [2, e({ errors: u.response.data.errors, status: u.response.status })]; case 4: return [2];
                    }
                })));
            }, new ((i = void 0) || (i = Promise))(((e, t) => { function r(e) { try { o(s.next(e)); } catch (e) { t(e); } } function l(e) { try { o(s.throw(e)); } catch (e) { t(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i(((e) => { e(n); }))).then(r, l); }o((s = s.apply(n, a || [])).next()); })); let n; let a; let i; let s;
        })); const y = (0, p.oM)({
            name: 'addQualification',
            initialState: {
                data: {
                    title: null, code: null, speciality_id: null, sort: null,
                },
                isLoading: !1,
                errors: void 0,
            },
            reducers: {
                setTitle(e, t) { e.data.title = t.payload; },
                setCode(e, t) { e.data.code = t.payload; },
                setId(e, t) { e.data.speciality_id = t.payload; },
                setSort(e, t) { e.data.sort = t.payload; },
                clearData(e) {
                    e.data = {
                        title: null, code: null, speciality_id: null, sort: null,
                    }, e.errors = void 0;
                },
            },
            extraReducers(e) { e.addCase(j.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(j.fulfilled, ((e) => { e.isLoading = !1; })).addCase(j.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })); },
        }); var w = y.actions; const N = y.reducer; const S = n(4387); const k = n(4475); const _ = n(2308); const C = n(5044); const A = n(3280); const O = n(4809); const E = n(1385); const L = n(530); const I = n(3418); const B = n(3695); const D = n(9161); const F = n(6959); const T = function (e) { let t; return (t = e.addQualification) === null || void 0 === t ? void 0 : t.errors; }; const R = {
            tabBtn: 'KFbqa8qS', tabsButtonsBlock: 'pqOBNfv3', title: 'et6V8EnX', settings: 'UIU5mlKR', newAddField: 'F1URHbwt', tabBlock: 'jKFgHIOk', form: 'fg40uAUM', footerBtn: 'BQTNh672', greenBtn: 'Tnr8q9dW', footer: 'Yd7hSWWU', message: 'rHHKPtqC', messageIcon: 'erI5Cjhu',
        }; let q = function () { return q = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, q.apply(this, arguments); }; const M = function (e) {
            const t = e.className; const n = e.visible; const i = e.setVisible; const s = (0, d.T)(); const r = (0, o.useState)(!1); const l = r[0]; const u = r[1]; const f = (0, o.useState)(!1); const h = f[0]; const p = f[1]; const v = (0, o.useState)(); const y = v[0]; const N = v[1]; const M = (0, o.useRef)(null); const P = (0, c.v9)(g); const Q = (0, c.v9)(m); const K = (0, c.v9)(b); const V = (0, c.v9)(x); const H = (0, c.v9)(T); const U = (0, c.v9)(F.K2); const W = (0, o.useCallback)((() => { i(!1); }), [i]); const z = function () { W(), u(!1), p(!1); }; return (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(k.Tk, {
                    className: (0, S.A)(R.AddQualification, {}, [t]),
                    visible: n,
                    onClose: W,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, a.jsxs)(k.lx, {
                        className: (0, S.A)(R.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: l,
                        onSubmit(e) {
                            return t = void 0, n = void 0, i = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let a; let i; let s; let r = {
                                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                                    }; return s = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (s[Symbol.iterator] = function () { return this; }), s; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;s && (s = 0, l[0] && (r = 0)), r;) try { if (n = 1, a && (i = 2 & l[0] ? a.return : l[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, l[1])).done) return i; switch (a = 0, i && (l = [2 & l[0], i.value]), l[0]) { case 0: case 1: i = l; break; case 4: return r.label++, { value: l[1], done: !1 }; case 5: r.label++, a = l[1], l = [0]; continue; case 7: l = r.ops.pop(), r.trys.pop(); continue; default: if (!((i = (i = r.trys).length > 0 && i[i.length - 1]) || l[0] !== 6 && l[0] !== 2)) { r = 0; continue; } if (l[0] === 3 && (!i || l[1] > i[0] && l[1] < i[3])) { r.label = l[1]; break; } if (l[0] === 6 && r.label < i[1]) { r.label = i[1], i = l; break; } if (i && r.label < i[2]) { r.label = i[2], r.ops.push(l); break; }i[2] && r.ops.pop(), r.trys.pop(); continue; }l = t.call(e, r); } catch (e) { l = [6, e], a = 0; } finally { n = i = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                                }(this, ((a) => { switch (a.label) { case 0: return e.preventDefault(), t = e.currentTarget, p(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), u(!0), t.checkValidity() ? P ? [4, s(j())] : [3, 2] : [3, 3]; case 1: return (n = a.sent()).meta.requestStatus === 'fulfilled' && (N(L.F.success('Квалификация добавлена')), z()), n.meta.requestStatus === 'rejected' && p(!0), [3, 3]; case 2: p(!0), a.label = 3; case 3: return [2]; } })));
                            }, new ((a = void 0) || (a = Promise))(((e, s) => { function r(e) { try { o(i.next(e)); } catch (e) { s(e); } } function l(e) { try { o(i.throw(e)); } catch (e) { s(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(r, l); }o((i = i.apply(t, n || [])).next()); })); let t; let n; let a; let i;
                        },
                        children: [(0, a.jsx)(k.p0, { children: (0, a.jsx)(k.fl, { children: 'Добавление квалификации' }) }), (0, a.jsx)(k.sD, { children: (0, a.jsx)('div', { className: R.tab, children: (0, a.jsxs)('div', { className: R.tabBlock, children: [(0, a.jsx)('div', { className: R.settings, children: (0, a.jsxs)('div', { className: R.newAddField, children: [(0, a.jsx)('h6', {className: R.newAddFieldTitle, children: "Наименование квалификации*"}), (0, a.jsx)(E.h, {
 type: 'text', placeholder: 'маркетолог', feedbackValid: H ? '' : 'Здорово!', invalid: !!H, feedbackInvalid: 'Введите корректные данные!', value: P || '', onChange (e) { s(w.setTitle(e.target.value)) }, required: !0 
})] }) }), (0, a.jsx)('div', { className: R.settings, children: (0, a.jsxs)('div', { className: R.newAddField, children: [(0, a.jsx)('h6', {className: R.newAddFieldTitle, children: "Код квалификации*"}), (0, a.jsx)(E.h, {
 type: 'text', placeholder: '05100', feedbackValid: H ? '' : 'Здорово!', invalid: !!H, feedbackInvalid: 'Введите корректные данные!', value: Q || '', onChange (e) { s(w.setCode(e.target.value)) }, required: !0 
})] }) }), (0, a.jsx)('div', { className: R.settings, children: (0, a.jsxs)('div', { className: R.newAddField, children: [(0, a.jsx)('h6', {className: R.newAddFieldTitle, children: "Специальность*"}), (0, a.jsxs)(k.LX, {className: R.selectFilter, value: V || "", onChange: function (e) { s(w.setId(e.target.value)) }, feedbackValid: (0, I.M)(H, "specialtiesId") ? "" : "Отлично!", feedbackInvalid: (0, B.N)((0, I.M)(H, "specialtiesId"), H, "specialtiesId"), required: !0, children: [(0, a.jsx)('option', q({ value: "" }, { children: "Не выбрано" })), null == U ? void 0 : U.data.map(((e) =>{ return (0, a.jsx)('option', q({ value: e.id_spec }, { children: e.speciality }), e.id_spec) }))]})] }) }), (0, a.jsx)('div', { className: R.settings, children: (0, a.jsxs)('div', { className: R.newAddField, children: [(0, a.jsx)('h6', {className: R.newAddFieldTitle, children: "Сортировка*"}), (0, a.jsx)(k.jO, {
 type: 'number', step: 100, min: 100, placeholder: '100', feedbackValRid: H ? '' : 'Здорово!', invalid: !!H, feedbackInvalid: 'Введите корректные данные!', value: K || '', onChange (e) { s(w.setSort(Number(e.target.value))) }, required: !0 
})] }) })] }) }) }), (0, a.jsxs)(k.Ym, { className: R.footer, children: [(0, a.jsx)('div', { className: R.message, children: h && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(_.Z, { icon: C.D, customClassName: R.messageIcon }), (0, a.jsx)(O.xv, { size: O.yH.M, weight: O.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, a.jsxs)('div', { className: R.footerBtns, children: [(0, a.jsx)(D.zx, {
 theme: D.bn.OUTLINE, className: R.footerBtn, onClick: z, children: (0, a.jsx)(O.xv, { size: O.yH.XS, weight: O.fs.SEMIBOLD, children: 'Отмена'}) 
}), (0, a.jsxs)(D.zx, { type: 'submit', className: (0, S.A)(R.footerBtn, {}, [R.greenBtn]), children: [(0, a.jsx)(O.xv, { size: O.yH.XS, weight: O.fs.SEMIBOLD, children: 'Добавить'}), (0, a.jsx)(_.Z, { icon: A.q, className: R.btnIcon })] })] })] })],
                    }),
                }), (0, a.jsx)(k.KF, { ref: M, push: y, placement: 'top-end' })],
            });
        }; const P = n(3707); const Q = n(1696); const K = n(5375); const V = n(1759); let H = function () { return H = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, H.apply(this, arguments); }; const U = {
            qualifications: f.lg, qualificationDetail: P.w_, addQualification: N, editQualification: Q.QB, specialties: F.Ys,
        }; const W = function (e) {
            e.className; const t = (0, d.T)(); const n = (0, o.useState)(!1); const p = n[0]; const v = n[1]; const g = (0, c.v9)(f._c); const m = (0, c.v9)(f.Aq); const x = (0, c.v9)(f.kp); const b = (0, c.v9)(f.qr); const j = (0, c.v9)(f.Wu); const y = (0, o.useState)(''); const w = y[0]; const N = y[1]; const S = (0, o.useState)(); const k = S[0]; const _ = S[1]; const C = (0, o.useCallback)(((e) => { N(e); }), []); const A = (0, o.useCallback)(((e) => { t(f.bo.setLimit(e)), t((0, f.cs)()); }), [t]); const O = (0, o.useCallback)(((e) => { t(f.bo.setPage(e)), t((0, f.cs)()); }), [t]); return (0, o.useEffect)((() => { _((g == null ? void 0 : g.data) || []); }), [g]), (0, o.useEffect)((() => { const e = (0, h.sj)(w, (g == null ? void 0 : g.data) || []); _(e || []); }), [g, w]), (0, o.useEffect)((() => { t(V.f$.setSort('id_qual')), t((0, f.cs)()); }), [t]), (0, a.jsx)(l.B, {
                title: 'LMS - Квалификации',
                children: (0, a.jsxs)(i.W, {
                    reducers: U,
                    removeAfterUnmount: !0,
                    children: [(0, a.jsxs)('div', {
                        children: [(0, a.jsxs)('div', {
                            className: 'page-settings '.concat(!1),
                            children: [(0, a.jsx)(s.o, {
                                value: w, onChange: C, searchText: 'Поиск по наименованию', error: x, isLoading: m,
                            }), (0, a.jsx)(r.X, {
                                onlyAdding: !0, setVisibleAddNewField: v, addingModalText: 'Добавить квалификацию', error: x, isLoading: m, children: (0, a.jsx)(M, { visible: p, setVisible: v }),
                            })],
                        }), (0, a.jsx)(f._W, { data: k || [], exportDisabled: !0 }), (0, a.jsxs)('div', {
                            className: 'page-table-settings',
                            children: [(0, a.jsx)(u.K, {
                                data: k || [], onChange: A, onChangePage: O, paginationData: g == null ? void 0 : g.pagination, itemsLimit: b, withRecords: !0, isLoading: m, error: x,
                            }), (0, a.jsx)(u.N, {
                                data: k || [], onChange: O, itemsPage: j, isLoading: m, error: x, paginationData: g == null ? void 0 : g.pagination,
                            })],
                        })],
                    }), x && (0, a.jsx)(K.d, { error: x })],
                }),
            });
        };
    },
    5375: (e, t, n) => { n.d(t, { d: () => o }); const a = n(5893); const i = n(7294); const s = n(530); const r = n(4475); function l(e) { return l = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) { return typeof e; } : function (e) { return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e; }, l(e); } var o = (0, i.memo)(((e) => { const t = e.error; const n = (0, i.useState)(); const o = n[0]; const c = n[1]; const d = (0, i.useRef)(null); return (0, i.useEffect)((() => { (typeof t === 'string' && t === 'timeout' || l(t) === 'object' && t.status === 500 && t.error === 'timeout') && c(s.F.error('Соединение с сервером потеряно')); }), [t]), (0, a.jsx)(r.KF, { ref: d, push: o, placement: 'top-end' }); })); },
    7687: (e, t, n) => {
        n.d(t, { K: () => N, N: () => F }); let a; const i = n(5893); const s = n(4387); const r = n(7294); const l = ['25', '50', '100', '200', '500']; const o = n(1138); const c = n(4809); const d = n(1353); const u = n(8896); function f() { return f = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const a in n)Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]); } return e; }, f.apply(this, arguments); } const h = function (e) { return r.createElement('svg', f({ width: 20, height: 20, xmlns: 'http://www.w3.org/2000/svg' }, e), a || (a = r.createElement('path', { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M8.565 9.731 5.229 6.396A.79.79 0 0 1 5 5.813a.79.79 0 0 1 .23-.584A.79.79 0 0 1 5.811 5a.79.79 0 0 1 .584.23l3.25 3.25 3.25-3.25a.79.79 0 0 1 .583-.23.79.79 0 0 1 .584.23.79.79 0 0 1 .229.582.79.79 0 0 1-.23.584l-3.33 3.331 3.335 3.335a.79.79 0 0 1 .229.584.79.79 0 0 1-.23.583.79.79 0 0 1-.583.23.79.79 0 0 1-.583-.23l-3.25-3.25-3.25 3.25a.79.79 0 0 1-.583.23.79.79 0 0 1-.584-.23.79.79 0 0 1-.229-.583.79.79 0 0 1 .23-.584l3.33-3.33Z' }))); }; const p = n(9161); const v = n(8863); const g = 'lJhrM3nh'; const m = 'zZgj2JgW'; let x = function () { return x = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, x.apply(this, arguments); }; const b = (0, r.memo)(((e) => {
            let t; const n = e.className; const a = e.items; const l = e.value; const o = e.onChange; const f = (0, r.useState)(l); const b = f[0]; const j = f[1]; const y = (0, r.useState)(!1); const w = y[0]; const N = y[1]; const S = (0, r.useRef)(null); (0, v.p)(S, N); const k = (0, r.useCallback)((() => { N(!0); }), []); const _ = (0, r.useCallback)((() => { N(!1); }), []); const C = (0, r.useCallback)(((e) => { o(e), j(e), _(); }), [_, o]); return (0, i.jsxs)('div', {
                className: (0, s.A)('eXu4wq7K', {}, [n]),
                ref: S,
                children: [!w && (0, i.jsxs)(p.zx, {
                    className: 'bAUrWG2D', theme: p.bn.CLEAR, onClick: k, children: [(0, i.jsx)(c.xv, { weight: c.fs.SEMIBOLD, className: g, children: b }), (0, i.jsx)(d.J, { Svg: u.Z })],
                }), (0, i.jsx)('div', {
 className: (0, s.A)('Jh9c6KnL', (t = {}, t.fpG6Af4B = w, t), []),
style: { top: ''.concat(-40 * a.indexOf(b), 'px') },
children: a.map(((e) => (b === e ? (0, i.jsxs)('div', { className: (0, s.A)(m, {}, ['rKHhU8sR']), children: [(0, i.jsx)(c.xv, { weight: c.fs.SEMIBOLD, className: g, children: e }), (0, i.jsx)(p.zx, {
 theme: p.bn.CLEAR, className: 'HkrPDu6E', onClick: _, children: (0, i.jsx)(d.J, { Svg: h }) 
})] }, e) : (0, i.jsx)(p.zx, {
                    theme: p.bn.CLEAR, className: m, size: p.qE.XS, onClick() { C(e); }, children: (0, i.jsx)(c.xv, { weight: c.fs.SEMIBOLD, className: g, children: e }), 
}, e)))) 
})],
            });
        })); const j = {
            LimitShow: 'eQ6pERU2', selectLimit: 'hKaByxY3', limitSelectWrapper: 'XhlPZwOr', recordsText: 'Shn48cNg', textResults: 'MlwyceC_',
        }; let y; let w = function () { return w = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, w.apply(this, arguments); }; var N = (0, r.memo)(((e) => {
            const t = e.className; const n = e.onChange; const a = e.itemsLimit; const r = e.withRecords; const d = e.paginationData; const u = e.isLoading; const f = e.error; const h = e.data; const p = e.onChangePage; const v = (d == null ? void 0 : d.current_page) ? (d.current_page - 1) * Number(a) + 1 : 0; const g = (d == null ? void 0 : d.current_page) ? d.current_page * Number(a) : 0; return u ? (0, i.jsx)(o.O, {
                width: '100%', height: 40, border: '6px', className: j.skeleton,
            }) : f ? (0, i.jsx)('div', {}) : h.length ? (0, i.jsxs)('div', { className: (0, s.A)(j.LimitShow, {}, [t]), children: [r && v && g && (0, i.jsxs)(c.xv, { theme: c.lg.LIGHT, className: j.recordsText, children: ['Записи', ' ', v, ' ', '-', ' ', g, ' ', '| Всего', ' ', d == null ? void 0 : d.total_records] }), (0, i.jsxs)('div', { className: j.limitSelectWrapper, children: [(0, i.jsx)(c.xv, { theme: c.lg.LIGHT, className: j.textResults, children: 'Результатов на странице' }), (0, i.jsx)(b, { items: l, value: a, onChange(e) { n(e), p('1'); } })] })] }) : (0, i.jsx)('div', {});
        })); const S = n(4475); function k() { return k = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const a in n)Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]); } return e; }, k.apply(this, arguments); } const _ = function (e) {
            return r.createElement('svg', k({
                width: 30, height: 30, fill: 'none', xmlns: 'http://www.w3.org/2000/svg',
            }, e), y || (y = r.createElement('path', { d: 'M9.514 5.763A1.739 1.739 0 0 0 9 6.994a1.73 1.73 0 0 0 .514 1.231l6.822 6.777-6.822 6.776a1.735 1.735 0 0 0 0 2.462 1.759 1.759 0 0 0 2.48 0l8.07-8.016a1.74 1.74 0 0 0 .514-1.231 1.73 1.73 0 0 0-.514-1.231l-8.07-8.016c-.669-.664-1.794-.664-2.48.017Z', fill: '#EB8247' })));
        }; let C; function A() { return A = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const a in n)Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]); } return e; }, A.apply(this, arguments); } const O = function (e) {
            return r.createElement('svg', A({
                width: 30, height: 30, fill: 'none', xmlns: 'http://www.w3.org/2000/svg',
            }, e), C || (C = r.createElement('path', { d: 'M6.175 8.2a1.875 1.875 0 0 1 2.65-2.65l8.125 8.125a1.875 1.875 0 0 1 0 2.65L8.825 24.45a1.875 1.875 0 0 1-2.65-2.65l6.8-6.8-6.8-6.8Zm18.2 16.8a1.875 1.875 0 0 0 1.875-1.875V6.875a1.875 1.875 0 0 0-3.75 0v16.25c0 1.035.84 1.875 1.875 1.875Z', fill: '#EB8247' })));
        }; const E = 'ytJMbyx3'; const L = 'SRBkd4oW'; const I = '_DUi30wm'; let B = function () { return B = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, B.apply(this, arguments); }; const D = function (e, t, n) { if (n || arguments.length === 2) for (var a, i = 0, s = t.length; i < s; i++)!a && i in t || (a || (a = Array.prototype.slice.call(t, 0, i)), a[i] = t[i]); return e.concat(a || Array.prototype.slice.call(t)); }; var F = (0, r.memo)(((e) => {
            const t = e.className; const n = e.data; const a = e.isLoading; const r = e.error; const l = e.paginationData; const c = e.onChange; const u = e.itemsPage; return a ? (0, i.jsx)(o.O, {
                width: 250, height: 40, border: '6px', className: 'nlgg7yYk',
            }) : r || n.length === 0 ? (0, i.jsx)('div', {}) : (0, i.jsx)('div', {
                className: (0, s.A)('AuxB6Ddw', {}, [t]),
                children: (0, i.jsxs)(S.E7, {
                    'aria-label': 'TrainingSchedule pagination',
                    align: 'end',
                    children: [(l == null ? void 0 : l.prev_page) && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(S.tn, { onClick() { c('1'); }, className: (0, s.A)(E, {}, [L]), children: (0, i.jsx)(d.J, { className: 'uBUXyeMF', Svg: O }) }), (0, i.jsx)(S.tn, { onClick() { c(''.concat(+u - 1)); }, className: (0, s.A)(E, {}, [L]), children: (0, i.jsx)(d.J, { className: 'jKQ4PRf5', Svg: _ }) })] }), (l == null ? void 0 : l.total_pages) ? (0, i.jsxs)(i.Fragment, {
                        children: [l.total_pages <= 7 && D([], Array(l.total_pages), !0).map(((e, t) => (0, i.jsx)(S.tn, {
                            className: (0, s.A)(E, {}, [I]), active: +u === t + 1, onClick() { c(''.concat(t + 1)); }, children: t + 1,
                        }, t))), l.total_pages > 7 && (0, i.jsxs)(i.Fragment, {
                            children: [D([], Array(l.total_pages), !0).map(((e, t) => {
                                if ((+u === t + 1 || +u + 1 === t + 1 || +u + 2 === t + 1) && +u !== l.total_pages && t + 1 !== l.total_pages && t + 2 !== l.total_pages && t + 3 !== l.total_pages) {
                                    return (0, i.jsx)(S.tn, {
                                        className: (0, s.A)(E, {}, [I]), active: +u === t + 1, onClick() { c(''.concat(t + 1)); }, children: t + 1,
                                    }, t);
                                }
                            })), l.total_pages === +u || l.total_pages - 1 == +u || l.total_pages - 2 == +u || l.total_pages - 2 - +u == 3 || l.total_pages - 2 - +u == 2 || l.total_pages - 2 - +u == 1 ? '' : (0, i.jsx)(S.tn, { className: (0, s.A)(E, {}, [I, 'JQSOdsCs']), onClick() { c(''.concat(+u + 1)); }, children: '...' }), D([], Array(l.total_pages), !0).map(((e, t) => {
                                if (l.total_pages - t + 1 == 4 || l.total_pages - t + 1 == 3 || l.total_pages - t + 1 == 2 || l.total_pages - t + 1 == 1) {
                                    return (0, i.jsx)(S.tn, {
                                        className: (0, s.A)(E, {}, [I]), active: +u === t + 1, onClick() { c(''.concat(t + 1)); }, children: t + 1,
                                    }, t);
                                }
                            }))],
                        })],
                    }) : (0, i.jsx)('div', {}), (l == null ? void 0 : l.next_page) && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(S.tn, { onClick() { c(''.concat(+u + 1)); }, className: (0, s.A)(E, {}, [L]), children: (0, i.jsx)(d.J, { Svg: _ }) }), (0, i.jsx)(S.tn, { onClick() { c(''.concat(l == null ? void 0 : l.total_pages)); }, className: (0, s.A)(E, {}, [L]), children: (0, i.jsx)(d.J, { Svg: O }) })] })],
                }),
            });
        }));
    },
}]);
