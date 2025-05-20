!(function () { try { const e = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; const t = (new Error()).stack; t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = 'add3b6a0-b65d-4845-8a73-8eb56702f4fa', e._sentryDebugIdIdentifier = 'sentry-dbid-add3b6a0-b65d-4845-8a73-8eb56702f4fa'); } catch (e) {} }()); const _global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; _global.SENTRY_RELEASE = { id: '45ee1168f5cf48e9753bace26323152d3b61cb67' }, (self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[4994], {
    7152: (e, t, n) => { n.d(t, { l: () => r }); var r = ['512 512', "<path fill='var(--ci-primary-color, currentColor)' d='M29.663,482.25l.087.087a24.847,24.847,0,0,0,17.612,7.342,25.178,25.178,0,0,0,8.1-1.345l142.006-48.172,272.5-272.5A88.832,88.832,0,0,0,344.334,42.039l-272.5,272.5L23.666,456.541A24.844,24.844,0,0,0,29.663,482.25Zm337.3-417.584a56.832,56.832,0,0,1,80.371,80.373L411.5,180.873,331.127,100.5ZM99.744,331.884,308.5,123.127,388.873,203.5,180.116,412.256,58.482,453.518Z' class='ci-primary'/>"]; },
    1350: (e, t, n) => { n.d(t, { s: () => r }); var r = ['512 512', "<polygon fill='var(--ci-primary-color, currentColor)' points='43.314 130.51 95.196 78.627 95.196 496.196 127.196 496.196 127.196 78.627 179.079 130.51 201.706 107.883 111.196 17.372 20.686 107.883 43.314 130.51' class='ci-primary'/><rect width='120' height='32' x='184' y='160' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='184' height='32' x='184' y='232' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='248' height='32' x='184' y='304' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='312' height='32' x='184' y='376' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/>"]; },
    8795: (e, t, n) => { n.d(t, { w: () => r }); var r = ['512 512', "<rect width='120' height='32' x='184' y='288' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='184' height='32' x='184' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='248' height='32' x='184' y='144' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='312' height='32' x='184' y='72' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='95.196 16 95.196 433.568 43.313 381.686 20.687 404.313 111.196 494.823 201.705 404.313 179.078 381.687 127.196 433.568 127.196 16 95.196 16' class='ci-primary'/>"]; },
    2628: (e, t, n) => {
        n.r(t), n.d(t, { default: () => ke }); const r = n(5893); const a = n(1150); const i = n(9649); const o = n(5306); const s = n(918); const l = n(7294); const c = n(6458); const u = n(5461); const d = n(7687); const f = n(7168); const h = n(1759); const p = n(121); const v = function (e) { let t; return (t = e.studyDurations) === null || void 0 === t ? void 0 : t.page; }; const y = function (e) { let t; return (t = e.studyDurations) === null || void 0 === t ? void 0 : t.limit; }; const g = (0, f.hg)('students/fetchStudyDurations', ((e, t) => {
            return n = void 0, r = void 0, i = function () {
                let e; let n; let r; let a; let i; let o; return (function (e, t) {
                    let n; let r; let a; let i; let o = {
                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                    }; return i = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function s(s) { return function (l) { return (function (s) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, s[0] && (o = 0)), o;) try { if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a; switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) { case 0: case 1: a = s; break; case 4: return o.label++, { value: s[1], done: !1 }; case 5: o.label++, r = s[1], s = [0]; continue; case 7: s = o.ops.pop(), o.trys.pop(); continue; default: if (!((a = (a = o.trys).length > 0 && a[a.length - 1]) || s[0] !== 6 && s[0] !== 2)) { o = 0; continue; } if (s[0] === 3 && (!a || s[1] > a[0] && s[1] < a[3])) { o.label = s[1]; break; } if (s[0] === 6 && o.label < a[1]) { o.label = a[1], a = s; break; } if (a && o.label < a[2]) { o.label = a[2], o.ops.push(s); break; }a[2] && o.ops.pop(), o.trys.pop(); continue; }s = t.call(e, o); } catch (e) { s = [6, e], r = 0; } finally { n = a = 0; } if (5 & s[0]) throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; }([s, l])); }; }
                }(this, ((s) => {
                    switch (s.label) {
                    case 0: e = t.rejectWithValue, n = t.extra, r = t.getState, a = {
                        pageSelector: v, limitSelector: y, sortFieldSelector: h.DU, sortOrderSelector: h.Qg,
                    }, i = (0, p.o)('/college/study-durations', a, r()), s.label = 1; case 1: return s.trys.push([1, 3,, 4]), [4, n.api.get(i)]; case 2: return [2, s.sent().data]; case 3: return (o = s.sent()).message === 'Failed to fetch' ? [2, e({ status: 500, error: 'timeout' })] : [2, e({ status: o.response.status, error: o.response.data.message })]; case 4: return [2];
                    }
                })));
            }, new ((a = void 0) || (a = Promise))(((e, t) => { function o(e) { try { l(i.next(e)); } catch (e) { t(e); } } function s(e) { try { l(i.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(o, s); }l((i = i.apply(n, r || [])).next()); })); let n; let r; let a; let i;
        })); const m = n(4387); const x = n(1138); const b = n(4809); const j = n(4475); const w = n(2308); const N = n(1350); const S = n(8795); const D = n(968); const k = n(7152); const C = n(1783); const B = (0, f.hg)('studyDurations/fetchStudyDurationDetail', ((e, t) => {
            return n = void 0, r = void 0, i = function () {
                let n; let r; let a; let i; return (function (e, t) {
                    let n; let r; let a; let i; let o = {
                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                    }; return i = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function s(s) { return function (l) { return (function (s) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, s[0] && (o = 0)), o;) try { if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a; switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) { case 0: case 1: a = s; break; case 4: return o.label++, { value: s[1], done: !1 }; case 5: o.label++, r = s[1], s = [0]; continue; case 7: s = o.ops.pop(), o.trys.pop(); continue; default: if (!((a = (a = o.trys).length > 0 && a[a.length - 1]) || s[0] !== 6 && s[0] !== 2)) { o = 0; continue; } if (s[0] === 3 && (!a || s[1] > a[0] && s[1] < a[3])) { o.label = s[1]; break; } if (s[0] === 6 && o.label < a[1]) { o.label = a[1], a = s; break; } if (a && o.label < a[2]) { o.label = a[2], o.ops.push(s); break; }a[2] && o.ops.pop(), o.trys.pop(); continue; }s = t.call(e, o); } catch (e) { s = [6, e], r = 0; } finally { n = a = 0; } if (5 & s[0]) throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; }([s, l])); }; }
                }(this, ((o) => { switch (o.label) { case 0: n = t.rejectWithValue, r = t.extra, a = t.dispatch, o.label = 1; case 1: return o.trys.push([1, 3,, 4]), [4, r.api.get('/college/study-durations/'.concat(e))]; case 2: return i = o.sent(), a(E.setStudyDurationData(i.data)), [2, i.data]; case 3: return o.sent().message === 'Failed to fetch' ? [2, n('timeout')] : [2, n('ERROR')]; case 4: return [2]; } })));
            }, new ((a = void 0) || (a = Promise))(((e, t) => { function o(e) { try { l(i.next(e)); } catch (e) { t(e); } } function s(e) { try { l(i.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(o, s); }l((i = i.apply(n, r || [])).next()); })); let n; let r; let a; let i;
        })); const O = function (e) { let t; let n; return (n = (t = e.editStudyDuration) === null || void 0 === t ? void 0 : t.newFields) === null || void 0 === n ? void 0 : n.title; }; const A = (0, f.hg)('studyDurations/editStudyDuration', ((e, t) => {
            return n = void 0, r = void 0, i = function () {
                let n; let r; let a; let i; let o; let s; let l; let c; return (function (e, t) {
                    let n; let r; let a; let i; let o = {
                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                    }; return i = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function s(s) { return function (l) { return (function (s) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, s[0] && (o = 0)), o;) try { if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a; switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) { case 0: case 1: a = s; break; case 4: return o.label++, { value: s[1], done: !1 }; case 5: o.label++, r = s[1], s = [0]; continue; case 7: s = o.ops.pop(), o.trys.pop(); continue; default: if (!((a = (a = o.trys).length > 0 && a[a.length - 1]) || s[0] !== 6 && s[0] !== 2)) { o = 0; continue; } if (s[0] === 3 && (!a || s[1] > a[0] && s[1] < a[3])) { o.label = s[1]; break; } if (s[0] === 6 && o.label < a[1]) { o.label = a[1], a = s; break; } if (a && o.label < a[2]) { o.label = a[2], o.ops.push(s); break; }a[2] && o.ops.pop(), o.trys.pop(); continue; }s = t.call(e, o); } catch (e) { s = [6, e], r = 0; } finally { n = a = 0; } if (5 & s[0]) throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; }([s, l])); }; }
                }(this, ((u) => { switch (u.label) { case 0: n = t.rejectWithValue, r = t.extra, a = t.dispatch, i = t.getState, o = O(i()), s = { duration: o }, u.label = 1; case 1: return u.trys.push([1, 3,, 4]), [4, r.api.put('/college/study-durations/'.concat(e), s)]; case 2: return l = u.sent(), a(g()), a(B(e)), [2, l.data]; case 3: return c = u.sent(), [2, n({ errors: c.response.data.errors, status: c.response.status })]; case 4: return [2]; } })));
            }, new ((a = void 0) || (a = Promise))(((e, t) => { function o(e) { try { l(i.next(e)); } catch (e) { t(e); } } function s(e) { try { l(i.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(o, s); }l((i = i.apply(n, r || [])).next()); })); let n; let r; let a; let i;
        })); const L = (0, f.oM)({
            name: 'editStudyDuration',
            initialState: {
                data: void 0, newFields: void 0, isLoading: !1, errors: void 0,
            },
            reducers: { setStudyDurationData(e, t) { t.payload && (e.data = t.payload, e.newFields = { title: e.data.durationoftraining }); }, setTitle(e, t) { e.newFields.title = t.payload; }, clearNewFields(e) { let t; e.newFields = { title: ((t = e.data) === null || void 0 === t ? void 0 : t.durationoftraining) || null }, e.errors = void 0; } },
            extraReducers(e) { e.addCase(A.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(A.fulfilled, ((e) => { e.isLoading = !1; })).addCase(A.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })); },
        }); var E = L.actions; const _ = L.reducer; const F = n(5044); const I = n(8263); const R = n(530); const T = n(1385); const M = (0, f.oM)({
            name: 'studyDurationDetail', initialState: { data: void 0, isLoading: !1, error: void 0 }, reducers: {}, extraReducers(e) { e.addCase(B.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(B.fulfilled, ((e, t) => { e.isLoading = !1, e.data = t.payload; })).addCase(B.rejected, ((e, t) => { e.isLoading = !1, e.error = t.payload; })); },
        }); const P = (M.actions, M.reducer); const V = function (e) { let t; return (t = e.studyDurationDetail) === null || void 0 === t ? void 0 : t.error; }; const Z = function (e) { let t; return (t = e.studyDurationDetail) === null || void 0 === t ? void 0 : t.isLoading; }; const z = function (e) { let t; return (t = e.studyDurationDetail) === null || void 0 === t ? void 0 : t.data; }; const G = function (e) { let t; return (t = e.editStudyDuration) === null || void 0 === t ? void 0 : t.isLoading; }; const H = function (e) { let t; return (t = e.editStudyDuration) === null || void 0 === t ? void 0 : t.errors; }; const U = {
            tabBtn: 'tapMOucF', tabsButtonsBlock: 'RZ1CDteU', title: 'oA5QEuB8', footerBtn: 'yZ8xUVwM', greenBtn: 'wg47ai0N', redBtn: 'dsnluo_N', settings: 'TeG1fWWN', newAddField: 'hXdnIfOz', tabBlock: 'unGmussl', form: '_uUL1HOa', footer: 'sdwIhRwl', message: 'ChpHK7DB', messageIcon: 'DiuGC0PA',
        }; let W = function () { return W = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++) for (const a in t = arguments[n])Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e; }, W.apply(this, arguments); }; const q = function (e) {
            const t = e.className; const n = e.visible; const a = e.setVisible; const i = e.studyDurationId; const o = e.onDeleteStudyDuration; const s = (0, u.T)(); const d = (0, l.useState)(); const f = d[0]; const h = d[1]; const p = (0, l.useRef)(null); const v = (0, l.useState)(!1); const y = v[0]; const g = v[1]; const N = (0, l.useState)(!1); const S = N[0]; const D = N[1]; const k = (0, c.v9)(z); const L = (0, c.v9)(Z); const _ = (0, c.v9)(V); const M = (0, c.v9)(G); const P = (0, c.v9)(O); const q = (0, c.v9)(H); (0, l.useEffect)((() => { i && s(B(i)); }), [s, i]); let J; const K = function () { a(!1), g(!1), D(!1); }; const Y = function () { K(), s(E.clearNewFields()); }; return J = M || L ? (0, r.jsx)(x.O, { width: '100%', height: 80 }) : _ ? (0, r.jsx)(b.xv, {
                theme: b.lg.ERROR, size: b.yH.M, weight: b.fs.SEMIBOLD, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, r.jsx)('div', {
                className: U.tab,
                children: (0, r.jsx)('div', {
                    className: U.tabBlock,
                    children: (0, r.jsx)('div', {
                        className: U.settings,
                        children: (0, r.jsxs)('div', {
                            className: U.newAddField,
                            children: [(0, r.jsx)('h6', { className: U.newAddFieldTitle, children: 'Наименование' }), (0, r.jsx)(T.h, {
                                type: 'text', placeholder: '2 года', feedbackValid: q ? '' : 'Здорово!', invalid: !!q, feedbackInvalid: 'Введите корректные данные', value: P || '', onChange(e) { s(E.setTitle(e.target.value)); },
                            })], 
})
                    }), 
})
            }), (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(j.Tk, {
                    className: (0, m.A)(U.EditStudyDuration, {}, [t]),
                    visible: n,
                    onClose: K,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, r.jsxs)(j.lx, {
                        className: (0, m.A)(U.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: y,
                        onSubmit(e) {
                            return t = void 0, n = void 0, a = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let r; let a; let i; let o = {
                                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                                    }; return i = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function s(s) { return function (l) { return (function (s) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, s[0] && (o = 0)), o;) try { if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a; switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) { case 0: case 1: a = s; break; case 4: return o.label++, { value: s[1], done: !1 }; case 5: o.label++, r = s[1], s = [0]; continue; case 7: s = o.ops.pop(), o.trys.pop(); continue; default: if (!((a = (a = o.trys).length > 0 && a[a.length - 1]) || s[0] !== 6 && s[0] !== 2)) { o = 0; continue; } if (s[0] === 3 && (!a || s[1] > a[0] && s[1] < a[3])) { o.label = s[1]; break; } if (s[0] === 6 && o.label < a[1]) { o.label = a[1], a = s; break; } if (a && o.label < a[2]) { o.label = a[2], o.ops.push(s); break; }a[2] && o.ops.pop(), o.trys.pop(); continue; }s = t.call(e, o); } catch (e) { s = [6, e], r = 0; } finally { n = a = 0; } if (5 & s[0]) throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; }([s, l])); }; }
                                }(this, ((r) => { switch (r.label) { case 0: return e.preventDefault(), t = e.currentTarget, D(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), g(!0), t.checkValidity() ? (k == null ? void 0 : k.durationoftraining) !== P ? [3, 1] : (h(R.F.error('Для сохранения вы должны внести изменения!')), [3, 3]) : [3, 3]; case 1: return [4, s(A(i))]; case 2: (n = r.sent()).meta.requestStatus === 'fulfilled' && (h(R.F.success('Информация о продолжительности обучения успешно обновлена')), Y()), n.meta.requestStatus === 'rejected' && D(!0), r.label = 3; case 3: return [2]; } })));
                            }, new ((r = void 0) || (r = Promise))(((e, i) => { function o(e) { try { l(a.next(e)); } catch (e) { i(e); } } function s(e) { try { l(a.throw(e)); } catch (e) { i(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(o, s); }l((a = a.apply(t, n || [])).next()); })); let t; let n; let r; let a;
                        },
                        children: [(0, r.jsx)(j.p0, { children: M || L ? (0, r.jsx)(x.O, { width: 200, height: 30 }) : (0, r.jsxs)(j.fl, { children: ['Изменение продолжительности обучения №', k == null ? void 0 : k.id_durationoftraining] }) }), (0, r.jsx)(j.sD, { children: J }), (0, r.jsxs)(j.Ym, { className: U.footer, children: [(0, r.jsx)('div', { className: U.message, children: S && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(w.Z, { icon: F.D, customClassName: U.messageIcon }), (0, r.jsx)(b.xv, { size: b.yH.M, weight: b.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, r.jsxs)('div', { className: U.footerBtns, children: [(0, r.jsx)(j.u5, {
 color: 'primary', variant: 'outline', className: U.footerBtn, onClick: Y, children: 'Отмена' }), (0, r.jsxs)(j.u5, {
 color: 'danger', className: (0, m.A)(U.footerBtn, {}, [U.redBtn]), onClick() { o(k), K(); }, disabled: L || M || !!_, children: [(0, r.jsx)(w.Z, { icon: C.N, className: U.btnIcon }), 'Удалить'] 
}), (0, r.jsxs)(j.u5, {
 color: 'success', type: 'submit', className: (0, m.A)(U.footerBtn, {}, [U.greenBtn]), disabled: L || M || !!_, children: [(0, r.jsx)(w.Z, { icon: I.F, className: U.btnIcon }), 'Сохранить'] 
})] })] })],
                    }),
                }), (0, r.jsx)(j.KF, { ref: p, push: f, placement: 'top-end' })],
            });
        }; const J = n(779); const K = {
            'modal-dialog': 'kMXxjhLE', tabBtn: 'KReL5w7z', tabsButtonsBlock: '_DPdDvFz', title: 'HDXS5JpD', footerBtn: 'YHBh1264', redBtn: 'yPy5VSIk', settings: 'dINf1jpm', newAddField: 'qFRNYiEs', tabBlock: 'B58EetIx', footer: 'EDuGrSaI', message: 'I8GkGVnU', messageIcon: 'b5aQtOnA', checkboxText: 'QG2qypVu',
        }; let Y = function () { return Y = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++) for (const a in t = arguments[n])Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e; }, Y.apply(this, arguments); }; const X = function (e) {
            const t = e.className; const n = e.visible; const a = e.setVisible; const i = e.studyDurationId; const o = e.onDeleteStudyDuration; const s = e.onEditStudyDuration; const d = (0, u.T)(); const f = (0, c.v9)(z); const h = (0, c.v9)(Z); const p = (0, c.v9)(V); (0, l.useEffect)((() => { i && d(B(i)); }), [d, i]); let v; const y = function () { a(!1); }; return v = h ? (0, r.jsx)(x.O, { width: '100%', height: 120 }) : p ? (0, r.jsx)(b.xv, {
                theme: b.lg.ERROR, size: b.yH.M, weight: b.fs.BOLD, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, r.jsx)('div', { className: K.tab, children: (0, r.jsxs)('div', { className: K.tabBlock, children: [(0, r.jsx)('div', { className: K.settings, children: (0, r.jsxs)('div', { className: K.newAddField, children: [(0, r.jsx)('h6', { className: K.newAddFieldTitle, children: 'ID продолжительности обучения' }), (0, r.jsx)(b.xv, { size: b.yH.S, weight: b.fs.BOLD, children: f == null ? void 0 : f.id_durationoftraining })] }) }), (0, r.jsx)('div', { className: K.settings, children: (0, r.jsxs)('div', { className: K.newAddField, children: [(0, r.jsx)('h6', { className: K.newAddFieldTitle, children: 'Наименование' }), (0, r.jsx)(b.xv, { size: b.yH.S, weight: b.fs.BOLD, children: f == null ? void 0 : f.durationoftraining })] }) })] }) }), (0, r.jsxs)(j.Tk, {
                className: (0, m.A)(K.ViewStudyDuration, {}, [t, 'view-student-modal']),
                visible: n,
                onClose: y,
                alignment: 'center',
                children: [(0, r.jsx)(j.p0, { children: h ? (0, r.jsx)(x.O, { width: 200, height: 30 }) : (0, r.jsxs)(j.fl, { children: ['Продолжительность обучения №', f == null ? void 0 : f.id_durationoftraining] }) }), (0, r.jsx)(j.sD, { children: v }), (0, r.jsxs)(j.Ym, {
                    className: K.footer,
                    children: [(0, r.jsx)('div', {}), (0, r.jsxs)('div', {
                        className: K.footerBtns,
                        children: [(0, r.jsx)(j.u5, {
                            color: 'primary', variant: 'outline', className: K.footerBtn, onClick: y, children: 'Закрыть', 
}), (0, r.jsxs)(j.u5, {
                            color: 'danger', className: (0, m.A)(K.footerBtn, {}, [K.redBtn]), onClick() { o(f), y(); }, disabled: h || !!p, children: [(0, r.jsx)(w.Z, { icon: C.N, className: K.btnIcon }), 'Удалить'],
                        }), (0, r.jsxs)(j.u5, {
                            color: 'primary', className: K.footerBtn, onClick() { s(i), y(); }, disabled: h || !!p, children: [(0, r.jsx)(w.Z, { icon: J.C, className: K.btnIcon }), 'Редактировать'],
                        })], 
})], 
})],
            });
        }; const Q = { footerBtn: 'mFC4nFNP', redBtn: 'Nx_NIjhf', deleteText: 'EAf0iRTm' }; const $ = (0, f.hg)('studyDurations/deleteStudyDuration', ((e, t) => {
            return n = void 0, r = void 0, i = function () {
                let n; let r; let a; let i; return (function (e, t) {
                    let n; let r; let a; let i; let o = {
                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                    }; return i = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function s(s) { return function (l) { return (function (s) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, s[0] && (o = 0)), o;) try { if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a; switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) { case 0: case 1: a = s; break; case 4: return o.label++, { value: s[1], done: !1 }; case 5: o.label++, r = s[1], s = [0]; continue; case 7: s = o.ops.pop(), o.trys.pop(); continue; default: if (!((a = (a = o.trys).length > 0 && a[a.length - 1]) || s[0] !== 6 && s[0] !== 2)) { o = 0; continue; } if (s[0] === 3 && (!a || s[1] > a[0] && s[1] < a[3])) { o.label = s[1]; break; } if (s[0] === 6 && o.label < a[1]) { o.label = a[1], a = s; break; } if (a && o.label < a[2]) { o.label = a[2], o.ops.push(s); break; }a[2] && o.ops.pop(), o.trys.pop(); continue; }s = t.call(e, o); } catch (e) { s = [6, e], r = 0; } finally { n = a = 0; } if (5 & s[0]) throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; }([s, l])); }; }
                }(this, ((o) => { switch (o.label) { case 0: n = t.rejectWithValue, r = t.extra, a = t.dispatch, o.label = 1; case 1: return o.trys.push([1, 3,, 4]), [4, r.api.delete('/college/study-durations/'.concat(e))]; case 2: return i = o.sent(), a(g()), [2, i.data]; case 3: return o.sent().message === 'Failed to fetch' ? [2, n('timeout')] : [2, n('ERROR')]; case 4: return [2]; } })));
            }, new ((a = void 0) || (a = Promise))(((e, t) => { function o(e) { try { l(i.next(e)); } catch (e) { t(e); } } function s(e) { try { l(i.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(o, s); }l((i = i.apply(n, r || [])).next()); })); let n; let r; let a; let i;
        })); let ee = function () { return ee = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++) for (const a in t = arguments[n])Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e; }, ee.apply(this, arguments); }; const te = function (e) {
            const t = e.className; const n = e.studyDuration; const a = e.visible; const i = e.setVisible; const o = (0, u.T)(); const s = (0, l.useState)(); const c = s[0]; const d = s[1]; const f = (0, l.useRef)(null); const h = (0, l.useState)(!1); const p = h[0]; const v = h[1]; const y = function () { i(!1); }; return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsxs)(j.Tk, {
                    className: (0, m.A)(Q.DeleteStudyDuration, {}, [t]),
                    visible: a,
                    onClose: y,
                    size: 'lg',
                    alignment: 'center',
                    children: [(0, r.jsx)(j.p0, { children: (0, r.jsxs)(j.fl, { children: ['Удаление продолжительности обучения №', n == null ? void 0 : n.id_durationoftraining] }) }), (0, r.jsx)(j.sD, { children: (0, r.jsxs)(b.xv, { size: b.yH.XM, className: Q.deleteText, children: ['Вы действительно хотите удалить продолжительность обучения', ' ', (0, r.jsxs)('span', { children: ['№', n == null ? void 0 : n.id_durationoftraining, ' ', '-', ' ', '"'.concat(n == null ? void 0 : n.durationoftraining, '"')] }), ' ', 'и все связанные с ним данные?'] }) }), (0, r.jsx)(j.Ym, {
                        className: Q.footer,
                        children: (0, r.jsxs)('div', {
                            className: Q.footerBtns,
                            children: [(0, r.jsx)(j.u5, {
                                color: 'primary', variant: 'outline', className: Q.footerBtn, onClick: y, children: 'Отмена', 
}), (0, r.jsxs)(j.u5, {
                                color: 'danger', className: (0, m.A)(Q.footerBtn, {}, [Q.redBtn]), onClick() { let e; e = n.id_durationoftraining.toString(), v(!0), o($(e)).then(((e) => { e.meta.requestStatus === 'fulfilled' ? (d(R.F.success('Продолжительность обучения №'.concat(n == null ? void 0 : n.id_durationoftraining, ' удалена'))), y(), v(!1)) : e.meta.requestStatus === 'rejected' && (d(R.F.error('Произошла ошибка при удалении, попробуйте снова')), v(!1)); })); }, disabled: p, children: [(0, r.jsx)(w.Z, { icon: C.N, className: Q.btnIcon }), 'Удалить'],
                            })], 
})
                    })],
                }), (0, r.jsx)(j.KF, { ref: f, push: c, placement: 'top-end' })],
            });
        }; const ne = {
            TableBlock: '_wgnYJf6', table: 'vgaLToLS', editBtn: 'DgwNN8me', tableCell: 'ImoNcVAp', tableSortIcon: 'MqxVINWJ', active: 'Y833igWR',
        }; const re = function (e) { let t; return (t = e.studyDurations) === null || void 0 === t ? void 0 : t.isLoading; }; const ae = function (e) { let t; return (t = e.studyDurations) === null || void 0 === t ? void 0 : t.error; }; let ie = function () { return ie = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++) for (const a in t = arguments[n])Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e; }, ie.apply(this, arguments); }; const oe = function (e) {
            let t; let n; let a; const i = e.className; const o = e.data; const s = (0, u.T)(); const d = (0, c.v9)(re); const f = (0, c.v9)(ae); const p = (0, c.v9)(h.DU); const v = (0, c.v9)(h.Qg); const y = (0, l.useState)(); const B = y[0]; const O = y[1]; const A = (0, l.useState)(!1); const L = A[0]; const E = A[1]; const _ = (0, l.useState)(!1); const F = _[0]; const I = _[1]; const R = (0, l.useState)(!1); const T = R[0]; const M = R[1]; const P = (0, l.useState)(); const V = P[0]; const Z = P[1]; const z = function (e) { I(!0), Z(e); }; const G = (0, l.useCallback)(((e) => { M(!0), O(e); }), []); (0, l.useEffect)((() => { s(h.f$.setSort('id_durationoftraining')); }), [s]); let H; const U = (0, l.useCallback)(((e) => { s(h.f$.setSort(e)), s(g()); }), [s]); H = d ? (0, r.jsx)(x.O, { height: 250 }) : f ? (0, r.jsx)(b.xv, {
                theme: b.lg.ERROR, size: b.yH.M, weight: b.fs.SEMIBOLD, className: ne.error, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : o.length ? (0, r.jsxs)(j.Sx, {
                className: ne.table,
                striped: !0,
                children: [(0, r.jsx)(j.V, {
                    children: (0, r.jsxs)(j.T6, {
                        children: [(0, r.jsxs)(j.is, {
                            scope: 'col', className: ne.tableCell, onClick() { U('id_durationoftraining'); }, children: ['ID продолжительности обучения', (0, r.jsx)(w.Z, { icon: v === 'asc' ? N.s : S.w, className: (0, m.A)(ne.tableSortIcon, (t = {}, t[ne.active] = p === 'id_durationoftraining', t), []) })],
                        }), (0, r.jsxs)(j.is, {
                            scope: 'col', className: ne.tableCell, onClick() { U('durationoftraining'); }, children: ['Наименование', (0, r.jsx)(w.Z, { icon: v === 'asc' ? N.s : S.w, className: (0, m.A)(ne.tableSortIcon, (n = {}, n[ne.active] = p === 'durationoftraining', n), []) })],
                        })],
                    }),
                }), (0, r.jsx)(j.NR, {
                    children: o == null ? void 0 : o.map(((e) => (0, r.jsxs)(j.T6, {
                        children: [(0, r.jsx)(j.NN, { children: e.id_durationoftraining }), (0, r.jsx)(j.NN, { children: e.durationoftraining }), (0, r.jsx)(j.NN, {
                            children: (0, r.jsx)(j.u5, {
                                color: 'primary', variant: 'outline', title: 'Просмотр', className: ne.editBtn, onClick() { let t; t = e.id_durationoftraining.toString(), E(!0), Z(t); }, children: (0, r.jsx)(w.Z, { icon: D.E, customClassName: ne.btnIcon }),
                            }), 
}), (0, r.jsx)(j.NN, {
                            children: (0, r.jsx)(j.u5, {
                                color: 'primary', variant: 'outline', title: 'Редактировать', className: ne.editBtn, onClick() { z(e.id_durationoftraining.toString()); }, children: (0, r.jsx)(w.Z, { icon: k.l, customClassName: ne.btnIcon }),
                            }), 
}), (0, r.jsx)(j.NN, {
                            children: (0, r.jsx)(j.u5, {
                                color: 'primary', variant: 'outline', title: 'Удалить', className: ne.editBtn, onClick() { G(e); }, children: (0, r.jsx)(w.Z, { icon: C.N, customClassName: ne.btnIcon }),
                            }), 
})], 
}, e.id_durationoftraining))), 
})],
            }) : (0, r.jsx)(b.xv, { children: 'Ничего не найдено...' }); const W = ((a = {})[ne.error] = !!f, a); return (0, r.jsxs)('div', {
                className: (0, m.A)(ne.TableBlock, W, [i]),
                children: [H, (0, r.jsx)(X, {
                    visible: L, setVisible: E, studyDurationId: V, onDeleteStudyDuration: G, onEditStudyDuration: z,
                }), (0, r.jsx)(q, {
                    visible: F, setVisible: I, studyDurationId: V, onDeleteStudyDuration: G,
                }), (0, r.jsx)(te, { studyDuration: B, visible: T, setVisible: M })],
            });
        }; const se = function (e) { let t; return (t = e.studyDurations) === null || void 0 === t ? void 0 : t.data; }; const le = (0, f.oM)({
            name: 'studyDurations',
            initialState: {
                data: void 0, isLoading: !0, error: void 0, page: '1', limit: '50',
            },
            reducers: { setPage(e, t) { e.page = t.payload; }, setLimit(e, t) { e.limit = t.payload; } },
            extraReducers(e) { e.addCase(g.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(g.fulfilled, ((e, t) => { e.isLoading = !1, e.data = { data: t.payload.data, pagination: t.payload.pagination }; })).addCase(g.rejected, ((e, t) => { e.isLoading = !1, e.error = t.payload; })); },
        }); const ce = le.actions; const ue = le.reducer; const de = n(7730); const fe = function (e) { let t; return (t = e.addStudyDuration) === null || void 0 === t ? void 0 : t.data.title; }; const he = (0, f.hg)('studyDurations/addStudyDuration', ((e, t) => {
            return n = void 0, r = void 0, i = function () {
                let e; let n; let r; let a; let i; let o; let s; let l; return (function (e, t) {
                    let n; let r; let a; let i; let o = {
                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                    }; return i = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function s(s) { return function (l) { return (function (s) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, s[0] && (o = 0)), o;) try { if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a; switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) { case 0: case 1: a = s; break; case 4: return o.label++, { value: s[1], done: !1 }; case 5: o.label++, r = s[1], s = [0]; continue; case 7: s = o.ops.pop(), o.trys.pop(); continue; default: if (!((a = (a = o.trys).length > 0 && a[a.length - 1]) || s[0] !== 6 && s[0] !== 2)) { o = 0; continue; } if (s[0] === 3 && (!a || s[1] > a[0] && s[1] < a[3])) { o.label = s[1]; break; } if (s[0] === 6 && o.label < a[1]) { o.label = a[1], a = s; break; } if (a && o.label < a[2]) { o.label = a[2], o.ops.push(s); break; }a[2] && o.ops.pop(), o.trys.pop(); continue; }s = t.call(e, o); } catch (e) { s = [6, e], r = 0; } finally { n = a = 0; } if (5 & s[0]) throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; }([s, l])); }; }
                }(this, ((c) => { switch (c.label) { case 0: e = t.rejectWithValue, n = t.extra, r = t.dispatch, a = t.getState, i = fe(a()), o = { duration: i }, c.label = 1; case 1: return c.trys.push([1, 3,, 4]), [4, n.api.post('/college/study-durations/', o)]; case 2: return s = c.sent(), r(g()), r(ve.clearData()), [2, s.data]; case 3: return l = c.sent(), [2, e({ errors: l.response.data.errors, status: l.response.status })]; case 4: return [2]; } })));
            }, new ((a = void 0) || (a = Promise))(((e, t) => { function o(e) { try { l(i.next(e)); } catch (e) { t(e); } } function s(e) { try { l(i.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(o, s); }l((i = i.apply(n, r || [])).next()); })); let n; let r; let a; let i;
        })); const pe = (0, f.oM)({
            name: 'addStudyDuration', initialState: { data: { title: null }, isLoading: !1, errors: void 0 }, reducers: { setTitle(e, t) { e.data.title = t.payload; }, clearData(e) { e.data = { title: null }, e.errors = void 0; } }, extraReducers(e) { e.addCase(he.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(he.fulfilled, ((e) => { e.isLoading = !1; })).addCase(he.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })); },
        }); var ve = pe.actions; const ye = pe.reducer; const ge = n(3280); const me = function (e) { let t; return (t = e.addStudyDuration) === null || void 0 === t ? void 0 : t.errors; }; const xe = {
            tabBtn: 'zLBCo4Ka', tabsButtonsBlock: 't2ndSQ36', title: 'BFYBVucO', settings: 'JYSMo6UE', newAddField: 'CiAcjunE', tabBlock: 'BZMUPMKb', form: 'WVfZmUNP', footerBtn: 'dumgCyiv', greenBtn: 'nZNR5MDa', footer: 'w6wewMXc', message: 'Z2zw3yC9', messageIcon: 'CsUevZo5',
        }; let be = function () { return be = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++) for (const a in t = arguments[n])Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e; }, be.apply(this, arguments); }; const je = function (e) {
            const t = e.className; const n = e.visible; const a = e.setVisible; const i = (0, u.T)(); const o = (0, l.useState)(!1); const s = o[0]; const d = o[1]; const f = (0, l.useState)(!1); const h = f[0]; const p = f[1]; const v = (0, l.useState)(); const y = v[0]; const g = v[1]; const x = (0, l.useRef)(null); const N = (0, c.v9)(fe); const S = (0, c.v9)(me); const D = (0, l.useCallback)((() => { a(!1); }), [a]); const k = function () { D(), d(!1), p(!1); }; return (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)(j.Tk, {
                    className: (0, m.A)(xe.AddStudyDuration, {}, [t]),
                    visible: n,
                    onClose: D,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, r.jsxs)(j.lx, {
                        className: (0, m.A)(xe.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: s,
                        onSubmit(e) {
                            return t = void 0, n = void 0, a = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let r; let a; let i; let o = {
                                        label: 0, sent() { if (1 & a[0]) throw a[1]; return a[1]; }, trys: [], ops: [],
                                    }; return i = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function s(s) { return function (l) { return (function (s) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, s[0] && (o = 0)), o;) try { if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a; switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) { case 0: case 1: a = s; break; case 4: return o.label++, { value: s[1], done: !1 }; case 5: o.label++, r = s[1], s = [0]; continue; case 7: s = o.ops.pop(), o.trys.pop(); continue; default: if (!((a = (a = o.trys).length > 0 && a[a.length - 1]) || s[0] !== 6 && s[0] !== 2)) { o = 0; continue; } if (s[0] === 3 && (!a || s[1] > a[0] && s[1] < a[3])) { o.label = s[1]; break; } if (s[0] === 6 && o.label < a[1]) { o.label = a[1], a = s; break; } if (a && o.label < a[2]) { o.label = a[2], o.ops.push(s); break; }a[2] && o.ops.pop(), o.trys.pop(); continue; }s = t.call(e, o); } catch (e) { s = [6, e], r = 0; } finally { n = a = 0; } if (5 & s[0]) throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 }; }([s, l])); }; }
                                }(this, ((r) => { switch (r.label) { case 0: return e.preventDefault(), t = e.currentTarget, p(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), d(!0), t.checkValidity() ? N ? [4, i(he())] : [3, 2] : [3, 3]; case 1: return (n = r.sent()).meta.requestStatus === 'fulfilled' && (g(R.F.success('Продолжительность обучения добавлена')), k()), n.meta.requestStatus === 'rejected' && p(!0), [3, 3]; case 2: p(!0), r.label = 3; case 3: return [2]; } })));
                            }, new ((r = void 0) || (r = Promise))(((e, i) => { function o(e) { try { l(a.next(e)); } catch (e) { i(e); } } function s(e) { try { l(a.throw(e)); } catch (e) { i(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(o, s); }l((a = a.apply(t, n || [])).next()); })); let t; let n; let r; let a;
                        },
                        children: [(0, r.jsx)(j.p0, { children: (0, r.jsx)(j.fl, { children: 'Добавление продолжительности обучения' }) }), (0, r.jsx)(j.sD, { children: (0, r.jsx)('div', { className: xe.tab, children: (0, r.jsx)('div', { className: xe.tabBlock, children: (0, r.jsx)('div', { className: xe.settings, children: (0, r.jsxs)('div', { className: xe.newAddField, children: [(0, r.jsx)('h6', {className: xe.newAddFieldTitle, children: "Наименование*"}), (0, r.jsx)(T.h, {
 type: 'text', placeholder: '2 года', feedbackValid: S ? '' : 'Здорово!', invalid: !!S, feedbackInvalid: 'Введите корректные данные!', value: N || '', onChange (e) { i(ve.setTitle(e.target.value)) }, required: !0 
})] }) }) }) }) }), (0, r.jsxs)(j.Ym, { className: xe.footer, children: [(0, r.jsx)('div', { className: xe.message, children: h && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(w.Z, { icon: F.D, customClassName: xe.messageIcon }), (0, r.jsx)(b.xv, { size: b.yH.M, weight: b.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, r.jsxs)('div', { className: xe.footerBtns, children: [(0, r.jsx)(j.u5, {
 color: 'primary', variant: 'outline', className: xe.footerBtn, onClick: k, children: 'Отмена' }), (0, r.jsxs)(j.u5, {
 color: 'success', type: 'submit', className: (0, m.A)(xe.footerBtn, {}, [xe.greenBtn]), children: [(0, r.jsx)(w.Z, { icon: ge.q, className: xe.btnIcon }), 'Добавить'] 
})] })] })],
                    }),
                }), (0, r.jsx)(j.KF, { ref: x, push: y, placement: 'top-end' })],
            });
        }; const we = n(5375); const Ne = { studyDurationsSettings: '_qqvpVEV' }; let Se = function () { return Se = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++) for (const a in t = arguments[n])Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e; }, Se.apply(this, arguments); }; const De = {
            studyDurations: ue, studyDurationDetail: P, addStudyDuration: ye, editStudyDuration: _,
        }; const ke = function (e) {
            const t = e.className; const n = (0, u.T)(); const f = (0, l.useState)(!1); const h = f[0]; const p = f[1]; const x = (0, c.v9)(se); const b = (0, c.v9)(re); const j = (0, c.v9)(ae); const w = (0, c.v9)(y); const N = (0, c.v9)(v); const S = (0, l.useState)(''); const D = S[0]; const k = S[1]; const C = (0, l.useState)(); const B = C[0]; const O = C[1]; const A = (0, l.useCallback)(((e) => { k(e); }), []); const L = (0, l.useCallback)(((e) => { n(ce.setLimit(e)), n(g()); }), [n]); const E = (0, l.useCallback)(((e) => { n(ce.setPage(e)), n(g()); }), [n]); return (0, l.useEffect)((() => { O((x == null ? void 0 : x.data) || []); }), [x]), (0, l.useEffect)((() => { const e = (0, de.bL)(D, (x == null ? void 0 : x.data) || []); O(e || []); }), [x, D]), (0, l.useEffect)((() => { n(g()); }), [n]), (0, r.jsx)(s.B, {
                title: 'LMS - Продолжительность обучения',
                children: (0, r.jsxs)(a.W, {
                    reducers: De,
                    removeAfterUnmount: !0,
                    children: [(0, r.jsxs)('div', {
                        className: (0, m.A)(Ne.StudyDurationsPage, {}, [t]),
                        children: [(0, r.jsx)(i.o, {
                            value: D, onChange: A, searchText: 'Поиск по наименованию', error: j, isLoading: b,
                        }), (0, r.jsx)(o.X, {
                            onlyAdding: !0, setVisibleAddNewField: p, addingModalText: 'Добавить продолжительность обучения', error: j, isLoading: b, children: (0, r.jsx)(je, { visible: h, setVisible: p }),
                        }), (0, r.jsx)(oe, { data: B || [] }), (0, r.jsxs)('div', {
                            className: Ne.studyDurationsSettings,
                            children: [(0, r.jsx)(d.K, {
                                data: B || [], onChange: L, onChangePage: E, paginationData: x == null ? void 0 : x.pagination, itemsLimit: w, withRecords: !0, isLoading: b, error: j,
                            }), (0, r.jsx)(d.N, {
                                data: B || [], onChange: E, itemsPage: N, isLoading: b, error: j, paginationData: x == null ? void 0 : x.pagination,
                            })],
                        })],
                    }), j && (0, r.jsx)(we.d, { error: j })],
                }),
            });
        };
    },
    5375: (e, t, n) => { n.d(t, { d: () => l }); const r = n(5893); const a = n(7294); const i = n(530); const o = n(4475); function s(e) { return s = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) { return typeof e; } : function (e) { return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e; }, s(e); } var l = (0, a.memo)(((e) => { const t = e.error; const n = (0, a.useState)(); const l = n[0]; const c = n[1]; const u = (0, a.useRef)(null); return (0, a.useEffect)((() => { (typeof t === 'string' && t === 'timeout' || s(t) === 'object' && t.status === 500 && t.error === 'timeout') && c(i.F.error('Соединение с сервером потеряно')); }), [t]), (0, r.jsx)(o.KF, { ref: u, push: l, placement: 'top-end' }); })); },
    7687: (e, t, n) => {
        n.d(t, { K: () => N, N: () => I }); let r; const a = n(5893); const i = n(4387); const o = n(7294); const s = ['25', '50', '100', '200', '500']; const l = n(1138); const c = n(4809); const u = n(1353); const d = n(8896); function f() { return f = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]); } return e; }, f.apply(this, arguments); } const h = function (e) { return o.createElement('svg', f({ width: 20, height: 20, xmlns: 'http://www.w3.org/2000/svg' }, e), r || (r = o.createElement('path', { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M8.565 9.731 5.229 6.396A.79.79 0 0 1 5 5.813a.79.79 0 0 1 .23-.584A.79.79 0 0 1 5.811 5a.79.79 0 0 1 .584.23l3.25 3.25 3.25-3.25a.79.79 0 0 1 .583-.23.79.79 0 0 1 .584.23.79.79 0 0 1 .229.582.79.79 0 0 1-.23.584l-3.33 3.331 3.335 3.335a.79.79 0 0 1 .229.584.79.79 0 0 1-.23.583.79.79 0 0 1-.583.23.79.79 0 0 1-.583-.23l-3.25-3.25-3.25 3.25a.79.79 0 0 1-.583.23.79.79 0 0 1-.584-.23.79.79 0 0 1-.229-.583.79.79 0 0 1 .23-.584l3.33-3.33Z' }))); }; const p = n(9161); const v = n(8863); const y = 'lJhrM3nh'; const g = 'zZgj2JgW'; let m = function () { return m = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++) for (const a in t = arguments[n])Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e; }, m.apply(this, arguments); }; const x = (0, o.memo)(((e) => {
            let t; const n = e.className; const r = e.items; const s = e.value; const l = e.onChange; const f = (0, o.useState)(s); const x = f[0]; const b = f[1]; const j = (0, o.useState)(!1); const w = j[0]; const N = j[1]; const S = (0, o.useRef)(null); (0, v.p)(S, N); const D = (0, o.useCallback)((() => { N(!0); }), []); const k = (0, o.useCallback)((() => { N(!1); }), []); const C = (0, o.useCallback)(((e) => { l(e), b(e), k(); }), [k, l]); return (0, a.jsxs)('div', {
                className: (0, i.A)('eXu4wq7K', {}, [n]),
                ref: S,
                children: [!w && (0, a.jsxs)(p.zx, {
                    className: 'bAUrWG2D', theme: p.bn.CLEAR, onClick: D, children: [(0, a.jsx)(c.xv, { weight: c.fs.SEMIBOLD, className: y, children: x }), (0, a.jsx)(u.J, { Svg: d.Z })],
                }), (0, a.jsx)('div', {
 className: (0, i.A)('Jh9c6KnL', (t = {}, t.fpG6Af4B = w, t), []),
style: { top: ''.concat(-40 * r.indexOf(x), 'px') },
children: r.map(((e) => (x === e ? (0, a.jsxs)('div', { className: (0, i.A)(g, {}, ['rKHhU8sR']), children: [(0, a.jsx)(c.xv, { weight: c.fs.SEMIBOLD, className: y, children: e }), (0, a.jsx)(p.zx, {
 theme: p.bn.CLEAR, className: 'HkrPDu6E', onClick: k, children: (0, a.jsx)(u.J, { Svg: h }) 
})] }, e) : (0, a.jsx)(p.zx, {
                    theme: p.bn.CLEAR, className: g, size: p.qE.XS, onClick() { C(e); }, children: (0, a.jsx)(c.xv, { weight: c.fs.SEMIBOLD, className: y, children: e }), 
}, e)))) 
})],
            });
        })); const b = {
            LimitShow: 'eQ6pERU2', selectLimit: 'hKaByxY3', limitSelectWrapper: 'XhlPZwOr', recordsText: 'Shn48cNg', textResults: 'MlwyceC_',
        }; let j; let w = function () { return w = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++) for (const a in t = arguments[n])Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e; }, w.apply(this, arguments); }; var N = (0, o.memo)(((e) => {
            const t = e.className; const n = e.onChange; const r = e.itemsLimit; const o = e.withRecords; const u = e.paginationData; const d = e.isLoading; const f = e.error; const h = e.data; const p = e.onChangePage; const v = (u == null ? void 0 : u.current_page) ? (u.current_page - 1) * Number(r) + 1 : 0; const y = (u == null ? void 0 : u.current_page) ? u.current_page * Number(r) : 0; return d ? (0, a.jsx)(l.O, {
                width: '100%', height: 40, border: '6px', className: b.skeleton,
            }) : f ? (0, a.jsx)('div', {}) : h.length ? (0, a.jsxs)('div', { className: (0, i.A)(b.LimitShow, {}, [t]), children: [o && v && y && (0, a.jsxs)(c.xv, { theme: c.lg.LIGHT, className: b.recordsText, children: ['Записи', ' ', v, ' ', '-', ' ', y, ' ', '| Всего', ' ', u == null ? void 0 : u.total_records] }), (0, a.jsxs)('div', { className: b.limitSelectWrapper, children: [(0, a.jsx)(c.xv, { theme: c.lg.LIGHT, className: b.textResults, children: 'Результатов на странице' }), (0, a.jsx)(x, { items: s, value: r, onChange(e) { n(e), p('1'); } })] })] }) : (0, a.jsx)('div', {});
        })); const S = n(4475); function D() { return D = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]); } return e; }, D.apply(this, arguments); } const k = function (e) {
            return o.createElement('svg', D({
                width: 30, height: 30, fill: 'none', xmlns: 'http://www.w3.org/2000/svg',
            }, e), j || (j = o.createElement('path', { d: 'M9.514 5.763A1.739 1.739 0 0 0 9 6.994a1.73 1.73 0 0 0 .514 1.231l6.822 6.777-6.822 6.776a1.735 1.735 0 0 0 0 2.462 1.759 1.759 0 0 0 2.48 0l8.07-8.016a1.74 1.74 0 0 0 .514-1.231 1.73 1.73 0 0 0-.514-1.231l-8.07-8.016c-.669-.664-1.794-.664-2.48.017Z', fill: '#EB8247' })));
        }; let C; function B() { return B = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]); } return e; }, B.apply(this, arguments); } const O = function (e) {
            return o.createElement('svg', B({
                width: 30, height: 30, fill: 'none', xmlns: 'http://www.w3.org/2000/svg',
            }, e), C || (C = o.createElement('path', { d: 'M6.175 8.2a1.875 1.875 0 0 1 2.65-2.65l8.125 8.125a1.875 1.875 0 0 1 0 2.65L8.825 24.45a1.875 1.875 0 0 1-2.65-2.65l6.8-6.8-6.8-6.8Zm18.2 16.8a1.875 1.875 0 0 0 1.875-1.875V6.875a1.875 1.875 0 0 0-3.75 0v16.25c0 1.035.84 1.875 1.875 1.875Z', fill: '#EB8247' })));
        }; const A = 'ytJMbyx3'; const L = 'SRBkd4oW'; const E = '_DUi30wm'; let _ = function () { return _ = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++) for (const a in t = arguments[n])Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]); return e; }, _.apply(this, arguments); }; const F = function (e, t, n) { if (n || arguments.length === 2) for (var r, a = 0, i = t.length; a < i; a++)!r && a in t || (r || (r = Array.prototype.slice.call(t, 0, a)), r[a] = t[a]); return e.concat(r || Array.prototype.slice.call(t)); }; var I = (0, o.memo)(((e) => {
            const t = e.className; const n = e.data; const r = e.isLoading; const o = e.error; const s = e.paginationData; const c = e.onChange; const d = e.itemsPage; return r ? (0, a.jsx)(l.O, {
                width: 250, height: 40, border: '6px', className: 'nlgg7yYk',
            }) : o || n.length === 0 ? (0, a.jsx)('div', {}) : (0, a.jsx)('div', {
                className: (0, i.A)('AuxB6Ddw', {}, [t]),
                children: (0, a.jsxs)(S.E7, {
                    'aria-label': 'TrainingSchedule pagination',
                    align: 'end',
                    children: [(s == null ? void 0 : s.prev_page) && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(S.tn, { onClick() { c('1'); }, className: (0, i.A)(A, {}, [L]), children: (0, a.jsx)(u.J, { className: 'uBUXyeMF', Svg: O }) }), (0, a.jsx)(S.tn, { onClick() { c(''.concat(+d - 1)); }, className: (0, i.A)(A, {}, [L]), children: (0, a.jsx)(u.J, { className: 'jKQ4PRf5', Svg: k }) })] }), (s == null ? void 0 : s.total_pages) ? (0, a.jsxs)(a.Fragment, {
                        children: [s.total_pages <= 7 && F([], Array(s.total_pages), !0).map(((e, t) => (0, a.jsx)(S.tn, {
                            className: (0, i.A)(A, {}, [E]), active: +d === t + 1, onClick() { c(''.concat(t + 1)); }, children: t + 1,
                        }, t))), s.total_pages > 7 && (0, a.jsxs)(a.Fragment, {
                            children: [F([], Array(s.total_pages), !0).map(((e, t) => {
                                if ((+d === t + 1 || +d + 1 === t + 1 || +d + 2 === t + 1) && +d !== s.total_pages && t + 1 !== s.total_pages && t + 2 !== s.total_pages && t + 3 !== s.total_pages) {
                                    return (0, a.jsx)(S.tn, {
                                        className: (0, i.A)(A, {}, [E]), active: +d === t + 1, onClick() { c(''.concat(t + 1)); }, children: t + 1,
                                    }, t);
                                }
                            })), s.total_pages === +d || s.total_pages - 1 == +d || s.total_pages - 2 == +d || s.total_pages - 2 - +d == 3 || s.total_pages - 2 - +d == 2 || s.total_pages - 2 - +d == 1 ? '' : (0, a.jsx)(S.tn, { className: (0, i.A)(A, {}, [E, 'JQSOdsCs']), onClick() { c(''.concat(+d + 1)); }, children: '...' }), F([], Array(s.total_pages), !0).map(((e, t) => {
                                if (s.total_pages - t + 1 == 4 || s.total_pages - t + 1 == 3 || s.total_pages - t + 1 == 2 || s.total_pages - t + 1 == 1) {
                                    return (0, a.jsx)(S.tn, {
                                        className: (0, i.A)(A, {}, [E]), active: +d === t + 1, onClick() { c(''.concat(t + 1)); }, children: t + 1,
                                    }, t);
                                }
                            }))],
                        })],
                    }) : (0, a.jsx)('div', {}), (s == null ? void 0 : s.next_page) && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(S.tn, { onClick() { c(''.concat(+d + 1)); }, className: (0, i.A)(A, {}, [L]), children: (0, a.jsx)(u.J, { Svg: k }) }), (0, a.jsx)(S.tn, { onClick() { c(''.concat(s == null ? void 0 : s.total_pages)); }, className: (0, i.A)(A, {}, [L]), children: (0, a.jsx)(u.J, { Svg: O }) })] })],
                }),
            });
        }));
    },
}]);
