!(function () { try { const e = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; const t = (new Error()).stack; t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = '11fefbc4-127f-45a4-88ca-4aec5797ba64', e._sentryDebugIdIdentifier = 'sentry-dbid-11fefbc4-127f-45a4-88ca-4aec5797ba64'); } catch (e) {} }()); const _global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; _global.SENTRY_RELEASE = { id: '45ee1168f5cf48e9753bace26323152d3b61cb67' }, (self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[1352], {
    5826: (e, t, n) => {
        n.r(t), n.d(t, { default: () => V }); const a = n(5893); const r = n(1150); const s = n(9649); const i = n(5306); const l = n(918); const o = n(7294); const c = n(6458); const u = n(5461); const d = n(7687); const f = n(6959); const p = n(7730); const h = n(7168); const g = n(6325); const v = function (e) { let t; return (t = e.addSpeciality) === null || void 0 === t ? void 0 : t.data.title; }; const m = function (e) { let t; return (t = e.addSpeciality) === null || void 0 === t ? void 0 : t.data.code; }; const x = (0, h.hg)('specialties/addSpeciality', ((e, t) => {
            return n = void 0, a = void 0, s = function () {
                let e; let n; let a; let r; let s; let i; let l; let o; let c; return (function (e, t) {
                    let n; let a; let r; let s; let i = {
                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                    }; return s = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (s[Symbol.iterator] = function () { return this; }), s; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;s && (s = 0, l[0] && (i = 0)), i;) try { if (n = 1, a && (r = 2 & l[0] ? a.return : l[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, l[1])).done) return r; switch (a = 0, r && (l = [2 & l[0], r.value]), l[0]) { case 0: case 1: r = l; break; case 4: return i.label++, { value: l[1], done: !1 }; case 5: i.label++, a = l[1], l = [0]; continue; case 7: l = i.ops.pop(), i.trys.pop(); continue; default: if (!((r = (r = i.trys).length > 0 && r[r.length - 1]) || l[0] !== 6 && l[0] !== 2)) { i = 0; continue; } if (l[0] === 3 && (!r || l[1] > r[0] && l[1] < r[3])) { i.label = l[1]; break; } if (l[0] === 6 && i.label < r[1]) { i.label = r[1], r = l; break; } if (r && i.label < r[2]) { i.label = r[2], i.ops.push(l); break; }r[2] && i.ops.pop(), i.trys.pop(); continue; }l = t.call(e, i); } catch (e) { l = [6, e], a = 0; } finally { n = r = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                }(this, ((u) => { switch (u.label) { case 0: e = t.rejectWithValue, n = t.extra, a = t.dispatch, r = t.getState, s = v(r()), i = m(r()), l = { name: s, code: i }, u.label = 1; case 1: return u.trys.push([1, 3,, 4]), [4, n.api.post('/college/specialties/', l)]; case 2: return o = u.sent(), a((0, g.k)()), a(y.clearData()), [2, o.data]; case 3: return c = u.sent(), [2, e({ errors: c.response.data.errors, status: c.response.status })]; case 4: return [2]; } })));
            }, new ((r = void 0) || (r = Promise))(((e, t) => { function i(e) { try { o(s.next(e)); } catch (e) { t(e); } } function l(e) { try { o(s.throw(e)); } catch (e) { t(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(i, l); }o((s = s.apply(n, a || [])).next()); })); let n; let a; let r; let s;
        })); const b = (0, h.oM)({
            name: 'addSpeciality', initialState: { data: { title: null, code: null }, isLoading: !1, errors: void 0 }, reducers: { setTitle(e, t) { e.data.title = t.payload; }, setCode(e, t) { e.data.code = t.payload; }, clearData(e) { e.data = { title: null, code: null }, e.errors = void 0; } }, extraReducers(e) { e.addCase(x.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(x.fulfilled, ((e) => { e.isLoading = !1; })).addCase(x.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })); },
        }); var y = b.actions; const j = b.reducer; const w = n(4387); const N = n(4475); const S = n(2308); const k = n(5044); const C = n(3280); const A = n(4809); const O = n(1385); const _ = n(530); const E = n(9161); const L = function (e) { let t; return (t = e.addSpeciality) === null || void 0 === t ? void 0 : t.errors; }; const B = {
            tabBtn: 'Z2eAwoH_', tabsButtonsBlock: 'AqXedoZ1', title: 've14swhi', settings: 'KG6VVeGy', newAddField: 'BN1uDuRw', tabBlock: 'O3ksnWvW', form: 'eIgSmTep', footerBtn: 'Y2ppHBRU', greenBtn: 'Z0HyU78J', footer: 'hLOPn37E', message: 'Oot05ylR', messageIcon: 'ksPHwG7K',
        }; let D = function () { return D = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, D.apply(this, arguments); }; const R = function (e) {
            const t = e.className; const n = e.visible; const r = e.setVisible; const s = (0, u.T)(); const i = (0, o.useState)(!1); const l = i[0]; const d = i[1]; const f = (0, o.useState)(!1); const p = f[0]; const h = f[1]; const g = (0, o.useState)(); const b = g[0]; const j = g[1]; const R = (0, o.useRef)(null); const I = (0, c.v9)(v); const P = (0, c.v9)(m); const T = (0, c.v9)(L); const F = (0, o.useCallback)((() => { r(!1); }), [r]); const M = function () { F(), d(!1), h(!1); }; return (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(N.Tk, {
                    className: (0, w.A)(B.AddSpeciality, {}, [t]),
                    visible: n,
                    onClose: F,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, a.jsxs)(N.lx, {
                        className: (0, w.A)(B.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: l,
                        onSubmit(e) {
                            return t = void 0, n = void 0, r = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let a; let r; let s; let i = {
                                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                                    }; return s = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (s[Symbol.iterator] = function () { return this; }), s; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;s && (s = 0, l[0] && (i = 0)), i;) try { if (n = 1, a && (r = 2 & l[0] ? a.return : l[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, l[1])).done) return r; switch (a = 0, r && (l = [2 & l[0], r.value]), l[0]) { case 0: case 1: r = l; break; case 4: return i.label++, { value: l[1], done: !1 }; case 5: i.label++, a = l[1], l = [0]; continue; case 7: l = i.ops.pop(), i.trys.pop(); continue; default: if (!((r = (r = i.trys).length > 0 && r[r.length - 1]) || l[0] !== 6 && l[0] !== 2)) { i = 0; continue; } if (l[0] === 3 && (!r || l[1] > r[0] && l[1] < r[3])) { i.label = l[1]; break; } if (l[0] === 6 && i.label < r[1]) { i.label = r[1], r = l; break; } if (r && i.label < r[2]) { i.label = r[2], i.ops.push(l); break; }r[2] && i.ops.pop(), i.trys.pop(); continue; }l = t.call(e, i); } catch (e) { l = [6, e], a = 0; } finally { n = r = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                                }(this, ((a) => { switch (a.label) { case 0: return e.preventDefault(), t = e.currentTarget, h(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), d(!0), t.checkValidity() ? I ? [4, s(x())] : [3, 2] : [3, 3]; case 1: return (n = a.sent()).meta.requestStatus === 'fulfilled' && (j(_.F.success('Специальность добавлена')), M()), n.meta.requestStatus === 'rejected' && h(!0), [3, 3]; case 2: h(!0), a.label = 3; case 3: return [2]; } })));
                            }, new ((a = void 0) || (a = Promise))(((e, s) => { function i(e) { try { o(r.next(e)); } catch (e) { s(e); } } function l(e) { try { o(r.throw(e)); } catch (e) { s(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(i, l); }o((r = r.apply(t, n || [])).next()); })); let t; let n; let a; let r;
                        },
                        children: [(0, a.jsx)(N.p0, { children: (0, a.jsx)(N.fl, { children: 'Добавление специальности' }) }), (0, a.jsx)(N.sD, { children: (0, a.jsx)('div', { className: B.tab, children: (0, a.jsxs)('div', { className: B.tabBlock, children: [(0, a.jsx)('div', { className: B.settings, children: (0, a.jsxs)('div', { className: B.newAddField, children: [(0, a.jsx)('h6', {className: B.newAddFieldTitle, children: "Наименование специальности*"}), (0, a.jsx)(O.h, {
 type: 'text', placeholder: 'маркетолог', feedbackValid: T ? '' : 'Здорово!', invalid: !!T, feedbackInvalid: 'Введите корректные данные!', value: I || '', onChange (e) { s(y.setTitle(e.target.value)) }, required: !0 
})] }) }), (0, a.jsx)('div', { className: B.settings, children: (0, a.jsxs)('div', { className: B.newAddField, children: [(0, a.jsx)('h6', {className: B.newAddFieldTitle, children: "Код специальности*"}), (0, a.jsx)(O.h, {
 type: 'text', placeholder: '05100', feedbackValid: T ? '' : 'Здорово!', invalid: !!T, feedbackInvalid: 'Введите корректные данные!', value: P || '', onChange (e) { s(y.setCode(e.target.value)) }, required: !0 
})] }) })] }) }) }), (0, a.jsxs)(N.Ym, { className: B.footer, children: [(0, a.jsx)('div', { className: B.message, children: p && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(S.Z, { icon: k.D, customClassName: B.messageIcon }), (0, a.jsx)(A.xv, { size: A.yH.M, weight: A.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, a.jsxs)('div', { className: B.footerBtns, children: [(0, a.jsx)(E.zx, {
 theme: E.bn.OUTLINE, className: B.footerBtn, onClick: M, children: (0, a.jsx)(A.xv, { size: A.yH.XS, weight: A.fs.SEMIBOLD, children: 'Отмена'}) 
}), (0, a.jsxs)(E.zx, { type: 'submit', className: (0, w.A)(B.footerBtn, {}, [B.greenBtn]), children: [(0, a.jsx)(A.xv, { size: A.yH.XS, weight: A.fs.SEMIBOLD, children: 'Добавить'}), (0, a.jsx)(S.Z, { icon: C.q, className: B.btnIcon })] })] })] })],
                    }),
                }), (0, a.jsx)(N.KF, { ref: R, push: b, placement: 'top-end' })],
            });
        }; const I = n(9142); const P = n(1771); const T = n(5375); let F = function () { return F = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, F.apply(this, arguments); }; const M = {
            specialties: f.Ys, specialityDetail: I.hB, addSpeciality: j, editSpeciality: P.sG,
        }; const V = function (e) {
            e.className; const t = (0, u.T)(); const n = (0, o.useState)(!1); const h = n[0]; const g = n[1]; const v = (0, c.v9)(f.K2); const m = (0, c.v9)(f.LD); const x = (0, c.v9)(f.qA); const b = (0, c.v9)(f.z); const y = (0, c.v9)(f.Ej); const j = (0, o.useState)(''); const w = j[0]; const N = j[1]; const S = (0, o.useState)(); const k = S[0]; const C = S[1]; const A = (0, o.useCallback)(((e) => { N(e); }), []); const O = (0, o.useCallback)(((e) => { t(f.cW.setLimit(e)), t((0, f.kY)()); }), [t]); const _ = (0, o.useCallback)(((e) => { t(f.cW.setPage(e)), t((0, f.kY)()); }), [t]); return (0, o.useEffect)((() => { C((v == null ? void 0 : v.data) || []); }), [v]), (0, o.useEffect)((() => { const e = (0, p.fI)(w, (v == null ? void 0 : v.data) || []); C(e || []); }), [v, w]), (0, o.useEffect)((() => { t((0, f.kY)()); }), [t]), (0, a.jsx)(l.B, {
                title: 'LMS - Специальность',
                children: (0, a.jsxs)(r.W, {
                    reducers: M,
                    removeAfterUnmount: !0,
                    children: [(0, a.jsxs)('div', {
                        children: [(0, a.jsxs)('div', {
                            className: 'page-settings '.concat(!1),
                            children: [(0, a.jsx)(s.o, {
                                value: w, onChange: A, searchText: 'Поиск по наименованию', error: x, isLoading: m,
                            }), (0, a.jsx)(i.X, {
                                onlyAdding: !0, setVisibleAddNewField: g, addingModalText: 'Добавить специальность', error: x, isLoading: m, children: (0, a.jsx)(R, { visible: h, setVisible: g }),
                            })],
                        }), (0, a.jsx)(f.dF, { data: k || [], exportDisabled: !0 }), (0, a.jsxs)('div', {
                            className: 'page-table-settings',
                            children: [(0, a.jsx)(d.K, {
                                data: k || [], onChange: O, onChangePage: _, paginationData: v == null ? void 0 : v.pagination, itemsLimit: b, withRecords: !0, isLoading: m, error: x,
                            }), (0, a.jsx)(d.N, {
                                data: k || [], onChange: _, itemsPage: y, isLoading: m, error: x, paginationData: v == null ? void 0 : v.pagination,
                            })],
                        })],
                    }), x && (0, a.jsx)(T.d, { error: x })],
                }),
            });
        };
    },
    5375: (e, t, n) => { n.d(t, { d: () => o }); const a = n(5893); const r = n(7294); const s = n(530); const i = n(4475); function l(e) { return l = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) { return typeof e; } : function (e) { return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e; }, l(e); } var o = (0, r.memo)(((e) => { const t = e.error; const n = (0, r.useState)(); const o = n[0]; const c = n[1]; const u = (0, r.useRef)(null); return (0, r.useEffect)((() => { (typeof t === 'string' && t === 'timeout' || l(t) === 'object' && t.status === 500 && t.error === 'timeout') && c(s.F.error('Соединение с сервером потеряно')); }), [t]), (0, a.jsx)(i.KF, { ref: u, push: o, placement: 'top-end' }); })); },
    7687: (e, t, n) => {
        n.d(t, { K: () => N, N: () => I }); let a; const r = n(5893); const s = n(4387); const i = n(7294); const l = ['25', '50', '100', '200', '500']; const o = n(1138); const c = n(4809); const u = n(1353); const d = n(8896); function f() { return f = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const a in n)Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]); } return e; }, f.apply(this, arguments); } const p = function (e) { return i.createElement('svg', f({ width: 20, height: 20, xmlns: 'http://www.w3.org/2000/svg' }, e), a || (a = i.createElement('path', { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M8.565 9.731 5.229 6.396A.79.79 0 0 1 5 5.813a.79.79 0 0 1 .23-.584A.79.79 0 0 1 5.811 5a.79.79 0 0 1 .584.23l3.25 3.25 3.25-3.25a.79.79 0 0 1 .583-.23.79.79 0 0 1 .584.23.79.79 0 0 1 .229.582.79.79 0 0 1-.23.584l-3.33 3.331 3.335 3.335a.79.79 0 0 1 .229.584.79.79 0 0 1-.23.583.79.79 0 0 1-.583.23.79.79 0 0 1-.583-.23l-3.25-3.25-3.25 3.25a.79.79 0 0 1-.583.23.79.79 0 0 1-.584-.23.79.79 0 0 1-.229-.583.79.79 0 0 1 .23-.584l3.33-3.33Z' }))); }; const h = n(9161); const g = n(8863); const v = 'lJhrM3nh'; const m = 'zZgj2JgW'; let x = function () { return x = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, x.apply(this, arguments); }; const b = (0, i.memo)(((e) => {
            let t; const n = e.className; const a = e.items; const l = e.value; const o = e.onChange; const f = (0, i.useState)(l); const b = f[0]; const y = f[1]; const j = (0, i.useState)(!1); const w = j[0]; const N = j[1]; const S = (0, i.useRef)(null); (0, g.p)(S, N); const k = (0, i.useCallback)((() => { N(!0); }), []); const C = (0, i.useCallback)((() => { N(!1); }), []); const A = (0, i.useCallback)(((e) => { o(e), y(e), C(); }), [C, o]); return (0, r.jsxs)('div', {
                className: (0, s.A)('eXu4wq7K', {}, [n]),
                ref: S,
                children: [!w && (0, r.jsxs)(h.zx, {
                    className: 'bAUrWG2D', theme: h.bn.CLEAR, onClick: k, children: [(0, r.jsx)(c.xv, { weight: c.fs.SEMIBOLD, className: v, children: b }), (0, r.jsx)(u.J, { Svg: d.Z })],
                }), (0, r.jsx)('div', {
 className: (0, s.A)('Jh9c6KnL', (t = {}, t.fpG6Af4B = w, t), []),
style: { top: ''.concat(-40 * a.indexOf(b), 'px') },
children: a.map(((e) => (b === e ? (0, r.jsxs)('div', { className: (0, s.A)(m, {}, ['rKHhU8sR']), children: [(0, r.jsx)(c.xv, { weight: c.fs.SEMIBOLD, className: v, children: e }), (0, r.jsx)(h.zx, {
 theme: h.bn.CLEAR, className: 'HkrPDu6E', onClick: C, children: (0, r.jsx)(u.J, { Svg: p }) 
})] }, e) : (0, r.jsx)(h.zx, {
                    theme: h.bn.CLEAR, className: m, size: h.qE.XS, onClick() { A(e); }, children: (0, r.jsx)(c.xv, { weight: c.fs.SEMIBOLD, className: v, children: e }), 
}, e)))) 
})],
            });
        })); const y = {
            LimitShow: 'eQ6pERU2', selectLimit: 'hKaByxY3', limitSelectWrapper: 'XhlPZwOr', recordsText: 'Shn48cNg', textResults: 'MlwyceC_',
        }; let j; let w = function () { return w = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, w.apply(this, arguments); }; var N = (0, i.memo)(((e) => {
            const t = e.className; const n = e.onChange; const a = e.itemsLimit; const i = e.withRecords; const u = e.paginationData; const d = e.isLoading; const f = e.error; const p = e.data; const h = e.onChangePage; const g = (u == null ? void 0 : u.current_page) ? (u.current_page - 1) * Number(a) + 1 : 0; const v = (u == null ? void 0 : u.current_page) ? u.current_page * Number(a) : 0; return d ? (0, r.jsx)(o.O, {
                width: '100%', height: 40, border: '6px', className: y.skeleton,
            }) : f ? (0, r.jsx)('div', {}) : p.length ? (0, r.jsxs)('div', { className: (0, s.A)(y.LimitShow, {}, [t]), children: [i && g && v && (0, r.jsxs)(c.xv, { theme: c.lg.LIGHT, className: y.recordsText, children: ['Записи', ' ', g, ' ', '-', ' ', v, ' ', '| Всего', ' ', u == null ? void 0 : u.total_records] }), (0, r.jsxs)('div', { className: y.limitSelectWrapper, children: [(0, r.jsx)(c.xv, { theme: c.lg.LIGHT, className: y.textResults, children: 'Результатов на странице' }), (0, r.jsx)(b, { items: l, value: a, onChange(e) { n(e), h('1'); } })] })] }) : (0, r.jsx)('div', {});
        })); const S = n(4475); function k() { return k = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const a in n)Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]); } return e; }, k.apply(this, arguments); } const C = function (e) {
            return i.createElement('svg', k({
                width: 30, height: 30, fill: 'none', xmlns: 'http://www.w3.org/2000/svg',
            }, e), j || (j = i.createElement('path', { d: 'M9.514 5.763A1.739 1.739 0 0 0 9 6.994a1.73 1.73 0 0 0 .514 1.231l6.822 6.777-6.822 6.776a1.735 1.735 0 0 0 0 2.462 1.759 1.759 0 0 0 2.48 0l8.07-8.016a1.74 1.74 0 0 0 .514-1.231 1.73 1.73 0 0 0-.514-1.231l-8.07-8.016c-.669-.664-1.794-.664-2.48.017Z', fill: '#EB8247' })));
        }; let A; function O() { return O = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const a in n)Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]); } return e; }, O.apply(this, arguments); } const _ = function (e) {
            return i.createElement('svg', O({
                width: 30, height: 30, fill: 'none', xmlns: 'http://www.w3.org/2000/svg',
            }, e), A || (A = i.createElement('path', { d: 'M6.175 8.2a1.875 1.875 0 0 1 2.65-2.65l8.125 8.125a1.875 1.875 0 0 1 0 2.65L8.825 24.45a1.875 1.875 0 0 1-2.65-2.65l6.8-6.8-6.8-6.8Zm18.2 16.8a1.875 1.875 0 0 0 1.875-1.875V6.875a1.875 1.875 0 0 0-3.75 0v16.25c0 1.035.84 1.875 1.875 1.875Z', fill: '#EB8247' })));
        }; const E = 'ytJMbyx3'; const L = 'SRBkd4oW'; const B = '_DUi30wm'; let D = function () { return D = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, D.apply(this, arguments); }; const R = function (e, t, n) { if (n || arguments.length === 2) for (var a, r = 0, s = t.length; r < s; r++)!a && r in t || (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]); return e.concat(a || Array.prototype.slice.call(t)); }; var I = (0, i.memo)(((e) => {
            const t = e.className; const n = e.data; const a = e.isLoading; const i = e.error; const l = e.paginationData; const c = e.onChange; const d = e.itemsPage; return a ? (0, r.jsx)(o.O, {
                width: 250, height: 40, border: '6px', className: 'nlgg7yYk',
            }) : i || n.length === 0 ? (0, r.jsx)('div', {}) : (0, r.jsx)('div', {
                className: (0, s.A)('AuxB6Ddw', {}, [t]),
                children: (0, r.jsxs)(S.E7, {
                    'aria-label': 'TrainingSchedule pagination',
                    align: 'end',
                    children: [(l == null ? void 0 : l.prev_page) && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(S.tn, { onClick() { c('1'); }, className: (0, s.A)(E, {}, [L]), children: (0, r.jsx)(u.J, { className: 'uBUXyeMF', Svg: _ }) }), (0, r.jsx)(S.tn, { onClick() { c(''.concat(+d - 1)); }, className: (0, s.A)(E, {}, [L]), children: (0, r.jsx)(u.J, { className: 'jKQ4PRf5', Svg: C }) })] }), (l == null ? void 0 : l.total_pages) ? (0, r.jsxs)(r.Fragment, {
                        children: [l.total_pages <= 7 && R([], Array(l.total_pages), !0).map(((e, t) => (0, r.jsx)(S.tn, {
                            className: (0, s.A)(E, {}, [B]), active: +d === t + 1, onClick() { c(''.concat(t + 1)); }, children: t + 1,
                        }, t))), l.total_pages > 7 && (0, r.jsxs)(r.Fragment, {
                            children: [R([], Array(l.total_pages), !0).map(((e, t) => {
                                if ((+d === t + 1 || +d + 1 === t + 1 || +d + 2 === t + 1) && +d !== l.total_pages && t + 1 !== l.total_pages && t + 2 !== l.total_pages && t + 3 !== l.total_pages) {
                                    return (0, r.jsx)(S.tn, {
                                        className: (0, s.A)(E, {}, [B]), active: +d === t + 1, onClick() { c(''.concat(t + 1)); }, children: t + 1,
                                    }, t);
                                }
                            })), l.total_pages === +d || l.total_pages - 1 == +d || l.total_pages - 2 == +d || l.total_pages - 2 - +d == 3 || l.total_pages - 2 - +d == 2 || l.total_pages - 2 - +d == 1 ? '' : (0, r.jsx)(S.tn, { className: (0, s.A)(E, {}, [B, 'JQSOdsCs']), onClick() { c(''.concat(+d + 1)); }, children: '...' }), R([], Array(l.total_pages), !0).map(((e, t) => {
                                if (l.total_pages - t + 1 == 4 || l.total_pages - t + 1 == 3 || l.total_pages - t + 1 == 2 || l.total_pages - t + 1 == 1) {
                                    return (0, r.jsx)(S.tn, {
                                        className: (0, s.A)(E, {}, [B]), active: +d === t + 1, onClick() { c(''.concat(t + 1)); }, children: t + 1,
                                    }, t);
                                }
                            }))],
                        })],
                    }) : (0, r.jsx)('div', {}), (l == null ? void 0 : l.next_page) && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(S.tn, { onClick() { c(''.concat(+d + 1)); }, className: (0, s.A)(E, {}, [L]), children: (0, r.jsx)(u.J, { Svg: C }) }), (0, r.jsx)(S.tn, { onClick() { c(''.concat(l == null ? void 0 : l.total_pages)); }, className: (0, s.A)(E, {}, [L]), children: (0, r.jsx)(u.J, { Svg: _ }) })] })],
                }),
            });
        }));
    },
}]);
