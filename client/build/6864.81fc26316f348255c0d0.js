!(function () { try { const e = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; const n = (new Error()).stack; n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = '68181fac-c5f7-4243-9f91-8ab958b813d8', e._sentryDebugIdIdentifier = 'sentry-dbid-68181fac-c5f7-4243-9f91-8ab958b813d8'); } catch (e) {} }()); const _global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; _global.SENTRY_RELEASE = { id: '45ee1168f5cf48e9753bace26323152d3b61cb67' }, (self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[6864], {
    3061: (e, n, t) => {
        t.r(n), t.d(n, { default: () => M }); const a = t(5893); const r = t(1150); const i = t(9649); const s = t(5306); const o = t(918); const l = t(7294); const c = t(6458); const u = t(5461); const d = t(7687); const f = t(3282); const h = t(7730); const g = t(7168); const p = t(1821); const v = function (e) { let n; return (n = e.addEduLanguage) === null || void 0 === n ? void 0 : n.data.title; }; const b = (0, g.hg)('eduLanguages/addEduLanguage', ((e, n) => {
            return t = void 0, a = void 0, i = function () {
                let e; let t; let a; let r; let i; let s; let o; let l; return (function (e, n) {
                    let t; let a; let r; let i; let s = {
                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                    }; return i = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function o(o) { return function (l) { return (function (o) { if (t) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, o[0] && (s = 0)), s;) try { if (t = 1, a && (r = 2 & o[0] ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, o[1])).done) return r; switch (a = 0, r && (o = [2 & o[0], r.value]), o[0]) { case 0: case 1: r = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, a = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < r[1]) { s.label = r[1], r = o; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(o); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }o = n.call(e, s); } catch (e) { o = [6, e], a = 0; } finally { t = r = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                }(this, ((c) => { switch (c.label) { case 0: e = n.rejectWithValue, t = n.extra, a = n.dispatch, r = n.getState, i = v(r()), s = { name: i }, c.label = 1; case 1: return c.trys.push([1, 3,, 4]), [4, t.api.post('/college/study-languages/', s)]; case 2: return o = c.sent(), a((0, p.k)()), a(y.clearData()), [2, o.data]; case 3: return l = c.sent(), [2, e({ errors: l.response.data.errors, status: l.response.status })]; case 4: return [2]; } })));
            }, new ((r = void 0) || (r = Promise))(((e, n) => { function s(e) { try { l(i.next(e)); } catch (e) { n(e); } } function o(e) { try { l(i.throw(e)); } catch (e) { n(e); } } function l(n) { let t; n.done ? e(n.value) : (t = n.value, t instanceof r ? t : new r(((e) => { e(t); }))).then(s, o); }l((i = i.apply(t, a || [])).next()); })); let t; let a; let r; let i;
        })); const x = (0, g.oM)({
            name: 'addEduLanguage', initialState: { data: { title: null }, isLoading: !1, errors: void 0 }, reducers: { setTitle(e, n) { e.data.title = n.payload; }, clearData(e) { e.data = { title: null }, e.errors = void 0; } }, extraReducers(e) { e.addCase(b.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(b.fulfilled, ((e) => { e.isLoading = !1; })).addCase(b.rejected, ((e, n) => { e.isLoading = !1, e.errors = n.payload; })); },
        }); var y = x.actions; const m = x.reducer; const j = t(4387); const w = t(4475); const k = t(2308); const L = t(5044); const S = t(3280); const N = t(4809); const C = t(1385); const E = t(530); const D = t(9161); const B = function (e) { let n; return (n = e.addEduLanguage) === null || void 0 === n ? void 0 : n.errors; }; const I = {
            tabBtn: 'uf4BBfk_', tabsButtonsBlock: 'k0K4uUTK', title: 'GaCkxTl_', settings: 'YBgiehru', newAddField: 'qn802UsF', tabBlock: 'DMlZUZm4', form: 'ShHA0YjV', footerBtn: 'Wm0oCQAZ', greenBtn: 'tOqW0aKC', footer: 'FonqWfe1', message: 'HHaSamxD', messageIcon: 'dYdn2mbt',
        }; let T = function () { return T = Object.assign || function (e) { for (var n, t = 1, a = arguments.length; t < a; t++) for (const r in n = arguments[t])Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]); return e; }, T.apply(this, arguments); }; const A = function (e) {
            const n = e.className; const t = e.visible; const r = e.setVisible; const i = (0, u.T)(); const s = (0, l.useState)(!1); const o = s[0]; const d = s[1]; const f = (0, l.useState)(!1); const h = f[0]; const g = f[1]; const p = (0, l.useState)(); const x = p[0]; const m = p[1]; const A = (0, l.useRef)(null); const F = (0, c.v9)(v); const _ = (0, c.v9)(B); const O = (0, l.useCallback)((() => { r(!1); }), [r]); const V = function () { O(), d(!1), g(!1); }; return (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(w.Tk, {
                    className: (0, j.A)(I.AddEduLanguage, {}, [n]),
                    visible: t,
                    onClose: O,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, a.jsxs)(w.lx, {
                        className: (0, j.A)(I.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: o,
                        onSubmit(e) {
                            return n = void 0, t = void 0, r = function () {
                                let n; let t; return (function (e, n) {
                                    let t; let a; let r; let i; let s = {
                                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                                    }; return i = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function o(o) { return function (l) { return (function (o) { if (t) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, o[0] && (s = 0)), s;) try { if (t = 1, a && (r = 2 & o[0] ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, o[1])).done) return r; switch (a = 0, r && (o = [2 & o[0], r.value]), o[0]) { case 0: case 1: r = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, a = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < r[1]) { s.label = r[1], r = o; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(o); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }o = n.call(e, s); } catch (e) { o = [6, e], a = 0; } finally { t = r = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                                }(this, ((a) => { switch (a.label) { case 0: return e.preventDefault(), n = e.currentTarget, g(!n.checkValidity()), n.checkValidity() || e.stopPropagation(), d(!0), n.checkValidity() ? F ? [4, i(b())] : [3, 2] : [3, 3]; case 1: return (t = a.sent()).meta.requestStatus === 'fulfilled' && (m(E.F.success('Язык обучения добавлен')), V()), t.meta.requestStatus === 'rejected' && g(!0), [3, 3]; case 2: g(!0), a.label = 3; case 3: return [2]; } })));
                            }, new ((a = void 0) || (a = Promise))(((e, i) => { function s(e) { try { l(r.next(e)); } catch (e) { i(e); } } function o(e) { try { l(r.throw(e)); } catch (e) { i(e); } } function l(n) { let t; n.done ? e(n.value) : (t = n.value, t instanceof a ? t : new a(((e) => { e(t); }))).then(s, o); }l((r = r.apply(n, t || [])).next()); })); let n; let t; let a; let r;
                        },
                        children: [(0, a.jsx)(w.p0, { children: (0, a.jsx)(w.fl, { children: 'Добавление языка обучения' }) }), (0, a.jsx)(w.sD, { children: (0, a.jsx)('div', { className: I.tab, children: (0, a.jsx)('div', { className: I.tabBlock, children: (0, a.jsx)('div', { className: I.settings, children: (0, a.jsxs)('div', { className: I.newAddField, children: [(0, a.jsx)('h6', {className: I.newAddFieldTitle, children: "Наименование*"}), (0, a.jsx)(C.h, {
 type: 'text', placeholder: 'русский', feedbackValid: _ ? '' : 'Здорово!', invalid: !!_, feedbackInvalid: 'Введите корректные данные!', value: F || '', onChange (e) { i(y.setTitle(e.target.value)) }, required: !0 
})] }) }) }) }) }), (0, a.jsxs)(w.Ym, { className: I.footer, children: [(0, a.jsx)('div', { className: I.message, children: h && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(k.Z, { icon: L.D, customClassName: I.messageIcon }), (0, a.jsx)(N.xv, { size: N.yH.M, weight: N.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, a.jsxs)('div', { className: I.footerBtns, children: [(0, a.jsx)(D.zx, {
 theme: D.bn.OUTLINE, className: I.footerBtn, onClick: V, children: (0, a.jsx)(N.xv, { size: N.yH.XS, weight: N.fs.SEMIBOLD, children: 'Отмена'}) 
}), (0, a.jsxs)(D.zx, { type: 'submit', className: (0, j.A)(I.footerBtn, {}, [I.greenBtn]), children: [(0, a.jsx)(N.xv, { size: N.yH.XS, weight: N.fs.SEMIBOLD, children: 'Добавить'}), (0, a.jsx)(k.Z, { icon: S.q, className: I.btnIcon })] })] })] })],
                    }),
                }), (0, a.jsx)(w.KF, { ref: A, push: x, placement: 'top-end' })],
            });
        }; const F = t(675); const _ = t(442); const O = t(5375); const V = t(2556); let P = function () { return P = Object.assign || function (e) { for (var n, t = 1, a = arguments.length; t < a; t++) for (const r in n = arguments[t])Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]); return e; }, P.apply(this, arguments); }; const H = {
            eduLanguages: f.Fg, eduLanguagesDetail: F.rv, addEduLanguage: m, editEduLanguage: _.HK,
        }; const M = function (e) {
            e.className; const n = (0, u.T)(); const t = (0, l.useState)(!1); const g = t[0]; const p = t[1]; const v = (0, c.v9)(f.hG); const b = (0, c.v9)(f.Pe); const x = (0, c.v9)(f.xr); const y = (0, c.v9)(f._V); const m = (0, c.v9)(f.QI); const j = (0, l.useState)(''); const w = j[0]; const k = j[1]; const L = (0, l.useState)(); const S = L[0]; const N = L[1]; const C = (0, l.useCallback)(((e) => { k(e); }), []); const E = (0, l.useCallback)(((e) => { n(f.aX.setLimit(e)), n((0, f.kI)()); }), [n]); const D = (0, l.useCallback)(((e) => { n(f.aX.setPage(e)), n((0, f.kI)()); }), [n]); return (0, l.useEffect)((() => { N((v == null ? void 0 : v.data) || []); }), [v]), (0, l.useEffect)((() => { const e = (0, h.DF)(w, (v == null ? void 0 : v.data) || []); N(e || []); }), [v, w]), (0, l.useEffect)((() => { n((0, f.kI)()); }), [n]), (0, a.jsx)(o.B, {
                title: 'LMS - Язык обучения',
                children: (0, a.jsxs)(r.W, {
                    reducers: H,
                    removeAfterUnmount: !0,
                    children: [(0, a.jsxs)('div', {
                        children: [(0, a.jsxs)('div', {
                            className: 'page-settings '.concat(!1),
                            children: [(0, a.jsx)(i.o, {
                                value: w, onChange: C, searchText: 'Поиск по наименованию', error: x, isLoading: b,
                            }), (0, a.jsx)(s.X, {
                                onlyAdding: !0, setVisibleAddNewField: p, addingModalText: 'Добавить язык обучения', error: x, isLoading: b, references: V.x, referencesTitle: 'Справочники', children: (0, a.jsx)(A, { visible: g, setVisible: p }),
                            })],
                        }), (0, a.jsx)(f.nC, { data: S || [], exportDisabled: !0 }), (0, a.jsxs)('div', {
                            className: 'page-table-settings',
                            children: [(0, a.jsx)(d.K, {
                                data: S || [], onChange: E, onChangePage: D, paginationData: v == null ? void 0 : v.pagination, itemsLimit: y, withRecords: !0, isLoading: b, error: x,
                            }), (0, a.jsx)(d.N, {
                                data: S || [], onChange: D, itemsPage: m, isLoading: b, error: x, paginationData: v == null ? void 0 : v.pagination,
                            })],
                        })],
                    }), x && (0, a.jsx)(O.d, { error: x })],
                }),
            });
        };
    },
}]);
