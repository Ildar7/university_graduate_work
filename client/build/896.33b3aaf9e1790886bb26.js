!(function () { try { const e = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; const t = (new Error()).stack; t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = '8da81379-768c-49ac-8c3d-5b756633165f', e._sentryDebugIdIdentifier = 'sentry-dbid-8da81379-768c-49ac-8c3d-5b756633165f'); } catch (e) {} }()); const _global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; _global.SENTRY_RELEASE = { id: '45ee1168f5cf48e9753bace26323152d3b61cb67' }, (self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[896], {
    7152: (e, t, n) => { n.d(t, { l: () => i }); var i = ['512 512', "<path fill='var(--ci-primary-color, currentColor)' d='M29.663,482.25l.087.087a24.847,24.847,0,0,0,17.612,7.342,25.178,25.178,0,0,0,8.1-1.345l142.006-48.172,272.5-272.5A88.832,88.832,0,0,0,344.334,42.039l-272.5,272.5L23.666,456.541A24.844,24.844,0,0,0,29.663,482.25Zm337.3-417.584a56.832,56.832,0,0,1,80.371,80.373L411.5,180.873,331.127,100.5ZM99.744,331.884,308.5,123.127,388.873,203.5,180.116,412.256,58.482,453.518Z' class='ci-primary'/>"]; },
    1350: (e, t, n) => { n.d(t, { s: () => i }); var i = ['512 512', "<polygon fill='var(--ci-primary-color, currentColor)' points='43.314 130.51 95.196 78.627 95.196 496.196 127.196 496.196 127.196 78.627 179.079 130.51 201.706 107.883 111.196 17.372 20.686 107.883 43.314 130.51' class='ci-primary'/><rect width='120' height='32' x='184' y='160' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='184' height='32' x='184' y='232' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='248' height='32' x='184' y='304' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='312' height='32' x='184' y='376' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/>"]; },
    8795: (e, t, n) => { n.d(t, { w: () => i }); var i = ['512 512', "<rect width='120' height='32' x='184' y='288' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='184' height='32' x='184' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='248' height='32' x='184' y='144' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='312' height='32' x='184' y='72' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='95.196 16 95.196 433.568 43.313 381.686 20.687 404.313 111.196 494.823 201.705 404.313 179.078 381.687 127.196 433.568 127.196 16 95.196 16' class='ci-primary'/>"]; },
    1210: (e, t, n) => {
        n.r(t), n.d(t, { default: () => Oe }); const i = n(5893); const r = n(918); const a = n(1150); const s = n(9649); const l = n(5306); const o = n(7687); const c = n(5461); const u = n(7294); const d = n(6458); const h = n(7730); const f = n(7168); const p = n(1759); const v = n(121); const m = function (e) { let t; return (t = e.citizenship) === null || void 0 === t ? void 0 : t.page; }; const g = function (e) { let t; return (t = e.citizenship) === null || void 0 === t ? void 0 : t.limit; }; const y = (0, f.hg)('students/fetchCitizenship', ((e, t) => {
            return n = void 0, i = void 0, a = function () {
                let e; let n; let i; let r; let a; let s; return (function (e, t) {
                    let n; let i; let r; let a; let s = {
                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                    }; return a = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, l[0] && (s = 0)), s;) try { if (n = 1, i && (r = 2 & l[0] ? i.return : l[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, l[1])).done) return r; switch (i = 0, r && (l = [2 & l[0], r.value]), l[0]) { case 0: case 1: r = l; break; case 4: return s.label++, { value: l[1], done: !1 }; case 5: s.label++, i = l[1], l = [0]; continue; case 7: l = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || l[0] !== 6 && l[0] !== 2)) { s = 0; continue; } if (l[0] === 3 && (!r || l[1] > r[0] && l[1] < r[3])) { s.label = l[1]; break; } if (l[0] === 6 && s.label < r[1]) { s.label = r[1], r = l; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(l); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }l = t.call(e, s); } catch (e) { l = [6, e], i = 0; } finally { n = r = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                }(this, ((l) => {
                    switch (l.label) {
                    case 0: e = t.rejectWithValue, n = t.extra, i = t.getState, r = {
                        pageSelector: m, limitSelector: g, sortFieldSelector: p.DU, sortOrderSelector: p.Qg,
                    }, a = (0, v.o)('/college/citizenship', r, i()), l.label = 1; case 1: return l.trys.push([1, 3,, 4]), [4, n.api.get(a)]; case 2: return [2, l.sent().data]; case 3: return (s = l.sent()).message === 'Failed to fetch' ? [2, e({ status: 500, error: 'timeout' })] : [2, e({ status: s.response.status, error: s.response.data.message })]; case 4: return [2];
                    }
                })));
            }, new ((r = void 0) || (r = Promise))(((e, t) => { function s(e) { try { o(a.next(e)); } catch (e) { t(e); } } function l(e) { try { o(a.throw(e)); } catch (e) { t(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(s, l); }o((a = a.apply(n, i || [])).next()); })); let n; let i; let r; let a;
        })); const x = n(4387); const b = n(1138); const j = n(4809); const w = n(4475); const N = n(2308); const C = n(1350); const k = n(8795); const S = n(968); const z = n(7152); const _ = n(1783); const O = n(530); const A = { footerBtn: 'afSq5pDW', redBtn: 'wn250ebc', deleteText: 'uCA2bJDW' }; const B = (0, f.hg)('citizenship/deleteCurriculumSubject', ((e, t) => {
            return n = void 0, i = void 0, a = function () {
                let n; let i; let r; let a; return (function (e, t) {
                    let n; let i; let r; let a; let s = {
                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                    }; return a = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, l[0] && (s = 0)), s;) try { if (n = 1, i && (r = 2 & l[0] ? i.return : l[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, l[1])).done) return r; switch (i = 0, r && (l = [2 & l[0], r.value]), l[0]) { case 0: case 1: r = l; break; case 4: return s.label++, { value: l[1], done: !1 }; case 5: s.label++, i = l[1], l = [0]; continue; case 7: l = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || l[0] !== 6 && l[0] !== 2)) { s = 0; continue; } if (l[0] === 3 && (!r || l[1] > r[0] && l[1] < r[3])) { s.label = l[1]; break; } if (l[0] === 6 && s.label < r[1]) { s.label = r[1], r = l; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(l); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }l = t.call(e, s); } catch (e) { l = [6, e], i = 0; } finally { n = r = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                }(this, ((s) => { switch (s.label) { case 0: n = t.rejectWithValue, i = t.extra, r = t.dispatch, s.label = 1; case 1: return s.trys.push([1, 3,, 4]), [4, i.api.delete('/college/citizenship/'.concat(e))]; case 2: return a = s.sent(), r(y()), [2, a.data]; case 3: return s.sent().message === 'Failed to fetch' ? [2, n('timeout')] : [2, n('ERROR')]; case 4: return [2]; } })));
            }, new ((r = void 0) || (r = Promise))(((e, t) => { function s(e) { try { o(a.next(e)); } catch (e) { t(e); } } function l(e) { try { o(a.throw(e)); } catch (e) { t(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(s, l); }o((a = a.apply(n, i || [])).next()); })); let n; let i; let r; let a;
        })); let L = function () { return L = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, L.apply(this, arguments); }; const F = function (e) {
            const t = e.className; const n = e.citizenship; const r = e.visible; const a = e.setVisible; const s = (0, c.T)(); const l = (0, u.useState)(); const o = l[0]; const d = l[1]; const h = (0, u.useRef)(null); const f = (0, u.useState)(!1); const p = f[0]; const v = f[1]; const m = function () { a(!1); }; return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsxs)(w.Tk, {
                    className: (0, x.A)(A.DeleteCitizenship, {}, [t]),
visible: r,
onClose: m,
size: 'lg',
alignment: 'center',
children: [(0, i.jsx)(w.p0, { children: (0, i.jsxs)(w.fl, { children: ['Удаление гражданства №', n == null ? void 0 : n.id_citizenship] }) }), (0, i.jsx)(w.sD, { children: (0, i.jsxs)(j.xv, { size: j.yH.XM, className: A.deleteText, children: ['Вы действительно хотите удалить гражданство', ' ', (0, i.jsxs)('span', { children: ['№', n == null ? void 0 : n.id_citizenship, ' ', '-', ' ', n == null ? void 0 : n.citizenship] }), ' ', 'и все связанные с ним данные?'] }) }), (0, i.jsx)(w.Ym, {
 className: A.footer,
children: (0, i.jsxs)('div', {
 className: A.footerBtns,
children: [(0, i.jsx)(w.u5, {
                        color: 'primary', variant: 'outline', className: A.footerBtn, onClick: m, children: 'Отмена' 
}), (0, i.jsxs)(w.u5, {
                        color: 'danger', className: (0, x.A)(A.footerBtn, {}, [A.redBtn]), onClick() { let e; e = n.id_citizenship.toString(), v(!0), s(B(e)).then(((e) => { e.meta.requestStatus === 'fulfilled' ? (d(O.F.success('Гражданство №'.concat(n == null ? void 0 : n.id_citizenship, ' удалено'))), m(), v(!1)) : e.meta.requestStatus === 'rejected' && (d(O.F.error('Произошла ошибка при удалении, попробуйте снова')), v(!1)); })); }, disabled: p, children: [(0, i.jsx)(N.Z, { icon: _.N, className: A.btnIcon }), 'Удалить'], 
})] 
}) 
})],
                }), (0, i.jsx)(w.KF, { ref: h, push: o, placement: 'top-end' })],
            });
        }; const D = n(5044); const E = n(8263); const T = n(1385); const I = function (e) { let t; return (t = e.citizenshipDetail) === null || void 0 === t ? void 0 : t.data; }; const R = function (e) { let t; return (t = e.citizenshipDetail) === null || void 0 === t ? void 0 : t.error; }; const P = function (e) { let t; return (t = e.citizenshipDetail) === null || void 0 === t ? void 0 : t.isLoading; }; const M = (0, f.hg)('citizenship/fetchCurriculumSubjectsDetail', ((e, t) => {
            return n = void 0, i = void 0, a = function () {
                let n; let i; let r; let a; return (function (e, t) {
                    let n; let i; let r; let a; let s = {
                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                    }; return a = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, l[0] && (s = 0)), s;) try { if (n = 1, i && (r = 2 & l[0] ? i.return : l[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, l[1])).done) return r; switch (i = 0, r && (l = [2 & l[0], r.value]), l[0]) { case 0: case 1: r = l; break; case 4: return s.label++, { value: l[1], done: !1 }; case 5: s.label++, i = l[1], l = [0]; continue; case 7: l = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || l[0] !== 6 && l[0] !== 2)) { s = 0; continue; } if (l[0] === 3 && (!r || l[1] > r[0] && l[1] < r[3])) { s.label = l[1]; break; } if (l[0] === 6 && s.label < r[1]) { s.label = r[1], r = l; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(l); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }l = t.call(e, s); } catch (e) { l = [6, e], i = 0; } finally { n = r = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                }(this, ((s) => { switch (s.label) { case 0: n = t.rejectWithValue, i = t.extra, r = t.dispatch, s.label = 1; case 1: return s.trys.push([1, 3,, 4]), [4, i.api.get('/college/citizenship/'.concat(e))]; case 2: return a = s.sent(), r($.setCitizenshipData(a.data)), [2, a.data]; case 3: return s.sent().message === 'Failed to fetch' ? [2, n('timeout')] : [2, n('ERROR')]; case 4: return [2]; } })));
            }, new ((r = void 0) || (r = Promise))(((e, t) => { function s(e) { try { o(a.next(e)); } catch (e) { t(e); } } function l(e) { try { o(a.throw(e)); } catch (e) { t(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(s, l); }o((a = a.apply(n, i || [])).next()); })); let n; let i; let r; let a;
        })); const Z = (0, f.oM)({
            name: 'citizenshipDetail', initialState: { data: void 0, isLoading: !1, error: void 0 }, reducers: {}, extraReducers(e) { e.addCase(M.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(M.fulfilled, ((e, t) => { e.isLoading = !1, e.data = t.payload; })).addCase(M.rejected, ((e, t) => { e.isLoading = !1, e.error = t.payload; })); },
        }); const V = (Z.actions, Z.reducer); const H = n(3418); const q = n(3695); const W = {
            tabBtn: 'yGxqid2S', tabsButtonsBlock: 't0P19Ocd', title: 'kUr_qO_m', footerBtn: 'QHT6T9cP', greenBtn: 'vRPVokbZ', redBtn: 'vR2UXiJl', settings: 'fHRkwyH_', newAddField: 'zvjiiUK1', tabBlock: 'MG4wNTiT', form: 'iBpzUzoc', footer: 'ZjhAOn0G', message: 'mgZdEXl8', messageIcon: 'ICfixLhC',
        }; const G = function (e) { let t; return (t = e.editCitizenship) === null || void 0 === t ? void 0 : t.isLoading; }; const K = function (e) { let t; return (t = e.editCitizenship) === null || void 0 === t ? void 0 : t.newFields; }; const U = function (e) { let t; return (t = e.editCitizenship) === null || void 0 === t ? void 0 : t.errors; }; let J = function () { return J = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, J.apply(this, arguments); }; const X = function (e) {
            const t = e.className; const n = e.visible; const r = e.setVisible; const a = e.citizenshipId; const s = e.onDeleteCitizenship; const l = (0, c.T)(); const o = (0, u.useState)(); const h = o[0]; const f = o[1]; const p = (0, u.useRef)(null); const v = (0, u.useState)(!1); const m = v[0]; const g = v[1]; const y = (0, u.useState)(!1); const C = y[0]; const k = y[1]; const S = (0, d.v9)(I); const z = (0, d.v9)(P); const A = (0, d.v9)(R); const B = (0, d.v9)(G); const L = (0, d.v9)(K); const F = (0, d.v9)(U); const Z = (0, d.v9)(ue); const V = (0, d.v9)(se); const X = (0, d.v9)(le); (0, u.useEffect)((() => { a && l(M(a)); }), [l, a]); let Y; const ee = function () { r(!1), g(!1), k(!1); }; const te = function () { ee(), l($.clearNewFields()); }; return Y = B || z || V ? (0, i.jsx)(b.O, { width: '100%', height: 80 }) : A || X ? (0, i.jsx)(j.xv, {
                theme: j.lg.ERROR, size: j.yH.M, weight: j.fs.SEMIBOLD, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, i.jsx)('div', {
                className: W.tab,
                children: (0, i.jsxs)('div', {
                    className: W.tabBlock,
                    children: [(0, i.jsx)('div', { className: W.settings, children: (0, i.jsxs)('div', { className: W.newAddField, children: [(0, i.jsx)('h6', { className: W.newAddFieldTitle, children: 'Наименование страны' }), (0, i.jsxs)(w.LX, {
 className: W.selectFilter, value: (L == null ? void 0 : L.country_id) || '', onChange(e) { l($.setCountryId(e.target.value)); }, feedbackValid: (0, H.M)(F, 'country_id') ? '' : 'Отлично!', feedbackInvalid: (0, q.N)((0, H.M)(F, 'country_id'), F, 'country_id'), required: !0, children: [(0, i.jsx)('option', { value: '', children: 'Не выбрано'}), Z == null ? void 0 : Z.data.map(((e) => (0, i.jsx)('option', {value: e.country_id, children: e.citizenship}, e.id_citizenship)))] 
})] }) }), (0, i.jsx)('div', {
                        className: W.settings,
                        children: (0, i.jsxs)('div', {
                            className: W.newAddField,
                            children: [(0, i.jsx)('h6', { className: W.newAddFieldTitle, children: 'Наименование гражданства' }), (0, i.jsx)(T.h, {
                                type: 'text', placeholder: 'Казахстан', feedbackValid: F ? '' : 'Здорово!', invalid: !!F, feedbackInvalid: 'Введите корректные данные', value: (L == null ? void 0 : L.name) || '', onChange(e) { l($.setName(e.target.value)); },
                            })], 
})
                    })], 
})
            }), (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(w.Tk, {
                    className: (0, x.A)(W.EditEnrollmentType, {}, [t]),
                    visible: n,
                    onClose: ee,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, i.jsxs)(w.lx, {
                        className: (0, x.A)(W.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: m,
                        onSubmit(e) {
                            return t = void 0, n = void 0, r = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let i; let r; let a; let s = {
                                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                                    }; return a = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, l[0] && (s = 0)), s;) try { if (n = 1, i && (r = 2 & l[0] ? i.return : l[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, l[1])).done) return r; switch (i = 0, r && (l = [2 & l[0], r.value]), l[0]) { case 0: case 1: r = l; break; case 4: return s.label++, { value: l[1], done: !1 }; case 5: s.label++, i = l[1], l = [0]; continue; case 7: l = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || l[0] !== 6 && l[0] !== 2)) { s = 0; continue; } if (l[0] === 3 && (!r || l[1] > r[0] && l[1] < r[3])) { s.label = l[1]; break; } if (l[0] === 6 && s.label < r[1]) { s.label = r[1], r = l; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(l); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }l = t.call(e, s); } catch (e) { l = [6, e], i = 0; } finally { n = r = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                                }(this, ((i) => { switch (i.label) { case 0: return e.preventDefault(), t = e.currentTarget, k(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), g(!0), t.checkValidity() ? (S == null ? void 0 : S.citizenship) !== (L == null ? void 0 : L.name) || (S == null ? void 0 : S.country_id) !== (L == null ? void 0 : L.country_id) ? [3, 1] : (f(O.F.error('Для сохранения вы должны внести изменения!')), [3, 3]) : [3, 3]; case 1: return [4, l(Q(a))]; case 2: (n = i.sent()).meta.requestStatus === 'fulfilled' && (f(O.F.success('Информация о гражданстве успешно обновлена')), te()), n.meta.requestStatus === 'rejected' && k(!0), i.label = 3; case 3: return [2]; } })));
                            }, new ((i = void 0) || (i = Promise))(((e, a) => { function s(e) { try { o(r.next(e)); } catch (e) { a(e); } } function l(e) { try { o(r.throw(e)); } catch (e) { a(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i(((e) => { e(n); }))).then(s, l); }o((r = r.apply(t, n || [])).next()); })); let t; let n; let i; let r;
                        },
                        children: [(0, i.jsx)(w.p0, { children: B || z ? (0, i.jsx)(b.O, { width: 300, height: 30 }) : (0, i.jsxs)(w.fl, { children: ['Изменение гражданства №', S == null ? void 0 : S.id_citizenship] }) }), (0, i.jsx)(w.sD, { children: Y }), (0, i.jsxs)(w.Ym, { className: W.footer, children: [(0, i.jsx)('div', { className: W.message, children: C && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(N.Z, { icon: D.D, customClassName: W.messageIcon }), (0, i.jsx)(j.xv, { size: j.yH.M, weight: j.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, i.jsxs)('div', { className: W.footerBtns, children: [(0, i.jsx)(w.u5, {
 color: 'primary', variant: 'outline', className: W.footerBtn, onClick: te, children: 'Отмена' }), (0, i.jsxs)(w.u5, {
 color: 'danger', className: (0, x.A)(W.footerBtn, {}, [W.redBtn]), onClick() { s(S), ee(); }, disabled: z || B || V || !!A || !!X, children: [(0, i.jsx)(N.Z, { icon: _.N, className: W.btnIcon }), 'Удалить'] 
}), (0, i.jsxs)(w.u5, {
 color: 'success', type: 'submit', className: (0, x.A)(W.footerBtn, {}, [W.greenBtn]), disabled: z || B || V || !!A || !!X, children: [(0, i.jsx)(N.Z, { icon: E.F, className: W.btnIcon }), 'Сохранить'] 
})] })] })],
                    }),
                }), (0, i.jsx)(w.KF, { ref: p, push: h, placement: 'top-end' })],
            });
        }; var Q = (0, f.hg)('citizenship/editCurriculumSubject', ((e, t) => {
            return n = void 0, i = void 0, a = function () {
                let n; let i; let r; let a; let s; let l; let o; let c; return (function (e, t) {
                    let n; let i; let r; let a; let s = {
                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                    }; return a = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, l[0] && (s = 0)), s;) try { if (n = 1, i && (r = 2 & l[0] ? i.return : l[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, l[1])).done) return r; switch (i = 0, r && (l = [2 & l[0], r.value]), l[0]) { case 0: case 1: r = l; break; case 4: return s.label++, { value: l[1], done: !1 }; case 5: s.label++, i = l[1], l = [0]; continue; case 7: l = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || l[0] !== 6 && l[0] !== 2)) { s = 0; continue; } if (l[0] === 3 && (!r || l[1] > r[0] && l[1] < r[3])) { s.label = l[1]; break; } if (l[0] === 6 && s.label < r[1]) { s.label = r[1], r = l; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(l); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }l = t.call(e, s); } catch (e) { l = [6, e], i = 0; } finally { n = r = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                }(this, ((u) => { switch (u.label) { case 0: n = t.rejectWithValue, i = t.extra, r = t.dispatch, a = t.getState, s = K(a()), l = { name: s == null ? void 0 : s.name, country_id: s == null ? void 0 : s.country_id }, u.label = 1; case 1: return u.trys.push([1, 3,, 4]), [4, i.api.put('/college/citizenship/'.concat(e), l)]; case 2: return o = u.sent(), r(y()), r(M(e)), [2, o.data]; case 3: return c = u.sent(), [2, n({ errors: c.response.data.errors, status: c.response.status })]; case 4: return [2]; } })));
            }, new ((r = void 0) || (r = Promise))(((e, t) => { function s(e) { try { o(a.next(e)); } catch (e) { t(e); } } function l(e) { try { o(a.throw(e)); } catch (e) { t(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(s, l); }o((a = a.apply(n, i || [])).next()); })); let n; let i; let r; let a;
        })); const Y = (0, f.oM)({
            name: 'editCitizenship',
            initialState: {
                data: void 0, newFields: void 0, isLoading: !1, errors: void 0,
            },
            reducers: {
                setCitizenshipData(e, t) { t.payload && (e.data = t.payload, e.newFields = { name: e.data.citizenship, country_id: +e.data.country_id }); }, setName(e, t) { e.newFields.name = t.payload; }, setCountryId(e, t) { e.newFields.country_id = +t.payload; }, clearNewFields(e) { let t; let n; e.newFields = { name: ((t = e.data) === null || void 0 === t ? void 0 : t.citizenship) || null, country_id: ((n = e.data) === null || void 0 === n ? void 0 : n.country_id) || null }, e.errors = void 0; },
            },
            extraReducers(e) { e.addCase(Q.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(Q.fulfilled, ((e) => { e.isLoading = !1; })).addCase(Q.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })); },
        }); var $ = Y.actions; const ee = Y.reducer; const te = n(779); const ne = {
            'modal-dialog': 'u3_hN20T', tabBtn: 'xtv89DGy', tabsButtonsBlock: 'Z5Lkp_gs', title: 'fzHWhPYs', footerBtn: 'j98W0kTe', redBtn: '_8X6alqUp', settings: 'cHr05068', newAddField: 'IOIZ0jC_', tabBlock: 'qNHUriYm', footer: 'WOSEtJmb', message: 'QMhR5Qxp', messageIcon: 'oDsOmhIi', checkboxText: 'X5KK5806',
        }; let ie = function () { return ie = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, ie.apply(this, arguments); }; const re = function (e) {
            const t = e.className; const n = e.visible; const r = e.setVisible; const a = e.citizenshipId; const s = e.onDeleteCitizenship; const l = e.onEditCitizenship; const o = (0, c.T)(); const h = (0, d.v9)(I); const f = (0, d.v9)(P); const p = (0, d.v9)(R); (0, u.useEffect)((() => { a && o(M(a)); }), [o, a]); let v; const m = function () { r(!1); }; return v = f ? (0, i.jsx)(b.O, { width: '100%', height: 120 }) : p ? (0, i.jsx)(j.xv, {
                theme: j.lg.ERROR, size: j.yH.M, weight: j.fs.BOLD, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, i.jsx)('div', { className: ne.tab, children: (0, i.jsxs)('div', { className: ne.tabBlock, children: [(0, i.jsx)('div', { className: ne.settings, children: (0, i.jsxs)('div', { className: ne.newAddField, children: [(0, i.jsx)('h6', { className: ne.newAddFieldTitle, children: 'ID гражданства' }), (0, i.jsx)(j.xv, { size: j.yH.S, weight: j.fs.BOLD, children: h == null ? void 0 : h.id_citizenship })] }) }), (0, i.jsx)('div', { className: ne.settings, children: (0, i.jsxs)('div', { className: ne.newAddField, children: [(0, i.jsx)('h6', { className: ne.newAddFieldTitle, children: 'ID связанной страны' }), (0, i.jsx)(j.xv, { size: j.yH.S, weight: j.fs.BOLD, children: h == null ? void 0 : h.country_id })] }) }), (0, i.jsx)('div', { className: ne.settings, children: (0, i.jsxs)('div', { className: ne.newAddField, children: [(0, i.jsx)('h6', { className: ne.newAddFieldTitle, children: 'Наименование' }), (0, i.jsx)(j.xv, { size: j.yH.S, weight: j.fs.BOLD, children: h == null ? void 0 : h.citizenship })] }) })] }) }), (0, i.jsxs)(w.Tk, {
                className: (0, x.A)(ne.ViewCitizenship, {}, [t, 'view-student-modal']),
                visible: n,
                onClose: m,
                alignment: 'center',
                children: [(0, i.jsx)(w.p0, { children: f ? (0, i.jsx)(b.O, { width: 300, height: 30 }) : (0, i.jsxs)(w.fl, { children: ['Гражданство №', h == null ? void 0 : h.id_citizenship] }) }), (0, i.jsx)(w.sD, { children: v }), (0, i.jsxs)(w.Ym, {
                    className: ne.footer,
                    children: [(0, i.jsx)('div', {}), (0, i.jsxs)('div', {
                        className: ne.footerBtns,
                        children: [(0, i.jsx)(w.u5, {
                            color: 'primary', variant: 'outline', className: ne.footerBtn, onClick: m, children: 'Закрыть', 
}), (0, i.jsxs)(w.u5, {
                            color: 'danger', className: (0, x.A)(ne.footerBtn, {}, [ne.redBtn]), onClick() { s(h), m(); }, disabled: f || !!p, children: [(0, i.jsx)(N.Z, { icon: _.N, className: ne.btnIcon }), 'Удалить'],
                        }), (0, i.jsxs)(w.u5, {
                            color: 'primary', className: ne.footerBtn, onClick() { l(a), m(); }, disabled: f || !!p, children: [(0, i.jsx)(N.Z, { icon: te.C, className: ne.btnIcon }), 'Редактировать'],
                        })], 
})], 
})],
            });
        }; const ae = {
            TableBlock: 'TT8TEFw2', table: 'HZGsiiE1', editBtn: 'mXpk8bgZ', tableCell: 'Fpx6ijaF', tableSortIcon: 'Ely_TK6L', active: 'CRVcFQUC',
        }; var se = function (e) { let t; return (t = e.citizenship) === null || void 0 === t ? void 0 : t.isLoading; }; var le = function (e) { let t; return (t = e.citizenship) === null || void 0 === t ? void 0 : t.error; }; let oe = function () { return oe = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, oe.apply(this, arguments); }; const ce = function (e) {
            let t; let n; let r; const a = e.className; const s = e.data; const l = (0, c.T)(); const o = (0, d.v9)(se); const h = (0, d.v9)(le); const f = (0, d.v9)(p.DU); const v = (0, d.v9)(p.Qg); const m = (0, u.useState)(); const g = m[0]; const O = m[1]; const A = (0, u.useState)(!1); const B = A[0]; const L = A[1]; const D = (0, u.useState)(!1); const E = D[0]; const T = D[1]; const I = (0, u.useState)(!1); const R = I[0]; const P = I[1]; const M = (0, u.useState)(); const Z = M[0]; const V = M[1]; const H = function (e) { T(!0), V(e); }; const q = (0, u.useCallback)(((e) => { P(!0), O(e); }), []); (0, u.useEffect)((() => { l(p.f$.setSort('country_id')); }), [l]); let W; const G = (0, u.useCallback)(((e) => { l(p.f$.setSort(e)), l(y()); }), [l]); W = o ? (0, i.jsx)(b.O, { height: 250 }) : h ? (0, i.jsx)(j.xv, {
                theme: j.lg.ERROR, size: j.yH.M, weight: j.fs.SEMIBOLD, className: ae.error, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : s.length ? (0, i.jsxs)(w.Sx, {
                className: ae.table,
                striped: !0,
                children: [(0, i.jsx)(w.V, {
                    children: (0, i.jsxs)(w.T6, {
                        children: [(0, i.jsxs)(w.is, {
                            scope: 'col', className: ae.tableCell, onClick() { G('country_id'); }, children: ['ID страны', (0, i.jsx)(N.Z, { icon: v === 'asc' ? C.s : k.w, className: (0, x.A)(ae.tableSortIcon, (t = {}, t[ae.active] = f === 'country_id', t), []) })],
                        }), (0, i.jsxs)(w.is, {
                            scope: 'col', className: ae.tableCell, onClick() { G('citizenship'); }, children: ['Наименование гражданства', (0, i.jsx)(N.Z, { icon: v === 'asc' ? C.s : k.w, className: (0, x.A)(ae.tableSortIcon, (n = {}, n[ae.active] = f === 'citizenship', n), []) })],
                        })],
                    }),
                }), (0, i.jsx)(w.NR, {
                    children: s == null ? void 0 : s.map(((e) => (0, i.jsxs)(w.T6, {
                        children: [(0, i.jsx)(w.NN, { children: e.country_id }), (0, i.jsx)(w.NN, { children: e.citizenship }), (0, i.jsx)(w.NN, {
                            children: (0, i.jsx)(w.u5, {
                                color: 'primary', variant: 'outline', title: 'Просмотр', className: ae.editBtn, onClick() { let t; t = e.id_citizenship.toString(), L(!0), V(t); }, children: (0, i.jsx)(N.Z, { icon: S.E, customClassName: ae.btnIcon }),
                            }), 
}), (0, i.jsx)(w.NN, {
                            children: (0, i.jsx)(w.u5, {
                                color: 'primary', variant: 'outline', title: 'Редактировать', className: ae.editBtn, onClick() { H(e.id_citizenship.toString()); }, children: (0, i.jsx)(N.Z, { icon: z.l, customClassName: ae.btnIcon }),
                            }), 
}), (0, i.jsx)(w.NN, {
                            children: (0, i.jsx)(w.u5, {
                                color: 'primary', variant: 'outline', title: 'Удалить', className: ae.editBtn, onClick() { q(e); }, children: (0, i.jsx)(N.Z, { icon: _.N, customClassName: ae.btnIcon }),
                            }), 
})], 
}, e.id_citizenship))), 
})],
            }) : (0, i.jsx)(j.xv, { children: 'Ничего не найдено...' }); const K = ((r = {})[ae.error] = !!h, r); return (0, i.jsxs)('div', {
                className: (0, x.A)(ae.TableBlock, K, [a]),
                children: [W, (0, i.jsx)(re, {
                    visible: B, setVisible: L, citizenshipId: Z, onDeleteCitizenship: q, onEditCitizenship: H,
                }), (0, i.jsx)(X, {
                    visible: E, setVisible: T, citizenshipId: Z, onDeleteCitizenship: q,
                }), (0, i.jsx)(F, { citizenship: g, visible: R, setVisible: P })],
            });
        }; var ue = function (e) { let t; return (t = e.citizenship) === null || void 0 === t ? void 0 : t.data; }; const de = (0, f.oM)({
            name: 'citizenship',
            initialState: {
                data: void 0, isLoading: !0, error: void 0, page: '1', limit: '50',
            },
            reducers: { setPage(e, t) { e.page = t.payload; }, setLimit(e, t) { e.limit = t.payload; } },
            extraReducers(e) { e.addCase(y.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(y.fulfilled, ((e, t) => { e.isLoading = !1, e.data = { data: t.payload.data, pagination: t.payload.pagination }; })).addCase(y.rejected, ((e, t) => { e.isLoading = !1, e.error = t.payload; })); },
        }); const he = de.actions; const fe = de.reducer; const pe = (0, f.oM)({
            name: 'addCitizenship', initialState: { data: { name: null, country_id: null }, isLoading: !1, errors: void 0 }, reducers: { setName(e, t) { e.data.name = t.payload; }, setCountryId(e, t) { e.data.country_id = +t.payload; }, clearData(e) { e.data = { name: null, country_id: null }, e.errors = void 0; } }, extraReducers(e) { e.addCase(xe.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(xe.fulfilled, ((e) => { e.isLoading = !1; })).addCase(xe.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })); },
        }); const ve = pe.actions; const me = pe.reducer; const ge = function (e) { let t; return (t = e.addCitizenship) === null || void 0 === t ? void 0 : t.data.name; }; const ye = function (e) { let t; return (t = e.addCitizenship) === null || void 0 === t ? void 0 : t.data.country_id; }; var xe = (0, f.hg)('citizenship/addCurriculumSubject', ((e, t) => {
            return n = void 0, i = void 0, a = function () {
                let e; let n; let i; let r; let a; let s; let l; let o; let c; return (function (e, t) {
                    let n; let i; let r; let a; let s = {
                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                    }; return a = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, l[0] && (s = 0)), s;) try { if (n = 1, i && (r = 2 & l[0] ? i.return : l[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, l[1])).done) return r; switch (i = 0, r && (l = [2 & l[0], r.value]), l[0]) { case 0: case 1: r = l; break; case 4: return s.label++, { value: l[1], done: !1 }; case 5: s.label++, i = l[1], l = [0]; continue; case 7: l = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || l[0] !== 6 && l[0] !== 2)) { s = 0; continue; } if (l[0] === 3 && (!r || l[1] > r[0] && l[1] < r[3])) { s.label = l[1]; break; } if (l[0] === 6 && s.label < r[1]) { s.label = r[1], r = l; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(l); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }l = t.call(e, s); } catch (e) { l = [6, e], i = 0; } finally { n = r = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                }(this, ((u) => { switch (u.label) { case 0: e = t.rejectWithValue, n = t.extra, i = t.dispatch, r = t.getState, a = ge(r()), s = ye(r()), l = { name: a, country_id: s }, u.label = 1; case 1: return u.trys.push([1, 3,, 4]), [4, n.api.post('/college/citizenship/', l)]; case 2: return o = u.sent(), i(y()), i(ve.clearData()), [2, o.data]; case 3: return c = u.sent(), [2, e({ errors: c.response.data.errors, status: c.response.status })]; case 4: return [2]; } })));
            }, new ((r = void 0) || (r = Promise))(((e, t) => { function s(e) { try { o(a.next(e)); } catch (e) { t(e); } } function l(e) { try { o(a.throw(e)); } catch (e) { t(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(s, l); }o((a = a.apply(n, i || [])).next()); })); let n; let i; let r; let a;
        })); const be = n(3280); const je = {
            tabBtn: 'dKPVW9mw', tabsButtonsBlock: 'bPsvYQgx', title: 'QU5HCPjP', settings: 'mcWou0_p', newAddField: 'Aaq9f4Wg', tabBlock: 'zh_e4jXA', form: 'jgXT4OZD', footerBtn: 'GRkiLPAZ', greenBtn: 'hCw6MSZI', footer: 'NFlqKOB9', message: 'x6Hxy5iN', messageIcon: 'L6H8vI_v',
        }; const we = function (e) { let t; return (t = e.addCitizenship) === null || void 0 === t ? void 0 : t.errors; }; let Ne = function () { return Ne = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, Ne.apply(this, arguments); }; const Ce = function (e) {
            const t = e.className; const n = e.visible; const r = e.setVisible; const a = (0, c.T)(); const s = (0, u.useState)(!1); const l = s[0]; const o = s[1]; const h = (0, u.useState)(!1); const f = h[0]; const p = h[1]; const v = (0, u.useState)(); const m = v[0]; const g = v[1]; const y = (0, u.useRef)(null); const b = (0, d.v9)(ue); const C = (0, d.v9)(ge); const k = (0, d.v9)(ye); const S = (0, d.v9)(we); const z = (0, u.useCallback)((() => { r(!1); }), [r]); const _ = function () { z(), o(!1), p(!1); }; return (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(w.Tk, {
                    className: (0, x.A)(je.AddCitizenship, {}, [t]),
                    visible: n,
                    onClose: z,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, i.jsxs)(w.lx, {
                        className: (0, x.A)(je.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: l,
                        onSubmit(e) {
                            return t = void 0, n = void 0, r = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let i; let r; let a; let s = {
                                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                                    }; return a = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol === 'function' && (a[Symbol.iterator] = function () { return this; }), a; function l(l) { return function (o) { return (function (l) { if (n) throw new TypeError('Generator is already executing.'); for (;a && (a = 0, l[0] && (s = 0)), s;) try { if (n = 1, i && (r = 2 & l[0] ? i.return : l[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, l[1])).done) return r; switch (i = 0, r && (l = [2 & l[0], r.value]), l[0]) { case 0: case 1: r = l; break; case 4: return s.label++, { value: l[1], done: !1 }; case 5: s.label++, i = l[1], l = [0]; continue; case 7: l = s.ops.pop(), s.trys.pop(); continue; default: if (!((r = (r = s.trys).length > 0 && r[r.length - 1]) || l[0] !== 6 && l[0] !== 2)) { s = 0; continue; } if (l[0] === 3 && (!r || l[1] > r[0] && l[1] < r[3])) { s.label = l[1]; break; } if (l[0] === 6 && s.label < r[1]) { s.label = r[1], r = l; break; } if (r && s.label < r[2]) { s.label = r[2], s.ops.push(l); break; }r[2] && s.ops.pop(), s.trys.pop(); continue; }l = t.call(e, s); } catch (e) { l = [6, e], i = 0; } finally { n = r = 0; } if (5 & l[0]) throw l[1]; return { value: l[0] ? l[1] : void 0, done: !0 }; }([l, o])); }; }
                                }(this, ((i) => { switch (i.label) { case 0: return e.preventDefault(), t = e.currentTarget, p(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), o(!0), t.checkValidity() ? C && k ? [4, a(xe())] : [3, 2] : [3, 3]; case 1: return (n = i.sent()).meta.requestStatus === 'fulfilled' && (g(O.F.success('Гражданство успешно добавлено')), _()), n.meta.requestStatus === 'rejected' && p(!0), [3, 3]; case 2: p(!0), i.label = 3; case 3: return [2]; } })));
                            }, new ((i = void 0) || (i = Promise))(((e, a) => { function s(e) { try { o(r.next(e)); } catch (e) { a(e); } } function l(e) { try { o(r.throw(e)); } catch (e) { a(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i(((e) => { e(n); }))).then(s, l); }o((r = r.apply(t, n || [])).next()); })); let t; let n; let i; let r;
                        },
                        children: [(0, i.jsx)(w.p0, { children: (0, i.jsx)(w.fl, { children: 'Добавление гражданства' }) }), (0, i.jsx)(w.sD, { children: (0, i.jsx)('div', { className: je.tab, children: (0, i.jsxs)('div', { className: je.tabBlock, children: [(0, i.jsx)('div', { className: je.settings, children: (0, i.jsxs)('div', { className: je.newAddField, children: [(0, i.jsx)('h6', {className: je.newAddFieldTitle, children: "Наименование связанной страны*"}), (0, i.jsxs)(w.LX, {className: je.selectFilter, value: k || "", onChange: function (e) { a(ve.setCountryId(e.target.value)) }, feedbackValid: (0, H.M)(S, "country_id") ? "" : "Отлично!", feedbackInvalid: (0, q.N)((0, H.M)(S, "country_id"), S, "country_id"), required: !0, children: [(0, i.jsx)('option', Ne({ value: "" }, { children: "Не выбрано" })), null == b ? void 0 : b.data.map(((e) =>{ return (0, i.jsx)('option', Ne({ value: e.country_id }, { children: e.citizenship }), e.id_citizenship) }))]})] }) }), (0, i.jsx)('div', { className: je.settings, children: (0, i.jsxs)('div', { className: je.newAddField, children: [(0, i.jsx)('h6', {className: je.newAddFieldTitle, children: "Наименование гражданства*"}), (0, i.jsx)(T.h, {
 type: 'text', placeholder: 'Казахстан', feedbackValid: S ? '' : 'Здорово!', invalid: !!S, feedbackInvalid: 'Введите корректные данные!', value: C || '', onChange (e) { a(ve.setName(e.target.value)) }, required: !0 
})] }) })] }) }) }), (0, i.jsxs)(w.Ym, { className: je.footer, children: [(0, i.jsx)('div', { className: je.message, children: f && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(N.Z, { icon: D.D, customClassName: je.messageIcon }), (0, i.jsx)(j.xv, { size: j.yH.M, weight: j.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, i.jsxs)('div', { className: je.footerBtns, children: [(0, i.jsx)(w.u5, {
 color: 'primary', variant: 'outline', className: je.footerBtn, onClick: _, children: 'Отмена' }), (0, i.jsxs)(w.u5, {
 color: 'success', type: 'submit', className: (0, x.A)(je.footerBtn, {}, [je.greenBtn]), children: [(0, i.jsx)(N.Z, { icon: be.q, className: je.btnIcon }), 'Добавить'] 
})] })] })],
                    }),
                }), (0, i.jsx)(w.KF, { ref: y, push: m, placement: 'top-end' })],
            });
        }; const ke = n(5375); const Se = { citizenshipTypesSettings: 'BJgOc16m' }; let ze = function () { return ze = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, ze.apply(this, arguments); }; const _e = {
            citizenship: fe, citizenshipDetail: V, addCitizenship: me, editCitizenship: ee,
        }; const Oe = function (e) {
            const t = e.className; const n = (0, c.T)(); const f = (0, u.useState)(!1); const p = f[0]; const v = f[1]; const b = (0, d.v9)(ue); const j = (0, d.v9)(se); const w = (0, d.v9)(le); const N = (0, d.v9)(g); const C = (0, d.v9)(m); const k = (0, u.useState)(''); const S = k[0]; const z = k[1]; const _ = (0, u.useState)(); const O = _[0]; const A = _[1]; const B = (0, u.useCallback)(((e) => { z(e); }), []); const L = (0, u.useCallback)(((e) => { n(he.setLimit(e)), n(y()); }), [n]); const F = (0, u.useCallback)(((e) => { n(he.setPage(e)), n(y()); }), [n]); return (0, u.useEffect)((() => { A((b == null ? void 0 : b.data) || []); }), [b]), (0, u.useEffect)((() => { const e = (0, h.b1)(S, (b == null ? void 0 : b.data) || []); A(e || []); }), [b, S]), (0, u.useEffect)((() => { n(y()); }), [n]), (0, i.jsx)(r.B, {
                title: 'LMS - Гражданство',
                children: (0, i.jsxs)(a.W, {
                    reducers: _e,
                    removeAfterUnmount: !0,
                    children: [(0, i.jsxs)('div', {
                        className: (0, x.A)(Se.CitizenshipPage, {}, [t]),
                        children: [(0, i.jsx)(s.o, {
                            value: S, onChange: B, searchText: 'Поиск по наименованию', error: w, isLoading: j,
                        }), (0, i.jsx)(l.X, {
                            onlyAdding: !0, setVisibleAddNewField: v, addingModalText: 'Добавить гражданство', error: w, isLoading: j, children: (0, i.jsx)(Ce, { visible: p, setVisible: v }),
                        }), (0, i.jsx)(ce, { data: O || [] }), (0, i.jsxs)('div', {
                            className: Se.citizenshipTypesSettings,
                            children: [(0, i.jsx)(o.K, {
                                data: O || [], onChange: L, onChangePage: F, paginationData: b == null ? void 0 : b.pagination, itemsLimit: N, withRecords: !0, isLoading: j, error: w,
                            }), (0, i.jsx)(o.N, {
                                data: O || [], onChange: F, itemsPage: C, isLoading: j, error: w, paginationData: b == null ? void 0 : b.pagination,
                            })],
                        })],
                    }), w && (0, i.jsx)(ke.d, { error: w })],
                }),
            });
        };
    },
    5375: (e, t, n) => { n.d(t, { d: () => o }); const i = n(5893); const r = n(7294); const a = n(530); const s = n(4475); function l(e) { return l = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) { return typeof e; } : function (e) { return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e; }, l(e); } var o = (0, r.memo)(((e) => { const t = e.error; const n = (0, r.useState)(); const o = n[0]; const c = n[1]; const u = (0, r.useRef)(null); return (0, r.useEffect)((() => { (typeof t === 'string' && t === 'timeout' || l(t) === 'object' && t.status === 500 && t.error === 'timeout') && c(a.F.error('Соединение с сервером потеряно')); }), [t]), (0, i.jsx)(s.KF, { ref: u, push: o, placement: 'top-end' }); })); },
    7687: (e, t, n) => {
        n.d(t, { K: () => N, N: () => E }); let i; const r = n(5893); const a = n(4387); const s = n(7294); const l = ['25', '50', '100', '200', '500']; const o = n(1138); const c = n(4809); const u = n(1353); const d = n(8896); function h() { return h = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const i in n)Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]); } return e; }, h.apply(this, arguments); } const f = function (e) { return s.createElement('svg', h({ width: 20, height: 20, xmlns: 'http://www.w3.org/2000/svg' }, e), i || (i = s.createElement('path', { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M8.565 9.731 5.229 6.396A.79.79 0 0 1 5 5.813a.79.79 0 0 1 .23-.584A.79.79 0 0 1 5.811 5a.79.79 0 0 1 .584.23l3.25 3.25 3.25-3.25a.79.79 0 0 1 .583-.23.79.79 0 0 1 .584.23.79.79 0 0 1 .229.582.79.79 0 0 1-.23.584l-3.33 3.331 3.335 3.335a.79.79 0 0 1 .229.584.79.79 0 0 1-.23.583.79.79 0 0 1-.583.23.79.79 0 0 1-.583-.23l-3.25-3.25-3.25 3.25a.79.79 0 0 1-.583.23.79.79 0 0 1-.584-.23.79.79 0 0 1-.229-.583.79.79 0 0 1 .23-.584l3.33-3.33Z' }))); }; const p = n(9161); const v = n(8863); const m = 'lJhrM3nh'; const g = 'zZgj2JgW'; let y = function () { return y = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, y.apply(this, arguments); }; const x = (0, s.memo)(((e) => {
            let t; const n = e.className; const i = e.items; const l = e.value; const o = e.onChange; const h = (0, s.useState)(l); const x = h[0]; const b = h[1]; const j = (0, s.useState)(!1); const w = j[0]; const N = j[1]; const C = (0, s.useRef)(null); (0, v.p)(C, N); const k = (0, s.useCallback)((() => { N(!0); }), []); const S = (0, s.useCallback)((() => { N(!1); }), []); const z = (0, s.useCallback)(((e) => { o(e), b(e), S(); }), [S, o]); return (0, r.jsxs)('div', {
                className: (0, a.A)('eXu4wq7K', {}, [n]),
                ref: C,
                children: [!w && (0, r.jsxs)(p.zx, {
                    className: 'bAUrWG2D', theme: p.bn.CLEAR, onClick: k, children: [(0, r.jsx)(c.xv, { weight: c.fs.SEMIBOLD, className: m, children: x }), (0, r.jsx)(u.J, { Svg: d.Z })],
                }), (0, r.jsx)('div', {
 className: (0, a.A)('Jh9c6KnL', (t = {}, t.fpG6Af4B = w, t), []),
style: { top: ''.concat(-40 * i.indexOf(x), 'px') },
children: i.map(((e) => (x === e ? (0, r.jsxs)('div', { className: (0, a.A)(g, {}, ['rKHhU8sR']), children: [(0, r.jsx)(c.xv, { weight: c.fs.SEMIBOLD, className: m, children: e }), (0, r.jsx)(p.zx, {
 theme: p.bn.CLEAR, className: 'HkrPDu6E', onClick: S, children: (0, r.jsx)(u.J, { Svg: f }) 
})] }, e) : (0, r.jsx)(p.zx, {
                    theme: p.bn.CLEAR, className: g, size: p.qE.XS, onClick() { z(e); }, children: (0, r.jsx)(c.xv, { weight: c.fs.SEMIBOLD, className: m, children: e }), 
}, e)))) 
})],
            });
        })); const b = {
            LimitShow: 'eQ6pERU2', selectLimit: 'hKaByxY3', limitSelectWrapper: 'XhlPZwOr', recordsText: 'Shn48cNg', textResults: 'MlwyceC_',
        }; let j; let w = function () { return w = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, w.apply(this, arguments); }; var N = (0, s.memo)(((e) => {
            const t = e.className; const n = e.onChange; const i = e.itemsLimit; const s = e.withRecords; const u = e.paginationData; const d = e.isLoading; const h = e.error; const f = e.data; const p = e.onChangePage; const v = (u == null ? void 0 : u.current_page) ? (u.current_page - 1) * Number(i) + 1 : 0; const m = (u == null ? void 0 : u.current_page) ? u.current_page * Number(i) : 0; return d ? (0, r.jsx)(o.O, {
                width: '100%', height: 40, border: '6px', className: b.skeleton,
            }) : h ? (0, r.jsx)('div', {}) : f.length ? (0, r.jsxs)('div', { className: (0, a.A)(b.LimitShow, {}, [t]), children: [s && v && m && (0, r.jsxs)(c.xv, { theme: c.lg.LIGHT, className: b.recordsText, children: ['Записи', ' ', v, ' ', '-', ' ', m, ' ', '| Всего', ' ', u == null ? void 0 : u.total_records] }), (0, r.jsxs)('div', { className: b.limitSelectWrapper, children: [(0, r.jsx)(c.xv, { theme: c.lg.LIGHT, className: b.textResults, children: 'Результатов на странице' }), (0, r.jsx)(x, { items: l, value: i, onChange(e) { n(e), p('1'); } })] })] }) : (0, r.jsx)('div', {});
        })); const C = n(4475); function k() { return k = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const i in n)Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]); } return e; }, k.apply(this, arguments); } const S = function (e) {
            return s.createElement('svg', k({
                width: 30, height: 30, fill: 'none', xmlns: 'http://www.w3.org/2000/svg',
            }, e), j || (j = s.createElement('path', { d: 'M9.514 5.763A1.739 1.739 0 0 0 9 6.994a1.73 1.73 0 0 0 .514 1.231l6.822 6.777-6.822 6.776a1.735 1.735 0 0 0 0 2.462 1.759 1.759 0 0 0 2.48 0l8.07-8.016a1.74 1.74 0 0 0 .514-1.231 1.73 1.73 0 0 0-.514-1.231l-8.07-8.016c-.669-.664-1.794-.664-2.48.017Z', fill: '#EB8247' })));
        }; let z; function _() { return _ = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const i in n)Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]); } return e; }, _.apply(this, arguments); } const O = function (e) {
            return s.createElement('svg', _({
                width: 30, height: 30, fill: 'none', xmlns: 'http://www.w3.org/2000/svg',
            }, e), z || (z = s.createElement('path', { d: 'M6.175 8.2a1.875 1.875 0 0 1 2.65-2.65l8.125 8.125a1.875 1.875 0 0 1 0 2.65L8.825 24.45a1.875 1.875 0 0 1-2.65-2.65l6.8-6.8-6.8-6.8Zm18.2 16.8a1.875 1.875 0 0 0 1.875-1.875V6.875a1.875 1.875 0 0 0-3.75 0v16.25c0 1.035.84 1.875 1.875 1.875Z', fill: '#EB8247' })));
        }; const A = 'ytJMbyx3'; const B = 'SRBkd4oW'; const L = '_DUi30wm'; let F = function () { return F = Object.assign || function (e) { for (var t, n = 1, i = arguments.length; n < i; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, F.apply(this, arguments); }; const D = function (e, t, n) { if (n || arguments.length === 2) for (var i, r = 0, a = t.length; r < a; r++)!i && r in t || (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]); return e.concat(i || Array.prototype.slice.call(t)); }; var E = (0, s.memo)(((e) => {
            const t = e.className; const n = e.data; const i = e.isLoading; const s = e.error; const l = e.paginationData; const c = e.onChange; const d = e.itemsPage; return i ? (0, r.jsx)(o.O, {
                width: 250, height: 40, border: '6px', className: 'nlgg7yYk',
            }) : s || n.length === 0 ? (0, r.jsx)('div', {}) : (0, r.jsx)('div', {
                className: (0, a.A)('AuxB6Ddw', {}, [t]),
                children: (0, r.jsxs)(C.E7, {
                    'aria-label': 'TrainingSchedule pagination',
                    align: 'end',
                    children: [(l == null ? void 0 : l.prev_page) && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(C.tn, { onClick() { c('1'); }, className: (0, a.A)(A, {}, [B]), children: (0, r.jsx)(u.J, { className: 'uBUXyeMF', Svg: O }) }), (0, r.jsx)(C.tn, { onClick() { c(''.concat(+d - 1)); }, className: (0, a.A)(A, {}, [B]), children: (0, r.jsx)(u.J, { className: 'jKQ4PRf5', Svg: S }) })] }), (l == null ? void 0 : l.total_pages) ? (0, r.jsxs)(r.Fragment, {
                        children: [l.total_pages <= 7 && D([], Array(l.total_pages), !0).map(((e, t) => (0, r.jsx)(C.tn, {
                            className: (0, a.A)(A, {}, [L]), active: +d === t + 1, onClick() { c(''.concat(t + 1)); }, children: t + 1,
                        }, t))), l.total_pages > 7 && (0, r.jsxs)(r.Fragment, {
                            children: [D([], Array(l.total_pages), !0).map(((e, t) => {
                                if ((+d === t + 1 || +d + 1 === t + 1 || +d + 2 === t + 1) && +d !== l.total_pages && t + 1 !== l.total_pages && t + 2 !== l.total_pages && t + 3 !== l.total_pages) {
                                    return (0, r.jsx)(C.tn, {
                                        className: (0, a.A)(A, {}, [L]), active: +d === t + 1, onClick() { c(''.concat(t + 1)); }, children: t + 1,
                                    }, t);
                                }
                            })), l.total_pages === +d || l.total_pages - 1 == +d || l.total_pages - 2 == +d || l.total_pages - 2 - +d == 3 || l.total_pages - 2 - +d == 2 || l.total_pages - 2 - +d == 1 ? '' : (0, r.jsx)(C.tn, { className: (0, a.A)(A, {}, [L, 'JQSOdsCs']), onClick() { c(''.concat(+d + 1)); }, children: '...' }), D([], Array(l.total_pages), !0).map(((e, t) => {
                                if (l.total_pages - t + 1 == 4 || l.total_pages - t + 1 == 3 || l.total_pages - t + 1 == 2 || l.total_pages - t + 1 == 1) {
                                    return (0, r.jsx)(C.tn, {
                                        className: (0, a.A)(A, {}, [L]), active: +d === t + 1, onClick() { c(''.concat(t + 1)); }, children: t + 1,
                                    }, t);
                                }
                            }))],
                        })],
                    }) : (0, r.jsx)('div', {}), (l == null ? void 0 : l.next_page) && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(C.tn, { onClick() { c(''.concat(+d + 1)); }, className: (0, a.A)(A, {}, [B]), children: (0, r.jsx)(u.J, { Svg: S }) }), (0, r.jsx)(C.tn, { onClick() { c(''.concat(l == null ? void 0 : l.total_pages)); }, className: (0, a.A)(A, {}, [B]), children: (0, r.jsx)(u.J, { Svg: O }) })] })],
                }),
            });
        }));
    },
}]);
