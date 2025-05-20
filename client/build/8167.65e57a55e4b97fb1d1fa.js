!(function () { try { const e = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; const t = (new Error()).stack; t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = '7801fa21-9769-4323-9274-24abf9e6a696', e._sentryDebugIdIdentifier = 'sentry-dbid-7801fa21-9769-4323-9274-24abf9e6a696'); } catch (e) {} }()); const _global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; _global.SENTRY_RELEASE = { id: '45ee1168f5cf48e9753bace26323152d3b61cb67' }, (self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[8167], {
    7152: (e, t, n) => { n.d(t, { l: () => a }); var a = ['512 512', "<path fill='var(--ci-primary-color, currentColor)' d='M29.663,482.25l.087.087a24.847,24.847,0,0,0,17.612,7.342,25.178,25.178,0,0,0,8.1-1.345l142.006-48.172,272.5-272.5A88.832,88.832,0,0,0,344.334,42.039l-272.5,272.5L23.666,456.541A24.844,24.844,0,0,0,29.663,482.25Zm337.3-417.584a56.832,56.832,0,0,1,80.371,80.373L411.5,180.873,331.127,100.5ZM99.744,331.884,308.5,123.127,388.873,203.5,180.116,412.256,58.482,453.518Z' class='ci-primary'/>"]; },
    1350: (e, t, n) => { n.d(t, { s: () => a }); var a = ['512 512', "<polygon fill='var(--ci-primary-color, currentColor)' points='43.314 130.51 95.196 78.627 95.196 496.196 127.196 496.196 127.196 78.627 179.079 130.51 201.706 107.883 111.196 17.372 20.686 107.883 43.314 130.51' class='ci-primary'/><rect width='120' height='32' x='184' y='160' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='184' height='32' x='184' y='232' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='248' height='32' x='184' y='304' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='312' height='32' x='184' y='376' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/>"]; },
    8795: (e, t, n) => { n.d(t, { w: () => a }); var a = ['512 512', "<rect width='120' height='32' x='184' y='288' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='184' height='32' x='184' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='248' height='32' x='184' y='144' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='312' height='32' x='184' y='72' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='95.196 16 95.196 433.568 43.313 381.686 20.687 404.313 111.196 494.823 201.705 404.313 179.078 381.687 127.196 433.568 127.196 16 95.196 16' class='ci-primary'/>"]; },
    6287: (e, t, n) => {
        n.r(t), n.d(t, { default: () => Ce }); const a = n(5893); const i = n(1150); const r = n(9649); const o = n(5306); const l = n(918); const s = n(7294); const c = n(6458); const u = n(5461); const d = n(7687); const f = n(7168); const h = n(1759); const v = n(121); const p = function (e) { let t; return (t = e.nationalities) === null || void 0 === t ? void 0 : t.page; }; const y = function (e) { let t; return (t = e.nationalities) === null || void 0 === t ? void 0 : t.limit; }; const m = (0, f.hg)('students/fetchNationalities', ((e, t) => {
            return n = void 0, a = void 0, r = function () {
                let e; let n; let a; let i; let r; let o; return (function (e, t) {
                    let n; let a; let i; let r; let o = {
                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                    }; return r = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function l(l) { return function (s) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, l[0] && (o = 0)), o;) try { if (n = 1, a && (i = 2 & l[0] ? a.return : l[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, l[1])).done) return i; switch (a = 0, i && (l = [2 & l[0], i.value]), l[0]) { case 0: case 1: i = l; break; case 4: return o.label++, { value: l[1], done: !1 }; case 5: o.label++, a = l[1], l = [0]; continue; case 7: l = o.ops.pop(), o.trys.pop(); continue; default: if (!((i = (i = o.trys).length > 0 && i[i.length - 1]) || l[0] !== 6 && l[0] !== 2)) { o = 0; continue; } if (l[0] === 3 && (!i || l[1] > i[0] && l[1] < i[3])) { o.label = l[1]; break; } if (l[0] === 6 && o.label < i[1]) { o.label = i[1], i = l; break; } if (i && o.label < i[2]) { o.label = i[2], o.ops.push(l); break; }i[2] && o.ops.pop(), o.trys.pop(); continue; }l = t.call(e, o); } catch (e) { l = [6, e], a = 0; } finally { n = i = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, s])); }; }
                }(this, ((l) => {
                    switch (l.label) {
                    case 0: e = t.rejectWithValue, n = t.extra, a = t.getState, i = {
                        pageSelector: p, limitSelector: y, sortFieldSelector: h.DU, sortOrderSelector: h.Qg,
                    }, r = (0, v.o)('/college/nationalities', i, a()), l.label = 1; case 1: return l.trys.push([1, 3,, 4]), [4, n.api.get(r)]; case 2: return [2, l.sent().data]; case 3: return (o = l.sent()).message === 'Failed to fetch' ? [2, e({ status: 500, error: 'timeout' })] : [2, e({ status: o.response.status, error: o.response.data.message })]; case 4: return [2];
                    }
                })));
            }, new ((i = void 0) || (i = Promise))(((e, t) => { function o(e) { try { s(r.next(e)); } catch (e) { t(e); } } function l(e) { try { s(r.throw(e)); } catch (e) { t(e); } } function s(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i(((e) => { e(n); }))).then(o, l); }s((r = r.apply(n, a || [])).next()); })); let n; let a; let i; let r;
        })); const g = n(4387); const x = n(1138); const b = n(4809); const j = n(4475); const w = n(2308); const N = n(1350); const k = n(8795); const S = n(968); const C = n(7152); const B = n(1783); const A = (0, f.hg)('nationalities/fetchNationalityDetail', ((e, t) => {
            return n = void 0, a = void 0, r = function () {
                let n; let a; let i; let r; return (function (e, t) {
                    let n; let a; let i; let r; let o = {
                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                    }; return r = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function l(l) { return function (s) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, l[0] && (o = 0)), o;) try { if (n = 1, a && (i = 2 & l[0] ? a.return : l[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, l[1])).done) return i; switch (a = 0, i && (l = [2 & l[0], i.value]), l[0]) { case 0: case 1: i = l; break; case 4: return o.label++, { value: l[1], done: !1 }; case 5: o.label++, a = l[1], l = [0]; continue; case 7: l = o.ops.pop(), o.trys.pop(); continue; default: if (!((i = (i = o.trys).length > 0 && i[i.length - 1]) || l[0] !== 6 && l[0] !== 2)) { o = 0; continue; } if (l[0] === 3 && (!i || l[1] > i[0] && l[1] < i[3])) { o.label = l[1]; break; } if (l[0] === 6 && o.label < i[1]) { o.label = i[1], i = l; break; } if (i && o.label < i[2]) { o.label = i[2], o.ops.push(l); break; }i[2] && o.ops.pop(), o.trys.pop(); continue; }l = t.call(e, o); } catch (e) { l = [6, e], a = 0; } finally { n = i = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, s])); }; }
                }(this, ((o) => { switch (o.label) { case 0: n = t.rejectWithValue, a = t.extra, i = t.dispatch, o.label = 1; case 1: return o.trys.push([1, 3,, 4]), [4, a.api.get('/college/nationalities/'.concat(e))]; case 2: return r = o.sent(), i(L.setNationalityData(r.data)), [2, r.data]; case 3: return o.sent().message === 'Failed to fetch' ? [2, n('timeout')] : [2, n('ERROR')]; case 4: return [2]; } })));
            }, new ((i = void 0) || (i = Promise))(((e, t) => { function o(e) { try { s(r.next(e)); } catch (e) { t(e); } } function l(e) { try { s(r.throw(e)); } catch (e) { t(e); } } function s(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i(((e) => { e(n); }))).then(o, l); }s((r = r.apply(n, a || [])).next()); })); let n; let a; let i; let r;
        })); const O = function (e) { let t; let n; return (n = (t = e.editNationality) === null || void 0 === t ? void 0 : t.newFields) === null || void 0 === n ? void 0 : n.title; }; const _ = (0, f.hg)('nationalities/editNationality', ((e, t) => {
            return n = void 0, a = void 0, r = function () {
                let n; let a; let i; let r; let o; let l; let s; let c; return (function (e, t) {
                    let n; let a; let i; let r; let o = {
                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                    }; return r = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function l(l) { return function (s) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, l[0] && (o = 0)), o;) try { if (n = 1, a && (i = 2 & l[0] ? a.return : l[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, l[1])).done) return i; switch (a = 0, i && (l = [2 & l[0], i.value]), l[0]) { case 0: case 1: i = l; break; case 4: return o.label++, { value: l[1], done: !1 }; case 5: o.label++, a = l[1], l = [0]; continue; case 7: l = o.ops.pop(), o.trys.pop(); continue; default: if (!((i = (i = o.trys).length > 0 && i[i.length - 1]) || l[0] !== 6 && l[0] !== 2)) { o = 0; continue; } if (l[0] === 3 && (!i || l[1] > i[0] && l[1] < i[3])) { o.label = l[1]; break; } if (l[0] === 6 && o.label < i[1]) { o.label = i[1], i = l; break; } if (i && o.label < i[2]) { o.label = i[2], o.ops.push(l); break; }i[2] && o.ops.pop(), o.trys.pop(); continue; }l = t.call(e, o); } catch (e) { l = [6, e], a = 0; } finally { n = i = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, s])); }; }
                }(this, ((u) => { switch (u.label) { case 0: n = t.rejectWithValue, a = t.extra, i = t.dispatch, r = t.getState, o = O(r()), l = { title: o }, u.label = 1; case 1: return u.trys.push([1, 3,, 4]), [4, a.api.put('/college/nationalities/'.concat(e), l)]; case 2: return s = u.sent(), i(m()), i(A(e)), [2, s.data]; case 3: return c = u.sent(), [2, n({ errors: c.response.data.errors, status: c.response.status })]; case 4: return [2]; } })));
            }, new ((i = void 0) || (i = Promise))(((e, t) => { function o(e) { try { s(r.next(e)); } catch (e) { t(e); } } function l(e) { try { s(r.throw(e)); } catch (e) { t(e); } } function s(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i(((e) => { e(n); }))).then(o, l); }s((r = r.apply(n, a || [])).next()); })); let n; let a; let i; let r;
        })); const D = (0, f.oM)({
            name: 'editNationality',
            initialState: {
                data: void 0, newFields: void 0, isLoading: !1, errors: void 0,
            },
            reducers: { setNationalityData(e, t) { t.payload && (e.data = t.payload, e.newFields = { title: e.data.nationality }); }, setTitle(e, t) { e.newFields.title = t.payload; }, clearNewFields(e) { let t; e.newFields = { title: ((t = e.data) === null || void 0 === t ? void 0 : t.nationality) || null }, e.errors = void 0; } },
            extraReducers(e) { e.addCase(_.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(_.fulfilled, ((e) => { e.isLoading = !1; })).addCase(_.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })); },
        }); var L = D.actions; const E = D.reducer; const T = n(5044); const F = n(8263); const R = n(530); const I = n(1385); const P = function (e) { let t; return (t = e.nationalityDetail) === null || void 0 === t ? void 0 : t.error; }; const M = function (e) { let t; return (t = e.nationalityDetail) === null || void 0 === t ? void 0 : t.isLoading; }; const V = function (e) { let t; return (t = e.nationalityDetail) === null || void 0 === t ? void 0 : t.data; }; const Z = (0, f.oM)({
            name: 'nationalityDetail', initialState: { data: void 0, isLoading: !1, error: void 0 }, reducers: {}, extraReducers(e) { e.addCase(A.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(A.fulfilled, ((e, t) => { e.isLoading = !1, e.data = t.payload; })).addCase(A.rejected, ((e, t) => { e.isLoading = !1, e.error = t.payload; })); },
        }); const H = (Z.actions, Z.reducer); const z = function (e) { let t; return (t = e.editNationality) === null || void 0 === t ? void 0 : t.isLoading; }; const Y = function (e) { let t; return (t = e.editNationality) === null || void 0 === t ? void 0 : t.errors; }; const K = {
            tabBtn: 'jTi5hiyx', tabsButtonsBlock: 'DT8Zms3q', title: 'etcFdDCY', footerBtn: 'K2Cx9twj', greenBtn: 'ybLRYlbP', redBtn: 'yO7KvvoR', settings: 'pVxA7o_N', newAddField: 'sZWD6yU6', tabBlock: 'W50Ni_fO', form: 'cIavKz6A', footer: 'wfRH325j', message: 'eauxURdu', messageIcon: 'iWoyPv95',
        }; let U = function () { return U = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, U.apply(this, arguments); }; const W = function (e) {
            const t = e.className; const n = e.visible; const i = e.setVisible; const r = e.nationalityId; const o = e.onDeleteNationality; const l = (0, u.T)(); const d = (0, s.useState)(); const f = d[0]; const h = d[1]; const v = (0, s.useRef)(null); const p = (0, s.useState)(!1); const y = p[0]; const m = p[1]; const N = (0, s.useState)(!1); const k = N[0]; const S = N[1]; const C = (0, c.v9)(V); const D = (0, c.v9)(M); const E = (0, c.v9)(P); const Z = (0, c.v9)(z); const H = (0, c.v9)(O); const W = (0, c.v9)(Y); (0, s.useEffect)((() => { r && l(A(r)); }), [l, r]); let G; const J = function () { i(!1), m(!1), S(!1); }; const q = function () { J(), l(L.clearNewFields()); }; return G = Z || D ? (0, a.jsx)(x.O, { width: '100%', height: 80 }) : E ? (0, a.jsx)(b.xv, {
                theme: b.lg.ERROR, size: b.yH.M, weight: b.fs.SEMIBOLD, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, a.jsx)('div', {
                className: K.tab,
                children: (0, a.jsx)('div', {
                    className: K.tabBlock,
                    children: (0, a.jsx)('div', {
                        className: K.settings,
                        children: (0, a.jsxs)('div', {
                            className: K.newAddField,
                            children: [(0, a.jsx)('h6', { className: K.newAddFieldTitle, children: 'Наименование' }), (0, a.jsx)(I.h, {
                                type: 'text', placeholder: 'казахи', feedbackValid: W ? '' : 'Здорово!', invalid: !!W, feedbackInvalid: 'Введите корректные данные', value: H || '', onChange(e) { l(L.setTitle(e.target.value)); },
                            })], 
})
                    }), 
})
            }), (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(j.Tk, {
                    className: (0, g.A)(K.EditNationality, {}, [t]),
                    visible: n,
                    onClose: J,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, a.jsxs)(j.lx, {
                        className: (0, g.A)(K.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: y,
                        onSubmit(e) {
                            return t = void 0, n = void 0, i = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let a; let i; let r; let o = {
                                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                                    }; return r = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function l(l) { return function (s) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, l[0] && (o = 0)), o;) try { if (n = 1, a && (i = 2 & l[0] ? a.return : l[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, l[1])).done) return i; switch (a = 0, i && (l = [2 & l[0], i.value]), l[0]) { case 0: case 1: i = l; break; case 4: return o.label++, { value: l[1], done: !1 }; case 5: o.label++, a = l[1], l = [0]; continue; case 7: l = o.ops.pop(), o.trys.pop(); continue; default: if (!((i = (i = o.trys).length > 0 && i[i.length - 1]) || l[0] !== 6 && l[0] !== 2)) { o = 0; continue; } if (l[0] === 3 && (!i || l[1] > i[0] && l[1] < i[3])) { o.label = l[1]; break; } if (l[0] === 6 && o.label < i[1]) { o.label = i[1], i = l; break; } if (i && o.label < i[2]) { o.label = i[2], o.ops.push(l); break; }i[2] && o.ops.pop(), o.trys.pop(); continue; }l = t.call(e, o); } catch (e) { l = [6, e], a = 0; } finally { n = i = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, s])); }; }
                                }(this, ((a) => { switch (a.label) { case 0: return e.preventDefault(), t = e.currentTarget, S(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), m(!0), t.checkValidity() ? (C == null ? void 0 : C.nationality) !== H ? [3, 1] : (h(R.F.error('Для сохранения вы должны внести изменения!')), [3, 3]) : [3, 3]; case 1: return [4, l(_(r))]; case 2: (n = a.sent()).meta.requestStatus === 'fulfilled' && (h(R.F.success('Информация о национальности успешно обновлена')), q()), n.meta.requestStatus === 'rejected' && S(!0), a.label = 3; case 3: return [2]; } })));
                            }, new ((a = void 0) || (a = Promise))(((e, r) => { function o(e) { try { s(i.next(e)); } catch (e) { r(e); } } function l(e) { try { s(i.throw(e)); } catch (e) { r(e); } } function s(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(o, l); }s((i = i.apply(t, n || [])).next()); })); let t; let n; let a; let i;
                        },
                        children: [(0, a.jsx)(j.p0, { children: Z || D ? (0, a.jsx)(x.O, { width: 200, height: 30 }) : (0, a.jsxs)(j.fl, { children: ['Изменение национальности №', C == null ? void 0 : C.id_nationality] }) }), (0, a.jsx)(j.sD, { children: G }), (0, a.jsxs)(j.Ym, { className: K.footer, children: [(0, a.jsx)('div', { className: K.message, children: k && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(w.Z, { icon: T.D, customClassName: K.messageIcon }), (0, a.jsx)(b.xv, { size: b.yH.M, weight: b.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, a.jsxs)('div', { className: K.footerBtns, children: [(0, a.jsx)(j.u5, {
 color: 'primary', variant: 'outline', className: K.footerBtn, onClick: q, children: 'Отмена' }), (0, a.jsxs)(j.u5, {
 color: 'danger', className: (0, g.A)(K.footerBtn, {}, [K.redBtn]), onClick() { o(C), J(); }, disabled: D || Z || !!E, children: [(0, a.jsx)(w.Z, { icon: B.N, className: K.btnIcon }), 'Удалить'] 
}), (0, a.jsxs)(j.u5, {
 color: 'success', type: 'submit', className: (0, g.A)(K.footerBtn, {}, [K.greenBtn]), disabled: D || Z || !!E, children: [(0, a.jsx)(w.Z, { icon: F.F, className: K.btnIcon }), 'Сохранить'] 
})] })] })],
                    }),
                }), (0, a.jsx)(j.KF, { ref: v, push: f, placement: 'top-end' })],
            });
        }; const G = n(779); const J = {
            'modal-dialog': 'JTYahn9H', tabBtn: 'HsTJYEhf', tabsButtonsBlock: 'Aucx67wz', title: 'm5x5lS4p', footerBtn: 'fQbAXTqm', redBtn: 'thDw8oDj', settings: 'ACXhvzsd', newAddField: 'jvamv_vx', tabBlock: 'HT4xfIDc', footer: 'AKCs7atr', message: 'wTmargkn', messageIcon: 'LAZy8YUl', checkboxText: 'YET1bv5v',
        }; let q = function () { return q = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, q.apply(this, arguments); }; const X = function (e) {
            const t = e.className; const n = e.visible; const i = e.setVisible; const r = e.nationalityId; const o = e.onDeleteNationality; const l = e.onEditNationality; const d = (0, u.T)(); const f = (0, c.v9)(V); const h = (0, c.v9)(M); const v = (0, c.v9)(P); (0, s.useEffect)((() => { r && d(A(r)); }), [d, r]); let p; const y = function () { i(!1); }; return p = h ? (0, a.jsx)(x.O, { width: '100%', height: 120 }) : v ? (0, a.jsx)(b.xv, {
                theme: b.lg.ERROR, size: b.yH.M, weight: b.fs.BOLD, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, a.jsx)('div', { className: J.tab, children: (0, a.jsxs)('div', { className: J.tabBlock, children: [(0, a.jsx)('div', { className: J.settings, children: (0, a.jsxs)('div', { className: J.newAddField, children: [(0, a.jsx)('h6', { className: J.newAddFieldTitle, children: 'ID национальности' }), (0, a.jsx)(b.xv, { size: b.yH.S, weight: b.fs.BOLD, children: f == null ? void 0 : f.id_nationality })] }) }), (0, a.jsx)('div', { className: J.settings, children: (0, a.jsxs)('div', { className: J.newAddField, children: [(0, a.jsx)('h6', { className: J.newAddFieldTitle, children: 'Наименование' }), (0, a.jsx)(b.xv, { size: b.yH.S, weight: b.fs.BOLD, children: f == null ? void 0 : f.nationality })] }) })] }) }), (0, a.jsxs)(j.Tk, {
                className: (0, g.A)(J.ViewNationality, {}, [t, 'view-student-modal']),
                visible: n,
                onClose: y,
                alignment: 'center',
                children: [(0, a.jsx)(j.p0, { children: h ? (0, a.jsx)(x.O, { width: 200, height: 30 }) : (0, a.jsxs)(j.fl, { children: ['Национальность №', f == null ? void 0 : f.id_nationality] }) }), (0, a.jsx)(j.sD, { children: p }), (0, a.jsxs)(j.Ym, {
                    className: J.footer,
                    children: [(0, a.jsx)('div', {}), (0, a.jsxs)('div', {
                        className: J.footerBtns,
                        children: [(0, a.jsx)(j.u5, {
                            color: 'primary', variant: 'outline', className: J.footerBtn, onClick: y, children: 'Закрыть', 
}), (0, a.jsxs)(j.u5, {
                            color: 'danger', className: (0, g.A)(J.footerBtn, {}, [J.redBtn]), onClick() { o(f), y(); }, disabled: h || !!v, children: [(0, a.jsx)(w.Z, { icon: B.N, className: J.btnIcon }), 'Удалить'],
                        }), (0, a.jsxs)(j.u5, {
                            color: 'primary', className: J.footerBtn, onClick() { l(r), y(); }, disabled: h || !!v, children: [(0, a.jsx)(w.Z, { icon: G.C, className: J.btnIcon }), 'Редактировать'],
                        })], 
})], 
})],
            });
        }; const Q = { footerBtn: 'PjAHUYrB', redBtn: 'Bgvo7GjJ', deleteText: 'khnPpHaz' }; const $ = (0, f.hg)('nationalities/deleteNationality', ((e, t) => {
            return n = void 0, a = void 0, r = function () {
                let n; let a; let i; let r; return (function (e, t) {
                    let n; let a; let i; let r; let o = {
                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                    }; return r = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function l(l) { return function (s) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, l[0] && (o = 0)), o;) try { if (n = 1, a && (i = 2 & l[0] ? a.return : l[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, l[1])).done) return i; switch (a = 0, i && (l = [2 & l[0], i.value]), l[0]) { case 0: case 1: i = l; break; case 4: return o.label++, { value: l[1], done: !1 }; case 5: o.label++, a = l[1], l = [0]; continue; case 7: l = o.ops.pop(), o.trys.pop(); continue; default: if (!((i = (i = o.trys).length > 0 && i[i.length - 1]) || l[0] !== 6 && l[0] !== 2)) { o = 0; continue; } if (l[0] === 3 && (!i || l[1] > i[0] && l[1] < i[3])) { o.label = l[1]; break; } if (l[0] === 6 && o.label < i[1]) { o.label = i[1], i = l; break; } if (i && o.label < i[2]) { o.label = i[2], o.ops.push(l); break; }i[2] && o.ops.pop(), o.trys.pop(); continue; }l = t.call(e, o); } catch (e) { l = [6, e], a = 0; } finally { n = i = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, s])); }; }
                }(this, ((o) => { switch (o.label) { case 0: n = t.rejectWithValue, a = t.extra, i = t.dispatch, o.label = 1; case 1: return o.trys.push([1, 3,, 4]), [4, a.api.delete('/college/nationalities/'.concat(e))]; case 2: return r = o.sent(), i(m()), [2, r.data]; case 3: return o.sent().message === 'Failed to fetch' ? [2, n('timeout')] : [2, n('ERROR')]; case 4: return [2]; } })));
            }, new ((i = void 0) || (i = Promise))(((e, t) => { function o(e) { try { s(r.next(e)); } catch (e) { t(e); } } function l(e) { try { s(r.throw(e)); } catch (e) { t(e); } } function s(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i(((e) => { e(n); }))).then(o, l); }s((r = r.apply(n, a || [])).next()); })); let n; let a; let i; let r;
        })); let ee = function () { return ee = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, ee.apply(this, arguments); }; const te = function (e) {
            const t = e.className; const n = e.nationality; const i = e.visible; const r = e.setVisible; const o = (0, u.T)(); const l = (0, s.useState)(); const c = l[0]; const d = l[1]; const f = (0, s.useRef)(null); const h = (0, s.useState)(!1); const v = h[0]; const p = h[1]; const y = function () { r(!1); }; return (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsxs)(j.Tk, {
                    className: (0, g.A)(Q.DeleteNationality, {}, [t]),
                    visible: i,
                    onClose: y,
                    size: 'lg',
                    alignment: 'center',
                    children: [(0, a.jsx)(j.p0, { children: (0, a.jsxs)(j.fl, { children: ['Удаление национальности №', n == null ? void 0 : n.id_nationality] }) }), (0, a.jsx)(j.sD, { children: (0, a.jsxs)(b.xv, { size: b.yH.XM, className: Q.deleteText, children: ['Вы действительно хотите удалить национальность', ' ', (0, a.jsxs)('span', { children: ['№', n == null ? void 0 : n.id_nationality, ' ', '-', ' ', '"'.concat(n == null ? void 0 : n.nationality, '"')] }), ' ', 'и все связанные с ним данные?'] }) }), (0, a.jsx)(j.Ym, {
                        className: Q.footer,
                        children: (0, a.jsxs)('div', {
                            className: Q.footerBtns,
                            children: [(0, a.jsx)(j.u5, {
                                color: 'primary', variant: 'outline', className: Q.footerBtn, onClick: y, children: 'Отмена', 
}), (0, a.jsxs)(j.u5, {
                                color: 'danger', className: (0, g.A)(Q.footerBtn, {}, [Q.redBtn]), onClick() { let e; e = n.id_nationality.toString(), p(!0), o($(e)).then(((e) => { e.meta.requestStatus === 'fulfilled' ? (d(R.F.success('Национальность №'.concat(n == null ? void 0 : n.id_nationality, ' удалена'))), y(), p(!1)) : e.meta.requestStatus === 'rejected' && (d(R.F.error('Произошла ошибка при удалении, попробуйте снова')), p(!1)); })); }, disabled: v, children: [(0, a.jsx)(w.Z, { icon: B.N, className: Q.btnIcon }), 'Удалить'],
                            })], 
})
                    })],
                }), (0, a.jsx)(j.KF, { ref: f, push: c, placement: 'top-end' })],
            });
        }; const ne = {
            TableBlock: 'HiyOX6M_', table: 'Ut8l1lF6', editBtn: 'jHS8LnCV', tableCell: 'otXtTvtF', tableSortIcon: 'aWtBo3un', active: 'UHvs58vw',
        }; const ae = function (e) { let t; return (t = e.nationalities) === null || void 0 === t ? void 0 : t.isLoading; }; const ie = function (e) { let t; return (t = e.nationalities) === null || void 0 === t ? void 0 : t.error; }; let re = function () { return re = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, re.apply(this, arguments); }; const oe = function (e) {
            let t; let n; let i; const r = e.className; const o = e.data; const l = (0, u.T)(); const d = (0, c.v9)(ae); const f = (0, c.v9)(ie); const v = (0, c.v9)(h.DU); const p = (0, c.v9)(h.Qg); const y = (0, s.useState)(); const A = y[0]; const O = y[1]; const _ = (0, s.useState)(!1); const D = _[0]; const L = _[1]; const E = (0, s.useState)(!1); const T = E[0]; const F = E[1]; const R = (0, s.useState)(!1); const I = R[0]; const P = R[1]; const M = (0, s.useState)(); const V = M[0]; const Z = M[1]; const H = function (e) { F(!0), Z(e); }; const z = (0, s.useCallback)(((e) => { P(!0), O(e); }), []); (0, s.useEffect)((() => { l(h.f$.setSort('id_nationality')); }), [l]); let Y; const K = (0, s.useCallback)(((e) => { l(h.f$.setSort(e)), l(m()); }), [l]); Y = d ? (0, a.jsx)(x.O, { height: 250 }) : f ? (0, a.jsx)(b.xv, {
                theme: b.lg.ERROR, size: b.yH.M, weight: b.fs.SEMIBOLD, className: ne.error, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : o.length ? (0, a.jsxs)(j.Sx, {
                className: ne.table,
                striped: !0,
                children: [(0, a.jsx)(j.V, {
                    children: (0, a.jsxs)(j.T6, {
                        children: [(0, a.jsxs)(j.is, {
                            scope: 'col', className: ne.tableCell, onClick() { K('id_nationality'); }, children: ['ID национальности', (0, a.jsx)(w.Z, { icon: p === 'asc' ? N.s : k.w, className: (0, g.A)(ne.tableSortIcon, (t = {}, t[ne.active] = v === 'id_nationality', t), []) })],
                        }), (0, a.jsxs)(j.is, {
                            scope: 'col', className: ne.tableCell, onClick() { K('nationality'); }, children: ['Наименование', (0, a.jsx)(w.Z, { icon: p === 'asc' ? N.s : k.w, className: (0, g.A)(ne.tableSortIcon, (n = {}, n[ne.active] = v === 'nationality', n), []) })],
                        })],
                    }),
                }), (0, a.jsx)(j.NR, {
                    children: o == null ? void 0 : o.map(((e) => (0, a.jsxs)(j.T6, {
                        children: [(0, a.jsx)(j.NN, { children: e.id_nationality }), (0, a.jsx)(j.NN, { children: e.nationality }), (0, a.jsx)(j.NN, {
                            children: (0, a.jsx)(j.u5, {
                                color: 'primary', variant: 'outline', title: 'Просмотр', className: ne.editBtn, onClick() { let t; t = e.id_nationality.toString(), L(!0), Z(t); }, children: (0, a.jsx)(w.Z, { icon: S.E, customClassName: ne.btnIcon }),
                            }), 
}), (0, a.jsx)(j.NN, {
                            children: (0, a.jsx)(j.u5, {
                                color: 'primary', variant: 'outline', title: 'Редактировать', className: ne.editBtn, onClick() { H(e.id_nationality.toString()); }, children: (0, a.jsx)(w.Z, { icon: C.l, customClassName: ne.btnIcon }),
                            }), 
}), (0, a.jsx)(j.NN, {
                            children: (0, a.jsx)(j.u5, {
                                color: 'primary', variant: 'outline', title: 'Удалить', className: ne.editBtn, onClick() { z(e); }, children: (0, a.jsx)(w.Z, { icon: B.N, customClassName: ne.btnIcon }),
                            }), 
})], 
}, e.id_nationality))), 
})],
            }) : (0, a.jsx)(b.xv, { children: 'Ничего не найдено...' }); const U = ((i = {})[ne.error] = !!f, i); return (0, a.jsxs)('div', {
                className: (0, g.A)(ne.TableBlock, U, [r]),
                children: [Y, (0, a.jsx)(X, {
                    visible: D, setVisible: L, nationalityId: V, onDeleteNationality: z, onEditNationality: H,
                }), (0, a.jsx)(W, {
                    visible: T, setVisible: F, nationalityId: V, onDeleteNationality: z,
                }), (0, a.jsx)(te, { nationality: A, visible: I, setVisible: P })],
            });
        }; const le = function (e) { let t; return (t = e.nationalities) === null || void 0 === t ? void 0 : t.data; }; const se = (0, f.oM)({
            name: 'nationalities',
            initialState: {
                data: void 0, isLoading: !0, error: void 0, page: '1', limit: '50',
            },
            reducers: { setPage(e, t) { e.page = t.payload; }, setLimit(e, t) { e.limit = t.payload; } },
            extraReducers(e) { e.addCase(m.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(m.fulfilled, ((e, t) => { e.isLoading = !1, e.data = { data: t.payload.data, pagination: t.payload.pagination }; })).addCase(m.rejected, ((e, t) => { e.isLoading = !1, e.error = t.payload; })); },
        }); const ce = se.actions; const ue = se.reducer; const de = n(7730); const fe = function (e) { let t; return (t = e.addNationality) === null || void 0 === t ? void 0 : t.data.title; }; const he = (0, f.hg)('nationalities/addNationality', ((e, t) => {
            return n = void 0, a = void 0, r = function () {
                let e; let n; let a; let i; let r; let o; let l; let s; return (function (e, t) {
                    let n; let a; let i; let r; let o = {
                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                    }; return r = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function l(l) { return function (s) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, l[0] && (o = 0)), o;) try { if (n = 1, a && (i = 2 & l[0] ? a.return : l[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, l[1])).done) return i; switch (a = 0, i && (l = [2 & l[0], i.value]), l[0]) { case 0: case 1: i = l; break; case 4: return o.label++, { value: l[1], done: !1 }; case 5: o.label++, a = l[1], l = [0]; continue; case 7: l = o.ops.pop(), o.trys.pop(); continue; default: if (!((i = (i = o.trys).length > 0 && i[i.length - 1]) || l[0] !== 6 && l[0] !== 2)) { o = 0; continue; } if (l[0] === 3 && (!i || l[1] > i[0] && l[1] < i[3])) { o.label = l[1]; break; } if (l[0] === 6 && o.label < i[1]) { o.label = i[1], i = l; break; } if (i && o.label < i[2]) { o.label = i[2], o.ops.push(l); break; }i[2] && o.ops.pop(), o.trys.pop(); continue; }l = t.call(e, o); } catch (e) { l = [6, e], a = 0; } finally { n = i = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, s])); }; }
                }(this, ((c) => { switch (c.label) { case 0: e = t.rejectWithValue, n = t.extra, a = t.dispatch, i = t.getState, r = fe(i()), o = { title: r }, c.label = 1; case 1: return c.trys.push([1, 3,, 4]), [4, n.api.post('/college/nationalities/', o)]; case 2: return l = c.sent(), a(m()), a(pe.clearData()), [2, l.data]; case 3: return s = c.sent(), [2, e({ errors: s.response.data.errors, status: s.response.status })]; case 4: return [2]; } })));
            }, new ((i = void 0) || (i = Promise))(((e, t) => { function o(e) { try { s(r.next(e)); } catch (e) { t(e); } } function l(e) { try { s(r.throw(e)); } catch (e) { t(e); } } function s(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i(((e) => { e(n); }))).then(o, l); }s((r = r.apply(n, a || [])).next()); })); let n; let a; let i; let r;
        })); const ve = (0, f.oM)({
            name: 'addNationality', initialState: { data: { title: null }, isLoading: !1, errors: void 0 }, reducers: { setTitle(e, t) { e.data.title = t.payload; }, clearData(e) { e.data = { title: null }, e.errors = void 0; } }, extraReducers(e) { e.addCase(he.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(he.fulfilled, ((e) => { e.isLoading = !1; })).addCase(he.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })); },
        }); var pe = ve.actions; const ye = ve.reducer; const me = n(3280); const ge = function (e) { let t; return (t = e.addNationality) === null || void 0 === t ? void 0 : t.errors; }; const xe = {
            tabBtn: 'SCZlP7oH', tabsButtonsBlock: 'oXdGCYAc', title: 'EdaUt8mR', settings: 'm4a6jQWy', newAddField: 'wiYYh1pi', tabBlock: 'rsnHtUb0', form: 'KeS6bqjy', footerBtn: 'CM7ERBDg', greenBtn: 'mFgZQ9Zi', footer: 'QdY9NPgX', message: 'gsmxTzv5', messageIcon: 'NgkmrBK7',
        }; let be = function () { return be = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, be.apply(this, arguments); }; const je = function (e) {
            const t = e.className; const n = e.visible; const i = e.setVisible; const r = (0, u.T)(); const o = (0, s.useState)(!1); const l = o[0]; const d = o[1]; const f = (0, s.useState)(!1); const h = f[0]; const v = f[1]; const p = (0, s.useState)(); const y = p[0]; const m = p[1]; const x = (0, s.useRef)(null); const N = (0, c.v9)(fe); const k = (0, c.v9)(ge); const S = (0, s.useCallback)((() => { i(!1); }), [i]); const C = function () { S(), d(!1), v(!1); }; return (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(j.Tk, {
                    className: (0, g.A)(xe.AddNationality, {}, [t]),
                    visible: n,
                    onClose: S,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, a.jsxs)(j.lx, {
                        className: (0, g.A)(xe.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: l,
                        onSubmit(e) {
                            return t = void 0, n = void 0, i = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let a; let i; let r; let o = {
                                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                                    }; return r = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function l(l) { return function (s) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, l[0] && (o = 0)), o;) try { if (n = 1, a && (i = 2 & l[0] ? a.return : l[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, l[1])).done) return i; switch (a = 0, i && (l = [2 & l[0], i.value]), l[0]) { case 0: case 1: i = l; break; case 4: return o.label++, { value: l[1], done: !1 }; case 5: o.label++, a = l[1], l = [0]; continue; case 7: l = o.ops.pop(), o.trys.pop(); continue; default: if (!((i = (i = o.trys).length > 0 && i[i.length - 1]) || l[0] !== 6 && l[0] !== 2)) { o = 0; continue; } if (l[0] === 3 && (!i || l[1] > i[0] && l[1] < i[3])) { o.label = l[1]; break; } if (l[0] === 6 && o.label < i[1]) { o.label = i[1], i = l; break; } if (i && o.label < i[2]) { o.label = i[2], o.ops.push(l); break; }i[2] && o.ops.pop(), o.trys.pop(); continue; }l = t.call(e, o); } catch (e) { l = [6, e], a = 0; } finally { n = i = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, s])); }; }
                                }(this, ((a) => { switch (a.label) { case 0: return e.preventDefault(), t = e.currentTarget, v(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), d(!0), t.checkValidity() ? N ? [4, r(he())] : [3, 2] : [3, 3]; case 1: return (n = a.sent()).meta.requestStatus === 'fulfilled' && (m(R.F.success('Национальность добавлена')), C()), n.meta.requestStatus === 'rejected' && v(!0), [3, 3]; case 2: v(!0), a.label = 3; case 3: return [2]; } })));
                            }, new ((a = void 0) || (a = Promise))(((e, r) => { function o(e) { try { s(i.next(e)); } catch (e) { r(e); } } function l(e) { try { s(i.throw(e)); } catch (e) { r(e); } } function s(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(o, l); }s((i = i.apply(t, n || [])).next()); })); let t; let n; let a; let i;
                        },
                        children: [(0, a.jsx)(j.p0, { children: (0, a.jsx)(j.fl, { children: 'Добавление национальности' }) }), (0, a.jsx)(j.sD, { children: (0, a.jsx)('div', { className: xe.tab, children: (0, a.jsx)('div', { className: xe.tabBlock, children: (0, a.jsx)('div', { className: xe.settings, children: (0, a.jsxs)('div', { className: xe.newAddField, children: [(0, a.jsx)('h6', {className: xe.newAddFieldTitle, children: "Наименование*"}), (0, a.jsx)(I.h, {
 type: 'text', placeholder: 'казахи', feedbackValid: k ? '' : 'Здорово!', invalid: !!k, feedbackInvalid: 'Введите корректные данные!', value: N || '', onChange (e) { r(pe.setTitle(e.target.value)) }, required: !0 
})] }) }) }) }) }), (0, a.jsxs)(j.Ym, { className: xe.footer, children: [(0, a.jsx)('div', { className: xe.message, children: h && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(w.Z, { icon: T.D, customClassName: xe.messageIcon }), (0, a.jsx)(b.xv, { size: b.yH.M, weight: b.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, a.jsxs)('div', { className: xe.footerBtns, children: [(0, a.jsx)(j.u5, {
 color: 'primary', variant: 'outline', className: xe.footerBtn, onClick: C, children: 'Отмена' }), (0, a.jsxs)(j.u5, {
 color: 'success', type: 'submit', className: (0, g.A)(xe.footerBtn, {}, [xe.greenBtn]), children: [(0, a.jsx)(w.Z, { icon: me.q, className: xe.btnIcon }), 'Добавить'] 
})] })] })],
                    }),
                }), (0, a.jsx)(j.KF, { ref: x, push: y, placement: 'top-end' })],
            });
        }; const we = n(5375); const Ne = { nationalitiesSettings: 'Gzlzmlj2' }; let ke = function () { return ke = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, ke.apply(this, arguments); }; const Se = {
            nationalities: ue, nationalityDetail: H, addNationality: ye, editNationality: E,
        }; const Ce = function (e) {
            const t = e.className; const n = (0, u.T)(); const f = (0, s.useState)(!1); const h = f[0]; const v = f[1]; const x = (0, c.v9)(le); const b = (0, c.v9)(ae); const j = (0, c.v9)(ie); const w = (0, c.v9)(y); const N = (0, c.v9)(p); const k = (0, s.useState)(''); const S = k[0]; const C = k[1]; const B = (0, s.useState)(); const A = B[0]; const O = B[1]; const _ = (0, s.useCallback)(((e) => { C(e); }), []); const D = (0, s.useCallback)(((e) => { n(ce.setLimit(e)), n(m()); }), [n]); const L = (0, s.useCallback)(((e) => { n(ce.setPage(e)), n(m()); }), [n]); return (0, s.useEffect)((() => { O((x == null ? void 0 : x.data) || []); }), [x]), (0, s.useEffect)((() => { const e = (0, de.ci)(S, (x == null ? void 0 : x.data) || []); O(e || []); }), [x, S]), (0, s.useEffect)((() => { n(m()); }), [n]), (0, a.jsx)(l.B, {
                title: 'LMS - Национальности',
                children: (0, a.jsxs)(i.W, {
                    reducers: Se,
                    removeAfterUnmount: !0,
                    children: [(0, a.jsxs)('div', {
                        className: (0, g.A)(Ne.NationalitiesPage, {}, [t]),
                        children: [(0, a.jsx)(r.o, {
                            value: S, onChange: _, searchText: 'Поиск по наименованию', error: j, isLoading: b,
                        }), (0, a.jsx)(o.X, {
                            onlyAdding: !0, setVisibleAddNewField: v, addingModalText: 'Добавить национальность', error: j, isLoading: b, children: (0, a.jsx)(je, { visible: h, setVisible: v }),
                        }), (0, a.jsx)(oe, { data: A || [] }), (0, a.jsxs)('div', {
                            className: Ne.nationalitiesSettings,
                            children: [(0, a.jsx)(d.K, {
                                data: A || [], onChange: D, onChangePage: L, paginationData: x == null ? void 0 : x.pagination, itemsLimit: w, withRecords: !0, isLoading: b, error: j,
                            }), (0, a.jsx)(d.N, {
                                data: A || [], onChange: L, itemsPage: N, isLoading: b, error: j, paginationData: x == null ? void 0 : x.pagination,
                            })],
                        })],
                    }), j && (0, a.jsx)(we.d, { error: j })],
                }),
            });
        };
    },
    5375: (e, t, n) => { n.d(t, { d: () => s }); const a = n(5893); const i = n(7294); const r = n(530); const o = n(4475); function l(e) { return l = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) { return typeof e; } : function (e) { return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e; }, l(e); } var s = (0, i.memo)(((e) => { const t = e.error; const n = (0, i.useState)(); const s = n[0]; const c = n[1]; const u = (0, i.useRef)(null); return (0, i.useEffect)((() => { (typeof t === 'string' && t === 'timeout' || l(t) === 'object' && t.status === 500 && t.error === 'timeout') && c(r.F.error('Соединение с сервером потеряно')); }), [t]), (0, a.jsx)(o.KF, { ref: u, push: s, placement: 'top-end' }); })); },
    7687: (e, t, n) => {
        n.d(t, { K: () => N, N: () => F }); let a; const i = n(5893); const r = n(4387); const o = n(7294); const l = ['25', '50', '100', '200', '500']; const s = n(1138); const c = n(4809); const u = n(1353); const d = n(8896); function f() { return f = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const a in n)Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]); } return e; }, f.apply(this, arguments); } const h = function (e) { return o.createElement('svg', f({ width: 20, height: 20, xmlns: 'http://www.w3.org/2000/svg' }, e), a || (a = o.createElement('path', { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M8.565 9.731 5.229 6.396A.79.79 0 0 1 5 5.813a.79.79 0 0 1 .23-.584A.79.79 0 0 1 5.811 5a.79.79 0 0 1 .584.23l3.25 3.25 3.25-3.25a.79.79 0 0 1 .583-.23.79.79 0 0 1 .584.23.79.79 0 0 1 .229.582.79.79 0 0 1-.23.584l-3.33 3.331 3.335 3.335a.79.79 0 0 1 .229.584.79.79 0 0 1-.23.583.79.79 0 0 1-.583.23.79.79 0 0 1-.583-.23l-3.25-3.25-3.25 3.25a.79.79 0 0 1-.583.23.79.79 0 0 1-.584-.23.79.79 0 0 1-.229-.583.79.79 0 0 1 .23-.584l3.33-3.33Z' }))); }; const v = n(9161); const p = n(8863); const y = 'lJhrM3nh'; const m = 'zZgj2JgW'; let g = function () { return g = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, g.apply(this, arguments); }; const x = (0, o.memo)(((e) => {
            let t; const n = e.className; const a = e.items; const l = e.value; const s = e.onChange; const f = (0, o.useState)(l); const x = f[0]; const b = f[1]; const j = (0, o.useState)(!1); const w = j[0]; const N = j[1]; const k = (0, o.useRef)(null); (0, p.p)(k, N); const S = (0, o.useCallback)((() => { N(!0); }), []); const C = (0, o.useCallback)((() => { N(!1); }), []); const B = (0, o.useCallback)(((e) => { s(e), b(e), C(); }), [C, s]); return (0, i.jsxs)('div', {
                className: (0, r.A)('eXu4wq7K', {}, [n]),
                ref: k,
                children: [!w && (0, i.jsxs)(v.zx, {
                    className: 'bAUrWG2D', theme: v.bn.CLEAR, onClick: S, children: [(0, i.jsx)(c.xv, { weight: c.fs.SEMIBOLD, className: y, children: x }), (0, i.jsx)(u.J, { Svg: d.Z })],
                }), (0, i.jsx)('div', {
 className: (0, r.A)('Jh9c6KnL', (t = {}, t.fpG6Af4B = w, t), []),
style: { top: ''.concat(-40 * a.indexOf(x), 'px') },
children: a.map(((e) => (x === e ? (0, i.jsxs)('div', { className: (0, r.A)(m, {}, ['rKHhU8sR']), children: [(0, i.jsx)(c.xv, { weight: c.fs.SEMIBOLD, className: y, children: e }), (0, i.jsx)(v.zx, {
 theme: v.bn.CLEAR, className: 'HkrPDu6E', onClick: C, children: (0, i.jsx)(u.J, { Svg: h }) 
})] }, e) : (0, i.jsx)(v.zx, {
                    theme: v.bn.CLEAR, className: m, size: v.qE.XS, onClick() { B(e); }, children: (0, i.jsx)(c.xv, { weight: c.fs.SEMIBOLD, className: y, children: e }), 
}, e)))) 
})],
            });
        })); const b = {
            LimitShow: 'eQ6pERU2', selectLimit: 'hKaByxY3', limitSelectWrapper: 'XhlPZwOr', recordsText: 'Shn48cNg', textResults: 'MlwyceC_',
        }; let j; let w = function () { return w = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, w.apply(this, arguments); }; var N = (0, o.memo)(((e) => {
            const t = e.className; const n = e.onChange; const a = e.itemsLimit; const o = e.withRecords; const u = e.paginationData; const d = e.isLoading; const f = e.error; const h = e.data; const v = e.onChangePage; const p = (u == null ? void 0 : u.current_page) ? (u.current_page - 1) * Number(a) + 1 : 0; const y = (u == null ? void 0 : u.current_page) ? u.current_page * Number(a) : 0; return d ? (0, i.jsx)(s.O, {
                width: '100%', height: 40, border: '6px', className: b.skeleton,
            }) : f ? (0, i.jsx)('div', {}) : h.length ? (0, i.jsxs)('div', { className: (0, r.A)(b.LimitShow, {}, [t]), children: [o && p && y && (0, i.jsxs)(c.xv, { theme: c.lg.LIGHT, className: b.recordsText, children: ['Записи', ' ', p, ' ', '-', ' ', y, ' ', '| Всего', ' ', u == null ? void 0 : u.total_records] }), (0, i.jsxs)('div', { className: b.limitSelectWrapper, children: [(0, i.jsx)(c.xv, { theme: c.lg.LIGHT, className: b.textResults, children: 'Результатов на странице' }), (0, i.jsx)(x, { items: l, value: a, onChange(e) { n(e), v('1'); } })] })] }) : (0, i.jsx)('div', {});
        })); const k = n(4475); function S() { return S = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const a in n)Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]); } return e; }, S.apply(this, arguments); } const C = function (e) {
            return o.createElement('svg', S({
                width: 30, height: 30, fill: 'none', xmlns: 'http://www.w3.org/2000/svg',
            }, e), j || (j = o.createElement('path', { d: 'M9.514 5.763A1.739 1.739 0 0 0 9 6.994a1.73 1.73 0 0 0 .514 1.231l6.822 6.777-6.822 6.776a1.735 1.735 0 0 0 0 2.462 1.759 1.759 0 0 0 2.48 0l8.07-8.016a1.74 1.74 0 0 0 .514-1.231 1.73 1.73 0 0 0-.514-1.231l-8.07-8.016c-.669-.664-1.794-.664-2.48.017Z', fill: '#EB8247' })));
        }; let B; function A() { return A = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const a in n)Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]); } return e; }, A.apply(this, arguments); } const O = function (e) {
            return o.createElement('svg', A({
                width: 30, height: 30, fill: 'none', xmlns: 'http://www.w3.org/2000/svg',
            }, e), B || (B = o.createElement('path', { d: 'M6.175 8.2a1.875 1.875 0 0 1 2.65-2.65l8.125 8.125a1.875 1.875 0 0 1 0 2.65L8.825 24.45a1.875 1.875 0 0 1-2.65-2.65l6.8-6.8-6.8-6.8Zm18.2 16.8a1.875 1.875 0 0 0 1.875-1.875V6.875a1.875 1.875 0 0 0-3.75 0v16.25c0 1.035.84 1.875 1.875 1.875Z', fill: '#EB8247' })));
        }; const _ = 'ytJMbyx3'; const D = 'SRBkd4oW'; const L = '_DUi30wm'; let E = function () { return E = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, E.apply(this, arguments); }; const T = function (e, t, n) { if (n || arguments.length === 2) for (var a, i = 0, r = t.length; i < r; i++)!a && i in t || (a || (a = Array.prototype.slice.call(t, 0, i)), a[i] = t[i]); return e.concat(a || Array.prototype.slice.call(t)); }; var F = (0, o.memo)(((e) => {
            const t = e.className; const n = e.data; const a = e.isLoading; const o = e.error; const l = e.paginationData; const c = e.onChange; const d = e.itemsPage; return a ? (0, i.jsx)(s.O, {
                width: 250, height: 40, border: '6px', className: 'nlgg7yYk',
            }) : o || n.length === 0 ? (0, i.jsx)('div', {}) : (0, i.jsx)('div', {
                className: (0, r.A)('AuxB6Ddw', {}, [t]),
                children: (0, i.jsxs)(k.E7, {
                    'aria-label': 'TrainingSchedule pagination',
                    align: 'end',
                    children: [(l == null ? void 0 : l.prev_page) && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(k.tn, { onClick() { c('1'); }, className: (0, r.A)(_, {}, [D]), children: (0, i.jsx)(u.J, { className: 'uBUXyeMF', Svg: O }) }), (0, i.jsx)(k.tn, { onClick() { c(''.concat(+d - 1)); }, className: (0, r.A)(_, {}, [D]), children: (0, i.jsx)(u.J, { className: 'jKQ4PRf5', Svg: C }) })] }), (l == null ? void 0 : l.total_pages) ? (0, i.jsxs)(i.Fragment, {
                        children: [l.total_pages <= 7 && T([], Array(l.total_pages), !0).map(((e, t) => (0, i.jsx)(k.tn, {
                            className: (0, r.A)(_, {}, [L]), active: +d === t + 1, onClick() { c(''.concat(t + 1)); }, children: t + 1,
                        }, t))), l.total_pages > 7 && (0, i.jsxs)(i.Fragment, {
                            children: [T([], Array(l.total_pages), !0).map(((e, t) => {
                                if ((+d === t + 1 || +d + 1 === t + 1 || +d + 2 === t + 1) && +d !== l.total_pages && t + 1 !== l.total_pages && t + 2 !== l.total_pages && t + 3 !== l.total_pages) {
                                    return (0, i.jsx)(k.tn, {
                                        className: (0, r.A)(_, {}, [L]), active: +d === t + 1, onClick() { c(''.concat(t + 1)); }, children: t + 1,
                                    }, t);
                                }
                            })), l.total_pages === +d || l.total_pages - 1 == +d || l.total_pages - 2 == +d || l.total_pages - 2 - +d == 3 || l.total_pages - 2 - +d == 2 || l.total_pages - 2 - +d == 1 ? '' : (0, i.jsx)(k.tn, { className: (0, r.A)(_, {}, [L, 'JQSOdsCs']), onClick() { c(''.concat(+d + 1)); }, children: '...' }), T([], Array(l.total_pages), !0).map(((e, t) => {
                                if (l.total_pages - t + 1 == 4 || l.total_pages - t + 1 == 3 || l.total_pages - t + 1 == 2 || l.total_pages - t + 1 == 1) {
                                    return (0, i.jsx)(k.tn, {
                                        className: (0, r.A)(_, {}, [L]), active: +d === t + 1, onClick() { c(''.concat(t + 1)); }, children: t + 1,
                                    }, t);
                                }
                            }))],
                        })],
                    }) : (0, i.jsx)('div', {}), (l == null ? void 0 : l.next_page) && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(k.tn, { onClick() { c(''.concat(+d + 1)); }, className: (0, r.A)(_, {}, [D]), children: (0, i.jsx)(u.J, { Svg: C }) }), (0, i.jsx)(k.tn, { onClick() { c(''.concat(l == null ? void 0 : l.total_pages)); }, className: (0, r.A)(_, {}, [D]), children: (0, i.jsx)(u.J, { Svg: O }) })] })],
                }),
            });
        }));
    },
}]);
