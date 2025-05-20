!(function () { try { const e = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; const t = (new Error()).stack; t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = '1f7df5a3-6b81-4863-8396-0879e259a7d0', e._sentryDebugIdIdentifier = 'sentry-dbid-1f7df5a3-6b81-4863-8396-0879e259a7d0'); } catch (e) {} }()); const _global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; _global.SENTRY_RELEASE = { id: '45ee1168f5cf48e9753bace26323152d3b61cb67' }, (self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[3971], {
    2402: (e, t, n) => {
        n.r(t), n.d(t, { default: () => Ee }); const i = n(5893); const r = n(1150); const a = n(9649); const s = n(5306); const o = n(918); const l = n(7294); const c = n(6458); const d = n(5461); const u = n(7687); const f = n(7168); const h = n(1759); const v = n(7882); const p = n(121); const y = (0, f.hg)('students/fetchStudyDirections', ((e, t) => {
            return n = void 0, i = void 0, a = function () {
                let e; let n; let i; let r; let a; let s; return (function (e, t) {
                    let n; let i; let r; let a; let s = {
                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                    }; return a = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function o(o) { return function (l) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, o[0] && (s = 0)), s;) try { if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r; switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) { case 0: case 1: r = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, i = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < r[1]) { s.label = r[1], r = o; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(o); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }o = t.call(e, s); } catch (e) { o = [6, e], i = 0; } finally { n = r = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                }(this, ((o) => {
                    switch (o.label) {
                    case 0: e = t.rejectWithValue, n = t.extra, i = t.getState, r = {
                        pageSelector: v.Wu, limitSelector: v.qr, sortFieldSelector: h.DU, sortOrderSelector: h.Qg,
                    }, a = (0, p.o)('/college/study-directions', r, i()), o.label = 1; case 1: return o.trys.push([1, 3,, 4]), [4, n.api.get(a)]; case 2: return [2, o.sent().data]; case 3: return (s = o.sent()).message === 'Failed to fetch' ? [2, e({ status: 500, error: 'timeout' })] : [2, e({ status: s.response.status, error: s.response.data.message })]; case 4: return [2];
                    }
                })));
            }, new ((r = void 0) || (r = Promise))(((e, t) => { function s(e) { try { l(a.next(e)); } catch (e) { t(e); } } function o(e) { try { l(a.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(s, o); }l((a = a.apply(n, i || [])).next()); })); let n; let i; let r; let a;
        })); const b = n(4387); const x = n(1138); const g = n(4809); const m = (0, f.hg)('studyDirections/fetchStudyDirectionDetail', ((e, t) => {
            return n = void 0, i = void 0, a = function () {
                let n; let i; let r; let a; return (function (e, t) {
                    let n; let i; let r; let a; let s = {
                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                    }; return a = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function o(o) { return function (l) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, o[0] && (s = 0)), s;) try { if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r; switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) { case 0: case 1: r = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, i = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < r[1]) { s.label = r[1], r = o; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(o); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }o = t.call(e, s); } catch (e) { o = [6, e], i = 0; } finally { n = r = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                }(this, ((s) => { switch (s.label) { case 0: n = t.rejectWithValue, i = t.extra, r = t.dispatch, s.label = 1; case 1: return s.trys.push([1, 3,, 4]), [4, i.api.get('/college/study-directions/'.concat(e))]; case 2: return a = s.sent(), r(D.setStudyDirectionData(a.data)), [2, a.data]; case 3: return s.sent().message === 'Failed to fetch' ? [2, n('timeout')] : [2, n('ERROR')]; case 4: return [2]; } })));
            }, new ((r = void 0) || (r = Promise))(((e, t) => { function s(e) { try { l(a.next(e)); } catch (e) { t(e); } } function o(e) { try { l(a.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(s, o); }l((a = a.apply(n, i || [])).next()); })); let n; let i; let r; let a;
        })); const j = function (e) { let t; let n; return (n = (t = e.editStudyDirection) === null || void 0 === t ? void 0 : t.newFields) === null || void 0 === n ? void 0 : n.title; }; const w = (0, f.hg)('studyDirections/editStudyDirection', ((e, t) => {
            return n = void 0, i = void 0, a = function () {
                let n; let i; let r; let a; let s; let o; let l; let c; return (function (e, t) {
                    let n; let i; let r; let a; let s = {
                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                    }; return a = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function o(o) { return function (l) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, o[0] && (s = 0)), s;) try { if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r; switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) { case 0: case 1: r = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, i = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < r[1]) { s.label = r[1], r = o; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(o); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }o = t.call(e, s); } catch (e) { o = [6, e], i = 0; } finally { n = r = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                }(this, ((d) => { switch (d.label) { case 0: n = t.rejectWithValue, i = t.extra, r = t.dispatch, a = t.getState, s = j(a()), o = { name: s }, d.label = 1; case 1: return d.trys.push([1, 3,, 4]), [4, i.api.put('/college/study-directions/'.concat(e), o)]; case 2: return l = d.sent(), r(y()), r(m(e)), [2, l.data]; case 3: return c = d.sent(), [2, n({ errors: c.response.data.errors, status: c.response.status })]; case 4: return [2]; } })));
            }, new ((r = void 0) || (r = Promise))(((e, t) => { function s(e) { try { l(a.next(e)); } catch (e) { t(e); } } function o(e) { try { l(a.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(s, o); }l((a = a.apply(n, i || [])).next()); })); let n; let i; let r; let a;
        })); const S = (0, f.oM)({
            name: 'editStudyDirection',
            initialState: {
                data: void 0, newFields: void 0, isLoading: !1, errors: void 0,
            },
            reducers: { setStudyDirectionData(e, t) { t.payload && (e.data = t.payload, e.newFields = { title: e.data.typeofdirection }); }, setTitle(e, t) { e.newFields.title = t.payload; }, clearNewFields(e) { let t; e.newFields = { title: ((t = e.data) === null || void 0 === t ? void 0 : t.typeofdirection) || null }, e.errors = void 0; } },
            extraReducers(e) { e.addCase(w.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(w.fulfilled, ((e) => { e.isLoading = !1; })).addCase(w.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })); },
        }); var D = S.actions; const N = S.reducer; const k = n(4475); const B = n(2308); const C = n(5044); const L = n(1783); const O = n(8263); const E = n(530); const I = n(1385); const R = function (e) { let t; return (t = e.studyDirectionDetail) === null || void 0 === t ? void 0 : t.error; }; const z = function (e) { let t; return (t = e.studyDirectionDetail) === null || void 0 === t ? void 0 : t.isLoading; }; const F = function (e) { let t; return (t = e.studyDirectionDetail) === null || void 0 === t ? void 0 : t.data; }; const A = (0, f.oM)({
            name: 'studyDirectionDetail', initialState: { data: void 0, isLoading: !1, error: void 0 }, reducers: {}, extraReducers(e) { e.addCase(m.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(m.fulfilled, ((e, t) => { e.isLoading = !1, e.data = t.payload; })).addCase(m.rejected, ((e, t) => { e.isLoading = !1, e.error = t.payload; })); },
        }); const T = (A.actions, A.reducer); const M = n(9161); const _ = function (e) { let t; return (t = e.editStudyDirection) === null || void 0 === t ? void 0 : t.isLoading; }; const H = function (e) { let t; return (t = e.editStudyDirection) === null || void 0 === t ? void 0 : t.errors; }; const V = {
            tabBtn: 'nO84QOdN', tabsButtonsBlock: 'n9rQ6Fv7', title: 'gfVMs2xu', footerBtn: 'NdwI0nIA', greenBtn: 'Bxg1DKEv', redBtn: 'RWDyqeIE', settings: 't2lzoTNX', newAddField: 'a8XsCNYF', tabBlock: 'N3D5UPGc', form: 'FuSKh7gW', footer: 'cM9NaurX', message: 'SIaKdUaq', messageIcon: 'U8w4EFwh',
        }; let P = function () { return P = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, P.apply(this, arguments); }; const X = function (e) {
            const t = e.className; const n = e.visible; const r = e.setVisible; const a = e.studyDirectionId; const s = e.onDeleteStudyDirection; const o = (0, d.T)(); const u = (0, l.useState)(); const f = u[0]; const h = u[1]; const v = (0, l.useRef)(null); const p = (0, l.useState)(!1); const y = p[0]; const S = p[1]; const N = (0, l.useState)(!1); const A = N[0]; const T = N[1]; const X = (0, c.v9)(F); const W = (0, c.v9)(z); const Z = (0, c.v9)(R); const q = (0, c.v9)(_); const U = (0, c.v9)(j); const G = (0, c.v9)(H); (0, l.useEffect)((() => { a && o(m(a)); }), [o, a]); let K; const Y = function () { r(!1), S(!1), T(!1); }; const J = function () { Y(), o(D.clearNewFields()); }; return K = q || W ? (0, i.jsx)(x.O, { width: '100%', height: 80 }) : Z ? (0, i.jsx)(g.xv, {
                theme: g.lg.ERROR, size: g.yH.M, weight: g.fs.SEMIBOLD, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, i.jsx)('div', {
                className: V.tab,
                children: (0, i.jsx)('div', {
                    className: V.tabBlock,
                    children: (0, i.jsx)('div', {
                        className: V.settings,
                        children: (0, i.jsxs)('div', {
                            className: V.newAddField,
                            children: [(0, i.jsx)('h6', { className: V.newAddFieldTitle, children: 'Наименование' }), (0, i.jsx)(I.h, {
                                type: 'text', placeholder: 'научное', feedbackValid: G ? '' : 'Здорово!', invalid: !!G, feedbackInvalid: 'Введите корректные данные', value: U || '', onChange(e) { o(D.setTitle(e.target.value)); },
                            })], 
})
                    }), 
})
            }), (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(k.Tk, {
                    className: (0, b.A)(V.EditStudyDirection, {}, [t]),
                    visible: n,
                    onClose: Y,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, i.jsxs)(k.lx, {
                        className: (0, b.A)(V.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: y,
                        onSubmit(e) {
                            return t = void 0, n = void 0, r = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let i; let r; let a; let s = {
                                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                                    }; return a = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function o(o) { return function (l) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, o[0] && (s = 0)), s;) try { if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r; switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) { case 0: case 1: r = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, i = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < r[1]) { s.label = r[1], r = o; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(o); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }o = t.call(e, s); } catch (e) { o = [6, e], i = 0; } finally { n = r = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                                }(this, ((i) => { switch (i.label) { case 0: return e.preventDefault(), t = e.currentTarget, T(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), S(!0), t.checkValidity() ? (X == null ? void 0 : X.typeofdirection) !== U ? [3, 1] : (h(E.F.error('Для сохранения вы должны внести изменения!')), [3, 3]) : [3, 3]; case 1: return [4, o(w(a))]; case 2: (n = i.sent()).meta.requestStatus === 'fulfilled' && (h(E.F.success('Информация о направлении олимпиады успешно обновлена')), J()), n.meta.requestStatus === 'rejected' && T(!0), i.label = 3; case 3: return [2]; } })));
                            }, new ((i = void 0) || (i = Promise))(((e, a) => { function s(e) { try { l(r.next(e)); } catch (e) { a(e); } } function o(e) { try { l(r.throw(e)); } catch (e) { a(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i(((e) => { e(n); }))).then(s, o); }l((r = r.apply(t, n || [])).next()); })); let t; let n; let i; let r;
                        },
                        children: [(0, i.jsx)(k.p0, { children: q || W ? (0, i.jsx)(x.O, { width: 200, height: 30 }) : (0, i.jsxs)(k.fl, { children: ['Изменение направления олимпиады №', X == null ? void 0 : X.id_typeofdirection] }) }), (0, i.jsx)(k.sD, { children: K }), (0, i.jsxs)(k.Ym, { className: V.footer, children: [(0, i.jsx)('div', { className: V.message, children: A && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(B.Z, { icon: C.D, customClassName: V.messageIcon }), (0, i.jsx)(g.xv, { size: g.yH.M, weight: g.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, i.jsxs)('div', { className: V.footerBtns, children: [(0, i.jsx)(M.zx, {
 theme: M.bn.OUTLINE, className: V.footerBtn, onClick: J, children: (0, i.jsx)(g.xv, { size: g.yH.XS, weight: g.fs.SEMIBOLD, children: 'Отмена'}) 
}), (0, i.jsxs)(M.zx, {
 theme: M.bn.ERROR, className: (0, b.A)(V.footerBtn, {}, [V.redBtn]), onClick() { s(X), Y(); }, disabled: W || q || !!Z, children: [(0, i.jsx)(g.xv, { size: g.yH.XS, weight: g.fs.SEMIBOLD, children: 'Удалить'}), (0, i.jsx)(B.Z, { icon: L.N, className: V.btnIcon })] 
}), (0, i.jsxs)(M.zx, {
 type: 'submit', className: (0, b.A)(V.footerBtn, {}, [V.greenBtn]), disabled: W || q || !!Z, children: [(0, i.jsx)(g.xv, { size: g.yH.XS, weight: g.fs.SEMIBOLD, children: 'Сохранить'}), (0, i.jsx)(B.Z, { icon: O.F, className: V.btnIcon })] 
})] })] })],
                    }),
                }), (0, i.jsx)(k.KF, { ref: v, push: f, placement: 'top-end' })],
            });
        }; const W = n(779); const Z = {
            'modal-dialog': 'f32uWn5b', tabBtn: 'VlaUE0zf', tabsButtonsBlock: 'EhkN06MZ', title: 'ui_zv2zB', footerBtn: 'PwjpiRP_', redBtn: 'hRa4njnE', settings: 'ttPu_LxS', newAddField: 'tiYwFA4q', tabBlock: 'uvxuSONP', footer: 'szIDFJ6N', message: 'W2iXObpn', messageIcon: 'L5pog4O3', checkboxText: 'VSTPu9bR',
        }; let q = function () { return q = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, q.apply(this, arguments); }; const U = function (e) {
            const t = e.className; const n = e.visible; const r = e.setVisible; const a = e.studyDirectionId; const s = e.onDeleteStudyDirection; const o = e.onEditStudyDirection; const u = (0, d.T)(); const f = (0, c.v9)(F); const h = (0, c.v9)(z); const v = (0, c.v9)(R); (0, l.useEffect)((() => { a && u(m(a)); }), [u, a]); let p; const y = function () { r(!1); }; return p = h ? (0, i.jsx)(x.O, { width: '100%', height: 120 }) : v ? (0, i.jsx)(g.xv, {
                theme: g.lg.ERROR, size: g.yH.M, weight: g.fs.BOLD, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, i.jsx)('div', { className: Z.tab, children: (0, i.jsxs)('div', { className: Z.tabBlock, children: [(0, i.jsx)('div', { className: Z.settings, children: (0, i.jsxs)('div', { className: Z.newAddField, children: [(0, i.jsx)('h6', { className: Z.newAddFieldTitle, children: 'ID направления олимпиады' }), (0, i.jsx)(g.xv, { size: g.yH.S, weight: g.fs.BOLD, children: f == null ? void 0 : f.id_typeofdirection })] }) }), (0, i.jsx)('div', { className: Z.settings, children: (0, i.jsxs)('div', { className: Z.newAddField, children: [(0, i.jsx)('h6', { className: Z.newAddFieldTitle, children: 'Наименование' }), (0, i.jsx)(g.xv, { size: g.yH.S, weight: g.fs.BOLD, children: f == null ? void 0 : f.typeofdirection })] }) })] }) }), (0, i.jsxs)(k.Tk, {
                className: (0, b.A)(Z.ViewStudyDirection, {}, [t, 'view-student-modal']),
                visible: n,
                onClose: y,
                alignment: 'center',
                children: [(0, i.jsx)(k.p0, { children: h ? (0, i.jsx)(x.O, { width: 200, height: 30 }) : (0, i.jsxs)(k.fl, { children: ['Направление олимпиады №', f == null ? void 0 : f.id_typeofdirection] }) }), (0, i.jsx)(k.sD, { children: p }), (0, i.jsxs)(k.Ym, {
                    className: Z.footer,
                    children: [(0, i.jsx)('div', {}), (0, i.jsxs)('div', {
                        className: Z.footerBtns,
                        children: [(0, i.jsx)(M.zx, {
                            theme: M.bn.OUTLINE, className: Z.footerBtn, onClick: y, children: (0, i.jsx)(g.xv, { size: g.yH.XS, weight: g.fs.SEMIBOLD, children: 'Закрыть' }),
                        }), (0, i.jsxs)(M.zx, {
                            theme: M.bn.ERROR, className: (0, b.A)(Z.footerBtn, {}, [Z.redBtn]), onClick() { s(f), y(); }, disabled: h || !!v, children: [(0, i.jsx)(g.xv, { size: g.yH.XS, weight: g.fs.SEMIBOLD, children: 'Удалить' }), (0, i.jsx)(B.Z, { icon: L.N, className: Z.btnIcon })],
                        }), (0, i.jsxs)(M.zx, {
                            color: 'primary', className: Z.footerBtn, onClick() { o(a), y(); }, disabled: h || !!v, children: [(0, i.jsx)(g.xv, { size: g.yH.XS, weight: g.fs.SEMIBOLD, children: 'Редактировать' }), (0, i.jsx)(B.Z, { icon: W.C, className: Z.btnIcon })],
                        })], 
})], 
})],
            });
        }; const G = { footerBtn: 'dIlKaEEz', redBtn: 'IhZkNJ0e', deleteText: 'aUV5vOiA' }; const K = (0, f.hg)('studyDirections/deleteStudyDirection', ((e, t) => {
            return n = void 0, i = void 0, a = function () {
                let n; let i; let r; let a; return (function (e, t) {
                    let n; let i; let r; let a; let s = {
                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                    }; return a = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function o(o) { return function (l) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, o[0] && (s = 0)), s;) try { if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r; switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) { case 0: case 1: r = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, i = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < r[1]) { s.label = r[1], r = o; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(o); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }o = t.call(e, s); } catch (e) { o = [6, e], i = 0; } finally { n = r = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                }(this, ((s) => { switch (s.label) { case 0: n = t.rejectWithValue, i = t.extra, r = t.dispatch, s.label = 1; case 1: return s.trys.push([1, 3,, 4]), [4, i.api.delete('/college/study-directions/'.concat(e))]; case 2: return a = s.sent(), r(y()), [2, a.data]; case 3: return s.sent().message === 'Failed to fetch' ? [2, n('timeout')] : [2, n('ERROR')]; case 4: return [2]; } })));
            }, new ((r = void 0) || (r = Promise))(((e, t) => { function s(e) { try { l(a.next(e)); } catch (e) { t(e); } } function o(e) { try { l(a.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(s, o); }l((a = a.apply(n, i || [])).next()); })); let n; let i; let r; let a;
        })); let Y = function () { return Y = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, Y.apply(this, arguments); }; const J = function (e) {
            const t = e.className; const n = e.studyDirection; const r = e.visible; const a = e.setVisible; const s = (0, d.T)(); const o = (0, l.useState)(); const c = o[0]; const u = o[1]; const f = (0, l.useRef)(null); const h = (0, l.useState)(!1); const v = h[0]; const p = h[1]; const y = function () { a(!1); }; return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsxs)(k.Tk, {
                    className: (0, b.A)(G.DeleteStudyDirection, {}, [t]),
visible: r,
onClose: y,
size: 'lg',
alignment: 'center',
children: [(0, i.jsx)(k.p0, { children: (0, i.jsxs)(k.fl, { children: ['Удаление направления олимпиады №', n == null ? void 0 : n.id_typeofdirection] }) }), (0, i.jsx)(k.sD, { children: (0, i.jsxs)(g.xv, { size: g.yH.XM, className: G.deleteText, children: ['Вы действительно хотите удалить направление олимпиады', ' ', (0, i.jsxs)('span', { children: ['№', n == null ? void 0 : n.id_typeofdirection, ' ', '-', ' ', '"'.concat(n == null ? void 0 : n.typeofdirection, '"')] }), ' ', 'и все связанные с ним данные?'] }) }), (0, i.jsx)(k.Ym, {
 className: G.footer,
children: (0, i.jsxs)('div', {
 className: G.footerBtns,
children: [(0, i.jsx)(M.zx, {
                        theme: M.bn.OUTLINE, className: G.footerBtn, onClick: y, children: (0, i.jsx)(g.xv, { size: g.yH.XS, weight: g.fs.SEMIBOLD, children: 'Отмена' }), 
}), (0, i.jsxs)(M.zx, {
                        theme: M.bn.ERROR, className: (0, b.A)(G.footerBtn, {}, [G.redBtn]), onClick() { let e; e = n.id_typeofdirection.toString(), p(!0), s(K(e)).then(((e) => { e.meta.requestStatus === 'fulfilled' ? (u(E.F.success('Направление олимпиады №'.concat(n == null ? void 0 : n.id_typeofdirection, ' удалено'))), y(), p(!1)) : e.meta.requestStatus === 'rejected' && (u(E.F.error('Произошла ошибка при удалении, попробуйте снова')), p(!1)); })); }, disabled: v, children: [(0, i.jsx)(g.xv, { size: g.yH.XS, weight: g.fs.SEMIBOLD, children: 'Удалить' }), (0, i.jsx)(B.Z, { icon: L.N, className: G.btnIcon })], 
})] 
}) 
})],
                }), (0, i.jsx)(k.KF, { ref: f, push: c, placement: 'top-end' })],
            });
        }; const Q = n(6837); const $ = n(1353); const ee = n(773); const te = n(5606); const ne = n(2008); const ie = n(596); const re = n(4164); const ae = function (e) { let t; return (t = e.studyDirections) === null || void 0 === t ? void 0 : t.error; }; const se = function (e) { let t; return (t = e.studyDirections) === null || void 0 === t ? void 0 : t.isLoading; }; const oe = {
            TableBlock: 'tdO_4Yxq', table: 'UL__a0sI', tableRow: 'eOXPteTs', tableCell: 'FrsMUeux', tableHead: 'dDGqJkja', tableCellId: 'gP701tu9', tableBody: 'hhWKKd7L', tableSortIcon: 'Ntltw3pI', active: 'hkaAwvL9', cellTextBg: 'S1qRAqGt', tableCellBtns: 'wW55iIuR', tableCellBtnsWrapper: 'hHLiF0fH', editBtn: 'pg7YsBLQ', checkbox: 'fdtqdgsO', tableWithCheckboxes: 'y7sEd1GW',
        }; let le = function () { return le = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, le.apply(this, arguments); }; const ce = function (e) {
            let t; let n; let r; let a; const s = e.className; const o = e.data; const u = e.exportDisabled; const f = (0, d.T)(); const v = (0, c.v9)(se); const p = (0, c.v9)(ae); const m = (0, c.v9)(h.DU); const j = (0, c.v9)(h.Qg); const w = (0, l.useState)(); const S = w[0]; const D = w[1]; const N = (0, l.useState)(!1); const k = N[0]; const B = N[1]; const C = (0, l.useState)(!1); const L = C[0]; const O = C[1]; const E = (0, l.useState)(!1); const I = E[0]; const R = E[1]; const z = (0, l.useState)(); const F = z[0]; const A = z[1]; const T = function (e) { O(!0), A(e); }; const _ = (0, l.useCallback)(((e) => { R(!0), D(e); }), []); (0, l.useEffect)((() => { f(h.f$.setSort('id_typeofdirection')); }), [f]); let H; const V = (0, l.useCallback)(((e) => { f(h.f$.setSort(e)), f(y()); }), [f]); H = v ? (0, i.jsx)(x.O, { height: 250 }) : p ? (0, i.jsx)(g.xv, {
                theme: g.lg.ERROR, size: g.yH.M, weight: g.fs.SEMIBOLD, className: oe.error, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : o.length ? (0, i.jsxs)('div', {
 className: (0, b.A)(oe.table, (t = {}, t[oe.tableWithCheckboxes] = !u, t), []),
children: [(0, i.jsx)('div', {
 className: oe.tableHead,
children: (0, i.jsxs)('div', {
 className: oe.tableRow,
children: [!u && (0, i.jsx)(Q.X, { className: oe.checkbox, id: 'checkbox-study-directions-all' }), (0, i.jsxs)(M.zx, {
                theme: M.bn.CLEAR, className: (0, b.A)(oe.tableCell, {}, [oe.tableCellId]), onClick() { V('id_typeofdirection'); }, children: [(0, i.jsx)(g.xv, { size: g.yH.XS, weight: g.fs.SEMIBOLD, children: 'ID направления олимпиады' }), (0, i.jsx)($.J, { Svg: j === 'asc' ? ee.Z : te.Z, className: (0, b.A)(oe.tableSortIcon, (n = {}, n[oe.active] = m === 'id_typeofdirection', n), []) })], 
}), (0, i.jsxs)(M.zx, {
                theme: M.bn.CLEAR, className: oe.tableCell, onClick() { V('typeofdirection'); }, children: [(0, i.jsx)(g.xv, { size: g.yH.XS, weight: g.fs.SEMIBOLD, children: 'Наименование' }), (0, i.jsx)($.J, { Svg: j === 'asc' ? ee.Z : te.Z, className: (0, b.A)(oe.tableSortIcon, (r = {}, r[oe.active] = m === 'typeofdirection', r), []) })], 
}), (0, i.jsx)('div', { className: (0, b.A)(oe.tableCell, {}, [oe.tableCellBtnsWrapper]) })] 
}) 
}), (0, i.jsx)('div', { className: oe.tableBody, children: o == null ? void 0 : o.map(((e) => (0, i.jsxs)('div', { className: oe.tableRow, children: [!u && (0, i.jsx)(Q.X, { className: oe.checkbox, id: 'checkbox-study-directions-'.concat(e.id_typeofdirection) }), (0, i.jsx)('div', { className: (0, b.A)(oe.tableCell, {}, [oe.tableCellId]), children: (0, i.jsx)(g.xv, { size: g.yH.XS, children: e.id_typeofdirection }) }), (0, i.jsx)('div', { className: oe.tableCell, children: (0, i.jsx)(g.xv, { size: g.yH.XS, children: e.typeofdirection }) }), (0, i.jsxs)('div', { className: (0, b.A)(oe.tableCell, {}, [oe.tableCellBtns]), children: [(0, i.jsx)(M.zx, { theme: M.bn.CLEAR, title: 'Просмотр', className: oe.editBtn, onClick () { var t; t = e.id_typeofdirection.toString(), B(!0), A(t) }, children: (0, i.jsx)($.J, { Svg: ne.Z }) }), (0, i.jsx)(M.zx, { theme: M.bn.CLEAR, title: 'Редактировать', className: oe.editBtn, onClick () { T(e.id_typeofdirection.toString()) }, children: (0, i.jsx)($.J, { Svg: ie.Z }) }), (0, i.jsx)(M.zx, { theme: M.bn.CLEAR, title: 'Удалить', className: oe.editBtn, onClick () { _(e) }, children: (0, i.jsx)($.J, { Svg: re.Z }) })] })] }, e.id_typeofdirection))) })] 
}) : (0, i.jsx)(g.xv, { children: 'Ничего не найдено...' }); const P = ((a = {})[oe.error] = !!p, a); return (0, i.jsxs)('div', {
                className: (0, b.A)(oe.TableBlock, P, [s]),
                children: [H, (0, i.jsx)(U, {
                    visible: k, setVisible: B, studyDirectionId: F, onDeleteStudyDirection: _, onEditStudyDirection: T,
                }), (0, i.jsx)(X, {
                    visible: L, setVisible: O, studyDirectionId: F, onDeleteStudyDirection: _,
                }), (0, i.jsx)(J, { studyDirection: S, visible: I, setVisible: R })],
            });
        }; const de = function (e) { let t; return (t = e.studyDirections) === null || void 0 === t ? void 0 : t.limit; }; const ue = function (e) { let t; return (t = e.studyDirections) === null || void 0 === t ? void 0 : t.page; }; const fe = function (e) { let t; return (t = e.studyDirections) === null || void 0 === t ? void 0 : t.data; }; const he = (0, f.oM)({
            name: 'studyDirections',
            initialState: {
                data: void 0, isLoading: !0, error: void 0, page: '1', limit: '50',
            },
            reducers: { setPage(e, t) { e.page = t.payload; }, setLimit(e, t) { e.limit = t.payload; } },
            extraReducers(e) { e.addCase(y.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(y.fulfilled, ((e, t) => { e.isLoading = !1, e.data = { data: t.payload.data, pagination: t.payload.pagination }; })).addCase(y.rejected, ((e, t) => { e.isLoading = !1, e.error = t.payload; })); },
        }); const ve = he.actions; const pe = he.reducer; const ye = n(7730); const be = function (e) { let t; return (t = e.addStudyDirection) === null || void 0 === t ? void 0 : t.data.title; }; const xe = (0, f.hg)('studyDirections/addStudyDirection', ((e, t) => {
            return n = void 0, i = void 0, a = function () {
                let e; let n; let i; let r; let a; let s; let o; let l; return (function (e, t) {
                    let n; let i; let r; let a; let s = {
                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                    }; return a = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function o(o) { return function (l) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, o[0] && (s = 0)), s;) try { if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r; switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) { case 0: case 1: r = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, i = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < r[1]) { s.label = r[1], r = o; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(o); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }o = t.call(e, s); } catch (e) { o = [6, e], i = 0; } finally { n = r = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                }(this, ((c) => { switch (c.label) { case 0: e = t.rejectWithValue, n = t.extra, i = t.dispatch, r = t.getState, a = be(r()), s = { name: a }, c.label = 1; case 1: return c.trys.push([1, 3,, 4]), [4, n.api.post('/college/study-directions/', s)]; case 2: return o = c.sent(), i(y()), i(me.clearData()), [2, o.data]; case 3: return l = c.sent(), [2, e({ errors: l.response.data.errors, status: l.response.status })]; case 4: return [2]; } })));
            }, new ((r = void 0) || (r = Promise))(((e, t) => { function s(e) { try { l(a.next(e)); } catch (e) { t(e); } } function o(e) { try { l(a.throw(e)); } catch (e) { t(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(s, o); }l((a = a.apply(n, i || [])).next()); })); let n; let i; let r; let a;
        })); const ge = (0, f.oM)({
            name: 'addStudyDirection', initialState: { data: { title: null }, isLoading: !1, errors: void 0 }, reducers: { setTitle(e, t) { e.data.title = t.payload; }, clearData(e) { e.data = { title: null }, e.errors = void 0; } }, extraReducers(e) { e.addCase(xe.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(xe.fulfilled, ((e) => { e.isLoading = !1; })).addCase(xe.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })); },
        }); var me = ge.actions; const je = ge.reducer; const we = n(3280); const Se = function (e) { let t; return (t = e.addStudyDirection) === null || void 0 === t ? void 0 : t.errors; }; const De = {
            tabBtn: 'oQRe50SP', tabsButtonsBlock: 'I4uw7dzF', title: 'GuIrGROW', settings: 'stICKHfv', newAddField: 'Cmtdpd7c', tabBlock: 's5EyBLb9', form: 'jHO3Lp8W', footerBtn: 'YjJ04v8Z', greenBtn: 'zCjV3iHf', footer: 'Ef4TXyiL', message: 'e16LI7a0', messageIcon: 'NB6c5ys_',
        }; let Ne = function () { return Ne = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, Ne.apply(this, arguments); }; const ke = function (e) {
            const t = e.className; const n = e.visible; const r = e.setVisible; const a = (0, d.T)(); const s = (0, l.useState)(!1); const o = s[0]; const u = s[1]; const f = (0, l.useState)(!1); const h = f[0]; const v = f[1]; const p = (0, l.useState)(); const y = p[0]; const x = p[1]; const m = (0, l.useRef)(null); const j = (0, c.v9)(be); const w = (0, c.v9)(Se); const S = (0, l.useCallback)((() => { r(!1); }), [r]); const D = function () { S(), u(!1), v(!1); }; return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(k.Tk, {
                    className: (0, b.A)(De.AddStudyDirection, {}, [t]),
                    visible: n,
                    onClose: S,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, i.jsxs)(k.lx, {
                        className: (0, b.A)(De.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: o,
                        onSubmit(e) {
                            return t = void 0, n = void 0, r = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let i; let r; let a; let s = {
                                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                                    }; return a = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function o(o) { return function (l) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, o[0] && (s = 0)), s;) try { if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r; switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) { case 0: case 1: r = o; break; case 4: return s.label++, { value: o[1], done: !1 }; case 5: s.label++, i = o[1], o = [0]; continue; case 7: o = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || o[0] !== 6 && o[0] !== 2)) { s = 0; continue; } if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) { s.label = o[1]; break; } if (o[0] === 6 && s.label < r[1]) { s.label = r[1], r = o; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(o); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }o = t.call(e, s); } catch (e) { o = [6, e], i = 0; } finally { n = r = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, l])); }; }
                                }(this, ((i) => { switch (i.label) { case 0: return e.preventDefault(), t = e.currentTarget, v(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), u(!0), t.checkValidity() ? j ? [4, a(xe())] : [3, 2] : [3, 3]; case 1: return (n = i.sent()).meta.requestStatus === 'fulfilled' && (x(E.F.success('Направление олимпиады добавлено')), D()), n.meta.requestStatus === 'rejected' && v(!0), [3, 3]; case 2: v(!0), i.label = 3; case 3: return [2]; } })));
                            }, new ((i = void 0) || (i = Promise))(((e, a) => { function s(e) { try { l(r.next(e)); } catch (e) { a(e); } } function o(e) { try { l(r.throw(e)); } catch (e) { a(e); } } function l(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i(((e) => { e(n); }))).then(s, o); }l((r = r.apply(t, n || [])).next()); })); let t; let n; let i; let r;
                        },
                        children: [(0, i.jsx)(k.p0, { children: (0, i.jsx)(k.fl, { children: 'Добавление направления олимпиады' }) }), (0, i.jsx)(k.sD, { children: (0, i.jsx)('div', { className: De.tab, children: (0, i.jsx)('div', { className: De.tabBlock, children: (0, i.jsx)('div', { className: De.settings, children: (0, i.jsxs)('div', { className: De.newAddField, children: [(0, i.jsx)('h6', {className: De.newAddFieldTitle, children: "Наименование*"}), (0, i.jsx)(I.h, {
 type: 'text', placeholder: 'научное', feedbackValid: w ? '' : 'Здорово!', invalid: !!w, feedbackInvalid: 'Введите корректные данные!', value: j || '', onChange (e) { a(me.setTitle(e.target.value)) }, required: !0 
})] }) }) }) }) }), (0, i.jsxs)(k.Ym, { className: De.footer, children: [(0, i.jsx)('div', { className: De.message, children: h && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(B.Z, { icon: C.D, customClassName: De.messageIcon }), (0, i.jsx)(g.xv, { size: g.yH.M, weight: g.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, i.jsxs)('div', { className: De.footerBtns, children: [(0, i.jsx)(M.zx, {
 theme: M.bn.OUTLINE, className: De.footerBtn, onClick: D, children: (0, i.jsx)(g.xv, { size: g.yH.XS, weight: g.fs.SEMIBOLD, children: 'Отмена'}) 
}), (0, i.jsxs)(M.zx, { type: 'submit', className: (0, b.A)(De.footerBtn, {}, [De.greenBtn]), children: [(0, i.jsx)(g.xv, { size: g.yH.XS, weight: g.fs.SEMIBOLD, children: 'Добавить'}), (0, i.jsx)(B.Z, { icon: we.q, className: De.btnIcon })] })] })] })],
                    }),
                }), (0, i.jsx)(k.KF, { ref: m, push: y, placement: 'top-end' })],
            });
        }; const Be = n(5375); const Ce = n(2556); let Le = function () { return Le = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, Le.apply(this, arguments); }; const Oe = {
            studyDirections: pe, studyDirectionDetail: T, addStudyDirection: je, editStudyDirection: N,
        }; const Ee = function (e) {
            e.className; const t = (0, d.T)(); const n = (0, l.useState)(!1); const f = n[0]; const h = n[1]; const v = (0, c.v9)(fe); const p = (0, c.v9)(se); const b = (0, c.v9)(ae); const x = (0, c.v9)(de); const g = (0, c.v9)(ue); const m = (0, l.useState)(''); const j = m[0]; const w = m[1]; const S = (0, l.useState)(); const D = S[0]; const N = S[1]; const k = (0, l.useCallback)(((e) => { w(e); }), []); const B = (0, l.useCallback)(((e) => { t(ve.setLimit(e)), t(y()); }), [t]); const C = (0, l.useCallback)(((e) => { t(ve.setPage(e)), t(y()); }), [t]); return (0, l.useEffect)((() => { N((v == null ? void 0 : v.data) || []); }), [v]), (0, l.useEffect)((() => { const e = (0, ye._D)(j, (v == null ? void 0 : v.data) || []); N(e || []); }), [v, j]), (0, l.useEffect)((() => { t(y()); }), [t]), (0, i.jsx)(o.B, {
                title: 'LMS - Направления олимпиады',
                children: (0, i.jsxs)(r.W, {
                    reducers: Oe,
                    removeAfterUnmount: !0,
                    children: [(0, i.jsxs)('div', {
                        children: [(0, i.jsxs)('div', {
                            className: 'page-settings '.concat(!1),
                            children: [(0, i.jsx)(a.o, {
                                value: j, onChange: k, searchText: 'Поиск по наименованию', error: b, isLoading: p,
                            }), (0, i.jsx)(s.X, {
                                onlyAdding: !0, setVisibleAddNewField: h, addingModalText: 'Добавить направление олимпиады', error: b, isLoading: p, references: Ce.x, referencesTitle: 'Справочники', children: (0, i.jsx)(ke, { visible: f, setVisible: h }),
                            })],
                        }), (0, i.jsx)(ce, { data: D || [], exportDisabled: !0 }), (0, i.jsxs)('div', {
                            className: 'page-table-settings',
                            children: [(0, i.jsx)(u.K, {
                                data: D || [], onChange: B, onChangePage: C, paginationData: v == null ? void 0 : v.pagination, itemsLimit: x, withRecords: !0, isLoading: p, error: b,
                            }), (0, i.jsx)(u.N, {
                                data: D || [], onChange: C, itemsPage: g, isLoading: p, error: b, paginationData: v == null ? void 0 : v.pagination,
                            })],
                        })],
                    }), b && (0, i.jsx)(Be.d, { error: b })],
                }),
            });
        };
    },
}]);
