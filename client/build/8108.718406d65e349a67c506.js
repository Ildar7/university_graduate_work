!(function () { try { const e = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; const t = (new Error()).stack; t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = 'fe81c66f-3af8-4bd7-8115-44c637f881e0', e._sentryDebugIdIdentifier = 'sentry-dbid-fe81c66f-3af8-4bd7-8115-44c637f881e0'); } catch (e) {} }()); const _global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; _global.SENTRY_RELEASE = { id: '45ee1168f5cf48e9753bace26323152d3b61cb67' }, (self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[8108], {
    100: (e, t, n) => {
        n.d(t, { u: () => b, o: () => v }); const a = n(5893); const i = n(4387); const r = n(7294); const l = n(8863); const o = n(7730); const u = n(4809); const c = n(6925); const s = n(2429); const d = n(1353); const f = n(8321); const h = n(6837); const m = n(9161); const _ = {
            SearchSelectWrapper: 'Yjf50aW7', wrapperDisabled: 'bX0WFoDr', searchSelectActive: 'U79pi_cu', focused: 'wd4cRU78', searchSelectList: 'SyJm5rj4', active: 'iNibtrio', searchSelectListContent: 'LO9FzHbd', searchInput: 'fewURAUn', searchBlockItem: 'RYCaUgnQ', searchSelectItem: 'QSyabMXK', notHoverItem: 'aGOP36q2', optionsItems: 'hjU5lRG3', label: 'ex4icksA', asideIcon: 'KLt_1fFw', checkIcon: 'uruVta9T', selectedItem: 'cshLMXcf', openModalBtn: 'c7cLujU9', gray: 'z62rRqab', selectItemTitle: 'kA71sISl', canSelect: 'jHmtHC1p',
        }; let v; let p = function () { return p = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, p.apply(this, arguments); }; !(function (e) { e.DEFAULT = 'default', e.GRAY = 'gray'; }(v || (v = {}))); var b = (0, r.memo)(((e) => {
            let t; let n; let b; const y = e.className; const x = e.activeItemClassName; const g = e.options; const j = e.optionValue; const w = e.onClickOption; const N = e.columnName; const S = e.disabled; const M = e.errorForm; const F = e.label; const k = e.searchDisabled; const C = e.placeholder; const q = e.multiSelect; const E = e.openModalText; const D = e.feedbackInvalid; const A = (e.feedbackValid, e.invalid); const I = e.onOpenModal; const T = e.closePrevModal; const B = e.withActive; const O = e.theme; const z = void 0 === O ? v.DEFAULT : O; const Q = (0, r.useState)(!1); const U = Q[0]; const H = Q[1]; const L = (0, r.useRef)(null); const V = (0, r.useState)([]); const R = V[0]; const G = V[1]; const X = (0, r.useState)(''); const P = X[0]; const W = X[1]; const J = C || 'Не выбрано'; (0, l.p)(L, H); const Y = (0, r.useCallback)(((e) => { W(e.target.value); }), []); const Z = (0, r.useCallback)((() => { I == null || I(), T == null || T(); }), [T, I]); return (0, r.useEffect)((() => { const e = (0, o.FM)(P, g); G(e || []); }), [P, g]), (0, r.useEffect)((() => { G(g); }), [g]), (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsxs)('div', {
                    className: (0, i.A)(_.SearchSelectWrapper, (t = {}, t[_.wrapperDisabled] = S, t), [_[z], y]),
                    ref: L,
                    children: [F && (0, a.jsx)(u.xv, { className: _.label, size: u.yH.XXS, children: F }), (0, a.jsx)('div', { className: (0, i.A)(_.searchSelectActive, (n = {}, n[_.selectedItem] = j !== 'null', n[_.focused] = U, n[_.error] = M, n['form-select-invalid'] = A, n), [x, 'form-select']), onClick() { S || H(((e) => !e)); }, children: q ? j.length === 0 ? J : 'Выбрано '.concat(j.length, ' элемента(-ов)') : j !== 'null' && j ? j : J }), (0, a.jsx)('div', {
                        className: (0, i.A)(_.searchSelectList, (b = {}, b[_.active] = U, b), ['search_select_list']),
                        children: (0, a.jsxs)('div', {
                            className: _.searchSelectListContent,
                            children: [!k && (0, a.jsxs)('div', {
                                className: (0, i.A)(_.searchSelectItem, {}, [_.notHoverItem, _.searchBlockItem]),
                                children: [(0, a.jsx)(c.I, {
                                    placeholder: 'Введите требуемое поле', value: P, onChange: Y, disabled: S, className: _.searchInput,
                                }), (0, a.jsx)(d.J, { className: _.asideIcon, Svg: s.Z })],
                            }), E && (0, a.jsx)(m.zx, {
                                theme: m.bn.BACKGROUND,
                                className: _.openModalBtn,
                                onClick: Z,
                                size: m.qE.XS,
                                children: (0, a.jsx)(u.xv, {
                                    weight: u.fs.SEMIBOLD, align: u.PH.CENTER, size: u.yH.XS, children: E,
                                }),
                            }), (0, a.jsx)('ul', { className: _.optionsItems, children: R && R.length ? R.map(((e, t) => (0, a.jsxs)('li', { className: _.searchSelectItem, onClick() { let t; let n; t = e, n = N, S || (w(t, n), H(!1)); }, children: [(0, a.jsxs)('div', { className: _.selectItemTitle, children: [B && (0, a.jsx)('div', { className: _.canSelect }), (0, a.jsx)('span', { children: e })] }), j === e && !q && (0, a.jsx)(d.J, { className: _.checkIcon, Svg: f.Z }), q && (0, a.jsx)(h.X, { checked: !!j.filter(((t) => t === e))[0] })] }, e + t))) : (0, a.jsx)('li', { className: (0, i.A)(_.searchSelectItem, {}, [_.notHoverItem]), children: 'Ничего не найдено...' }) })],
                        }),
                    })],
                }), A && (0, a.jsx)('div', { className: (0, i.A)(_.selecInvalidText, {}, ['select-invalid-feedback invalid-feedback']), children: D })],
            });
        }));
    },
    3009: (e, t, n) => {
        n.d(t, {
            _N: () => u, qJ: () => r, bV: () => a, Rs: () => i, No: () => s,
        }); var a = function (e) { let t; return (t = e.standardCurriculumDetail) === null || void 0 === t ? void 0 : t.error; }; var i = function (e) { let t; return (t = e.standardCurriculumDetail) === null || void 0 === t ? void 0 : t.isLoading; }; var r = function (e) { let t; return (t = e.standardCurriculumDetail) === null || void 0 === t ? void 0 : t.data; }; const l = n(7168); const o = n(4562); var u = (0, l.hg)('specialties/fetchStandardCurriculumDetail', ((e, t) => {
            return n = void 0, a = void 0, r = function () {
                let n; let a; let i; let r; return (function (e, t) {
                    let n; let a; let i; let r; let l = {
                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (u) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (l = 0)), l;) try { if (n = 1, a && (i = 2 & o[0] ? a.return : o[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, o[1])).done) return i; switch (a = 0, i && (o = [2 & o[0], i.value]), o[0]) { case 0: case 1: i = o; break; case 4: return l.label++, { value: o[1], done: !1 }; case 5: l.label++, a = o[1], o = [0]; continue; case 7: o = l.ops.pop(), l.trys.pop(); continue; default: if (!((i = (i = l.trys).length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) { l = 0; continue; } if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) { l.label = o[1]; break; } if (o[0] === 6 && l.label < i[1]) { l.label = i[1], i = o; break; } if (i && l.label < i[2]) { l.label = i[2], l.ops.push(o); break; }i[2] && l.ops.pop(), l.trys.pop(); continue; }o = t.call(e, l); } catch (e) { o = [6, e], a = 0; } finally { n = i = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, u])); }; }
                }(this, ((l) => { switch (l.label) { case 0: n = t.rejectWithValue, a = t.extra, i = t.dispatch, l.label = 1; case 1: return l.trys.push([1, 3,, 4]), [4, a.api.get('/curriculum/standard-curricula/'.concat(e, '/detailed'))]; case 2: return r = l.sent(), i(o.ap.setSpecialityId(['data', r.data.speciality_id])), i(o.ap.setSort(['data', r.data.sort])), i(o.ap.setDate(['data', r.data.date_of_order])), i(o.ap.addModuleToGeneralModulesFromServer(r.data.modules)), i(o.ap.addQualificationToStructureFromServer(r.data.qualifications)), i(o.ap.setDataToChange()), [2, r.data]; case 3: return l.sent().message === 'Failed to fetch' ? [2, n('timeout')] : [2, n('ERROR')]; case 4: return [2]; } })));
            }, new ((i = void 0) || (i = Promise))(((e, t) => { function l(e) { try { u(r.next(e)); } catch (e) { t(e); } } function o(e) { try { u(r.throw(e)); } catch (e) { t(e); } } function u(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i(((e) => { e(n); }))).then(l, o); }u((r = r.apply(n, a || [])).next()); })); let n; let a; let i; let r;
        })); const c = (0, l.oM)({
            name: 'standardCurriculumDetail', initialState: { data: void 0, isLoading: !1, error: void 0 }, reducers: {}, extraReducers(e) { e.addCase(u.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(u.fulfilled, ((e, t) => { e.isLoading = !1, e.data = t.payload; })).addCase(u.rejected, ((e, t) => { e.isLoading = !1, e.error = t.payload; })); },
        }); var s = (c.actions, c.reducer);
    },
    1134: (e, t, n) => {
        n.d(t, {
            g1: () => G, u4: () => W, xO: () => T, yb: () => H, $i: () => z, V3: () => F, Qi: () => we, Tg: () => se, fu: () => ae, cM: () => h, bK: () => ee, ko: () => fe, Hu: () => Ne, oV: () => ge, Fu: () => xe, YU: () => Me,
        }), n(5781); const a = n(5893); const i = n(4387); const r = n(7294); const l = n(4475); const o = n(4809); const u = n(9250); const c = n(9086); const s = n(9161); const d = {
            tabBtn: 'Om5Ek_dk', tabsButtonsBlock: 'Rofsb9wn', title: 'lmhqRh2D', settings: 'jO7jY_UQ', newAddField: 'FquIaTbP', tabBlock: 'Gsv35Ile', form: 'Xb2TAfrJ', footerBtn: 'Tdp141io', greenBtn: 'kPx_g9PK', footer: 'sLgly8px', message: 'sO7rn3hS', messageIcon: 'c3ceeq3z',
        }; let f = function () { return f = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, f.apply(this, arguments); }; var h = function (e) {
            const t = e.className; const n = e.visible; const h = e.setVisible; const m = (0, u.s0)(); const _ = (0, r.useCallback)((() => { h(!1); }), [h]); const v = (0, r.useCallback)((() => { m((0, c.P6)()); }), [m]); return (0, a.jsxs)(l.Tk, {
                className: (0, i.A)(d.AddStandardCurriculumModuleModal, {}, [t]),
                visible: n,
                onClose: _,
                size: 'lg',
                alignment: 'center',
                children: [(0, a.jsx)(l.p0, { children: (0, a.jsx)(l.fl, { children: (0, a.jsx)(o.xv, { theme: o.lg.ERROR, size: o.yH.M, children: 'Внимание!' }) }) }), (0, a.jsx)(l.sD, { children: (0, a.jsx)('div', { className: d.tab, children: (0, a.jsxs)('div', { className: d.tabBlock, children: [(0, a.jsx)(o.xv, { size: o.yH.L, children: 'Все несохраненные данные будут удалены.' }), (0, a.jsx)(o.xv, { size: o.yH.L, children: 'Подтверждаете ли вы данное действие?' })] }) }) }), (0, a.jsxs)(l.Ym, {
                    className: d.footer,
                    children: [(0, a.jsx)('div', { className: d.message }), (0, a.jsxs)('div', {
                        className: d.footerBtns,
                        children: [(0, a.jsx)(s.zx, {
                            theme: s.bn.OUTLINE, className: d.footerBtn, onClick: _, children: (0, a.jsx)(o.xv, { size: o.yH.XS, weight: o.fs.SEMIBOLD, children: 'Отмена' }),
                        }), (0, a.jsx)(s.zx, { className: (0, i.A)(d.footerBtn, {}, [d.greenBtn]), onClick: v, children: (0, a.jsx)(o.xv, { size: o.yH.XS, weight: o.fs.SEMIBOLD, children: 'Подтверждаю' }) })], 
})], 
})],
            });
        }; const m = n(5461); const _ = n(2308); const v = n(5044); const p = n(8263); const b = n(6458); const y = n(530); const x = n(321); const g = n(622); const j = n(6890); const w = n(4562); const N = n(6648); const S = {
            tabBtn: 'J7lAEHk_', tabsButtonsBlock: 'mcAVCssK', title: 'E39F6nLE', settings: 'aAGzWaw0', newAddField: 'WX7uMyDS', tabBlock: 'B6kVX0r1', form: 'OdrW6zX7', footerBtn: 'wc90cvvE', greenBtn: 'T2TpIuQD', footer: 'EY6Mp78p', message: 'zksokXxN', messageIcon: 'rnGn7wMH',
        }; let M = function () { return M = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, M.apply(this, arguments); }; var F = function (e) {
            let t; let n; let u; let c; let d; let f; let h; const F = e.className; const k = e.visible; const C = e.setVisible; const q = e.data; const E = e.mode; const D = e.qualId; const A = (0, m.T)(); const I = (0, r.useState)(!1); const T = I[0]; const B = I[1]; const O = (0, r.useState)(!1); const z = O[0]; const Q = O[1]; const U = (0, r.useState)(); const H = U[0]; const L = U[1]; const V = (0, r.useRef)(null); const R = (0, r.useState)(0); const G = R[0]; const X = R[1]; const P = (0, r.useState)(0); const W = P[0]; const J = P[1]; const Y = (0, b.v9)(N.rb); const Z = ((0, b.v9)(N.yl), (0, b.v9)(N.sE), (0, b.v9)(E === 'add' ? x._M : w.nq)); const K = (0, r.useCallback)((() => { C(!1); }), [C]); const $ = function () { A(E === 'add' ? x.rj.setEditQualificationItem(q.structure.qualifications.filter(((e) => e.qualification_id === D))[0]) : w.ap.setEditQualificationItem(q.structure.qualifications.filter(((e) => e.qualification_id === D))[0])); }; const ee = function () { K(), B(!1), Q(!1), $(); }; const te = function (e, t) { e.includes('.') ? L(y.F.error('Только целые числа!')) : A(E === 'add' ? x.rj.changeEditQualificationField([e, t]) : w.ap.changeEditQualificationField([e, t])); }; return (0, r.useEffect)((() => { q && D && k && $(); }), [q, A, D, k]), (0, r.useEffect)((() => { if (Y) { const e = Y.knrtu_kai.options.filter(((e) => e.name === 'credits_per_academic_year'))[0].value; const t = Number(Y.knrtu_kai.options.filter(((e) => e.name === 'max_academic_years'))[0].value) * Number(e); X(Number(e)), J(Number(t)); } }), [Y]), (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(l.Tk, {
                    className: (0, i.A)(S.EditStandardCurriculumQualificationModal, {}, [F]),
                    visible: k,
                    onClose: K,
                    size: 'lg',
                    scrollable: !0,
                    alignment: 'center',
                    children: (0, a.jsxs)(l.lx, {
                        className: (0, i.A)(S.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: T,
                        onSubmit(e) {
                            return t = void 0, n = void 0, i = function () {
                                let t; let n; let a; let i; let r; let l; let o; let u; let c; let s; return (function (e, t) {
                                    let n; let a; let i; let r; let l = {
                                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (u) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (l = 0)), l;) try { if (n = 1, a && (i = 2 & o[0] ? a.return : o[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, o[1])).done) return i; switch (a = 0, i && (o = [2 & o[0], i.value]), o[0]) { case 0: case 1: i = o; break; case 4: return l.label++, { value: o[1], done: !1 }; case 5: l.label++, a = o[1], o = [0]; continue; case 7: o = l.ops.pop(), l.trys.pop(); continue; default: if (!((i = (i = l.trys).length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) { l = 0; continue; } if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) { l.label = o[1]; break; } if (o[0] === 6 && l.label < i[1]) { l.label = i[1], i = o; break; } if (i && l.label < i[2]) { l.label = i[2], l.ops.push(o); break; }i[2] && l.ops.pop(), l.trys.pop(); continue; }o = t.call(e, l); } catch (e) { o = [6, e], a = 0; } finally { n = i = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, u])); }; }
                                }(this, ((d) => {
                                    switch (d.label) {
                                    case 0: return e.preventDefault(), t = e.currentTarget, Q(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), B(!0), t.checkValidity() ? (n = (0, g.T)(Z == null ? void 0 : Z.data, Z == null ? void 0 : Z.newFields), (0, j.Q)(n) ? (L(y.F.error('Для сохранения вы должны внести изменения!')), [3, 4]) : [3, 1]) : [3, 4]; case 1: return (a = {
                                        compulsory_education_basic_credits_from: (r = Z == null ? void 0 : Z.newFields) === null || void 0 === r ? void 0 : r.compulsory_education_basic_credits_from, compulsory_education_basic_credits_to: (l = Z == null ? void 0 : Z.newFields) === null || void 0 === l ? void 0 : l.compulsory_education_basic_credits_to, compulsory_education_general_credits_from: (o = Z == null ? void 0 : Z.newFields) === null || void 0 === o ? void 0 : o.compulsory_education_general_credits_from, compulsory_education_general_credits_to: (u = Z == null ? void 0 : Z.newFields) === null || void 0 === u ? void 0 : u.compulsory_education_general_credits_to, consultations_hours_per_academic_year: (c = Z == null ? void 0 : Z.newFields) === null || void 0 === c ? void 0 : c.consultations_hours_per_academic_year, extracurricular_activities_hours_per_week: (s = Z == null ? void 0 : Z.newFields) === null || void 0 === s ? void 0 : s.extracurricular_activities_hours_per_week,
                                    }).compulsory_education_basic_credits_from && a.compulsory_education_basic_credits_to && a.compulsory_education_general_credits_from && a.compulsory_education_general_credits_to && a.extracurricular_activities_hours_per_week && a.consultations_hours_per_academic_year ? [3, 2] : (Q(!0), [3, 4]); case 2: return Z.newFields.compulsory_education_basic_credits_from > Z.newFields.compulsory_education_basic_credits_to || Z.newFields.compulsory_education_general_credits_from > Z.newFields.compulsory_education_general_credits_to ? (L(y.F.error('Проверьте правильность заполненных полей (минимальное не может превышать максимальное)')), [2]) : [4, A((0, x.JS)(a))]; case 3: (i = d.sent()).meta.requestStatus === 'fulfilled' && (E === 'add' ? (A(x.rj.saveEditQualificationChanges([D, Z.newFields])), A(x.rj.addTrainingTimeToQualification([D, i.payload]))) : (A(w.ap.saveEditQualificationChanges([D, Z.newFields])), A(w.ap.addTrainingTimeToQualification([D, i.payload]))), L(y.F.success('Информация о квалификации успешно обновлена')), ee()), i.meta.requestStatus === 'rejected' && Q(!0), d.label = 4; case 4: return [2];
                                    }
                                })));
                            }, new ((a = void 0) || (a = Promise))(((e, r) => { function l(e) { try { u(i.next(e)); } catch (e) { r(e); } } function o(e) { try { u(i.throw(e)); } catch (e) { r(e); } } function u(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(l, o); }u((i = i.apply(t, n || [])).next()); })); let t; let n; let a; let i;
                        },
                        children: [(0, a.jsx)(l.p0, { children: (0, a.jsx)(l.fl, { children: 'Редактирование квалификации' }) }), (0, a.jsx)(l.sD, {
 children: (0, a.jsx)('div', {
 className: S.tab,
children: (0, a.jsxs)('div', {
 className: S.tabBlock,
children: [(0, a.jsx)('div', {
 className: S.settings,
children: (0, a.jsxs)('div', {
 className: S.newAddField,
children: [(0, a.jsx)('h6', { className: S.newAddFieldTitle, children: 'Индекс сортировки*'}), (0, a.jsx)(l.jO, {
                            type: 'number', placeholder: '100', min: 100, step: 100, value: String((t = Z == null ? void 0 : Z.newFields) === null || void 0 === t ? void 0 : t.sort) || '', onChange(e) { te(e.target.value, 'sort'); }, required: !0, 
})] 
}) 
}), (0, a.jsx)('div', {
 className: S.settings,
children: (0, a.jsxs)('div', {
 className: S.newAddField,
children: [(0, a.jsx)('h6', { className: S.newAddFieldTitle, children: 'Итого кредитов на обязательное обучение на базе основного образования (минимум)*'}), (0, a.jsx)(l.jO, {
                            type: 'number', min: G, max: W, value: String((n = Z == null ? void 0 : Z.newFields) === null || void 0 === n ? void 0 : n.compulsory_education_basic_credits_from) || '', onChange(e) { te(e.target.value, 'compulsory_education_basic_credits_from'); }, required: !0, 
})] 
}) 
}), (0, a.jsx)('div', {
 className: S.settings,
children: (0, a.jsxs)('div', {
 className: S.newAddField,
children: [(0, a.jsx)('h6', { className: S.newAddFieldTitle, children: 'Итого кредитов на обязательное обучение на базе основного образования (максимум)*'}), (0, a.jsx)(l.jO, {
                            type: 'number', min: G, max: W, value: String((u = Z == null ? void 0 : Z.newFields) === null || void 0 === u ? void 0 : u.compulsory_education_basic_credits_to) || '', onChange(e) { te(e.target.value, 'compulsory_education_basic_credits_to'); }, required: !0, 
})] 
}) 
}), (0, a.jsx)('div', {
 className: S.settings,
children: (0, a.jsxs)('div', {
 className: S.newAddField,
children: [(0, a.jsx)('h6', { className: S.newAddFieldTitle, children: 'Итого кредитов на обязательное обучение на базе общего среднего образования (минимум)*'}), (0, a.jsx)(l.jO, {
                            type: 'number', min: G, max: W, value: String((c = Z == null ? void 0 : Z.newFields) === null || void 0 === c ? void 0 : c.compulsory_education_general_credits_from) || '', onChange(e) { te(e.target.value, 'compulsory_education_general_credits_from'); }, required: !0, 
})] 
}) 
}), (0, a.jsx)('div', {
 className: S.settings,
children: (0, a.jsxs)('div', {
 className: S.newAddField,
children: [(0, a.jsx)('h6', { className: S.newAddFieldTitle, children: 'Итого кредитов на обязательное обучение на базе общего среднего образования (максимум)*'}), (0, a.jsx)(l.jO, {
                            type: 'number', min: G, max: W, value: String((d = Z == null ? void 0 : Z.newFields) === null || void 0 === d ? void 0 : d.compulsory_education_general_credits_to) || '', onChange(e) { te(e.target.value, 'compulsory_education_general_credits_to'); }, required: !0, 
})] 
}) 
}), (0, a.jsx)('div', {
 className: S.settings,
children: (0, a.jsxs)('div', {
 className: S.newAddField,
children: [(0, a.jsx)('h6', { className: S.newAddFieldTitle, children: 'Факультативные занятия (часы в неделю)*'}), (0, a.jsx)(l.jO, {
                            type: 'number', min: 0, value: String((f = Z == null ? void 0 : Z.newFields) === null || void 0 === f ? void 0 : f.extracurricular_activities_hours_per_week) || '', onChange(e) { te(e.target.value, 'extracurricular_activities_hours_per_week'); }, required: !0, 
})] 
}) 
}), (0, a.jsx)('div', {
 className: S.settings,
children: (0, a.jsxs)('div', {
 className: S.newAddField,
children: [(0, a.jsx)('h6', { className: S.newAddFieldTitle, children: 'Консультации (часы на учебный год)*'}), (0, a.jsx)(l.jO, {
                            type: 'number', min: 0, value: String((h = Z == null ? void 0 : Z.newFields) === null || void 0 === h ? void 0 : h.consultations_hours_per_academic_year) || '', onChange(e) { te(e.target.value, 'consultations_hours_per_academic_year'); }, required: !0, 
})] 
}) 
})] 
}) 
}) 
}), (0, a.jsxs)(l.Ym, {
 className: S.footer,
children: [(0, a.jsx)('div', { className: S.message, children: z && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(_.Z, { icon: v.D, customClassName: S.messageIcon }), (0, a.jsx)(o.xv, { size: o.yH.M, weight: o.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, a.jsxs)('div', {
 className: S.footerBtns,
children: [(0, a.jsx)(s.zx, {
                            theme: s.bn.OUTLINE, className: S.footerBtn, onClick: ee, children: (0, a.jsx)(o.xv, { size: o.yH.XS, weight: o.fs.SEMIBOLD, children: 'Отмена' }), 
}), (0, a.jsxs)(s.zx, { type: 'submit', className: (0, i.A)(S.footerBtn, {}, [S.greenBtn]), children: [(0, a.jsx)(o.xv, { size: o.yH.XS, weight: o.fs.SEMIBOLD, children: 'Сохранить' }), (0, a.jsx)(_.Z, { icon: p.F, className: S.btnIcon })] })] 
})] 
})],
                    }),
                }), (0, a.jsx)(l.KF, { ref: V, push: H, placement: 'top-end' })],
            });
        }; const k = n(3280); const C = n(100); const q = n(1138); const E = n(7882); const D = n(1759); const A = {
            tabBtn: 'A_tbzDOG', tabsButtonsBlock: 'oPrBm4UY', title: 'F9iDbMlA', settings: 'gOPyfkvL', newAddField: 'SMs8RDzH', tabBlock: 'slPsYa90', form: 'gJq4zfek', footerBtn: 'FIYe6sby', greenBtn: 'NlhypCVb', footer: 'm7reC81W', message: 'oRWyF4uG', messageIcon: 'sPLMDuPV',
        }; let I = function () { return I = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, I.apply(this, arguments); }; var T = function (e) {
            let t; const n = e.className; const u = e.visible; const c = e.setVisible; const d = e.data; const f = e.mode; const h = (0, m.T)(); const p = (0, r.useState)(!1); const g = p[0]; const j = p[1]; const S = (0, r.useState)(!1); const M = S[0]; const F = S[1]; const T = (0, r.useState)(); const B = T[0]; const O = T[1]; const z = (0, r.useRef)(null); const Q = (0, r.useState)(0); const U = Q[0]; const H = Q[1]; const L = (0, r.useState)(0); const V = L[0]; const R = L[1]; const G = (0, b.v9)(E._c); const X = (0, b.v9)(E.Aq); const P = (0, b.v9)(E.kp); const W = (0, b.v9)(N.rb); const J = (0, b.v9)(N.yl); const Y = (0, b.v9)(N.sE); const Z = (0, b.v9)(f === 'add' ? x.z$ : w.xi); const K = G == null ? void 0 : G.data.filter(((e) => e.specialty_id === (d == null ? void 0 : d.general_info.speciality_id))); const $ = (0, r.useCallback)((() => { c(!1); }), [c]); const ee = function () { $(), j(!1), F(!1), h(f === 'add' ? x.rj.clearNewQualificationData() : w.ap.clearNewQualificationData()); }; const te = function (e, t) { e.includes('.') ? O(y.F.error('Только целые числа!')) : h(f === 'add' ? x.rj.changeNewQualificationField([e, t]) : w.ap.changeNewQualificationField([e, t])); }; return (0, r.useEffect)((() => { h(D.f$.setSort('id_qual')), h((0, E.cs)()); }), [h]), (0, r.useEffect)((() => { if (W) { const e = W.knrtu_kai.options.filter(((e) => e.name === 'credits_per_academic_year'))[0].value; const t = Number(W.knrtu_kai.options.filter(((e) => e.name === 'max_academic_years'))[0].value) * Number(e); H(Number(e)), R(Number(t)); } }), [W]), t = X || J ? (0, a.jsx)(q.O, { width: '100%', height: 400 }) : P || Y ? (0, a.jsx)(o.xv, {
                theme: o.lg.ERROR, size: o.yH.M, weight: o.fs.SEMIBOLD, className: A.error, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, a.jsx)('div', {
                className: A.tab,
                children: (0, a.jsxs)('div', {
                    className: A.tabBlock,
                    children: [(0, a.jsx)('div', {
                        className: A.settings,
                        children: (0, a.jsxs)('div', {
                            className: A.newAddField,
                            children: [(0, a.jsx)('h6', { className: A.newAddFieldTitle, children: 'Квалификация*' }), (0, a.jsx)(C.u, {
                                className: A.selectField, options: K && K.length ? K.map(((e) => e.qualification)) : [''], optionValue: (Z == null ? void 0 : Z.qualification_id) ? G.data.filter(((e) => e.id_qual === Z.qualification_id))[0].qualification : 'null', onClickOption(e, t) { const n = G.data.filter(((t) => t.qualification === e))[0]; h(f === 'add' ? x.rj.changeNewQualificationField([String(n.id_qual), t]) : w.ap.changeNewQualificationField([String(n.id_qual), t])); }, columnName: 'qualification_id', disabled: !(K == null ? void 0 : K.length),
                            })],
                        }),
                    }), (0, a.jsx)('div', {
                        className: A.settings,
                        children: (0, a.jsxs)('div', {
                            className: A.newAddField,
                            children: [(0, a.jsx)('h6', { className: A.newAddFieldTitle, children: 'Индекс сортировки*' }), (0, a.jsx)(l.jO, {
                                type: 'number', placeholder: '100', min: 100, step: 100, value: String(Z == null ? void 0 : Z.sort) || '', onChange(e) { te(e.target.value, 'sort'); }, required: !0,
                            })],
                        }),
                    }), (0, a.jsx)('div', {
                        className: A.settings,
                        children: (0, a.jsxs)('div', {
                            className: A.newAddField,
                            children: [(0, a.jsx)('h6', { className: A.newAddFieldTitle, children: 'Итого кредитов на обязательное обучение на базе основного образования (минимум)*' }), (0, a.jsx)(l.jO, {
                                type: 'number', min: U, max: V, value: String(Z == null ? void 0 : Z.compulsory_education_basic_credits_from) || '', onChange(e) { te(e.target.value, 'compulsory_education_basic_credits_from'); }, required: !0,
                            })],
                        }),
                    }), (0, a.jsx)('div', {
                        className: A.settings,
                        children: (0, a.jsxs)('div', {
                            className: A.newAddField,
                            children: [(0, a.jsx)('h6', { className: A.newAddFieldTitle, children: 'Итого кредитов на обязательное обучение на базе основного образования (максимум)*' }), (0, a.jsx)(l.jO, {
                                type: 'number', min: U, max: V, value: String(Z == null ? void 0 : Z.compulsory_education_basic_credits_to) || '', onChange(e) { te(e.target.value, 'compulsory_education_basic_credits_to'); }, required: !0,
                            })],
                        }),
                    }), (0, a.jsx)('div', {
                        className: A.settings,
                        children: (0, a.jsxs)('div', {
                            className: A.newAddField,
                            children: [(0, a.jsx)('h6', { className: A.newAddFieldTitle, children: 'Итого кредитов на обязательное обучение на базе общего среднего образования (минимум)*' }), (0, a.jsx)(l.jO, {
                                type: 'number', min: U, max: V, value: String(Z == null ? void 0 : Z.compulsory_education_general_credits_from) || '', onChange(e) { te(e.target.value, 'compulsory_education_general_credits_from'); }, required: !0,
                            })],
                        }),
                    }), (0, a.jsx)('div', {
                        className: A.settings,
                        children: (0, a.jsxs)('div', {
                            className: A.newAddField,
                            children: [(0, a.jsx)('h6', { className: A.newAddFieldTitle, children: 'Итого кредитов на обязательное обучение на базе общего среднего образования (максимум)*' }), (0, a.jsx)(l.jO, {
                                type: 'number', min: U, max: V, value: String(Z == null ? void 0 : Z.compulsory_education_general_credits_to) || '', onChange(e) { te(e.target.value, 'compulsory_education_general_credits_to'); }, required: !0,
                            })],
                        }),
                    }), (0, a.jsx)('div', {
                        className: A.settings,
                        children: (0, a.jsxs)('div', {
                            className: A.newAddField,
                            children: [(0, a.jsx)('h6', { className: A.newAddFieldTitle, children: 'Факультативные занятия (часы в неделю)*' }), (0, a.jsx)(l.jO, {
                                type: 'number', min: 0, value: String(Z == null ? void 0 : Z.extracurricular_activities_hours_per_week) || '', onChange(e) { te(e.target.value, 'extracurricular_activities_hours_per_week'); }, required: !0,
                            })],
                        }),
                    }), (0, a.jsx)('div', {
                        className: A.settings,
                        children: (0, a.jsxs)('div', {
                            className: A.newAddField,
                            children: [(0, a.jsx)('h6', { className: A.newAddFieldTitle, children: 'Консультации (часы на учебный год)*' }), (0, a.jsx)(l.jO, {
                                type: 'number', min: 0, value: String(Z == null ? void 0 : Z.consultations_hours_per_academic_year) || '', onChange(e) { te(e.target.value, 'consultations_hours_per_academic_year'); }, required: !0,
                            })],
                        }),
                    })],
                }),
            }), (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(l.Tk, {
                    className: (0, i.A)(A.AddStandardCurriculumQualificationModal, {}, [n]),
                    visible: u,
                    onClose: $,
                    size: 'lg',
                    scrollable: !0,
                    alignment: 'center',
                    children: (0, a.jsxs)(l.lx, {
                        className: (0, i.A)(A.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: g,
                        onSubmit(e) {
                            return t = void 0, n = void 0, i = function () {
                                let t; let n; let a; let i; return (function (e, t) {
                                    let n; let a; let i; let r; let l = {
                                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (u) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (l = 0)), l;) try { if (n = 1, a && (i = 2 & o[0] ? a.return : o[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, o[1])).done) return i; switch (a = 0, i && (o = [2 & o[0], i.value]), o[0]) { case 0: case 1: i = o; break; case 4: return l.label++, { value: o[1], done: !1 }; case 5: l.label++, a = o[1], o = [0]; continue; case 7: o = l.ops.pop(), l.trys.pop(); continue; default: if (!((i = (i = l.trys).length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) { l = 0; continue; } if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) { l.label = o[1]; break; } if (o[0] === 6 && l.label < i[1]) { l.label = i[1], i = o; break; } if (i && l.label < i[2]) { l.label = i[2], l.ops.push(o); break; }i[2] && l.ops.pop(), l.trys.pop(); continue; }o = t.call(e, l); } catch (e) { o = [6, e], a = 0; } finally { n = i = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, u])); }; }
                                }(this, ((r) => {
                                    switch (r.label) {
                                    case 0: return e.preventDefault(), t = e.currentTarget, F(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), j(!0), t.checkValidity() ? (Z == null ? void 0 : Z.qualification_id) && Z.sort && Z.extracurricular_activities_hours_per_week && Z.compulsory_education_general_credits_to && Z.compulsory_education_basic_credits_from && Z.compulsory_education_general_credits_from && Z.compulsory_education_basic_credits_to && Z.consultations_hours_per_academic_year ? (n = d == null ? void 0 : d.structure.qualifications.filter(((e) => e.qualification_id === Z.qualification_id))) && n.length ? (O(y.F.error('Данная квалификация уже присутствует в списке')), [2]) : Z.compulsory_education_basic_credits_from > Z.compulsory_education_basic_credits_to || Z.compulsory_education_general_credits_from > Z.compulsory_education_general_credits_to ? (O(y.F.error('Проверьте правильность заполненных полей (минимальное не может превышать максимальное)')), [2]) : (a = {
                                        compulsory_education_basic_credits_from: Z.compulsory_education_basic_credits_from, compulsory_education_basic_credits_to: Z.compulsory_education_basic_credits_to, compulsory_education_general_credits_from: Z.compulsory_education_general_credits_from, compulsory_education_general_credits_to: Z.compulsory_education_general_credits_to, consultations_hours_per_academic_year: Z.consultations_hours_per_academic_year, extracurricular_activities_hours_per_week: Z.extracurricular_activities_hours_per_week,
                                    }, [4, h((0, x.JS)(a))]) : [3, 2] : [3, 3]; case 1: return (i = r.sent()).meta.requestStatus === 'fulfilled' && (f === 'add' ? (h(x.rj.addQualificationToStructure(Z)), h(x.rj.addTrainingTimeToQualification([Z.qualification_id, i.payload]))) : (h(w.ap.addQualificationToStructure(Z)), h(w.ap.addTrainingTimeToQualification([Z.qualification_id, i.payload]))), O(y.F.success('Квалификация добавлена')), ee()), i.meta.requestStatus === 'rejected' && F(!0), [3, 3]; case 2: F(!0), r.label = 3; case 3: return [2];
                                    }
                                })));
                            }, new ((a = void 0) || (a = Promise))(((e, r) => { function l(e) { try { u(i.next(e)); } catch (e) { r(e); } } function o(e) { try { u(i.throw(e)); } catch (e) { r(e); } } function u(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(l, o); }u((i = i.apply(t, n || [])).next()); })); let t; let n; let a; let i;
                        },
                        children: [(0, a.jsx)(l.p0, { children: (0, a.jsx)(l.fl, { children: 'Добавление квалификации' }) }), (0, a.jsx)(l.sD, { children: t }), (0, a.jsxs)(l.Ym, {
                            className: A.footer,
                            children: [(0, a.jsx)('div', { className: A.message, children: M && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(_.Z, { icon: v.D, customClassName: A.messageIcon }), (0, a.jsx)(o.xv, { size: o.yH.M, weight: o.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, a.jsxs)('div', {
                                className: A.footerBtns,
                                children: [(0, a.jsx)(s.zx, {
                                    theme: s.bn.OUTLINE, className: A.footerBtn, onClick: ee, children: (0, a.jsx)(o.xv, { size: o.yH.XS, weight: o.fs.SEMIBOLD, children: 'Отмена' }),
                                }), (0, a.jsxs)(s.zx, { type: 'submit', className: (0, i.A)(A.footerBtn, {}, [A.greenBtn]), children: [(0, a.jsx)(o.xv, { size: o.yH.XS, weight: o.fs.SEMIBOLD, children: 'Добавить' }), (0, a.jsx)(_.Z, { icon: k.q, className: A.btnIcon })] })], 
})], 
})],
                    }),
                }), (0, a.jsx)(l.KF, { ref: z, push: B, placement: 'top-end' })],
            });
        }; const B = {
            tabBtn: 'P8ap_GBQ', tabsButtonsBlock: 'qM31LmjD', title: 'aSoaLcG_', settings: 'RViU0c8v', newAddField: 'YQHuwQ9S', tabBlock: 'sgxllrO5', form: 'lrBMpa9v', footerBtn: 'YtN1xq1L', greenBtn: 'YTVQLU4_', footer: 'TPV2wREl', message: 'cnYyZIaJ', messageIcon: 'JWzx6FHa',
        }; let O = function () { return O = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, O.apply(this, arguments); }; var z = function (e) {
            let t; let n; let u; const c = e.className; const d = e.visible; const f = e.setVisible; const h = e.mode; const N = e.qualId; const S = e.moduleId; const M = e.unitId; const F = e.data; const k = e.structureMode; const C = (0, m.T)(); const q = (0, r.useState)(!1); const E = q[0]; const D = q[1]; const A = (0, r.useState)(!1); const I = A[0]; const T = A[1]; const z = (0, r.useState)(); const Q = z[0]; const U = z[1]; const H = (0, r.useRef)(null); const L = (0, b.v9)(h === 'add' ? x.bT : w.xJ); const V = (0, r.useCallback)((() => { f(!1); }), [f]); const R = function () { let e; e = k === 'general_modules' ? F.structure.general_modules.filter(((e) => e.educational_module_id === S))[0].units.filter(((e) => e.educational_modules_unit_id === M))[0] : F.structure.qualifications.filter(((e) => e.qualification_id === N))[0].modules.filter(((e) => e.educational_module_id === S))[0].units.filter(((e) => e.educational_modules_unit_id === M))[0], C(h === 'add' ? x.rj.setEditUnitItem(e) : w.ap.setEditUnitItem(e)); }; const G = function () { V(), D(!1), T(!1), R(); }; const X = function (e, t) { C(h === 'add' ? x.rj.changeEditUnitCheck([e, t]) : w.ap.changeEditUnitCheck([e, t])); }; return (0, r.useEffect)((() => { F && S && M && d && R(); }), [F, C, S, N, k, M, d]), (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(l.Tk, {
                    className: (0, i.A)(B.EditStandardCurriculumModuleUnitModal, {}, [c]),
                    visible: d,
                    onClose: V,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, a.jsxs)(l.lx, {
                        className: (0, i.A)(B.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: E,
                        onSubmit(e) {
                            return t = void 0, n = void 0, i = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let a; let i; let r; let l = {
                                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (u) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (l = 0)), l;) try { if (n = 1, a && (i = 2 & o[0] ? a.return : o[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, o[1])).done) return i; switch (a = 0, i && (o = [2 & o[0], i.value]), o[0]) { case 0: case 1: i = o; break; case 4: return l.label++, { value: o[1], done: !1 }; case 5: l.label++, a = o[1], o = [0]; continue; case 7: o = l.ops.pop(), l.trys.pop(); continue; default: if (!((i = (i = l.trys).length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) { l = 0; continue; } if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) { l.label = o[1]; break; } if (o[0] === 6 && l.label < i[1]) { l.label = i[1], i = o; break; } if (i && l.label < i[2]) { l.label = i[2], l.ops.push(o); break; }i[2] && l.ops.pop(), l.trys.pop(); continue; }o = t.call(e, l); } catch (e) { o = [6, e], a = 0; } finally { n = i = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, u])); }; }
                                }(this, ((a) => (e.preventDefault(), t = e.currentTarget, T(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), D(!0), t.checkValidity() && (n = (0, g.T)(L == null ? void 0 : L.data, L == null ? void 0 : L.newFields), (0, j.Q)(n) ? U(y.F.error('Для сохранения вы должны внести изменения!')) : (h === 'add' ? C(k === 'general_modules' ? x.rj.saveEditUnitChangesGeneralModules([S, M, L.newFields]) : x.rj.saveEditUnitChangesQualificationsStructure([N, S, M, L.newFields])) : h === 'edit' && C(k === 'general_modules' ? w.ap.saveEditUnitChangesGeneralModules([S, M, L.newFields]) : w.ap.saveEditUnitChangesQualificationsStructure([N, S, M, L.newFields])), U(y.F.success('Информация о модульной единице успешно обновлена')), G())), [2]))));
                            }, new ((a = void 0) || (a = Promise))(((e, r) => { function l(e) { try { u(i.next(e)); } catch (e) { r(e); } } function o(e) { try { u(i.throw(e)); } catch (e) { r(e); } } function u(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(l, o); }u((i = i.apply(t, n || [])).next()); })); let t; let n; let a; let i;
                        },
                        children: [(0, a.jsx)(l.p0, { children: (0, a.jsx)(l.fl, { children: 'Редактирование модульной единицы' }) }), (0, a.jsx)(l.sD, {
                            children: (0, a.jsx)('div', {
                                className: B.tab,
                                children: (0, a.jsxs)('div', {
                                    className: B.tabBlock,
                                    children: [(0, a.jsx)('div', {
                                        className: B.settings,
                                        children: (0, a.jsxs)('div', {
                                            className: B.newAddField,
                                            children: [(0, a.jsx)('h6', { className: B.newAddFieldTitle, children: 'Индекс сортировки' }), (0, a.jsx)(l.jO, {
                                                type: 'number', placeholder: '100', min: 100, step: 100, value: String((t = L == null ? void 0 : L.newFields) === null || void 0 === t ? void 0 : t.sort) || '', onChange(e) { let t; let n; t = e.target.value, n = 'sort', C(h === 'add' ? x.rj.changeEditUnitField([t, n]) : w.ap.changeEditUnitField([t, n])); }, required: !0,
                                            })], 
})
                                    }), (0, a.jsx)('div', {
                                        className: B.settings,
                                        children: (0, a.jsx)('div', {
                                            className: B.newAddField,
                                            children: (0, a.jsx)(l.EC, {
                                                label: (0, a.jsx)('h6', { children: 'Присутствует на базе основного среднего образования (9 классов)' }), className: B.checkbox, checked: (n = L == null ? void 0 : L.newFields) === null || void 0 === n ? void 0 : n.has_in_basic_education, onChange(e) { X(e.target.checked, 'has_in_basic_education'); }, id: 'has_in_basic_education',
                                            }), 
})
                                    }), (0, a.jsx)('div', {
                                        className: B.settings,
                                        children: (0, a.jsx)('div', {
                                            className: B.newAddField,
                                            children: (0, a.jsx)(l.EC, {
                                                label: (0, a.jsx)('h6', { children: 'Присутствует на базе общего среднего образования (11 классов)' }), className: B.checkbox, checked: (u = L == null ? void 0 : L.newFields) === null || void 0 === u ? void 0 : u.has_in_general_education, onChange(e) { X(e.target.checked, 'has_in_general_education'); }, id: 'has_in_general_education',
                                            }), 
})
                                    })], 
})
                            }), 
}), (0, a.jsxs)(l.Ym, {
                            className: B.footer,
                            children: [(0, a.jsx)('div', { className: B.message, children: I && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(_.Z, { icon: v.D, customClassName: B.messageIcon }), (0, a.jsx)(o.xv, { size: o.yH.M, weight: o.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, a.jsxs)('div', {
                                className: B.footerBtns,
                                children: [(0, a.jsx)(s.zx, {
                                    theme: s.bn.OUTLINE, className: B.footerBtn, onClick: G, children: (0, a.jsx)(o.xv, { size: o.yH.XS, weight: o.fs.SEMIBOLD, children: 'Отмена' }),
                                }), (0, a.jsxs)(s.zx, { type: 'submit', className: (0, i.A)(B.footerBtn, {}, [B.greenBtn]), children: [(0, a.jsx)(o.xv, { size: o.yH.XS, weight: o.fs.SEMIBOLD, children: 'Сохранить' }), (0, a.jsx)(_.Z, { icon: p.F, className: B.btnIcon })] })], 
})], 
})],
                    }),
                }), (0, a.jsx)(l.KF, { ref: H, push: Q, placement: 'top-end' })],
            });
        }; const Q = {
            tabBtn: 'u1hw08Y4', tabsButtonsBlock: 'aZCMNevK', title: 'fYRhBjqt', settings: '_MGVdm2u', newAddField: 'pTqSJkaw', tabBlock: 'cHywkoz6', form: 'ouEFk3wx', footerBtn: 'rW1mUej6', greenBtn: 'ndJAV7cC', footer: 'fg91Q2dp', message: 'NdlyTzqt', messageIcon: '_fQchGP9',
        }; let U = function () { return U = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, U.apply(this, arguments); }; var H = function (e) {
            let t; let n; let u; const c = e.className; const d = e.visible; const f = e.setVisible; const h = e.mode; const N = e.moduleId; const S = e.data; const M = e.structureMode; const F = e.qualId; const k = (0, m.T)(); const C = (0, r.useState)(!1); const q = C[0]; const E = C[1]; const D = (0, r.useState)(!1); const A = D[0]; const I = D[1]; const T = (0, r.useState)(); const B = T[0]; const O = T[1]; const z = (0, r.useRef)(null); const H = (0, b.v9)(h === 'add' ? x.nB : w.Kc); const L = (0, r.useCallback)((() => { f(!1); }), [f]); const V = function () { if (M === 'general_modules')k(x.rj.setEditModuleItem(S.structure.general_modules.filter(((e) => e.educational_module_id === N))[0])); else { const e = S.structure.qualifications.filter(((e) => e.qualification_id === F))[0]; k(x.rj.setEditModuleItem(e.modules.filter(((e) => e.educational_module_id === N))[0])); } }; const R = function () { if (M === 'general_modules')k(w.ap.setEditModuleItem(S.structure.general_modules.filter(((e) => e.educational_module_id === N))[0])); else { const e = S.structure.qualifications.filter(((e) => e.qualification_id === F))[0]; k(w.ap.setEditModuleItem(e.modules.filter(((e) => e.educational_module_id === N))[0])); } }; const G = function () { L(), E(!1), I(!1), h === 'add' ? V() : R(); }; const X = function (e, t) { k(h === 'add' ? x.rj.changeEditModuleCheck([e, t]) : w.ap.changeEditModuleCheck([e, t])); }; return (0, r.useEffect)((() => { S && N && d && (h === 'add' ? V() : R()); }), [S, k, N, F, M, d, h]), (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(l.Tk, {
                    className: (0, i.A)(Q.EditStandardCurriculumModuleModal, {}, [c]),
                    visible: d,
                    onClose: L,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, a.jsxs)(l.lx, {
                        className: (0, i.A)(Q.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: q,
                        onSubmit(e) {
                            return t = void 0, n = void 0, i = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let a; let i; let r; let l = {
                                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (u) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (l = 0)), l;) try { if (n = 1, a && (i = 2 & o[0] ? a.return : o[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, o[1])).done) return i; switch (a = 0, i && (o = [2 & o[0], i.value]), o[0]) { case 0: case 1: i = o; break; case 4: return l.label++, { value: o[1], done: !1 }; case 5: l.label++, a = o[1], o = [0]; continue; case 7: o = l.ops.pop(), l.trys.pop(); continue; default: if (!((i = (i = l.trys).length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) { l = 0; continue; } if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) { l.label = o[1]; break; } if (o[0] === 6 && l.label < i[1]) { l.label = i[1], i = o; break; } if (i && l.label < i[2]) { l.label = i[2], l.ops.push(o); break; }i[2] && l.ops.pop(), l.trys.pop(); continue; }o = t.call(e, l); } catch (e) { o = [6, e], a = 0; } finally { n = i = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, u])); }; }
                                }(this, ((a) => (e.preventDefault(), t = e.currentTarget, I(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), E(!0), t.checkValidity() && (n = (0, g.T)(H == null ? void 0 : H.data, H == null ? void 0 : H.newFields), (0, j.Q)(n) ? O(y.F.error('Для сохранения вы должны внести изменения!')) : (k(h === 'add' ? M === 'general_modules' ? x.rj.saveEditModuleChangesGeneralModules([N, H.newFields]) : x.rj.saveEditModuleChangesQualificationsStructure([F, N, H.newFields]) : M === 'general_modules' ? w.ap.saveEditModuleChangesGeneralModules([N, H.newFields]) : w.ap.saveEditModuleChangesQualificationsStructure([F, N, H.newFields])), O(y.F.success('Информация о модуле успешно обновлена')), G())), [2]))));
                            }, new ((a = void 0) || (a = Promise))(((e, r) => { function l(e) { try { u(i.next(e)); } catch (e) { r(e); } } function o(e) { try { u(i.throw(e)); } catch (e) { r(e); } } function u(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(l, o); }u((i = i.apply(t, n || [])).next()); })); let t; let n; let a; let i;
                        },
                        children: [(0, a.jsx)(l.p0, { children: (0, a.jsx)(l.fl, { children: 'Редактирование модуля' }) }), (0, a.jsx)(l.sD, {
 children: (0, a.jsx)('div', {
 className: Q.tab,
children: (0, a.jsxs)('div', {
 className: Q.tabBlock,
children: [(0, a.jsx)('div', {
 className: Q.settings,
children: (0, a.jsxs)('div', {
 className: Q.newAddField,
children: [(0, a.jsx)('h6', { className: Q.newAddFieldTitle, children: 'Индекс сортировки'}), (0, a.jsx)(l.jO, {
                            type: 'number', placeholder: '100', min: 100, step: 100, value: String((t = H == null ? void 0 : H.newFields) === null || void 0 === t ? void 0 : t.sort) || '', onChange(e) { let t; let n; t = e.target.value, n = 'sort', k(h==='add' ? x.rj.changeEditModuleField([t, n]) : w.ap.changeEditModuleField([t, n])); }, required: !0, 
})] 
}) 
}), M === 'general_modules' && (0, a.jsxs)(a.Fragment, {
 children: [(0, a.jsx)('div', {
 className: Q.settings,
children: (0, a.jsx)('div', {
 className: Q.newAddField,
children: (0, a.jsx)(l.EC, {
                            label: (0, a.jsx)('h6', { children: 'Присутствует на базе основного среднего образования (9 классов)' }), className: Q.checkbox, checked: (n = H == null ? void 0 : H.newFields) === null || void 0 === n ? void 0 : n.has_in_basic_education, onChange(e) { X(e.target.checked, 'has_in_basic_education'); }, id: 'has_in_basic_education', 
}) 
}) 
}), (0, a.jsx)('div', {
 className: Q.settings,
children: (0, a.jsx)('div', {
 className: Q.newAddField,
children: (0, a.jsx)(l.EC, {
                            label: (0, a.jsx)('h6', { children: 'Присутствует на базе общего среднего образования (11 классов)' }), className: Q.checkbox, checked: (u = H == null ? void 0 : H.newFields) === null || void 0 === u ? void 0 : u.has_in_general_education, onChange(e) { X(e.target.checked, 'has_in_general_education'); }, id: 'has_in_general_education', 
}) 
}) 
})] 
})] 
}) 
}) 
}), (0, a.jsxs)(l.Ym, {
 className: Q.footer,
children: [(0, a.jsx)('div', { className: Q.message, children: A && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(_.Z, { icon: v.D, customClassName: Q.messageIcon }), (0, a.jsx)(o.xv, { size: o.yH.M, weight: o.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, a.jsxs)('div', {
 className: Q.footerBtns,
children: [(0, a.jsx)(s.zx, {
                            theme: s.bn.OUTLINE, className: Q.footerBtn, onClick: G, children: (0, a.jsx)(o.xv, { size: o.yH.XS, weight: o.fs.SEMIBOLD, children: 'Отмена' }), 
}), (0, a.jsxs)(s.zx, { type: 'submit', className: (0, i.A)(Q.footerBtn, {}, [Q.greenBtn]), children: [(0, a.jsx)(o.xv, { size: o.yH.XS, weight: o.fs.SEMIBOLD, children: 'Сохранить' }), (0, a.jsx)(_.Z, { icon: p.F, className: Q.btnIcon })] })] 
})] 
})],
                    }),
                }), (0, a.jsx)(l.KF, { ref: z, push: B, placement: 'top-end' })],
            });
        }; const L = n(1817); const V = {
            tabBtn: 'JLwMqpcL', tabsButtonsBlock: 'qk57LZkf', title: 'tanVWzKC', settings: 'PXkuavlo', newAddField: 'v4JBTBTd', tabBlock: 'aFzIiwIl', form: 'fXx6zRN1', footerBtn: 'ek6GDT5H', greenBtn: 'npGtk8z0', footer: 'i3bKnRe9', message: 'tpbBTPO5', messageIcon: 'iG2tkyqN',
        }; let R = function () { return R = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, R.apply(this, arguments); }; var G = function (e) {
            let t; const n = e.className; const u = e.visible; const c = e.setVisible; const d = e.data; const f = e.mode; const h = e.structureMode; const p = e.qualId; const g = (0, m.T)(); const j = (0, r.useState)(!1); const N = j[0]; const S = j[1]; const M = (0, r.useState)(!1); const F = M[0]; const E = M[1]; const D = (0, r.useState)(); const A = D[0]; const I = D[1]; const T = (0, r.useRef)(null); const B = (0, b.v9)(L.Ai); const O = (0, b.v9)(L.BH); const z = (0, b.v9)(L.ah); const Q = (0, b.v9)(f === 'add' ? x.kc : w.d7); const U = (0, r.useCallback)((() => { c(!1); }), [c]); const H = function () { U(), S(!1), E(!1), g(f === 'add' ? x.rj.clearNewModuleData() : w.ap.clearNewModuleData()); }; const G = function (e, t) { g(f === 'add' ? x.rj.changeNewModuleCheck([e, t]) : w.ap.changeNewModuleCheck([e, t])); }; return (0, r.useEffect)((() => { g((0, L.Eb)()); }), [g]), (0, r.useEffect)((() => { h === 'qualifications' ? (G(!0, 'has_in_basic_education'), G(!0, 'has_in_general_education')) : (G(!0, 'has_in_basic_education'), G(!1, 'has_in_general_education')); }), [g, u, p, h]), t = O ? (0, a.jsx)(q.O, { width: '100%', height: 400 }) : z ? (0, a.jsx)(o.xv, {
                theme: o.lg.ERROR, size: o.yH.M, weight: o.fs.SEMIBOLD, className: V.error, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, a.jsx)('div', {
                className: V.tab,
                children: (0, a.jsxs)('div', {
                    className: V.tabBlock,
                    children: [(0, a.jsx)('div', {
                        className: V.settings,
                        children: (0, a.jsxs)('div', {
                            className: V.newAddField,
                            children: [(0, a.jsx)('h6', { className: V.newAddFieldTitle, children: 'Образовательный модуль*' }), (0, a.jsx)(C.u, {
                                className: V.selectField, options: B && B.length ? B.map(((e) => e.name)) : [''], optionValue: (Q == null ? void 0 : Q.educational_module_id) ? B.filter(((e) => e.module_id === Q.educational_module_id))[0].name : 'null', onClickOption(e, t) { const n = B.filter(((t) => t.name === e))[0]; g(f === 'add' ? x.rj.changeNewModuleField([String(n.module_id), t]) : w.ap.changeNewModuleField([String(n.module_id), t])); }, columnName: 'educational_module_id',
                            })],
                        }),
                    }), (0, a.jsx)('div', {
                        className: V.settings,
                        children: (0, a.jsxs)('div', {
                            className: V.newAddField,
                            children: [(0, a.jsx)('h6', { className: V.newAddFieldTitle, children: 'Индекс сортировки*' }), (0, a.jsx)(l.jO, {
                                type: 'number', placeholder: '100', min: 100, step: 100, value: String(Q == null ? void 0 : Q.sort) || '', onChange(e) { let t; let n; t = e.target.value, n = 'sort', g(f === 'add' ? x.rj.changeNewModuleField([t, n]) : w.ap.changeNewModuleField([t, n])); }, required: !0,
                            })],
                        }),
                    }), h === 'general_modules' && (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)('div', {
                            className: V.settings,
                            children: (0, a.jsx)('div', {
                                className: V.newAddField,
                                children: (0, a.jsx)(l.EC, {
                                    label: (0, a.jsx)('h6', { children: 'Присутствует на базе основного среднего образования (9 классов)' }), className: V.checkbox, checked: Q == null ? void 0 : Q.has_in_basic_education, onChange(e) { G(e.target.checked, 'has_in_basic_education'); }, id: 'has_in_basic_education',
                                }),
                            }),
                        }), (0, a.jsx)('div', {
                            className: V.settings,
                            children: (0, a.jsx)('div', {
                                className: V.newAddField,
                                children: (0, a.jsx)(l.EC, {
                                    label: (0, a.jsx)('h6', { children: 'Присутствует на базе общего среднего образования (11 классов)' }), className: V.checkbox, checked: Q == null ? void 0 : Q.has_in_general_education, onChange(e) { G(e.target.checked, 'has_in_general_education'); }, id: 'has_in_general_education',
                                }),
                            }),
                        })],
                    })],
                }),
            }), (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(l.Tk, {
                    className: (0, i.A)(V.AddStandardCurriculumModuleModal, {}, [n]),
                    visible: u,
                    onClose: U,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, a.jsxs)(l.lx, {
                        className: (0, i.A)(V.form, {}, ['needs-validation']),
                        noValidate: !0,
                        validated: N,
                        onSubmit(e) { e.preventDefault(); const t = e.currentTarget; if (E(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), S(!0), t.checkValidity()) if ((Q == null ? void 0 : Q.educational_module_id) && Q.sort) { let n = void 0; if (h === 'general_modules')n = d == null ? void 0 : d.structure.general_modules.filter(((e) => e.educational_module_id === Q.educational_module_id)); else { const a = d == null ? void 0 : d.structure.qualifications.filter(((e) => e.qualification_id === p))[0]; n = a == null ? void 0 : a.modules.filter(((e) => e.educational_module_id === Q.educational_module_id)); } if (n && n.length) return void I(y.F.error('Данный модуль уже присутствует в списке')); f === 'add' ? g(h === 'general_modules' ? x.rj.addModuleToGeneralModules(Q) : x.rj.addModuleToQualificationStructure([p, Q])) : f === 'edit' && g(h === 'general_modules' ? w.ap.addModuleToGeneralModules(Q) : w.ap.addModuleToQualificationStructure([p, Q])), I(y.F.success('Модуль добавлен')), H(); } else E(!0); },
                        children: [(0, a.jsx)(l.p0, { children: (0, a.jsx)(l.fl, { children: 'Добавление модуля' }) }), (0, a.jsx)(l.sD, { children: t }), (0, a.jsxs)(l.Ym, {
                            className: V.footer,
                            children: [(0, a.jsx)('div', { className: V.message, children: F && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(_.Z, { icon: v.D, customClassName: V.messageIcon }), (0, a.jsx)(o.xv, { size: o.yH.M, weight: o.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, a.jsxs)('div', {
                                className: V.footerBtns,
                                children: [(0, a.jsx)(s.zx, {
                                    theme: s.bn.OUTLINE, className: V.footerBtn, onClick: H, children: (0, a.jsx)(o.xv, { size: o.yH.XS, weight: o.fs.SEMIBOLD, children: 'Отмена' }),
                                }), (0, a.jsxs)(s.zx, { type: 'submit', className: (0, i.A)(V.footerBtn, {}, [V.greenBtn]), children: [(0, a.jsx)(o.xv, { size: o.yH.XS, weight: o.fs.SEMIBOLD, children: 'Добавить' }), (0, a.jsx)(_.Z, { icon: k.q, className: V.btnIcon })] })], 
})], 
})],
                    }),
                }), (0, a.jsx)(l.KF, { ref: T, push: A, placement: 'top-end' })],
            });
        }; const X = {
            tabBtn: 'QDoaDRZ5', tabsButtonsBlock: 'QBrMPFmB', title: 'Tan9ALhF', settings: 'ohYYa9lL', newAddField: 'bvSvYvih', tabBlock: 'iJJ8ng7Z', form: 'judFz5BJ', footerBtn: 'vL59UnZL', greenBtn: 'Su79nHRm', footer: 'C6kN2MeZ', message: 'CwE4daRa', messageIcon: 'sRg0G9qR',
        }; let P = function () { return P = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, P.apply(this, arguments); }; var W = function (e) {
            let t; let n; const u = e.className; const c = e.visible; const d = e.setVisible; const f = e.moduleId; const h = e.data; const p = e.mode; const g = e.structureMode; const j = e.qualId; const N = (0, m.T)(); const S = (0, r.useState)(!1); const M = S[0]; const F = S[1]; const E = (0, r.useState)(!1); const D = E[0]; const A = E[1]; const I = (0, r.useState)(); const T = I[0]; const B = I[1]; const O = (0, r.useRef)(null); const z = (t = (0, b.v9)(L.zy)) === null || void 0 === t ? void 0 : t.filter(((e) => e.module_id === f)); const Q = (0, b.v9)(L.cH); const U = (0, b.v9)(L.GM); const H = (0, b.v9)(p === 'add' ? x.ft : w.Ol); const V = (0, r.useCallback)((() => { d(!1); }), [d]); const R = function (e, t) { N(p === 'add' ? x.rj.changeNewUnitCheck([e, t]) : w.ap.changeNewUnitCheck([e, t])); }; const G = function () { V(), F(!1), A(!1), p === 'add' ? g === 'general_modules' ? (N(x.rj.clearNewUnitData()), R(!0, 'has_in_basic_education'), R(!1, 'has_in_general_education')) : (N(x.rj.clearNewUnitData()), R(!0, 'has_in_basic_education'), R(!0, 'has_in_general_education')) : p === 'edit' && (g === 'general_modules' ? (N(w.ap.clearNewUnitData()), R(!0, 'has_in_basic_education'), R(!1, 'has_in_general_education')) : (N(w.ap.clearNewUnitData()), R(!0, 'has_in_basic_education'), R(!0, 'has_in_general_education'))); }; return (0, r.useEffect)((() => { N((0, L.Eb)()), N((0, L.$w)()); }), [N]), (0, r.useEffect)((() => { g === 'qualifications' ? (R(!0, 'has_in_basic_education'), R(!0, 'has_in_general_education')) : (R(!0, 'has_in_basic_education'), R(!1, 'has_in_general_education')); }), [g, c]), n = Q ? (0, a.jsx)(q.O, { width: '100%', height: 400 }) : U ? (0, a.jsx)(o.xv, {
                theme: o.lg.ERROR, size: o.yH.M, weight: o.fs.SEMIBOLD, className: X.error, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, a.jsx)('div', {
                className: X.tab,
                children: (0, a.jsxs)('div', {
                    className: X.tabBlock,
                    children: [(0, a.jsx)('div', {
                        className: X.settings,
                        children: (0, a.jsxs)('div', {
                            className: X.newAddField,
                            children: [(0, a.jsx)('h6', { className: X.newAddFieldTitle, children: 'Модульная единица*' }), (0, a.jsx)(C.u, {
                                className: X.selectField, options: z && z.length ? z.map(((e) => e.name)) : [''], optionValue: (H == null ? void 0 : H.educational_modules_unit_id) ? z.filter(((e) => e.unit_id === H.educational_modules_unit_id))[0].name : 'null', onClickOption(e, t) { const n = z.filter(((t) => t.name === e))[0]; N(p === 'add' ? x.rj.changeNewUnitField([String(n.unit_id), t]) : w.ap.changeNewUnitField([String(n.unit_id), t])); }, columnName: 'educational_modules_unit_id',
                            })],
                        }),
                    }), (0, a.jsx)('div', {
                        className: X.settings,
                        children: (0, a.jsxs)('div', {
                            className: X.newAddField,
                            children: [(0, a.jsx)('h6', { className: X.newAddFieldTitle, children: 'Индекс сортировки*' }), (0, a.jsx)(l.jO, {
                                type: 'number', placeholder: '100', min: 100, step: 100, value: String(H == null ? void 0 : H.sort) || '', onChange(e) { let t; let n; t = e.target.value, n = 'sort', N(p === 'add' ? x.rj.changeNewUnitField([t, n]) : w.ap.changeNewUnitField([t, n])); }, required: !0,
                            })],
                        }),
                    }), (0, a.jsx)('div', {
                        className: X.settings,
                        children: (0, a.jsx)('div', {
                            className: X.newAddField,
                            children: (0, a.jsx)(l.EC, {
                                label: (0, a.jsx)('h6', { children: 'Присутствует на базе основного среднего образования (9 классов)' }), className: X.checkbox, checked: H == null ? void 0 : H.has_in_basic_education, onChange(e) { R(e.target.checked, 'has_in_basic_education'); }, id: 'has_in_basic_education',
                            }),
                        }),
                    }), (0, a.jsx)('div', {
                        className: X.settings,
                        children: (0, a.jsx)('div', {
                            className: X.newAddField,
                            children: (0, a.jsx)(l.EC, {
                                label: (0, a.jsx)('h6', { children: 'Присутствует на базе общего среднего образования (11 классов)' }), className: X.checkbox, checked: H == null ? void 0 : H.has_in_general_education, onChange(e) { R(e.target.checked, 'has_in_general_education'); }, id: 'has_in_general_education',
                            }),
                        }),
                    })],
                }),
            }), (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(l.Tk, {
                    className: (0, i.A)(X.AddStandardCurriculumModuleUnitModal, {}, [u]),
                    visible: c,
                    onClose: V,
                    size: 'lg',
                    alignment: 'center',
                    children: (0, a.jsxs)(l.lx, {
                        className: (0, i.A)(X.form, {}, ['needs-validation']),
noValidate: !0,
validated: M,
onSubmit(e) { e.preventDefault(); const t = e.currentTarget; if (A(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), F(!0), t.checkValidity()) if ((H == null ? void 0 : H.educational_modules_unit_id) && H.sort) { let n = void 0; if (g === 'general_modules')n = h == null ? void 0 : h.structure.general_modules.filter(((e) => e.educational_module_id === f)); else { const a = h == null ? void 0 : h.structure.qualifications.filter(((e) => e.qualification_id === j))[0]; n = a == null ? void 0 : a.modules.filter(((e) => e.educational_module_id === f)); } const i = n && n.length ? n[0].units.filter(((e) => e.educational_modules_unit_id === H.educational_modules_unit_id)) : []; if (i && i.length) return void B(y.F.error('Данная модульная единица уже присутствует в списке')); p === 'add' ? N(g === 'general_modules' ? x.rj.addUnitToGeneralModulesModule([f, H]) : x.rj.addUnitToQualificationModuleStructure([j, f, H])) : p === 'edit' && N(g === 'general_modules' ? w.ap.addUnitToGeneralModulesModule([f, H]) : w.ap.addUnitToQualificationModuleStructure([j, f, H])), B(y.F.success('Модульная единица добавлена')), G(); } else A(!0); },
children: [(0, a.jsx)(l.p0, { children: (0, a.jsx)(l.fl, { children: 'Добавление модульной единицы' }) }), (0, a.jsx)(l.sD, { children: n }), (0, a.jsxs)(l.Ym, {
 className: X.footer,
children: [(0, a.jsx)('div', { className: X.message, children: D && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(_.Z, { icon: v.D, customClassName: X.messageIcon }), (0, a.jsx)(o.xv, { size: o.yH.M, weight: o.fs.SEMIBOLD, children: 'Форма заполнена некорректно' })] }) }), (0, a.jsxs)('div', {
 className: X.footerBtns,
children: [(0, a.jsx)(s.zx, {
                            theme: s.bn.OUTLINE, className: X.footerBtn, onClick: G, children: (0, a.jsx)(o.xv, { size: o.yH.XS, weight: o.fs.SEMIBOLD, children: 'Отмена' }), 
}), (0, a.jsxs)(s.zx, { type: 'submit', className: (0, i.A)(X.footerBtn, {}, [X.greenBtn]), children: [(0, a.jsx)(o.xv, { size: o.yH.XS, weight: o.fs.SEMIBOLD, children: 'Добавить' }), (0, a.jsx)(_.Z, { icon: k.q, className: X.btnIcon })] })] 
})] 
})],
                    }),
                }), (0, a.jsx)(l.KF, { ref: O, push: T, placement: 'top-end' })],
            });
        }; const J = n(982); const Y = n(9417); const Z = n(4434); const K = {
            title: 'G_I8i09h', content: 'u7k4Tiix', accordionHeader: 'SdMRSFHJ', accordionBody: 'JfmrlbuN', btnAdd: 'Nfz72Eof', accordion: 'RCLWV99O', accordionBodyContent: 'StL89hXq', innerBtnAdd: 'Ye9fEjFn', btnAddParent: 'dgt6G_R0', cell: 'pZ5qDb2Y', accordionInner: 'nQElOaDq', accordionInnerSecond: 'WFiakPkc', cellBtn: 'YJLyKWDf', bubbles: 'n_4a4pOB', bubble: 'B_Np01Zu', greenBubble: 'FTXViZIg', redBubble: '_J3iI91U', accordionInnerThird: 'VWIcEFHG',
        }; let $ = function () { return $ = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, $.apply(this, arguments); }; var ee = function (e) {
            let t; let n; let u; let c; const d = e.className; const f = e.setAddModuleModalVisible; const h = e.setAddModuleUnitModalVisible; const m = e.setAddQualificationModalVisible; const _ = e.setEditModuleModalVisible; const v = e.setEditModuleUnitModalVisible; const p = e.setEditQualificationModalVisible; const y = e.onDeleteModuleFromGeneralModulesHandler; const x = e.onDeleteModuleFromQualificationStructureHandler; const g = e.onDeleteModuleUnitFromGeneralModulesHandler; const j = e.onDeleteModuleUnitFromQualificationStructureHandler; const w = e.onDeleteQualificationFromStructureHandler; const S = e.setModuleId; const M = e.setUnitId; const F = e.setQualId; const k = e.setCurriculumStructureMode; const C = e.isLoading; const D = e.error; const A = e.data; const I = (0, b.v9)(L.Ai); const T = (0, b.v9)(L.zy); const B = (0, b.v9)(E._c); const O = (0, b.v9)(N.rb); const z = O == null ? void 0 : O.knrtu_kai.options.filter(((e) => e.name === 'credit_in_hours'))[0]; const Q = B == null ? void 0 : B.data.filter(((e) => e.specialty_id === (A == null ? void 0 : A.general_info.speciality_id))); const U = (0, r.useCallback)(((e, t) => { f(!0), k(e), e === 'qualifications' && F(t); }), [f, k, F]); const H = (0, r.useCallback)(((e, t, n) => { h(!0), S(e), k(t), t === 'qualifications' && F(n); }), [h, k, S, F]); const V = (0, r.useCallback)((() => { m(!0); }), [m]); const R = (0, r.useCallback)(((e, t, n) => { _(!0), S(e), k(t), t === 'qualifications' && F(n); }), [k, _, S, F]); const G = (0, r.useCallback)(((e, t, n, a) => { v(!0), S(e), M(t), k(n), n === 'qualifications' && F(a); }), [k, v, S, F, M]); const X = (0, r.useCallback)(((e) => { p(!0), F(e); }), [p, F]); return c = C ? (0, a.jsx)(q.O, { width: '100%', height: 300, border: '4px' }) : D ? (0, a.jsx)(o.xv, {
                theme: o.lg.ERROR, size: o.yH.M, weight: o.fs.SEMIBOLD, className: K.error, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, a.jsxs)('div', {
 className: (0, i.A)(K.StandardCurriculumStructure, {}, [d, 'accordion-custom']),
children: [(0, a.jsx)(o.xv, { weight: o.fs.MEDIUM, className: K.title, children: 'Структура учебного плана' }), (0, a.jsxs)('div', {
 className: K.content,
children: [(0, a.jsx)(l.uz, { className: (0, i.A)(K.accordion, {}, [K.modulesAccordion]), children: (0, a.jsxs)(l.Ob, { className: (0, i.A)(K.accordionItem, {}, [K.modulesAccordionItem]), children: [(0, a.jsx)(l.Lv, { className: (0, i.A)(K.accordionHeader, {}, [K.modulesAccordionHeader]), children: (0, a.jsx)('div', { className: K.cell, children: (0, a.jsx)(o.xv, { size: o.yH.XS, className: K.accordionTitle, children: 'Общие образовательные модули' }) }) }), (0, a.jsxs)(l.qI, { className: (0, i.A)(K.accordionBody, {}, [K.modulesAccordionBody]), children: [(t = A == null ? void 0 : A.structure.general_modules) === null || void 0 === t ? void 0 : t.map(((e) => { let t; let n; return (0, a.jsx)(l.uz, { className: (0, i.A)(K.accordion, {}, [K.accordionInner]), children: (0, a.jsxs)(l.Ob, { className: (0, i.A)(K.accordionItem, {}, []), children: [(0, a.jsxs)(l.Lv, { className: (0, i.A)(K.accordionHeader, {}, []), children: [(0, a.jsx)('div', {className: K.cell, children: (0, a.jsx)(o.xv, $({ size: o.yH.XS, className: K.accordionTitle }, { children: null == I ? void 0 : I.filter(((t) =>{ return t.module_id === e.educational_module_id }))[0].name }))}), (0, a.jsx)('div', {className: K.cell, children: (0, a.jsx)(o.xv, $({ size: o.yH.XS, weight: o.fs.MEDIUM, className: K.accordionSort }, { children: e.sort }))}), (0, a.jsxs)('div', {className: (0, i.A)(K.cell, {}, [K.bubbles]), children: [(0, a.jsx)('div', $({ className: (0, i.A)(K.bubble, (t = {}, t[K.greenBubble] = e.has_in_basic_education, t[K.redBubble] = !e.has_in_basic_education, t), []) }, { children: (0, a.jsxs)(o.xv, $({ size: o.yH.XXS }, { children: ['На базе 9 классов -', " ", e.has_in_basic_education ? "Да" : "Нет"] })) })), (0, a.jsx)('div', $({ className: (0, i.A)(K.bubble, (n = {}, n[K.greenBubble] = e.has_in_general_education, n[K.redBubble] = !e.has_in_general_education, n), []) }, { children: (0, a.jsxs)(o.xv, $({ size: o.yH.XXS }, { children: ['На базе 11 классов -', " ", e.has_in_general_education ? "Да" : "Нет"] })) }))]}), (0, a.jsxs)('div', {className: K.cell, children: [(0, a.jsx)('button', $({ type: "button", className: (0, i.A)(K.cellBtn, {}, [K.editBtn]), onClick: function () { R(e.educational_module_id, "general_modules") } }, { children: (0, a.jsx)(J.G, { icon: Z.Yai }) })), (0, a.jsx)('button', $({ type: "button", className: (0, i.A)(K.cellBtn, {}, [K.deleteBtn]), onClick: function () { y(e.educational_module_id) } }, { children: (0, a.jsx)(J.G, { icon: Y.$aW }) }))]})] }), (0, a.jsxs)(l.qI, { className: (0, i.A)(K.accordionBody, {}, []), children: [e.units.map(((t) => { let n; let r; return (0, a.jsx)(l.uz, {className: (0, i.A)(K.accordion, {}, [K.accordionInnerSecond]), children: (0, a.jsx)(l.Ob, $({ className: (0, i.A)(K.accordionItem, {}, [K.moduleUnitsAccordionItem]) }, { children: (0, a.jsxs)(l.Lv, $({ className: (0, i.A)(K.accordionHeader, {}, [K.moduleUnitsAccordionHeader]) }, { children: [(0, a.jsx)('div', $({ className: K.cell }, { children: (0, a.jsx)(o.xv, $({ size: o.yH.XS, className: K.accordionTitle }, { children: t.educational_modules_unit_id ? null == T ? void 0 : T.filter(((e) =>{ return e.unit_id === t.educational_modules_unit_id }))[0].name : "Нет" })) })), (0, a.jsx)('div', $({ className: K.cell }, { children: (0, a.jsx)(o.xv, $({ size: o.yH.XS, weight: o.fs.MEDIUM, className: K.accordionSort }, { children: t.sort })) })), (0, a.jsxs)('div', $({ className: (0, i.A)(K.cell, {}, [K.bubbles]) }, { children: [(0, a.jsx)('div', $({ className: (0, i.A)(K.bubble, (n = {}, n[K.greenBubble] = t.has_in_basic_education, n[K.redBubble] = !t.has_in_basic_education, n), []) }, { children: (0, a.jsxs)(o.xv, $({ size: o.yH.XXS }, { children: ['На базе 9 классов -', " ", t.has_in_basic_education ? "Да" : "Нет"] })) })), (0, a.jsx)('div', $({ className: (0, i.A)(K.bubble, (r = {}, r[K.greenBubble] = t.has_in_general_education, r[K.redBubble] = !t.has_in_general_education, r), []) }, { children: (0, a.jsxs)(o.xv, $({ size: o.yH.XXS }, { children: ['На базе 11 классов -', " ", t.has_in_general_education ? "Да" : "Нет"] })) }))] })), (0, a.jsxs)('div', $({ className: K.cell }, { children: [(0, a.jsx)('button', $({ type: "button", className: (0, i.A)(K.cellBtn, {}, [K.editBtn]), onClick: function () { G(e.educational_module_id, t.educational_modules_unit_id, "general_modules") } }, { children: (0, a.jsx)(J.G, { icon: Z.Yai }) })), (0, a.jsx)('button', $({ type: "button", className: (0, i.A)(K.cellBtn, {}, [K.deleteBtn]), onClick: function () { g(e.educational_module_id, t.educational_modules_unit_id) } }, { children: (0, a.jsx)(J.G, { icon: Y.$aW }) }))] }))] })) }))}, t.educational_modules_unit_id); })), (T == null ? void 0 : T.filter(((t) => { return t.module_id === e.educational_module_id; })).length) && (T == null ? void 0 : T.filter(((t) => { return t.module_id === e.educational_module_id; })).length) !== e.units.length ? (0, a.jsx)(s.zx, {className: (0, i.A)(K.btnAdd, {}, [K.innerBtnAdd]), onClick: function () { H(e.educational_module_id, "general_modules") }, children: (0, a.jsx)(o.xv, $({ size: o.yH.XS }, { children: "Добавить модульную единицу" }))}) : ''] })] }) }, e.educational_module_id); })), ((n = A == null ? void 0 : A.structure.general_modules) === null || void 0 === n ? void 0 : n.length) === (I == null ? void 0 : I.length) ? '' : (0, a.jsx)(s.zx, { className: (0, i.A)(K.btnAdd, {}, [K.btnAddParent]), onClick() { U('general_modules'); }, children: (0, a.jsx)(o.xv, { size: o.yH.XS, children: 'Добавить модуль' }) })] })] }) }), (0, a.jsx)(l.uz, {
 className: (0, i.A)(K.accordion, {}, [K.qualificationsAccordion]),
children: (0, a.jsxs)(l.Ob, {
 className: (0, i.A)(K.accordionItem, {}, [K.modulesAccordionItem]),
children: [(0, a.jsx)(l.Lv, { className: (0, i.A)(K.accordionHeader, {}, [K.modulesAccordionHeader]), children: (0, a.jsx)(o.xv, { size: o.yH.XS, children: 'Квалификации' }) }), (0, a.jsxs)(l.qI, {
 className: (0, i.A)(K.accordionBody, {}, [K.modulesAccordionBody]),
children: [A == null ? void 0 : A.structure.qualifications.map(((e) => (0, a.jsx)(l.uz, { className: (0, i.A)(K.accordion, {}, [K.accordionInner]), children: (0, a.jsxs)(l.Ob, { className: (0, i.A)(K.accordionItem, {}, []), children: [(0, a.jsxs)(l.Lv, {className: (0, i.A)(K.accordionHeader, {}, []), children: [(0, a.jsx)('div', $({ className: K.cell }, { children: (0, a.jsxs)(o.xv, $({ size: o.yH.XS, className: K.accordionTitle }, { children: ['Квалификация', " ", null == B ? void 0 : B.data.filter(((t) =>{ return t.id_qual === e.qualification_id }))[0].shifr_qual, " ", "-", " ", null == B ? void 0 : B.data.filter(((t) =>{ return t.id_qual === e.qualification_id }))[0].qualification] })) })), (0, a.jsx)('div', $({ className: K.cell }, { children: (0, a.jsx)(o.xv, $({ size: o.yH.XS, weight: o.fs.MEDIUM, className: K.accordionSort }, { children: e.sort })) })), (0, a.jsx)('div', { className: (0, i.A)(K.cell, {}, [K.bubbles]) }), (0, a.jsxs)('div', $({ className: K.cell }, { children: [(0, a.jsx)('button', $({ type: "button", className: (0, i.A)(K.cellBtn, {}, [K.editBtn]), onClick: function () { X(e.qualification_id) } }, { children: (0, a.jsx)(J.G, { icon: Z.Yai }) })), (0, a.jsx)('button', $({ type: "button", className: (0, i.A)(K.cellBtn, {}, [K.deleteBtn]), onClick: function () { w(e.qualification_id) } }, { children: (0, a.jsx)(J.G, { icon: Y.$aW }) }))] }))]}), (0, a.jsxs)(l.qI, {className: (0, i.A)(K.accordionBody, {}, []), children: [e.modules.map(((t) =>{ return (0, a.jsx)(l.uz, $({ className: (0, i.A)(K.accordion, {}, [K.accordionInnerSecond]) }, { children: (0, a.jsxs)(l.Ob, $({ className: (0, i.A)(K.accordionItem, {}, []) }, { children: [(0, a.jsxs)(l.Lv, $({ className: (0, i.A)(K.accordionHeader, {}, []) }, { children: [(0, a.jsx)('div', $({ className: K.cell }, { children: (0, a.jsx)(o.xv, $({ size: o.yH.XS, className: K.accordionTitle }, { children: null == I ? void 0 : I.filter(((e) =>{ return e.module_id === t.educational_module_id }))[0].name })) })), (0, a.jsx)('div', $({ className: K.cell }, { children: (0, a.jsx)(o.xv, $({ size: o.yH.XS, weight: o.fs.MEDIUM, className: K.accordionSort }, { children: t.sort })) })), (0, a.jsx)('div', { className: (0, i.A)(K.cell, {}, [K.bubbles]) }), (0, a.jsxs)('div', $({ className: K.cell }, { children: [(0, a.jsx)('button', $({ type: "button", className: (0, i.A)(K.cellBtn, {}, [K.editBtn]), onClick: function () { R(t.educational_module_id, "qualifications", e.qualification_id) } }, { children: (0, a.jsx)(J.G, { icon: Z.Yai }) })), (0, a.jsx)('button', $({ type: "button", className: (0, i.A)(K.cellBtn, {}, [K.deleteBtn]), onClick: function () { x(e.qualification_id, t.educational_module_id) } }, { children: (0, a.jsx)(J.G, { icon: Y.$aW }) }))] }))] })), (0, a.jsxs)(l.qI, $({ className: (0, i.A)(K.accordionBody, {}, []) }, { children: [t.units.map(((n) =>{ var r; var u; return (0, a.jsx)(l.uz, $({ className: (0, i.A)(K.accordion, {}, [K.accordionInnerThird]) }, { children: (0, a.jsx)(l.Ob, $({ className: (0, i.A)(K.accordionItem, {}, [K.moduleUnitsAccordionItem]) }, { children: (0, a.jsxs)(l.Lv, $({ className: (0, i.A)(K.accordionHeader, {}, [K.moduleUnitsAccordionHeader]) }, { children: [(0, a.jsx)('div', $({ className: K.cell }, { children: (0, a.jsx)(o.xv, $({ size: o.yH.XS, className: K.accordionTitle }, { children: n.educational_modules_unit_id ? null == T ? void 0 : T.filter(((e) =>{ return e.unit_id === n.educational_modules_unit_id }))[0].name : "Нет" })) })), (0, a.jsx)('div', $({ className: K.cell }, { children: (0, a.jsx)(o.xv, $({ size: o.yH.XS, weight: o.fs.MEDIUM, className: K.accordionSort }, { children: n.sort })) })), (0, a.jsxs)('div', $({ className: (0, i.A)(K.cell, {}, [K.bubbles]) }, { children: [(0, a.jsx)('div', $({ className: (0, i.A)(K.bubble, (r = {}, r[K.greenBubble] = n.has_in_basic_education, r[K.redBubble] = !n.has_in_basic_education, r), []) }, { children: (0, a.jsxs)(o.xv, $({ size: o.yH.XXS }, { children: ['На базе 9 классов -', " ", n.has_in_basic_education ? "Да" : "Нет"] })) })), (0, a.jsx)('div', $({ className: (0, i.A)(K.bubble, (u = {}, u[K.greenBubble] = n.has_in_general_education, u[K.redBubble] = !n.has_in_general_education, u), []) }, { children: (0, a.jsxs)(o.xv, $({ size: o.yH.XXS }, { children: ['На базе 11 классов -', " ", n.has_in_general_education ? "Да" : "Нет"] })) }))] })), (0, a.jsxs)('div', $({ className: K.cell }, { children: [(0, a.jsx)('button', $({ type: "button", className: (0, i.A)(K.cellBtn, {}, [K.editBtn]), onClick: function () { G(t.educational_module_id, n.educational_modules_unit_id, "qualifications", e.qualification_id) } }, { children: (0, a.jsx)(J.G, { icon: Z.Yai }) })), (0, a.jsx)('button', $({ type: "button", className: (0, i.A)(K.cellBtn, {}, [K.deleteBtn]), onClick: function () { j(e.qualification_id, t.educational_module_id, n.educational_modules_unit_id) } }, { children: (0, a.jsx)(J.G, { icon: Y.$aW }) }))] }))] })) })) }), n.educational_modules_unit_id) })), (T==null?void 0 : T.filter(((e) =>{ return e.module_id === t.educational_module_id })).length) && (T==null?void 0 : T.filter(((e) =>{ return e.module_id === t.educational_module_id })).length) !== t.units.length ? (0, a.jsx)(s.zx, $({ className: (0, i.A)(K.btnAdd, {}, [K.innerBtnAdd]), onClick: function () { H(t.educational_module_id, "qualifications", e.qualification_id) } }, { children: (0, a.jsx)(o.xv, $({ size: o.yH.XS }, { children: "Добавить модульную единицу" })) })) : ""] }))] })) }), t.educational_module_id) })), (0, a.jsx)(s.zx, $({ className: (0, i.A)(K.btnAdd, {}, [K.innerBtnAdd]), onClick: function () { U('qualifications', e.qualification_id) } }, { children: (0, a.jsx)(o.xv, $({ size: o.yH.XS }, { children: "Добавить модуль" })) })), (0, a.jsx)(l.uz, $({ className: (0, i.A)(K.accordion, {}, [K.accordionInnerSecond]) }, { children: (0, a.jsxs)(l.Ob, $({ className: (0, i.A)(K.accordionItem, {}, []) }, { children: [(0, a.jsxs)(l.Lv, $({ className: (0, i.A)(K.accordionHeader, {}, []) }, { children: [(0, a.jsx)('div', $({ className: K.cell }, { children: (0, a.jsx)(o.xv, $({ size: o.yH.XS, className: K.accordionTitle }, { children: "Сроки обучения" })) })), (0, a.jsx)('div', { className: K.cell }), (0, a.jsxs)('div', $({ className: (0, i.A)(K.cell, {}, [K.bubbles]) }, { children: [(0, a.jsxs)(o.xv, $({ size: o.yH.XS }, { children: [Math.round(e.total.basicEducationFrom.credits), "/", Math.round(e.total.basicEducationFrom.hours), " ", "-", " ", Math.round(e.total.basicEducationTo.credits), "/", Math.round(e.total.basicEducationTo.hours)] })), (0, a.jsxs)(o.xv, $({ size: o.yH.XS }, { children: [Math.round(e.total.generalEducationFrom.credits), "/", Math.round(e.total.generalEducationFrom.hours), " ", "-", " ", Math.round(e.total.generalEducationTo.credits), "/", Math.round(e.total.generalEducationTo.hours)] }))] })), (0, a.jsx)('div', { className: K.cell })] })), (0, a.jsxs)(l.qI, $({ className: (0, i.A)(K.accordionBody, {}, []) }, { children: [(0, a.jsxs)('div', $({ className: K.accordionBodyContent }, { children: [(0, a.jsx)('div', $({ className: K.cell }, { children: (0, a.jsx)(o.xv, $({ size: o.yH.XS }, { children: "Итого на обязательное обучение" })) })), (0, a.jsx)('div', { className: K.cell }), (0, a.jsxs)('div', $({ className: (0, i.A)(K.cell, {}, [K.bubbles]) }, { children: [(0, a.jsx)(o.xv, $({ size: o.yH.XS }, { children: e.compulsory_education_basic_credits_from === e.compulsory_education_basic_credits_to ? (0, a.jsxs)(a.Fragment, { children: [e.compulsory_education_basic_credits_from, "/", Math.round(e.compulsory_education_basic_credits_from * Number(z.value))] }) : (0, a.jsxs)(a.Fragment, { children: [e.compulsory_education_basic_credits_from, "/", Math.round(e.compulsory_education_basic_credits_from * Number(z.value)), " ", "-", " ", e.compulsory_education_basic_credits_to, "/", Math.round(e.compulsory_education_basic_credits_to * Number(z.value))] }) })), (0, a.jsx)(o.xv, $({ size: o.yH.XS }, { children: e.compulsory_education_general_credits_from === e.compulsory_education_general_credits_to ? (0, a.jsxs)(a.Fragment, { children: [e.compulsory_education_general_credits_from, "/", Math.round(e.compulsory_education_general_credits_from * Number(z.value))] }) : (0, a.jsxs)(a.Fragment, { children: [e.compulsory_education_general_credits_from, "/", Math.round(e.compulsory_education_general_credits_from * Number(z.value)), " ", "-", " ", e.compulsory_education_general_credits_to, "/", Math.round(e.compulsory_education_general_credits_to * Number(z.value))] }) }))] })), (0, a.jsx)('div', { className: K.cell })] })), (0, a.jsxs)('div', $({ className: K.accordionBodyContent }, { children: [(0, a.jsx)('div', $({ className: K.cell }, { children: (0, a.jsx)(o.xv, $({ size: o.yH.XS }, { children: "Факультативные занятия" })) })), (0, a.jsx)('div', { className: K.cell }), (0, a.jsx)('div', $({ className: (0, i.A)(K.cell, {}, [K.bubbles]) }, { children: (0, a.jsxs)(o.xv, $({ size: o.yH.XS }, { children: ['не более', " ", e.extracurricular_activities_hours_per_week, "-х часов в неделю"] })) })), (0, a.jsx)('div', { className: K.cell })] })), (0, a.jsxs)('div', $({ className: K.accordionBodyContent }, { children: [(0, a.jsx)('div', $({ className: K.cell }, { children: (0, a.jsx)(o.xv, $({ size: o.yH.XS }, { children: "Консультации" })) })), (0, a.jsx)('div', { className: K.cell }), (0, a.jsx)('div', $({ className: (0, i.A)(K.cell, {}, [K.bubbles]) }, { children: (0, a.jsxs)(o.xv, $({ size: o.yH.XS }, { children: ['не более', " ", e.consultations_hours_per_academic_year, " ", "часов на учебный год"] })) })), (0, a.jsx)('div', { className: K.cell })] }))] }))] })) }))]})] }) }, e.qualification_id))), ((u = A == null ? void 0 : A.structure.qualifications) === null || void 0 === u ? void 0 : u.length) === (Q == null ? void 0 : Q.length) && (Q == null ? void 0 : Q.length) ? '' : (0, a.jsx)(s.zx, {
                className: (0, i.A)(K.btnAdd, {}, [K.btnAddParent]), onClick: V, disabled: !(A == null ? void 0 : A.general_info.speciality_id) || !(Q == null ? void 0 : Q.length), children: (0, a.jsx)(o.xv, { size: o.yH.XS, children: 'Добавить квалификацию' }), 
})] 
})] 
}) 
})] 
})] 
}), c;
        }; const te = { wrapper: 'eK3Tq0JS' }; let ne = function () { return ne = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, ne.apply(this, arguments); }; var ae = function (e) { const t = e.className; const n = e.data; const r = (0, b.v9)(E._c); const l = n == null ? void 0 : n.structure.qualifications.map(((e) => e.qualification_id)); return (0, a.jsxs)('div', { className: (0, i.A)(te.StandardCurriculumQualifications, {}, [t]), children: [(0, a.jsx)(o.xv, { weight: o.fs.MEDIUM, children: 'Квалификации' }), (0, a.jsx)('div', { className: te.wrapper, children: l && l.length ? l == null ? void 0 : l.map(((e) => ((r == null ? void 0 : r.data.filter(((t) => t.id_qual === e)).length) ? (0, a.jsxs)(o.xv, { children: [r == null ? void 0 : r.data.filter(((t) => t.id_qual === e))[0].shifr_qual, ' ', '-', ' ', r == null ? void 0 : r.data.filter(((t) => t.id_qual === e))[0].qualification] }, e) : ''))) : (0, a.jsx)(o.xv, { children: 'Тут пока пусто...' }) })] }); }; const ie = n(9198); const re = n.n(ie); const le = n(8523); const oe = n(6959); const ue = {
            StandardCurriculumGeneralInfo: 'CB5UNjli', datepickerItem: 'nHFbXJYd', setting: 'FYBRYihb', settingShort: 'sBHhl1Wl', selectField: '_LUQ5Cl7',
        }; let ce = function () { return ce = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, ce.apply(this, arguments); }; var se = function (e) {
            const t = e.className; const n = e.searchSelectActiveValue; const r = e.sortValue; const u = e.onChangeSearchSelect; const c = e.onChangeSort; const s = e.dateValue; const d = e.onChangeDate; const f = (0, b.v9)(oe.K2); return (0, a.jsxs)('div', {
                className: (0, i.A)(ue.StandardCurriculumGeneralInfo, {}, [t]),
                children: [(0, a.jsxs)('div', {
                    className: ue.setting,
                    children: [(0, a.jsx)(o.xv, { className: ue.title, weight: o.fs.MEDIUM, children: 'Специальность' }), (0, a.jsx)(C.u, {
                        className: ue.selectField, options: f && f.data.length ? f.data.map(((e) => e.speciality)) : [''], optionValue: n, onClickOption: u, columnName: '',
                    })],
                }), (0, a.jsxs)('div', {
                    className: (0, i.A)(ue.setting, {}, [ue.settingShort]),
                    children: [(0, a.jsx)(o.xv, { className: ue.title, weight: o.fs.MEDIUM, children: 'Индекс сортировки' }), (0, a.jsx)(l.jO, {
                        type: 'number', placeholder: '100', min: 100, step: 100, value: r, onChange: c, className: ue.sortInput,
                    })],
                }), (0, a.jsxs)('div', {
                    className: (0, i.A)(ue.setting, {}, [ue.settingShort]),
                    children: [(0, a.jsx)(o.xv, { className: ue.title, weight: o.fs.MEDIUM, children: 'Дата приказа' }), (0, a.jsx)(re(), {
                        className: ue.datepickerItem, selected: s, onChange: d, maxDate: new Date(), locale: le.Z, dropdownMode: 'select', dateFormat: 'dd.MM.yyyy', showMonthDropdown: !0, showYearDropdown: !0, showWeekNumbers: !0,
                    })],
                })],
            });
        }; const de = n(7168); var fe = (0, de.hg)('standardCurriculum/fetchStandardCurriculum', ((e, t) => {
            return n = void 0, a = void 0, r = function () {
                let e; let n; let a; return (function (e, t) {
                    let n; let a; let i; let r; let l = {
                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (u) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (l = 0)), l;) try { if (n = 1, a && (i = 2 & o[0] ? a.return : o[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, o[1])).done) return i; switch (a = 0, i && (o = [2 & o[0], i.value]), o[0]) { case 0: case 1: i = o; break; case 4: return l.label++, { value: o[1], done: !1 }; case 5: l.label++, a = o[1], o = [0]; continue; case 7: o = l.ops.pop(), l.trys.pop(); continue; default: if (!((i = (i = l.trys).length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) { l = 0; continue; } if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) { l.label = o[1]; break; } if (o[0] === 6 && l.label < i[1]) { l.label = i[1], i = o; break; } if (i && l.label < i[2]) { l.label = i[2], l.ops.push(o); break; }i[2] && l.ops.pop(), l.trys.pop(); continue; }o = t.call(e, l); } catch (e) { o = [6, e], a = 0; } finally { n = i = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, u])); }; }
                }(this, ((i) => { switch (i.label) { case 0: e = t.rejectWithValue, n = t.extra, i.label = 1; case 1: return i.trys.push([1, 3,, 4]), [4, n.api.get('/curriculum/standard-curricula/')]; case 2: return [2, i.sent().data]; case 3: return (a = i.sent()).message === 'Failed to fetch' ? [2, e({ status: 500, error: 'timeout' })] : [2, e({ status: a.response.status, error: a.response.data.message })]; case 4: return [2]; } })));
            }, new ((i = void 0) || (i = Promise))(((e, t) => { function l(e) { try { u(r.next(e)); } catch (e) { t(e); } } function o(e) { try { u(r.throw(e)); } catch (e) { t(e); } } function u(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i(((e) => { e(n); }))).then(l, o); }u((r = r.apply(n, a || [])).next()); })); let n; let a; let i; let r;
        })); const he = n(4302); const me = n(9546); const _e = n(6837); const ve = n(1353); const pe = n(596); const be = n(4164); const ye = {
            TableBlock: 'u63DE3Nd', table: 'mx_Fjth6', tableRow: 'YLCDkqJt', tableCell: 'tfmXWRf8', tableHead: 's7y9MgiZ', tableCellId: '_tQdicmj', tableBody: 'sGOd8H8Z', tableSortIcon: 'rbN62zJv', active: 'XRJZLcmY', cellTextBg: 'n_rFzwSA', tableCellBtns: 'sozAopKx', tableCellBtnsWrapper: 'C4hEmePi', editBtn: 'Ob8kShkl', checkbox: 'A1A3q2LY', tableWithCheckboxes: 'QiO8Q6Pm',
        }; var xe = function (e) { let t; return (t = e.standardCurriculum) === null || void 0 === t ? void 0 : t.isLoading; }; var ge = function (e) { let t; return (t = e.standardCurriculum) === null || void 0 === t ? void 0 : t.error; }; let je = function () { return je = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, je.apply(this, arguments); }; var we = function (e) {
            let t; let n; let l; const d = e.className; const f = e.data; const h = e.exportDisabled; const m = (0, u.s0)(); const _ = (0, b.v9)(xe); const v = (0, b.v9)(ge); const p = (0, r.useState)(); const y = p[0]; const x = p[1]; const g = (0, r.useState)(!1); const j = g[0]; const w = g[1]; const N = (0, r.useCallback)(((e) => { w(!0), x(e); }), []); const S = (0, r.useCallback)(((e) => { m((0, c.Iy)(String(e))); }), [m]); l = _ ? (0, a.jsx)(q.O, { height: 250 }) : v ? (0, a.jsx)(o.xv, {
                theme: o.lg.ERROR, size: o.yH.M, weight: o.fs.SEMIBOLD, className: ye.error, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : f.length ? (0, a.jsxs)('div', { className: (0, i.A)(ye.table, (t = {}, t[ye.tableWithCheckboxes] = !h, t), []), children: [(0, a.jsx)('div', { className: ye.tableHead, children: (0, a.jsxs)('div', { className: ye.tableRow, children: [!h && (0, a.jsx)(_e.X, { className: ye.checkbox, id: 'checkbox-standard-curriculum-all' }), (0, a.jsx)('div', { className: (0, i.A)(ye.tableCell, {}, [ye.tableCellId]), children: (0, a.jsx)(o.xv, { size: o.yH.XS, weight: o.fs.SEMIBOLD, children: 'ID' }) }), (0, a.jsx)('div', { className: ye.tableCell, children: (0, a.jsx)(o.xv, { size: o.yH.XS, weight: o.fs.SEMIBOLD, children: 'Специальность' }) }), (0, a.jsx)('div', { className: ye.tableCell, children: (0, a.jsx)(o.xv, { size: o.yH.XS, weight: o.fs.SEMIBOLD, children: 'Сортировка' }) }), (0, a.jsx)('div', { className: ye.tableCell, children: (0, a.jsx)(o.xv, { size: o.yH.XS, weight: o.fs.SEMIBOLD, children: 'Дата приказа' }) }), (0, a.jsx)('div', { className: (0, i.A)(ye.tableCell, {}, [ye.tableCellBtnsWrapper]) })] }) }), (0, a.jsx)('div', { className: ye.tableBody, children: f == null ? void 0 : f.map(((e) => (0, a.jsxs)('div', { className: ye.tableRow, children: [!h && (0, a.jsx)(_e.X, { className: ye.checkbox, id: 'checkbox-standard-curriculum-'.concat(e.standard_curriculum_id) }), (0, a.jsx)('div', { className: (0, i.A)(ye.tableCell, {}, [ye.tableCellId]), children: (0, a.jsx)(o.xv, { size: o.yH.XS, children: e.standard_curriculum_id }) }), (0, a.jsx)('div', { className: ye.tableCell, children: (0, a.jsxs)(o.xv, { size: o.yH.XS, children: [e.specialty.shifr_spec, ' ', '-', ' ', e.specialty.speciality] }) }), (0, a.jsx)('div', { className: ye.tableCell, children: (0, a.jsx)(o.xv, { size: o.yH.XS, children: e.sort }) }), (0, a.jsx)('div', { className: ye.tableCell, children: (0, a.jsx)(o.xv, { size: o.yH.XS, children: e.date_of_order ? (0, me.default)(new Date(e.date_of_order), 'dd.MM.yyyy') : '' }) }), (0, a.jsxs)('div', { className: (0, i.A)(ye.tableCell, {}, [ye.tableCellBtns]), children: [(0, a.jsx)(s.zx, {
 theme: s.bn.CLEAR, title: 'Редактировать', className: ye.editBtn, onClick() { S(e.standard_curriculum_id); }, children: (0, a.jsx)(ve.J, { Svg: pe.Z }) 
}), (0, a.jsx)(s.zx, {
 theme: s.bn.CLEAR, title: 'Удалить', className: ye.editBtn, onClick() { N(e); }, children: (0, a.jsx)(ve.J, { Svg: be.Z }) 
})] })] }, e.standard_curriculum_id))) })] }) : (0, a.jsx)(o.xv, { children: 'Ничего не найдено...' }); const M = ((n = {})[ye.error] = !!v, n); return (0, a.jsxs)('div', { className: (0, i.A)(ye.TableBlock, M, [d]), children: [l, (0, a.jsx)(he.Dh, { standardCurriculum: y, visible: j, setVisible: w })] });
        }; var Ne = function (e) { let t; return (t = e.standardCurriculum) === null || void 0 === t ? void 0 : t.data; }; const Se = (0, de.oM)({
            name: 'standardCurriculum',
            initialState: {
                data: void 0, isLoading: !0, error: void 0, page: '1', limit: '50',
            },
            reducers: { setPage(e, t) { e.page = t.payload; }, setLimit(e, t) { e.limit = t.payload; } },
            extraReducers(e) { e.addCase(fe.pending, ((e) => { e.error = void 0, e.isLoading = !0; })).addCase(fe.fulfilled, ((e, t) => { e.isLoading = !1, e.data = t.payload.sort(((e, t) => e.sort - t.sort)); })).addCase(fe.rejected, ((e, t) => { e.isLoading = !1, e.error = t.payload; })); },
        }); var Me = (Se.actions, Se.reducer);
    },
    5781: (e, t, n) => {
        n.d(t, { J: () => i }); const a = n(7168); var i = (0, a.hg)('standardCurriculum/calculateQualificationTrainingTime', ((e, t) => {
            return n = void 0, a = void 0, r = function () {
                let n; let a; return (function (e, t) {
                    let n; let a; let i; let r; let l = {
                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (u) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (l = 0)), l;) try { if (n = 1, a && (i = 2 & o[0] ? a.return : o[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, o[1])).done) return i; switch (a = 0, i && (o = [2 & o[0], i.value]), o[0]) { case 0: case 1: i = o; break; case 4: return l.label++, { value: o[1], done: !1 }; case 5: l.label++, a = o[1], o = [0]; continue; case 7: o = l.ops.pop(), l.trys.pop(); continue; default: if (!((i = (i = l.trys).length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) { l = 0; continue; } if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) { l.label = o[1]; break; } if (o[0] === 6 && l.label < i[1]) { l.label = i[1], i = o; break; } if (i && l.label < i[2]) { l.label = i[2], l.ops.push(o); break; }i[2] && l.ops.pop(), l.trys.pop(); continue; }o = t.call(e, l); } catch (e) { o = [6, e], a = 0; } finally { n = i = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, u])); }; }
                }(this, ((i) => { switch (i.label) { case 0: n = t.rejectWithValue, a = t.extra, i.label = 1; case 1: return i.trys.push([1, 3,, 4]), [4, a.api.post('/curriculum/standard-curricula/qualifications/training-time', e)]; case 2: return [2, i.sent().data]; case 3: return i.sent(), [2, n('ERROR')]; case 4: return [2]; } })));
            }, new ((i = void 0) || (i = Promise))(((e, t) => { function l(e) { try { u(r.next(e)); } catch (e) { t(e); } } function o(e) { try { u(r.throw(e)); } catch (e) { t(e); } } function u(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i(((e) => { e(n); }))).then(l, o); }u((r = r.apply(n, a || [])).next()); })); let n; let a; let i; let r;
        }));
    },
    321: (e, t, n) => {
        n.d(t, {
            yT: () => P, rj: () => j, TB: () => r, DL: () => l, yx: () => u, oE: () => w, JS: () => s.J, nB: () => h, bT: () => f, _M: () => c, kc: () => _, ft: () => m, z$: () => d,
        }); const a = n(7168); const i = n(146); var r = (0, a.hg)('standardCurriculum/editStandardCurriculumQualifications', ((e, t) => {
            let n; let a; let r; let l; const o = e[0]; const u = e[1]; const c = e[2]; return n = void 0, a = void 0, l = function () {
                let e; let n; let a; return (function (e, t) {
                    let n; let a; let i; let r; let l = {
                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (u) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (l = 0)), l;) try { if (n = 1, a && (i = 2 & o[0] ? a.return : o[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, o[1])).done) return i; switch (a = 0, i && (o = [2 & o[0], i.value]), o[0]) { case 0: case 1: i = o; break; case 4: return l.label++, { value: o[1], done: !1 }; case 5: l.label++, a = o[1], o = [0]; continue; case 7: o = l.ops.pop(), l.trys.pop(); continue; default: if (!((i = (i = l.trys).length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) { l = 0; continue; } if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) { l.label = o[1]; break; } if (o[0] === 6 && l.label < i[1]) { l.label = i[1], i = o; break; } if (i && l.label < i[2]) { l.label = i[2], l.ops.push(o); break; }i[2] && l.ops.pop(), l.trys.pop(); continue; }o = t.call(e, l); } catch (e) { o = [6, e], a = 0; } finally { n = i = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, u])); }; }
                }(this, ((r) => { switch (r.label) { case 0: e = t.rejectWithValue, n = t.extra, r.label = 1; case 1: return r.trys.push([1, 3,, 4]), [4, n.api.post('/curriculum/standard-curricula/'.concat(o, '/modules/').concat(u, '/units/'), (0, i.Q)(c, ['standard_curriculum_module_id']))]; case 2: return [2, r.sent().data]; case 3: return a = r.sent(), [2, e({ errors: a.response.data.errors, status: a.response.status })]; case 4: return [2]; } })));
            }, new ((r = void 0) || (r = Promise))(((e, t) => { function i(e) { try { u(l.next(e)); } catch (e) { t(e); } } function o(e) { try { u(l.throw(e)); } catch (e) { t(e); } } function u(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(i, o); }u((l = l.apply(n, a || [])).next()); }));
        })); var l = (0, a.hg)('standardCurriculum/editStandardCurriculumModules', ((e, t) => {
            let n; let a; let l; let o; const u = e[0]; const c = e[1]; return n = void 0, a = void 0, o = function () {
                let e; let n; let a; let l; let o; return (function (e, t) {
                    let n; let a; let i; let r; let l = {
                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (u) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (l = 0)), l;) try { if (n = 1, a && (i = 2 & o[0] ? a.return : o[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, o[1])).done) return i; switch (a = 0, i && (o = [2 & o[0], i.value]), o[0]) { case 0: case 1: i = o; break; case 4: return l.label++, { value: o[1], done: !1 }; case 5: l.label++, a = o[1], o = [0]; continue; case 7: o = l.ops.pop(), l.trys.pop(); continue; default: if (!((i = (i = l.trys).length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) { l = 0; continue; } if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) { l.label = o[1]; break; } if (o[0] === 6 && l.label < i[1]) { l.label = i[1], i = o; break; } if (i && l.label < i[2]) { l.label = i[2], l.ops.push(o); break; }i[2] && l.ops.pop(), l.trys.pop(); continue; }o = t.call(e, l); } catch (e) { o = [6, e], a = 0; } finally { n = i = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, u])); }; }
                }(this, ((s) => { switch (s.label) { case 0: e = t.rejectWithValue, n = t.extra, a = t.dispatch, s.label = 1; case 1: return s.trys.push([1, 3,, 4]), [4, n.api.post('/curriculum/standard-curricula/'.concat(u, '/modules/'), (0, i.Q)(c, ['units', 'standard_curriculum_module_id']))]; case 2: return l = s.sent(), (function (e, t, n) { if (n || arguments.length === 2) for (var a, i = 0, r = t.length; i < r; i++)!a && i in t || (a || (a = Array.prototype.slice.call(t, 0, i)), a[i] = t[i]); return e.concat(a || Array.prototype.slice.call(t)); }([], c.units.filter(((e) => e.standard_curriculum_module_id === null)), !0)).forEach(((e) => { a(r([u, l.data.standard_curriculum_module_id, e])); })), [2, l.data]; case 3: return o = s.sent(), [2, e({ errors: o.response.data.errors, status: o.response.status })]; case 4: return [2]; } })));
            }, new ((l = void 0) || (l = Promise))(((e, t) => { function i(e) { try { u(o.next(e)); } catch (e) { t(e); } } function r(e) { try { u(o.throw(e)); } catch (e) { t(e); } } function u(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof l ? n : new l(((e) => { e(n); }))).then(i, r); }u((o = o.apply(n, a || [])).next()); }));
        })); let o = function () { return o = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, o.apply(this, arguments); }; var u = (0, a.hg)('standardCurriculum/editStandardCurriculumQualifications', ((e, t) => {
            let n; let a; let r; let u; const c = e[0]; const s = e[1]; return n = void 0, a = void 0, u = function () {
                let e; let n; let a; let r; let u; return (function (e, t) {
                    let n; let a; let i; let r; let l = {
                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (u) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (l = 0)), l;) try { if (n = 1, a && (i = 2 & o[0] ? a.return : o[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, o[1])).done) return i; switch (a = 0, i && (o = [2 & o[0], i.value]), o[0]) { case 0: case 1: i = o; break; case 4: return l.label++, { value: o[1], done: !1 }; case 5: l.label++, a = o[1], o = [0]; continue; case 7: o = l.ops.pop(), l.trys.pop(); continue; default: if (!((i = (i = l.trys).length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) { l = 0; continue; } if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) { l.label = o[1]; break; } if (o[0] === 6 && l.label < i[1]) { l.label = i[1], i = o; break; } if (i && l.label < i[2]) { l.label = i[2], l.ops.push(o); break; }i[2] && l.ops.pop(), l.trys.pop(); continue; }o = t.call(e, l); } catch (e) { o = [6, e], a = 0; } finally { n = i = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, u])); }; }
                }(this, ((d) => { switch (d.label) { case 0: e = t.rejectWithValue, n = t.extra, a = t.dispatch, d.label = 1; case 1: return d.trys.push([1, 3,, 4]), [4, n.api.post('/curriculum/standard-curricula/'.concat(c, '/qualifications/'), (0, i.Q)(s, ['modules', 'total', 'standard_curriculum_qualification_id']))]; case 2: return r = d.sent(), s.modules.filter(((e) => e.standard_curriculum_module_id === null)).forEach(((e) => { a(l([c, { ...e, standard_curriculum_id: c, standard_curriculum_qualification_id: r.data.standard_curriculum_qualification_id }])); })), [2, r.data]; case 3: return u = d.sent(), [2, e({ errors: u.response.data.errors, status: u.response.status })]; case 4: return [2]; } })));
            }, new ((r = void 0) || (r = Promise))(((e, t) => { function i(e) { try { o(u.next(e)); } catch (e) { t(e); } } function l(e) { try { o(u.throw(e)); } catch (e) { t(e); } } function o(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(i, l); }o((u = u.apply(n, a || [])).next()); }));
        })); var c = function (e) { let t; return (t = e.addStandardCurriculum) === null || void 0 === t ? void 0 : t.editQualificationModalData; }; var s = n(5781); var d = function (e) { let t; return (t = e.addStandardCurriculum) === null || void 0 === t ? void 0 : t.newQualificationModalData; }; var f = function (e) { let t; return (t = e.addStandardCurriculum) === null || void 0 === t ? void 0 : t.editModuleUnitModalData; }; var h = function (e) { let t; return (t = e.addStandardCurriculum) === null || void 0 === t ? void 0 : t.editModuleModalData; }; var m = function (e) { let t; return (t = e.addStandardCurriculum) === null || void 0 === t ? void 0 : t.newUnitModalData; }; var _ = function (e) { let t; return (t = e.addStandardCurriculum) === null || void 0 === t ? void 0 : t.newModuleModalData; }; const v = function (e) { let t; return (t = e.addStandardCurriculum) === null || void 0 === t ? void 0 : t.data; }; const p = (0, a.hg)('standardCurriculum/editStandardCurriculum', ((e, t) => {
            return n = void 0, a = void 0, r = function () {
                let e; let n; let a; let i; let r; let l; return (function (e, t) {
                    let n; let a; let i; let r; let l = {
                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (u) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (l = 0)), l;) try { if (n = 1, a && (i = 2 & o[0] ? a.return : o[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, o[1])).done) return i; switch (a = 0, i && (o = [2 & o[0], i.value]), o[0]) { case 0: case 1: i = o; break; case 4: return l.label++, { value: o[1], done: !1 }; case 5: l.label++, a = o[1], o = [0]; continue; case 7: o = l.ops.pop(), l.trys.pop(); continue; default: if (!((i = (i = l.trys).length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) { l = 0; continue; } if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) { l.label = o[1]; break; } if (o[0] === 6 && l.label < i[1]) { l.label = i[1], i = o; break; } if (i && l.label < i[2]) { l.label = i[2], l.ops.push(o); break; }i[2] && l.ops.pop(), l.trys.pop(); continue; }o = t.call(e, l); } catch (e) { o = [6, e], a = 0; } finally { n = i = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, u])); }; }
                }(this, ((o) => { switch (o.label) { case 0: e = t.rejectWithValue, n = t.extra, a = t.getState, i = (l = v(a())) === null || void 0 === l ? void 0 : l.general_info, o.label = 1; case 1: return o.trys.push([1, 3,, 4]), [4, n.api.post('/curriculum/standard-curricula/', i)]; case 2: return [2, o.sent().data]; case 3: return r = o.sent(), [2, e({ errors: r.response.data.errors, status: r.response.status })]; case 4: return [2]; } })));
            }, new ((i = void 0) || (i = Promise))(((e, t) => { function l(e) { try { u(r.next(e)); } catch (e) { t(e); } } function o(e) { try { u(r.throw(e)); } catch (e) { t(e); } } function u(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i(((e) => { e(n); }))).then(l, o); }u((r = r.apply(n, a || [])).next()); })); let n; let a; let i; let r;
        })); let b = function () { return b = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, b.apply(this, arguments); }; const y = function (e, t, n) { if (n || arguments.length === 2) for (var a, i = 0, r = t.length; i < r; i++)!a && i in t || (a || (a = Array.prototype.slice.call(t, 0, i)), a[i] = t[i]); return e.concat(a || Array.prototype.slice.call(t)); }; const x = {
            data: { general_info: { date_of_order: null, sort: 100, speciality_id: null }, structure: { general_modules: [], qualifications: [] } },
            newModuleModalData: {
                standard_curriculum_module_id: null, educational_module_id: null, sort: 100, has_in_basic_education: !0, has_in_general_education: !1, standard_curriculum_id: null, standard_curriculum_qualification_id: null, units: [],
            },
            newUnitModalData: {
                standard_curriculum_module_id: null, educational_modules_unit_id: null, sort: 100, has_in_basic_education: !0, has_in_general_education: !1,
            },
            newQualificationModalData: {
                standard_curriculum_qualification_id: null,
                consultations_hours_per_academic_year: null,
                sort: 100,
                qualification_id: null,
                compulsory_education_basic_credits_from: null,
                compulsory_education_basic_credits_to: null,
                compulsory_education_general_credits_from: null,
                compulsory_education_general_credits_to: null,
                modules: [],
                extracurricular_activities_hours_per_week: null,
                total: {
                    basicEducationFrom: { hours: null, credits: null }, basicEducationTo: { hours: null, credits: null }, generalEducationFrom: { hours: null, credits: null }, generalEducationTo: { hours: null, credits: null },
                },
            },
            editModuleModalData: { data: void 0, newFields: void 0 },
            editModuleUnitModalData: { data: void 0, newFields: void 0 },
            editQualificationModalData: { data: void 0, newFields: void 0 },
            isLoading: !1,
            errors: void 0,
            isLoadingQualificationTrainingTime: !1,
            errorQualificationTrainingTime: void 0,
        }; const g = (0, a.oM)({
            name: 'addStandardCurriculum',
            initialState: x,
            reducers: {
                setSpecialityId(e, t) { e.data.general_info.speciality_id = t.payload, e.data.structure.qualifications = x.data.structure.qualifications; }, setSort(e, t) { e.data.general_info.sort = t.payload; }, setDate(e, t) { e.data.general_info.date_of_order = t.payload; }, changeNewModuleField(e, t) { e.newModuleModalData[t.payload[1]] = Number(t.payload[0]); }, changeNewModuleCheck(e, t) { e.newModuleModalData[t.payload[1]] = t.payload[0]; }, clearNewModuleData(e) { e.newModuleModalData = x.newModuleModalData; }, saveEditModuleChangesGeneralModules(e, t) { e.data.structure.general_modules = y(y([], e.data.structure.general_modules.filter(((e) => e.educational_module_id !== t.payload[0])), !0), [t.payload[1]], !1).sort(((e, t) => e.sort - t.sort)); }, saveEditModuleChangesQualificationsStructure(e, t) { e.data.structure.qualifications = e.data.structure.qualifications.map(((e) => (e.qualification_id === t.payload[0] ? ({ ...e, modules: y(y([], e.modules.filter(((e) => e.educational_module_id !== t.payload[1])), !0), [t.payload[2]], !1).sort(((e, t) => e.sort - t.sort)) }) : ({ ...e })))); }, changeEditModuleField(e, t) { e.editModuleModalData.newFields[t.payload[1]] = Number(t.payload[0]); }, changeEditModuleCheck(e, t) { e.editModuleModalData.newFields[t.payload[1]] = t.payload[0]; }, setEditModuleItem(e, t) { e.editModuleModalData.data = t.payload, e.editModuleModalData.newFields = t.payload; }, changeNewUnitField(e, t) { e.newUnitModalData[t.payload[1]] = Number(t.payload[0]); }, changeNewUnitCheck(e, t) { e.newUnitModalData[t.payload[1]] = t.payload[0]; }, clearNewUnitData(e) { e.newUnitModalData = x.newUnitModalData; }, saveEditUnitChangesGeneralModules(e, t) { e.data.structure.general_modules = e.data.structure.general_modules.map(((e) => (e.educational_module_id === t.payload[0] ? ({ ...e, units: y(y([], e.units.filter(((e) => e.educational_modules_unit_id !== t.payload[1])), !0), [t.payload[2]], !1).sort(((e, t) => e.sort - t.sort)) }) : ({ ...e })))); }, saveEditUnitChangesQualificationsStructure(e, t) { const n = y([], e.data.structure.qualifications.filter(((e) => e.qualification_id === t.payload[0])), !0)[0].modules.filter(((e) => e.educational_module_id === t.payload[1]))[0]; n.units = y(y([], n.units.filter(((e) => e.educational_modules_unit_id !== t.payload[2])), !0), [t.payload[3]], !1).sort(((e, t) => e.sort - t.sort)), e.data.structure.qualifications = e.data.structure.qualifications.map(((e) => (e.qualification_id === t.payload[0] ? ({ ...e, modules: y(y([], e.modules.filter(((e) => e.educational_module_id !== t.payload[1])), !0), [n], !1).sort(((e, t) => e.sort - t.sort)) }) : ({ ...e })))); }, changeEditUnitField(e, t) { e.editModuleUnitModalData.newFields[t.payload[1]] = Number(t.payload[0]); }, changeEditUnitCheck(e, t) { e.editModuleUnitModalData.newFields[t.payload[1]] = t.payload[0]; }, setEditUnitItem(e, t) { e.editModuleUnitModalData.data = t.payload, e.editModuleUnitModalData.newFields = t.payload; }, changeNewQualificationField(e, t) { e.newQualificationModalData[t.payload[1]] = Number(t.payload[0]); }, clearNewQualificationData(e) { e.newQualificationModalData = x.newQualificationModalData; }, saveEditQualificationChanges(e, t) { e.data.structure.qualifications = y(y([], e.data.structure.qualifications.filter(((e) => e.qualification_id !== t.payload[0])), !0), [t.payload[1]], !1).sort(((e, t) => e.sort - t.sort)); }, changeEditQualificationField(e, t) { e.editQualificationModalData.newFields[t.payload[1]] = Number(t.payload[0]); }, setEditQualificationItem(e, t) { e.editQualificationModalData.data = t.payload, e.editQualificationModalData.newFields = t.payload; }, addModuleToGeneralModules(e, t) { e.data.structure.general_modules.push(t.payload), e.data.structure.general_modules = y([], e.data.structure.general_modules.sort(((e, t) => e.sort - t.sort)), !0); }, deleteModuleFromGeneralModules(e, t) { const n = e.data.structure.general_modules.filter(((e) => e.educational_module_id !== t.payload)); e.data.structure.general_modules = y([], n, !0).sort(((e, t) => e.sort - t.sort)); }, addUnitToGeneralModulesModule(e, t) { e.data.structure.general_modules = e.data.structure.general_modules.map(((e) => (e.educational_module_id === t.payload[0] ? ({ ...e, units: y(y([], e.units, !0), [t.payload[1]], !1).sort(((e, t) => e.sort - t.sort)) }) : ({ ...e })))); }, deleteUnitFromGeneralModulesModule(e, t) { e.data.structure.general_modules = e.data.structure.general_modules.map(((e) => (e.educational_module_id === t.payload[0] ? ({ ...e, units: y([], e.units.filter(((e) => e.educational_modules_unit_id !== t.payload[1])), !0) }) : ({ ...e })))); }, addQualificationToStructure(e, t) { e.data.structure.qualifications.push(t.payload), e.data.structure.qualifications = e.data.structure.qualifications.sort(((e, t) => e.sort - t.sort)); }, addTrainingTimeToQualification(e, t) { const n = y([], e.data.structure.qualifications.filter(((e) => e.qualification_id === t.payload[0])), !0)[0]; n.total = t.payload[1], e.data.structure.qualifications = y(y([], e.data.structure.qualifications.filter(((e) => e.qualification_id !== t.payload[0])), !0), [n], !1).sort(((e, t) => e.sort - t.sort)); }, deleteQualificationFromStructure(e, t) { const n = e.data.structure.qualifications.filter(((e) => e.qualification_id !== t.payload)); e.data.structure.qualifications = y([], n, !0); }, addModuleToQualificationStructure(e, t) { e.data.structure.qualifications = e.data.structure.qualifications.map(((e) => (e.qualification_id === t.payload[0] ? ({ ...e, modules: y(y([], e.modules, !0), [t.payload[1]], !1).sort(((e, t) => e.sort - t.sort)) }) : ({ ...e })))); }, deleteModuleFromQualificationStructure(e, t) { e.data.structure.qualifications = e.data.structure.qualifications.map(((e) => (e.qualification_id === t.payload[0] ? ({ ...e, modules: y([], e.modules.filter(((e) => e.educational_module_id !== t.payload[1])), !0) }) : ({ ...e })))); }, addUnitToQualificationModuleStructure(e, t) { const n = y([], e.data.structure.qualifications.filter(((e) => e.qualification_id === t.payload[0])), !0)[0]; const a = y([], n.modules.filter(((e) => e.educational_module_id === t.payload[1])), !0)[0]; a.units.push(t.payload[2]), a.units.sort(((e, t) => e.sort - t.sort)), e.data.structure.qualifications = e.data.structure.qualifications.map(((e) => (e.qualification_id === t.payload[0] ? ({ ...e, modules: y(y([], e.modules.filter(((e) => e.educational_module_id !== t.payload[1])), !0), [a], !1).sort(((e, t) => e.sort - t.sort)) }) : ({ ...e })))); }, deleteUnitFromQualificationModuleStructure(e, t) { const n = y([], e.data.structure.qualifications.filter(((e) => e.qualification_id === t.payload[0])), !0)[0].modules.filter(((e) => e.educational_module_id === t.payload[1]))[0]; n.units = n.units.filter(((e) => e.educational_modules_unit_id !== t.payload[2])).sort(((e, t) => e.sort - t.sort)), e.data.structure.qualifications = e.data.structure.qualifications.map(((e) => (e.qualification_id === t.payload[0] ? ({ ...e, modules: y(y([], e.modules.filter(((e) => e.educational_module_id !== t.payload[1])), !0), [n], !1).sort(((e, t) => e.sort - t.sort)) }) : ({ ...e })))); }, clearData(e) { e.data = x.data, e.errors = void 0; },
            },
            extraReducers(e) {
                e.addCase(p.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(p.fulfilled, ((e) => { e.isLoading = !1; })).addCase(p.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })).addCase(s.J.pending, ((e) => { e.errorQualificationTrainingTime = void 0, e.isLoadingQualificationTrainingTime = !0; }))
                    .addCase(s.J.fulfilled, ((e) => { e.isLoadingQualificationTrainingTime = !1; }))
                    .addCase(s.J.rejected, ((e, t) => { e.isLoadingQualificationTrainingTime = !1, e.errorQualificationTrainingTime = t.payload; }));
            },
        }); var j = g.actions; var w = g.reducer; const N = n(5893); const S = n(4387); const M = n(1134); const F = n(6458); const k = n(6959); const C = n(1138); const q = n(7294); const E = n(4809); const D = n(5461); const A = n(9546); const I = n(4475); const T = n(1817); const B = n(7882); const O = n(6648); const z = n(530); const Q = n(9250); const U = n(9086); const H = n(9161); const L = n(4302); const V = {
            AddStandardCurriculum: 'CHTeDmvb', top: 's54dcJTi', blockItem: 'boIzBe8i', bottom: 'RCE8t2JI', btnWrapper: 'edgiTOY9', btn: 'YwnLJjFs', deleteBtn: 'FI6Djm2Q',
        }; let R = function () { return R = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, R.apply(this, arguments); }; const G = function (e, t, n, a) { return new (n || (n = Promise))(((i, r) => { function l(e) { try { u(a.next(e)); } catch (e) { r(e); } } function o(e) { try { u(a.throw(e)); } catch (e) { r(e); } } function u(e) { let t; e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(((e) => { e(t); }))).then(l, o); }u((a = a.apply(e, t || [])).next()); })); }; const X = function (e, t) {
            let n; let a; let i; let r; let l = {
                label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
            }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (u) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (l = 0)), l;) try { if (n = 1, a && (i = 2 & o[0] ? a.return : o[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, o[1])).done) return i; switch (a = 0, i && (o = [2 & o[0], i.value]), o[0]) { case 0: case 1: i = o; break; case 4: return l.label++, { value: o[1], done: !1 }; case 5: l.label++, a = o[1], o = [0]; continue; case 7: o = l.ops.pop(), l.trys.pop(); continue; default: if (!((i = (i = l.trys).length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) { l = 0; continue; } if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) { l.label = o[1]; break; } if (o[0] === 6 && l.label < i[1]) { l.label = i[1], i = o; break; } if (i && l.label < i[2]) { l.label = i[2], l.ops.push(o); break; }i[2] && l.ops.pop(), l.trys.pop(); continue; }o = t.call(e, l); } catch (e) { o = [6, e], a = 0; } finally { n = i = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, u])); }; }
        }; var P = function (e) {
            let t; let n; const a = e.className; const i = (0, D.T)(); const r = (0, Q.s0)(); const o = (0, q.useState)(!1); const c = o[0]; const s = o[1]; const d = (0, q.useState)(!1); const f = d[0]; const h = d[1]; const m = (0, q.useState)(); const _ = m[0]; const b = m[1]; const y = (0, q.useRef)(null); const x = (0, q.useState)(!1); const g = x[0]; const w = x[1]; const P = (0, q.useState)(!1); const W = P[0]; const J = P[1]; const Y = (0, q.useState)(!1); const Z = Y[0]; const K = Y[1]; const $ = (0, q.useState)(!1); const ee = $[0]; const te = $[1]; const ne = (0, q.useState)(!1); const ae = ne[0]; const ie = ne[1]; const re = (0, q.useState)(!1); const le = re[0]; const oe = re[1]; const ue = (0, q.useState)(!1); const ce = ue[0]; const se = ue[1]; const de = (0, q.useState)(!1); const fe = de[0]; const he = de[1]; const me = (0, q.useState)(0); const _e = me[0]; const ve = me[1]; const pe = (0, q.useState)(0); const be = pe[0]; const ye = pe[1]; const xe = (0, q.useState)(0); const ge = xe[0]; const je = xe[1]; const we = (0, q.useState)('general_modules'); const Ne = we[0]; const Se = we[1]; const Me = (0, F.v9)(v); const Fe = (0, F.v9)(k.K2); const ke = (0, F.v9)(k.LD); const Ce = (0, F.v9)(k.qA); const qe = (0, F.v9)(B.Aq); const Ee = (0, F.v9)(B.kp); const De = (0, F.v9)(O.yl); const Ae = (0, F.v9)(O.sE); const Ie = (0, F.v9)(T.BH); const Te = (0, F.v9)(T.ah); const Be = (0, F.v9)(T.cH); const Oe = (0, F.v9)(T.GM); const ze = (0, q.useCallback)(((e) => { i(j.deleteModuleFromGeneralModules(e)); }), [i]); const Qe = (0, q.useCallback)(((e, t) => { i(j.deleteModuleFromQualificationStructure([e, t])); }), [i]); const Ue = (0, q.useCallback)(((e, t) => { i(j.deleteUnitFromGeneralModulesModule([e, t])); }), [i]); const He = (0, q.useCallback)(((e, t, n) => { i(j.deleteUnitFromQualificationModuleStructure([e, t, n])); }), [i]); const Le = (0, q.useCallback)(((e) => { i(j.deleteQualificationFromStructure(e)); }), [i]); const Ve = (0, q.useCallback)((() => { he(!0); }), []); function Re() { return G(this, void 0, void 0, (function () { let e; return X(this, ((t) => { switch (t.label) { case 0: return [4, i(p())]; case 1: return (e = t.sent()).meta.requestStatus === 'rejected' && h(!0), [2, e.payload]; } })); })); } function Ge(e) { return G(this, void 0, void 0, (function () { let t; return X(this, ((n) => { switch (n.label) { case 0: return t = Me.structure.qualifications.map(((t) => i(u([e.standard_curriculum_id, t])).then(((e) => e.meta.requestStatus)).catch(((e) => b(z.F.success(e.message)))))), [4, Promise.all(t)]; case 1: return [2, n.sent()]; } })); })); } function Xe(e) { return G(this, void 0, void 0, (function () { let t; return X(this, ((n) => { switch (n.label) { case 0: return t = Me.structure.general_modules.map(((t) => i(l([e.standard_curriculum_id, { ...t, standard_curriculum_id: e.standard_curriculum_id }])).then(((e) => e.meta.requestStatus)).catch(((e) => b(z.F.success(e.message)))))), [4, Promise.all(t)]; case 1: return [2, n.sent()]; } })); })); } return t = ke ? (0, N.jsx)(C.O, {
                width: '50%', height: '350px', border: '4px', className: V.blockItem,
            }) : Ce ? (0, N.jsx)(E.xv, {
                theme: E.lg.ERROR, size: E.yH.M, weight: E.fs.SEMIBOLD, className: V.blockItem, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, N.jsx)(M.Tg, {
                className: V.blockItem, searchSelectActiveValue: Me && Fe && Me.general_info.speciality_id ? Fe.data.filter(((e) => e.id_spec === (Me == null ? void 0 : Me.general_info.speciality_id)))[0].speciality : 'null', onChangeSearchSelect(e, t) { const n = Fe.data.filter(((t) => t.speciality === e))[0]; i(j.setSpecialityId(n.id_spec)); }, sortValue: String(Me == null ? void 0 : Me.general_info.sort) || '', onChangeSort(e) { i(j.setSort(Number(e.target.value))); }, dateValue: Me && Me.general_info.date_of_order ? new Date(Me == null ? void 0 : Me.general_info.date_of_order) : null, onChangeDate(e) { i(j.setDate(e ? (0, A.default)(new Date(e), 'yyyy-MM-dd') : null)); },
            }), n = qe ? (0, N.jsx)(C.O, {
                width: '50%', height: '350px', border: '4px', className: V.blockItem,
            }) : Ee ? (0, N.jsx)(E.xv, {
                theme: E.lg.ERROR, size: E.yH.M, weight: E.fs.SEMIBOLD, className: V.blockItem, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, N.jsx)(M.fu, { className: V.blockItem, data: Me }), (0, N.jsxs)(N.Fragment, {
                children: [(0, N.jsxs)(I.lx, {
                    className: (0, S.A)(V.AddStandardCurriculum, {}, [a]),
                    noValidate: !0,
                    validated: c,
                    onSubmit(e) { return G(void 0, void 0, void 0, (function () { let t; let n; let a; let l; let o; let u; return X(this, ((c) => { switch (c.label) { case 0: return e.preventDefault(), t = e.currentTarget, h(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), s(!0), w(!0), t.checkValidity() ? (Me == null ? void 0 : Me.general_info.speciality_id) && Me.general_info.sort && (Me == null ? void 0 : Me.structure.general_modules.length) && Me.structure.qualifications.length ? [4, Re()] : [3, 4] : [3, 5]; case 1: return [4, Ge(n = c.sent())]; case 2: return a = c.sent(), [4, Xe(n)]; case 3: return l = c.sent(), o = a.filter(((e) => e === 'rejected')), u = l.filter(((e) => e === 'rejected')), o.length || u.length ? (b(z.F.error('ТУП создан некорректно, присутствуют неверные поля, попробуйте заново')), i((0, L.EE)(String(n.standard_curriculum_id))), h(!0), w(!1), [2]) : (i(j.clearData()), b(z.F.success('Типовой учебный план успешно добавлен')), r((0, U.P6)()), i((0, M.ko)()), w(!1), [3, 5]); case 4: b(z.F.error('Необходимо заполнить все поля')), h(!0), w(!1), c.label = 5; case 5: return [2]; } })); })); },
                    children: [(0, N.jsxs)('div', { className: (0, S.A)(V.blockWrapper, {}, [V.top]), children: [t, n] }), (0, N.jsx)('div', {
                        className: (0, S.A)(V.blockWrapper, {}, [V.middle]),
                        children: (0, N.jsx)(M.bK, {
                            className: V.blockItem, setAddModuleModalVisible: J, setAddModuleUnitModalVisible: K, setAddQualificationModalVisible: te, setEditModuleModalVisible: ie, setEditModuleUnitModalVisible: oe, setEditQualificationModalVisible: se, onDeleteModuleFromGeneralModulesHandler: ze, onDeleteModuleFromQualificationStructureHandler: Qe, onDeleteModuleUnitFromGeneralModulesHandler: Ue, onDeleteModuleUnitFromQualificationStructureHandler: He, onDeleteQualificationFromStructureHandler: Le, data: Me, setModuleId: ve, setUnitId: ye, setQualId: je, setCurriculumStructureMode: Se, isLoading: Ie || Be || ke || qe || De, error: Te || Oe || Ce || Ee || Ae,
                        }),
                    }), (0, N.jsx)('div', {
                        className: (0, S.A)(V.blockWrapper, {}, [V.bottom]),
                        children: (0, N.jsxs)('div', {
                            className: V.blockItem,
                            children: [(0, N.jsx)('div', {
                                className: V.btnWrapper,
                                children: f && (0, N.jsx)(E.xv, {
                                    size: E.yH.M, weight: E.fs.SEMIBOLD, theme: E.lg.ERROR, children: 'Форма заполнена некорректно', 
})
                            }), (0, N.jsxs)('div', {
                                className: V.btnWrapper,
                                children: [(0, N.jsx)(H.zx, {
                                    className: V.btn, theme: H.bn.OUTLINE, onClick: Ve, children: (0, N.jsx)(E.xv, { weight: E.fs.SEMIBOLD, children: 'Назад к списку' }),
                                }), (0, N.jsx)(H.zx, {
                                    className: V.btn, type: 'submit', disabled: g, children: (0, N.jsx)(E.xv, { weight: E.fs.SEMIBOLD, children: 'Сохранить' }),
                                })], 
})], 
})
                    })],
                }), (0, N.jsx)(I.KF, { ref: y, push: _, placement: 'top-end' }), (0, N.jsx)(M.g1, {
                    visible: W, setVisible: J, data: Me, mode: 'add', structureMode: Ne, qualId: ge,
                }), (0, N.jsx)(M.u4, {
                    visible: Z, setVisible: K, data: Me, moduleId: _e, mode: 'add', structureMode: Ne, qualId: ge,
                }), (0, N.jsx)(M.xO, {
                    visible: ee, setVisible: te, data: Me, mode: 'add',
                }), (0, N.jsx)(M.yb, {
                    visible: ae, setVisible: ie, data: Me, moduleId: _e, qualId: ge, mode: 'add', structureMode: Ne,
                }), (0, N.jsx)(M.$i, {
                    visible: le, setVisible: oe, data: Me, qualId: ge, moduleId: _e, unitId: be, mode: 'add', structureMode: Ne,
                }), (0, N.jsx)(M.V3, {
                    visible: ce, setVisible: se, data: Me, mode: 'add', qualId: ge,
                }), (0, N.jsx)(M.cM, { visible: fe, setVisible: he })],
            });
        };
    },
    4302: (e, t, n) => {
        n.d(t, {
            Dh: () => w, EE: () => g, s0: () => r, UL: () => i, Ak: () => l,
        }); const a = n(7168); var i = (0, a.hg)('standardCurriculum/deleteStandardCurriculumModules', ((e, t) => {
            let n; let a; let i; let r; const l = e[0]; const o = e[1]; return n = void 0, a = void 0, r = function () {
                let e; let n; return (function (e, t) {
                    let n; let a; let i; let r; let l = {
                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (u) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (l = 0)), l;) try { if (n = 1, a && (i = 2 & o[0] ? a.return : o[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, o[1])).done) return i; switch (a = 0, i && (o = [2 & o[0], i.value]), o[0]) { case 0: case 1: i = o; break; case 4: return l.label++, { value: o[1], done: !1 }; case 5: l.label++, a = o[1], o = [0]; continue; case 7: o = l.ops.pop(), l.trys.pop(); continue; default: if (!((i = (i = l.trys).length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) { l = 0; continue; } if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) { l.label = o[1]; break; } if (o[0] === 6 && l.label < i[1]) { l.label = i[1], i = o; break; } if (i && l.label < i[2]) { l.label = i[2], l.ops.push(o); break; }i[2] && l.ops.pop(), l.trys.pop(); continue; }o = t.call(e, l); } catch (e) { o = [6, e], a = 0; } finally { n = i = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, u])); }; }
                }(this, ((a) => { switch (a.label) { case 0: e = t.rejectWithValue, n = t.extra, a.label = 1; case 1: return a.trys.push([1, 3,, 4]), [4, n.api.delete('/curriculum/standard-curricula/'.concat(l, '/modules/').concat(o))]; case 2: return [2, a.sent().data]; case 3: return a.sent().message === 'Failed to fetch' ? [2, e('timeout')] : [2, e('ERROR')]; case 4: return [2]; } })));
            }, new ((i = void 0) || (i = Promise))(((e, t) => { function l(e) { try { u(r.next(e)); } catch (e) { t(e); } } function o(e) { try { u(r.throw(e)); } catch (e) { t(e); } } function u(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i(((e) => { e(n); }))).then(l, o); }u((r = r.apply(n, a || [])).next()); }));
        })); var r = (0, a.hg)('standardCurriculum/deleteStandardCurriculumModuleUnit', ((e, t) => {
            let n; let a; let i; let r; const l = e[0]; const o = e[1]; const u = e[2]; return n = void 0, a = void 0, r = function () {
                let e; let n; return (function (e, t) {
                    let n; let a; let i; let r; let l = {
                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (u) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (l = 0)), l;) try { if (n = 1, a && (i = 2 & o[0] ? a.return : o[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, o[1])).done) return i; switch (a = 0, i && (o = [2 & o[0], i.value]), o[0]) { case 0: case 1: i = o; break; case 4: return l.label++, { value: o[1], done: !1 }; case 5: l.label++, a = o[1], o = [0]; continue; case 7: o = l.ops.pop(), l.trys.pop(); continue; default: if (!((i = (i = l.trys).length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) { l = 0; continue; } if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) { l.label = o[1]; break; } if (o[0] === 6 && l.label < i[1]) { l.label = i[1], i = o; break; } if (i && l.label < i[2]) { l.label = i[2], l.ops.push(o); break; }i[2] && l.ops.pop(), l.trys.pop(); continue; }o = t.call(e, l); } catch (e) { o = [6, e], a = 0; } finally { n = i = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, u])); }; }
                }(this, ((a) => { switch (a.label) { case 0: e = t.rejectWithValue, n = t.extra, a.label = 1; case 1: return a.trys.push([1, 3,, 4]), [4, n.api.delete('/curriculum/standard-curricula/'.concat(l, '/modules/').concat(o, '/units/').concat(u))]; case 2: return [2, a.sent().data]; case 3: return a.sent().message === 'Failed to fetch' ? [2, e('timeout')] : [2, e('ERROR')]; case 4: return [2]; } })));
            }, new ((i = void 0) || (i = Promise))(((e, t) => { function l(e) { try { u(r.next(e)); } catch (e) { t(e); } } function o(e) { try { u(r.throw(e)); } catch (e) { t(e); } } function u(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i(((e) => { e(n); }))).then(l, o); }u((r = r.apply(n, a || [])).next()); }));
        })); var l = (0, a.hg)('standardCurriculum/deleteStandardCurriculumQualification', ((e, t) => {
            let n; let a; let i; let r; const l = e[0]; const o = e[1]; return n = void 0, a = void 0, r = function () {
                let e; let n; return (function (e, t) {
                    let n; let a; let i; let r; let l = {
                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (u) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (l = 0)), l;) try { if (n = 1, a && (i = 2 & o[0] ? a.return : o[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, o[1])).done) return i; switch (a = 0, i && (o = [2 & o[0], i.value]), o[0]) { case 0: case 1: i = o; break; case 4: return l.label++, { value: o[1], done: !1 }; case 5: l.label++, a = o[1], o = [0]; continue; case 7: o = l.ops.pop(), l.trys.pop(); continue; default: if (!((i = (i = l.trys).length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) { l = 0; continue; } if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) { l.label = o[1]; break; } if (o[0] === 6 && l.label < i[1]) { l.label = i[1], i = o; break; } if (i && l.label < i[2]) { l.label = i[2], l.ops.push(o); break; }i[2] && l.ops.pop(), l.trys.pop(); continue; }o = t.call(e, l); } catch (e) { o = [6, e], a = 0; } finally { n = i = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, u])); }; }
                }(this, ((a) => { switch (a.label) { case 0: e = t.rejectWithValue, n = t.extra, a.label = 1; case 1: return a.trys.push([1, 3,, 4]), [4, n.api.delete('/curriculum/standard-curricula/'.concat(l, '/qualifications/').concat(o))]; case 2: return [2, a.sent().data]; case 3: return a.sent().message === 'Failed to fetch' ? [2, e('timeout')] : [2, e('ERROR')]; case 4: return [2]; } })));
            }, new ((i = void 0) || (i = Promise))(((e, t) => { function l(e) { try { u(r.next(e)); } catch (e) { t(e); } } function o(e) { try { u(r.throw(e)); } catch (e) { t(e); } } function u(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i(((e) => { e(n); }))).then(l, o); }u((r = r.apply(n, a || [])).next()); }));
        })); const o = n(5893); const u = n(4387); const c = n(4475); const s = n(2308); const d = n(1783); const f = n(7294); const h = n(4809); const m = n(5461); const _ = n(530); const v = n(9250); const p = n(9086); const b = n(9161); const y = { footerBtn: 'mmHlEWEG', redBtn: 'MTGBurs2', deleteText: 'onzb9j1j' }; const x = n(1134); var g = (0, a.hg)('standardCurriculum/deleteStandardCurriculum', ((e, t) => {
            return n = void 0, a = void 0, r = function () {
                let n; let a; let i; let r; return (function (e, t) {
                    let n; let a; let i; let r; let l = {
                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (u) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (l = 0)), l;) try { if (n = 1, a && (i = 2 & o[0] ? a.return : o[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, o[1])).done) return i; switch (a = 0, i && (o = [2 & o[0], i.value]), o[0]) { case 0: case 1: i = o; break; case 4: return l.label++, { value: o[1], done: !1 }; case 5: l.label++, a = o[1], o = [0]; continue; case 7: o = l.ops.pop(), l.trys.pop(); continue; default: if (!((i = (i = l.trys).length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) { l = 0; continue; } if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) { l.label = o[1]; break; } if (o[0] === 6 && l.label < i[1]) { l.label = i[1], i = o; break; } if (i && l.label < i[2]) { l.label = i[2], l.ops.push(o); break; }i[2] && l.ops.pop(), l.trys.pop(); continue; }o = t.call(e, l); } catch (e) { o = [6, e], a = 0; } finally { n = i = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, u])); }; }
                }(this, ((l) => { switch (l.label) { case 0: n = t.rejectWithValue, a = t.extra, i = t.dispatch, l.label = 1; case 1: return l.trys.push([1, 3,, 4]), [4, a.api.delete('/curriculum/standard-curricula/'.concat(e))]; case 2: return r = l.sent(), i((0, x.ko)()), [2, r.data]; case 3: return l.sent().message === 'Failed to fetch' ? [2, n('timeout')] : [2, n('ERROR')]; case 4: return [2]; } })));
            }, new ((i = void 0) || (i = Promise))(((e, t) => { function l(e) { try { u(r.next(e)); } catch (e) { t(e); } } function o(e) { try { u(r.throw(e)); } catch (e) { t(e); } } function u(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i(((e) => { e(n); }))).then(l, o); }u((r = r.apply(n, a || [])).next()); })); let n; let a; let i; let r;
        })); let j = function () { return j = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, j.apply(this, arguments); }; var w = function (e) {
            const t = e.className; const n = e.standardCurriculum; const a = e.visible; const i = e.setVisible; const r = e.withReturnBack; const l = (0, m.T)(); const x = (0, f.useState)(); const w = x[0]; const N = x[1]; const S = (0, f.useRef)(null); const M = (0, f.useState)(!1); const F = M[0]; const k = M[1]; const C = (0, v.s0)(); const q = function () { i(!1); }; return (0, o.jsxs)(o.Fragment, {
                children: [(0, o.jsxs)(c.Tk, {
                    className: (0, u.A)(y.DeleteStandardCurriculum, {}, [t]),
                    visible: a,
                    onClose: q,
                    size: 'lg',
                    alignment: 'center',
                    children: [(0, o.jsx)(c.p0, { children: (0, o.jsxs)(c.fl, { children: ['Удаление ТУП №', n == null ? void 0 : n.standard_curriculum_id] }) }), (0, o.jsx)(c.sD, { children: (0, o.jsxs)(h.xv, { size: h.yH.XM, className: y.deleteText, children: ['Вы действительно хотите удалить типовой учебный план', ' ', (0, o.jsxs)('span', { children: ['№', n == null ? void 0 : n.standard_curriculum_id] }), ' ', 'и все связанные с ним данные?'] }) }), (0, o.jsx)(c.Ym, {
                        className: y.footer,
                        children: (0, o.jsxs)('div', {
                            className: y.footerBtns,
                            children: [(0, o.jsx)(b.zx, {
                                theme: b.bn.OUTLINE, className: y.footerBtn, onClick: q, children: (0, o.jsx)(h.xv, { size: h.yH.XS, weight: h.fs.SEMIBOLD, children: 'Отмена' }),
                            }), (0, o.jsxs)(b.zx, {
                                theme: b.bn.ERROR, className: (0, u.A)(y.footerBtn, {}, [y.redBtn]), onClick() { let e; e = n.standard_curriculum_id.toString(), k(!0), l(g(e)).then(((e) => { e.meta.requestStatus === 'fulfilled' ? (N(_.F.success('ТУП №'.concat(n == null ? void 0 : n.standard_curriculum_id, ' удален'))), q(), k(!1), r && C((0, p.P6)())) : e.meta.requestStatus === 'rejected' && (N(_.F.error('Произошла ошибка при удалении, попробуйте снова')), k(!1)); })); }, disabled: F, children: [(0, o.jsx)(h.xv, { size: h.yH.XS, weight: h.fs.SEMIBOLD, children: 'Удалить' }), (0, o.jsx)(s.Z, { icon: d.N, className: y.btnIcon })],
                            })],
                        }),
                    })],
                }), (0, o.jsx)(c.KF, { ref: S, push: w, placement: 'top-end' })],
            });
        };
    },
    4562: (e, t, n) => {
        n.d(t, {
            m6: () => te, ap: () => p, u4: () => b, Kc: () => l, xJ: () => r, nq: () => a, d7: () => u, Ol: () => o, xi: () => i,
        }); var a = function (e) { let t; return (t = e.editStandardCurriculum) === null || void 0 === t ? void 0 : t.editQualificationModalData; }; var i = function (e) { let t; return (t = e.editStandardCurriculum) === null || void 0 === t ? void 0 : t.newQualificationModalData; }; var r = function (e) { let t; return (t = e.editStandardCurriculum) === null || void 0 === t ? void 0 : t.editModuleUnitModalData; }; var l = function (e) { let t; return (t = e.editStandardCurriculum) === null || void 0 === t ? void 0 : t.editModuleModalData; }; var o = function (e) { let t; return (t = e.editStandardCurriculum) === null || void 0 === t ? void 0 : t.newUnitModalData; }; var u = function (e) { let t; return (t = e.editStandardCurriculum) === null || void 0 === t ? void 0 : t.newModuleModalData; }; const c = n(7168); const s = n(5781); const d = function (e) { let t; return (t = e.editStandardCurriculum) === null || void 0 === t ? void 0 : t.newFields; }; const f = (0, c.hg)('standardCurriculum/editStandardCurriculum', ((e, t) => {
            return n = void 0, a = void 0, r = function () {
                let n; let a; let i; let r; let l; let o; return (function (e, t) {
                    let n; let a; let i; let r; let l = {
                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (u) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (l = 0)), l;) try { if (n = 1, a && (i = 2 & o[0] ? a.return : o[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, o[1])).done) return i; switch (a = 0, i && (o = [2 & o[0], i.value]), o[0]) { case 0: case 1: i = o; break; case 4: return l.label++, { value: o[1], done: !1 }; case 5: l.label++, a = o[1], o = [0]; continue; case 7: o = l.ops.pop(), l.trys.pop(); continue; default: if (!((i = (i = l.trys).length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) { l = 0; continue; } if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) { l.label = o[1]; break; } if (o[0] === 6 && l.label < i[1]) { l.label = i[1], i = o; break; } if (i && l.label < i[2]) { l.label = i[2], l.ops.push(o); break; }i[2] && l.ops.pop(), l.trys.pop(); continue; }o = t.call(e, l); } catch (e) { o = [6, e], a = 0; } finally { n = i = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, u])); }; }
                }(this, ((u) => { switch (u.label) { case 0: n = t.rejectWithValue, a = t.extra, i = t.getState, r = (o = d(i())) === null || void 0 === o ? void 0 : o.general_info, u.label = 1; case 1: return u.trys.push([1, 3,, 4]), [4, a.api.put('/curriculum/standard-curricula/'.concat(e), r)]; case 2: return [2, u.sent().data]; case 3: return l = u.sent(), [2, n({ errors: l.response.data.errors, status: l.response.status })]; case 4: return [2]; } })));
            }, new ((i = void 0) || (i = Promise))(((e, t) => { function l(e) { try { u(r.next(e)); } catch (e) { t(e); } } function o(e) { try { u(r.throw(e)); } catch (e) { t(e); } } function u(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i(((e) => { e(n); }))).then(l, o); }u((r = r.apply(n, a || [])).next()); })); let n; let a; let i; let r;
        })); let h = function () { return h = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, h.apply(this, arguments); }; const m = function (e, t, n) { if (n || arguments.length === 2) for (var a, i = 0, r = t.length; i < r; i++)!a && i in t || (a || (a = Array.prototype.slice.call(t, 0, i)), a[i] = t[i]); return e.concat(a || Array.prototype.slice.call(t)); }; const _ = {
            data: { general_info: { date_of_order: null, sort: 100, speciality_id: null }, structure: { general_modules: [], qualifications: [] } },
            newFields: void 0,
            newModuleModalData: {
                standard_curriculum_module_id: null, educational_module_id: null, sort: 100, has_in_basic_education: !0, has_in_general_education: !1, standard_curriculum_id: null, standard_curriculum_qualification_id: null, units: [],
            },
            newUnitModalData: {
                standard_curriculum_module_id: null, educational_modules_unit_id: null, sort: 100, has_in_basic_education: !0, has_in_general_education: !1,
            },
            newQualificationModalData: {
                standard_curriculum_qualification_id: null,
                consultations_hours_per_academic_year: null,
                sort: 100,
                qualification_id: null,
                compulsory_education_basic_credits_from: null,
                compulsory_education_basic_credits_to: null,
                compulsory_education_general_credits_from: null,
                compulsory_education_general_credits_to: null,
                modules: [],
                extracurricular_activities_hours_per_week: null,
                total: {
                    basicEducationFrom: { hours: null, credits: null }, basicEducationTo: { hours: null, credits: null }, generalEducationFrom: { hours: null, credits: null }, generalEducationTo: { hours: null, credits: null },
                },
            },
            editModuleModalData: { data: void 0, newFields: void 0 },
            editModuleUnitModalData: { data: void 0, newFields: void 0 },
            editQualificationModalData: { data: void 0, newFields: void 0 },
            modulesToDelete: [],
            moduleUnitsToDelete: [],
            qualificationsToDelete: [],
            isLoading: !1,
            errors: void 0,
            isLoadingQualificationTrainingTime: !1,
            errorQualificationTrainingTime: void 0,
        }; const v = (0, c.oM)({
            name: 'editStandardCurriculum',
            initialState: _,
            reducers: {
                setSpecialityId(e, t) { e[t.payload[0]].general_info.speciality_id = t.payload[1], t.payload[0] === 'newFields' && e.newFields.structure.qualifications.forEach(((t) => { t.standard_curriculum_qualification_id && e.qualificationsToDelete.push(t); })), e[t.payload[0]].structure.qualifications = _.data.structure.qualifications; }, setSort(e, t) { e[t.payload[0]].general_info.sort = t.payload[1]; }, setDate(e, t) { e[t.payload[0]].general_info.date_of_order = t.payload[1]; }, changeNewModuleField(e, t) { e.newModuleModalData[t.payload[1]] = Number(t.payload[0]); }, changeNewModuleCheck(e, t) { e.newModuleModalData[t.payload[1]] = t.payload[0]; }, clearNewModuleData(e) { e.newModuleModalData = _.newModuleModalData; }, saveEditModuleChangesGeneralModules(e, t) { e.newFields.structure.general_modules = m(m([], e.newFields.structure.general_modules.filter(((e) => e.educational_module_id !== t.payload[0])), !0), [t.payload[1]], !1).sort(((e, t) => e.sort - t.sort)); }, saveEditModuleChangesQualificationsStructure(e, t) { e.newFields.structure.qualifications = e.newFields.structure.qualifications.map(((e) => (e.qualification_id === t.payload[0] ? ({ ...e, modules: m(m([], e.modules.filter(((e) => e.educational_module_id !== t.payload[1])), !0), [t.payload[2]], !1).sort(((e, t) => e.sort - t.sort)) }) : ({ ...e })))); }, changeEditModuleField(e, t) { e.editModuleModalData.newFields[t.payload[1]] = Number(t.payload[0]); }, changeEditModuleCheck(e, t) { e.editModuleModalData.newFields[t.payload[1]] = t.payload[0]; }, setEditModuleItem(e, t) { e.editModuleModalData.data = t.payload, e.editModuleModalData.newFields = t.payload; }, changeNewUnitField(e, t) { e.newUnitModalData[t.payload[1]] = Number(t.payload[0]); }, changeNewUnitCheck(e, t) { e.newUnitModalData[t.payload[1]] = t.payload[0]; }, clearNewUnitData(e) { e.newUnitModalData = _.newUnitModalData; }, saveEditUnitChangesGeneralModules(e, t) { e.newFields.structure.general_modules = e.newFields.structure.general_modules.map(((e) => (e.educational_module_id === t.payload[0] ? ({ ...e, units: m(m([], e.units.filter(((e) => e.educational_modules_unit_id !== t.payload[1])), !0), [t.payload[2]], !1).sort(((e, t) => e.sort - t.sort)) }) : ({ ...e })))); }, saveEditUnitChangesQualificationsStructure(e, t) { const n = m([], e.newFields.structure.qualifications.filter(((e) => e.qualification_id === t.payload[0])), !0)[0].modules.filter(((e) => e.educational_module_id === t.payload[1]))[0]; n.units = m(m([], n.units.filter(((e) => e.educational_modules_unit_id !== t.payload[2])), !0), [t.payload[3]], !1).sort(((e, t) => e.sort - t.sort)), e.newFields.structure.qualifications = e.newFields.structure.qualifications.map(((e) => (e.qualification_id === t.payload[0] ? ({ ...e, modules: m(m([], e.modules.filter(((e) => e.educational_module_id !== t.payload[1])), !0), [n], !1).sort(((e, t) => e.sort - t.sort)) }) : ({ ...e })))); }, changeEditUnitField(e, t) { e.editModuleUnitModalData.newFields[t.payload[1]] = Number(t.payload[0]); }, changeEditUnitCheck(e, t) { e.editModuleUnitModalData.newFields[t.payload[1]] = t.payload[0]; }, setEditUnitItem(e, t) { e.editModuleUnitModalData.data = t.payload, e.editModuleUnitModalData.newFields = t.payload; }, changeNewQualificationField(e, t) { e.newQualificationModalData[t.payload[1]] = Number(t.payload[0]); }, clearNewQualificationData(e) { e.newQualificationModalData = _.newQualificationModalData; }, saveEditQualificationChanges(e, t) { e.newFields.structure.qualifications = m(m([], e.newFields.structure.qualifications.filter(((e) => e.qualification_id !== t.payload[0])), !0), [t.payload[1]], !1).sort(((e, t) => e.sort - t.sort)); }, changeEditQualificationField(e, t) { e.editQualificationModalData.newFields[t.payload[1]] = Number(t.payload[0]); }, setEditQualificationItem(e, t) { e.editQualificationModalData.data = t.payload, e.editQualificationModalData.newFields = t.payload; }, addModuleToGeneralModulesFromServer(e, t) { e.data.structure.general_modules = t.payload.sort(((e, t) => e.sort - t.sort)); }, addModuleToGeneralModules(e, t) { e.newFields.structure.general_modules.push(t.payload), e.newFields.structure.general_modules = m([], e.newFields.structure.general_modules.sort(((e, t) => e.sort - t.sort)), !0); }, deleteModuleFromGeneralModules(e, t) { const n = e.newFields.structure.general_modules.filter(((e) => e.educational_module_id !== t.payload)); const a = e.newFields.structure.general_modules.filter(((e) => e.educational_module_id === t.payload))[0]; a && a.standard_curriculum_module_id && e.modulesToDelete.push(a), e.newFields.structure.general_modules = m([], n, !0).sort(((e, t) => e.sort - t.sort)); }, addUnitToGeneralModulesModule(e, t) { e.newFields.structure.general_modules = e.newFields.structure.general_modules.map(((e) => (e.educational_module_id === t.payload[0] ? ({ ...e, units: m(m([], e.units, !0), [t.payload[1]], !1).sort(((e, t) => e.sort - t.sort)) }) : ({ ...e })))); }, deleteUnitFromGeneralModulesModule(e, t) { const n = e.newFields.structure.general_modules.filter(((e) => e.educational_module_id === t.payload[0]))[0].units.filter(((e) => e.educational_modules_unit_id === t.payload[1]))[0]; n && n.standard_curriculum_modules_unit_id && e.moduleUnitsToDelete.push(n), e.newFields.structure.general_modules = e.newFields.structure.general_modules.map(((e) => (e.educational_module_id === t.payload[0] ? ({ ...e, units: m([], e.units.filter(((e) => e.educational_modules_unit_id !== t.payload[1])), !0) }) : ({ ...e })))); }, addQualificationToStructureFromServer(e, t) { e.data.structure.qualifications = t.payload.sort(((e, t) => e.sort - t.sort)); }, addQualificationToStructure(e, t) { e.newFields.structure.qualifications.push(t.payload), e.newFields.structure.qualifications = e.newFields.structure.qualifications.sort(((e, t) => e.sort - t.sort)); }, addTrainingTimeToQualification(e, t) { const n = m([], e.newFields.structure.qualifications.filter(((e) => e.qualification_id === t.payload[0])), !0)[0]; n.total = t.payload[1], e.newFields.structure.qualifications = m(m([], e.newFields.structure.qualifications.filter(((e) => e.qualification_id !== t.payload[0])), !0), [n], !1).sort(((e, t) => e.sort - t.sort)); }, deleteQualificationFromStructure(e, t) { const n = e.newFields.structure.qualifications.filter(((e) => e.qualification_id !== t.payload)); const a = e.newFields.structure.qualifications.filter(((e) => e.qualification_id === t.payload))[0]; a && a.standard_curriculum_qualification_id && e.qualificationsToDelete.push(a), e.newFields.structure.qualifications = m([], n, !0); }, addModuleToQualificationStructure(e, t) { e.newFields.structure.qualifications = e.newFields.structure.qualifications.map(((e) => (e.qualification_id === t.payload[0] ? ({ ...e, modules: m(m([], e.modules, !0), [t.payload[1]], !1).sort(((e, t) => e.sort - t.sort)) }) : ({ ...e })))); }, deleteModuleFromQualificationStructure(e, t) { const n = e.newFields.structure.qualifications.filter(((e) => e.qualification_id === t.payload[0]))[0].modules.filter(((e) => e.educational_module_id === t.payload[1]))[0]; n && n.standard_curriculum_module_id && e.modulesToDelete.push(n), e.newFields.structure.qualifications = e.newFields.structure.qualifications.map(((e) => (e.qualification_id === t.payload[0] ? ({ ...e, modules: m([], e.modules.filter(((e) => e.educational_module_id !== t.payload[1])), !0) }) : ({ ...e })))); }, addUnitToQualificationModuleStructure(e, t) { const n = m([], e.newFields.structure.qualifications.filter(((e) => e.qualification_id === t.payload[0])), !0)[0]; const a = m([], n.modules.filter(((e) => e.educational_module_id === t.payload[1])), !0)[0]; a.units.push(t.payload[2]), a.units.sort(((e, t) => e.sort - t.sort)), e.newFields.structure.qualifications = e.newFields.structure.qualifications.map(((e) => (e.qualification_id === t.payload[0] ? ({ ...e, modules: m(m([], e.modules.filter(((e) => e.educational_module_id !== t.payload[1])), !0), [a], !1).sort(((e, t) => e.sort - t.sort)) }) : ({ ...e })))); }, deleteUnitFromQualificationModuleStructure(e, t) { const n = e.newFields.structure.qualifications.filter(((e) => e.qualification_id === t.payload[0]))[0].modules.filter(((e) => e.educational_module_id === t.payload[1]))[0].units.filter(((e) => e.educational_modules_unit_id === t.payload[2]))[0]; n && n.standard_curriculum_modules_unit_id && e.moduleUnitsToDelete.push(n); const a = m([], e.newFields.structure.qualifications.filter(((e) => e.qualification_id === t.payload[0])), !0)[0].modules.filter(((e) => e.educational_module_id === t.payload[1]))[0]; a.units = a.units.filter(((e) => e.educational_modules_unit_id !== t.payload[2])).sort(((e, t) => e.sort - t.sort)), e.newFields.structure.qualifications = e.newFields.structure.qualifications.map(((e) => (e.qualification_id === t.payload[0] ? ({ ...e, modules: m(m([], e.modules.filter(((e) => e.educational_module_id !== t.payload[1])), !0), [a], !1).sort(((e, t) => e.sort - t.sort)) }) : ({ ...e })))); }, setDataToChange(e) { e.newFields = e.data; }, clearData(e) { e.newFields = e.data, e.modulesToDelete = [], e.moduleUnitsToDelete = [], e.qualificationsToDelete = [], e.errors = void 0; },
            },
            extraReducers(e) {
                e.addCase(f.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(f.fulfilled, ((e) => { e.isLoading = !1; })).addCase(f.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })).addCase(s.J.pending, ((e) => { e.errorQualificationTrainingTime = void 0, e.isLoadingQualificationTrainingTime = !0; }))
                    .addCase(s.J.fulfilled, ((e) => { e.isLoadingQualificationTrainingTime = !1; }))
                    .addCase(s.J.rejected, ((e, t) => { e.isLoadingQualificationTrainingTime = !1, e.errorQualificationTrainingTime = t.payload; }));
            },
        }); var p = v.actions; var b = v.reducer; const y = n(5893); const x = n(4387); const g = n(1134); const j = n(6458); const w = n(6959); const N = n(1138); const S = n(7294); const M = n(4809); const F = n(5461); const k = n(9546); const C = n(4475); const q = n(1817); const E = n(7882); const D = n(6648); const A = n(530); const I = n(9250); const T = n(9086); const B = n(622); const O = n(6890); const z = n(4302); const Q = n(3009); const U = n(146); const H = n(321); const L = n(9161); const V = (0, c.hg)('standardCurriculum/editStandardCurriculumQualifications', ((e, t) => {
            let n; let a; let i; let r; const l = e[0]; const o = e[1]; const u = e[2]; return n = void 0, a = void 0, r = function () {
                let e; let n; let a; return (function (e, t) {
                    let n; let a; let i; let r; let l = {
                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (u) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (l = 0)), l;) try { if (n = 1, a && (i = 2 & o[0] ? a.return : o[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, o[1])).done) return i; switch (a = 0, i && (o = [2 & o[0], i.value]), o[0]) { case 0: case 1: i = o; break; case 4: return l.label++, { value: o[1], done: !1 }; case 5: l.label++, a = o[1], o = [0]; continue; case 7: o = l.ops.pop(), l.trys.pop(); continue; default: if (!((i = (i = l.trys).length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) { l = 0; continue; } if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) { l.label = o[1]; break; } if (o[0] === 6 && l.label < i[1]) { l.label = i[1], i = o; break; } if (i && l.label < i[2]) { l.label = i[2], l.ops.push(o); break; }i[2] && l.ops.pop(), l.trys.pop(); continue; }o = t.call(e, l); } catch (e) { o = [6, e], a = 0; } finally { n = i = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, u])); }; }
                }(this, ((i) => { switch (i.label) { case 0: e = t.rejectWithValue, n = t.extra, i.label = 1; case 1: return i.trys.push([1, 3,, 4]), [4, n.api.put('/curriculum/standard-curricula/'.concat(l, '/modules/').concat(o, '/units/').concat(u.standard_curriculum_modules_unit_id), (0, U.Q)(u, ['standard_curriculum_module_id']))]; case 2: return [2, i.sent().data]; case 3: return a = i.sent(), [2, e({ errors: a.response.data.errors, status: a.response.status })]; case 4: return [2]; } })));
            }, new ((i = void 0) || (i = Promise))(((e, t) => { function l(e) { try { u(r.next(e)); } catch (e) { t(e); } } function o(e) { try { u(r.throw(e)); } catch (e) { t(e); } } function u(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i(((e) => { e(n); }))).then(l, o); }u((r = r.apply(n, a || [])).next()); }));
        })); const R = (0, c.hg)('standardCurriculum/editStandardCurriculumModules', ((e, t) => {
            let n; let a; let i; let r; const l = e[0]; const o = e[1]; return n = void 0, a = void 0, r = function () {
                let e; let n; let a; let i; let r; return (function (e, t) {
                    let n; let a; let i; let r; let l = {
                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (u) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (l = 0)), l;) try { if (n = 1, a && (i = 2 & o[0] ? a.return : o[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, o[1])).done) return i; switch (a = 0, i && (o = [2 & o[0], i.value]), o[0]) { case 0: case 1: i = o; break; case 4: return l.label++, { value: o[1], done: !1 }; case 5: l.label++, a = o[1], o = [0]; continue; case 7: o = l.ops.pop(), l.trys.pop(); continue; default: if (!((i = (i = l.trys).length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) { l = 0; continue; } if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) { l.label = o[1]; break; } if (o[0] === 6 && l.label < i[1]) { l.label = i[1], i = o; break; } if (i && l.label < i[2]) { l.label = i[2], l.ops.push(o); break; }i[2] && l.ops.pop(), l.trys.pop(); continue; }o = t.call(e, l); } catch (e) { o = [6, e], a = 0; } finally { n = i = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, u])); }; }
                }(this, ((u) => { switch (u.label) { case 0: e = t.rejectWithValue, n = t.extra, a = t.dispatch, u.label = 1; case 1: return u.trys.push([1, 3,, 4]), [4, n.api.put('/curriculum/standard-curricula/'.concat(l, '/modules/').concat(o.standard_curriculum_module_id), (0, U.Q)(o, ['units', 'standard_curriculum_module_id']))]; case 2: return i = u.sent(), o.units.forEach(((e) => { a(V([l, o.standard_curriculum_module_id, e])); })), [2, i.data]; case 3: return r = u.sent(), [2, e({ errors: r.response.data.errors, status: r.response.status })]; case 4: return [2]; } })));
            }, new ((i = void 0) || (i = Promise))(((e, t) => { function l(e) { try { u(r.next(e)); } catch (e) { t(e); } } function o(e) { try { u(r.throw(e)); } catch (e) { t(e); } } function u(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i(((e) => { e(n); }))).then(l, o); }u((r = r.apply(n, a || [])).next()); }));
        })); let G = function () { return G = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, G.apply(this, arguments); }; const X = (0, c.hg)('standardCurriculum/editStandardCurriculumQualifications', ((e, t) => {
            let n; let a; let i; let r; const l = e[0]; const o = e[1]; return n = void 0, a = void 0, r = function () {
                let e; let n; let a; let i; let r; return (function (e, t) {
                    let n; let a; let i; let r; let l = {
                        label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
                    }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (u) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (l = 0)), l;) try { if (n = 1, a && (i = 2 & o[0] ? a.return : o[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, o[1])).done) return i; switch (a = 0, i && (o = [2 & o[0], i.value]), o[0]) { case 0: case 1: i = o; break; case 4: return l.label++, { value: o[1], done: !1 }; case 5: l.label++, a = o[1], o = [0]; continue; case 7: o = l.ops.pop(), l.trys.pop(); continue; default: if (!((i = (i = l.trys).length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) { l = 0; continue; } if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) { l.label = o[1]; break; } if (o[0] === 6 && l.label < i[1]) { l.label = i[1], i = o; break; } if (i && l.label < i[2]) { l.label = i[2], l.ops.push(o); break; }i[2] && l.ops.pop(), l.trys.pop(); continue; }o = t.call(e, l); } catch (e) { o = [6, e], a = 0; } finally { n = i = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, u])); }; }
                }(this, ((u) => { switch (u.label) { case 0: e = t.rejectWithValue, n = t.extra, a = t.dispatch, u.label = 1; case 1: return u.trys.push([1, 3,, 4]), [4, n.api.put('/curriculum/standard-curricula/'.concat(l, '/qualifications/').concat(o.standard_curriculum_qualification_id), (0, U.Q)(o, ['modules', 'total', 'standard_curriculum_qualification_id']))]; case 2: return i = u.sent(), o.modules.forEach(((e) => { a(R([l, { ...e, standard_curriculum_id: l, standard_curriculum_qualification_id: o.standard_curriculum_qualification_id }])); })), [2, i.data]; case 3: return r = u.sent(), [2, e({ errors: r.response.data.errors, status: r.response.status })]; case 4: return [2]; } })));
            }, new ((i = void 0) || (i = Promise))(((e, t) => { function l(e) { try { u(r.next(e)); } catch (e) { t(e); } } function o(e) { try { u(r.throw(e)); } catch (e) { t(e); } } function u(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof i ? n : new i(((e) => { e(n); }))).then(l, o); }u((r = r.apply(n, a || [])).next()); }));
        })); const P = {
            EditStandardCurriculum: 't1uzmWEF', top: 'RFtIU4u2', blockItem: 'GD7zhwHJ', bottom: 'TptZ9tMo', btnWrapper: 'XZGrcafw', btn: 'sCwtFVOf', deleteBtn: 'xOsZaLTK',
        }; const W = function (e) { let t; return (t = e.editStandardCurriculum) === null || void 0 === t ? void 0 : t.data; }; const J = function (e) { let t; return (t = e.editStandardCurriculum) === null || void 0 === t ? void 0 : t.modulesToDelete; }; const Y = function (e) { let t; return (t = e.editStandardCurriculum) === null || void 0 === t ? void 0 : t.moduleUnitsToDelete; }; const Z = function (e) { let t; return (t = e.editStandardCurriculum) === null || void 0 === t ? void 0 : t.qualificationsToDelete; }; let K = function () { return K = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, K.apply(this, arguments); }; const $ = function (e, t, n, a) { return new (n || (n = Promise))(((i, r) => { function l(e) { try { u(a.next(e)); } catch (e) { r(e); } } function o(e) { try { u(a.throw(e)); } catch (e) { r(e); } } function u(e) { let t; e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(((e) => { e(t); }))).then(l, o); }u((a = a.apply(e, t || [])).next()); })); }; const ee = function (e, t) {
            let n; let a; let i; let r; let l = {
                label: 0, sent() { if (1 & i[0]) throw i[1]; return i[1]; }, trys: [], ops: [],
            }; return r = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (r[Symbol.iterator] = function () { return this; }), r; function o(o) { return function (u) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;r && (r = 0, o[0] && (l = 0)), l;) try { if (n = 1, a && (i = 2 & o[0] ? a.return : o[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, o[1])).done) return i; switch (a = 0, i && (o = [2 & o[0], i.value]), o[0]) { case 0: case 1: i = o; break; case 4: return l.label++, { value: o[1], done: !1 }; case 5: l.label++, a = o[1], o = [0]; continue; case 7: o = l.ops.pop(), l.trys.pop(); continue; default: if (!((i = (i = l.trys).length > 0 && i[i.length - 1]) || o[0] !== 6 && o[0] !== 2)) { l = 0; continue; } if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) { l.label = o[1]; break; } if (o[0] === 6 && l.label < i[1]) { l.label = i[1], i = o; break; } if (i && l.label < i[2]) { l.label = i[2], l.ops.push(o); break; }i[2] && l.ops.pop(), l.trys.pop(); continue; }o = t.call(e, l); } catch (e) { o = [6, e], a = 0; } finally { n = i = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, u])); }; }
        }; var te = function (e) {
            let t; let n; const a = e.className; const i = (0, F.T)(); const r = (0, I.s0)(); const l = (0, S.useState)(!1); const o = l[0]; const u = l[1]; const c = (0, S.useState)(!1); const s = c[0]; const h = c[1]; const m = (0, S.useState)(); const _ = m[0]; const v = m[1]; const b = (0, S.useRef)(null); const V = (0, S.useState)(!1); const G = V[0]; const te = V[1]; const ne = (0, I.TH)().pathname; const ae = (0, S.useState)(!1); const ie = ae[0]; const re = ae[1]; const le = (0, S.useState)(!1); const oe = le[0]; const ue = le[1]; const ce = (0, S.useState)(!1); const se = ce[0]; const de = ce[1]; const fe = (0, S.useState)(!1); const he = fe[0]; const me = fe[1]; const _e = (0, S.useState)(!1); const ve = _e[0]; const pe = _e[1]; const be = (0, S.useState)(!1); const ye = be[0]; const xe = be[1]; const ge = (0, S.useState)(!1); const je = ge[0]; const we = ge[1]; const Ne = (0, U.Q)((0, j.v9)(Q.qJ), ['modules', 'qualifications']); const Se = (0, S.useState)(0); const Me = Se[0]; const Fe = Se[1]; const ke = (0, S.useState)(0); const Ce = ke[0]; const qe = ke[1]; const Ee = (0, S.useState)(0); const De = Ee[0]; const Ae = Ee[1]; const Ie = ne.split('/'); const Te = Ie[Ie.length - 1]; const Be = (0, S.useState)('general_modules'); const Oe = Be[0]; const ze = Be[1]; const Qe = (0, j.v9)(d); const Ue = (0, j.v9)(W); const He = (0, j.v9)(w.K2); const Le = (0, j.v9)(w.LD); const Ve = (0, j.v9)(w.qA); const Re = (0, j.v9)(E.Aq); const Ge = (0, j.v9)(E.kp); const Xe = (0, j.v9)(D.yl); const Pe = (0, j.v9)(D.sE); const We = (0, j.v9)(q.BH); const Je = (0, j.v9)(q.ah); const Ye = (0, j.v9)(q.cH); const Ze = (0, j.v9)(q.GM); const Ke = (0, j.v9)(J); const $e = (0, j.v9)(Y); const et = (0, j.v9)(Z); const tt = (0, S.useCallback)(((e) => { i(p.deleteModuleFromGeneralModules(e)); }), [i]); const nt = (0, S.useCallback)(((e, t) => { i(p.deleteModuleFromQualificationStructure([e, t])); }), [i]); const at = (0, S.useCallback)(((e, t) => { i(p.deleteUnitFromGeneralModulesModule([e, t])); }), [i]); const it = (0, S.useCallback)(((e, t, n) => { i(p.deleteUnitFromQualificationModuleStructure([e, t, n])); }), [i]); const rt = (0, S.useCallback)(((e) => { i(p.deleteQualificationFromStructure(e)); }), [i]); const lt = (0, S.useCallback)((() => { r((0, T.P6)()); }), [r]); const ot = (0, S.useCallback)((() => { we(!0); }), []); const ut = (0, S.useCallback)((() => { const e = (0, B.T)(Ue, Qe); (0, O.Q)(e) || (i(p.clearData()), v(A.F.success('Изменения успешно отменены'))); }), [i, Ue, Qe]); function ct() { return $(this, void 0, void 0, (function () { let e; return ee(this, ((t) => { switch (t.label) { case 0: return [4, i(f(Ne.standard_curriculum_id))]; case 1: return (e = t.sent()).meta.requestStatus === 'rejected' && h(!0), [2, e.payload]; } })); })); } function st() { return $(this, void 0, void 0, (function () { let e; let t; return ee(this, ((n) => { switch (n.label) { case 0: return e = Qe.structure.qualifications.filter(((e) => e.standard_curriculum_qualification_id !== null)), t = e.map(((e) => i(X([Ne.standard_curriculum_id, e])).then(((e) => e.meta.requestStatus)).catch(((e) => v(A.F.success(e.message)))))), [4, Promise.all(t)]; case 1: return [2, n.sent()]; } })); })); } function dt() { return $(this, void 0, void 0, (function () { let e; let t; return ee(this, ((n) => { switch (n.label) { case 0: return e = Qe.structure.general_modules.filter(((e) => e.standard_curriculum_module_id && e.standard_curriculum_module_id !== null)), t = e.map(((e) => i(R([Ne.standard_curriculum_id, { ...e, standard_curriculum_id: Ne.standard_curriculum_id }])).then(((e) => e.meta.requestStatus)).catch(((e) => v(A.F.success(e.message)))))), [4, Promise.all(t)]; case 1: return [2, n.sent()]; } })); })); } function ft(e) { return $(this, void 0, void 0, (function () { let t; return ee(this, ((n) => { switch (n.label) { case 0: return t = e.map(((e) => i((0, H.DL)([Ne.standard_curriculum_id, { ...e, standard_curriculum_id: Ne.standard_curriculum_id }])).then(((e) => e)).catch(((e) => v(A.F.success(e.message)))))), [4, Promise.all(t)]; case 1: return [2, n.sent()]; } })); })); } function ht(e) { return $(this, void 0, void 0, (function () { let t; return ee(this, ((n) => { switch (n.label) { case 0: return t = e.map(((e) => i((0, H.yx)([Ne.standard_curriculum_id, e])).then(((e) => e)).catch(((e) => v(A.F.success(e.message)))))), [4, Promise.all(t)]; case 1: return [2, n.sent()]; } })); })); } function mt(e, t) { return $(this, void 0, void 0, (function () { return ee(this, ((n) => (i((0, H.TB)([Ne.standard_curriculum_id, t, e])).then(((e) => e)).catch(((e) => v(A.F.success(e.message)))), [2]))); })); } return t = Le ? (0, y.jsx)(N.O, {
                width: '50%', height: '350px', border: '4px', className: P.blockItem,
            }) : Ve ? (0, y.jsx)(M.xv, {
                theme: M.lg.ERROR, size: M.yH.M, weight: M.fs.SEMIBOLD, className: P.blockItem, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, y.jsx)(g.Tg, {
                className: P.blockItem, searchSelectActiveValue: Qe && He && Qe.general_info.speciality_id ? He.data.filter(((e) => e.id_spec === (Qe == null ? void 0 : Qe.general_info.speciality_id)))[0].speciality : 'null', onChangeSearchSelect(e, t) { const n = He.data.filter(((t) => t.speciality === e))[0]; i(p.setSpecialityId(['newFields', n.id_spec])); }, sortValue: String(Qe == null ? void 0 : Qe.general_info.sort) || '', onChangeSort(e) { i(p.setSort(['newFields', Number(e.target.value)])); }, dateValue: Qe && Qe.general_info.date_of_order ? new Date(Qe == null ? void 0 : Qe.general_info.date_of_order) : null, onChangeDate(e) { i(p.setDate(['newFields', e ? (0, k.default)(new Date(e), 'yyyy-MM-dd') : null])); },
            }), n = Re ? (0, y.jsx)(N.O, {
                width: '50%', height: '350px', border: '4px', className: P.blockItem,
            }) : Ge ? (0, y.jsx)(M.xv, {
                theme: M.lg.ERROR, size: M.yH.M, weight: M.fs.SEMIBOLD, className: P.blockItem, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, y.jsx)(g.fu, { className: P.blockItem, data: Qe }), (0, y.jsxs)(y.Fragment, {
                children: [(0, y.jsxs)(C.lx, {
                    className: (0, x.A)(P.EditStandardCurriculum, {}, [a]),
                    noValidate: !0,
                    validated: o,
                    onSubmit(e) { return $(void 0, void 0, void 0, (function () { let t; let n; let a; let r; let l; let o; let c; let s; let d; return ee(this, ((f) => { switch (f.label) { case 0: return e.preventDefault(), t = e.currentTarget, h(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), u(!0), te(!0), t.checkValidity() ? (n = (0, B.T)(Ue, Qe), (0, O.Q)(n) ? (v(A.F.error('Для сохранения вы должны внести изменения!')), te(!1), [3, 11]) : [3, 1]) : [3, 11]; case 1: return te(!0), [4, ct()]; case 2: return f.sent(), [4, st()]; case 3: return a = f.sent(), [4, dt()]; case 4: return r = f.sent(), l = a.filter(((e) => e === 'rejected')), o = r.filter(((e) => e === 'rejected')), l.length || o.length ? (v(A.F.error('ТУП отредактирован некорректно, присутствуют неверные поля, попробуйте заново')), h(!0), te(!1), [2]) : (c = Qe.structure.general_modules.filter(((e) => e.standard_curriculum_module_id === null)), s = [], Qe.structure.qualifications.forEach(((e) => { e.standard_curriculum_qualification_id && e.modules.forEach(((t) => { t.standard_curriculum_module_id === null && s.push({ ...t, standard_curriculum_qualification_id: e.standard_curriculum_qualification_id }); })); })), d = Qe.structure.qualifications.filter(((e) => e.standard_curriculum_qualification_id === null)), Qe.structure.general_modules.forEach(((e) => { e.standard_curriculum_module_id !== null && e.units.forEach(((t) => { t.standard_curriculum_module_id === null && mt(t, e.standard_curriculum_module_id); })); })), Qe.structure.qualifications.forEach(((e) => { e.standard_curriculum_qualification_id !== null && e.modules.forEach(((e) => { e.standard_curriculum_module_id !== null && e.units.forEach(((t) => { t.standard_curriculum_module_id === null && mt(t, e.standard_curriculum_module_id); })); })); })), c.length ? [4, ft(c)] : [3, 6]); case 5: f.sent(), f.label = 6; case 6: return s.length ? [4, ft(s)] : [3, 8]; case 7: f.sent(), f.label = 8; case 8: return d.length ? [4, ht(d)] : [3, 10]; case 9: f.sent(), f.label = 10; case 10: (Ke == null ? void 0 : Ke.length) && Ke.forEach(((e) => { !(function (e) { $(this, void 0, void 0, (function () { return ee(this, ((t) => (i((0, z.UL)([Ne.standard_curriculum_id, e])).then(((e) => e)).catch(((e) => v(A.F.success(e.message)))), [2]))); })); }(e.standard_curriculum_module_id)); })), ($e == null ? void 0 : $e.length) && $e.forEach(((e) => { !(function (e, t) { $(this, void 0, void 0, (function () { return ee(this, ((n) => (i((0, z.s0)([Ne.standard_curriculum_id, e, t])).then(((e) => e)).catch(((e) => v(A.F.success(e.message)))), [2]))); })); }(e.standard_curriculum_module_id, e.standard_curriculum_modules_unit_id)); })), (et == null ? void 0 : et.length) && et.forEach(((e) => { !(function (e) { $(this, void 0, void 0, (function () { return ee(this, ((t) => (i((0, z.Ak)([Ne.standard_curriculum_id, e])).then(((e) => e)).catch(((e) => v(A.F.success(e.message)))), [2]))); })); }(e.standard_curriculum_qualification_id)); })), setTimeout((() => { v(A.F.success('Информация о ТУП успешно обновлена')), i((0, Q._N)(Te)), i(p.clearData()), te(!1); }), 1e3), f.label = 11; case 11: return [2]; } })); })); },
                    children: [(0, y.jsxs)('div', { className: (0, x.A)(P.blockWrapper, {}, [P.top]), children: [t, n] }), (0, y.jsx)('div', {
                        className: (0, x.A)(P.blockWrapper, {}, [P.middle]),
                        children: (0, y.jsx)(g.bK, {
                            className: P.blockItem, setAddModuleModalVisible: re, setAddModuleUnitModalVisible: ue, setAddQualificationModalVisible: de, setEditModuleModalVisible: me, setEditModuleUnitModalVisible: pe, setEditQualificationModalVisible: xe, onDeleteModuleFromGeneralModulesHandler: tt, onDeleteModuleFromQualificationStructureHandler: nt, onDeleteModuleUnitFromGeneralModulesHandler: at, onDeleteModuleUnitFromQualificationStructureHandler: it, onDeleteQualificationFromStructureHandler: rt, data: Qe, setModuleId: Fe, setUnitId: qe, setQualId: Ae, setCurriculumStructureMode: ze, isLoading: We || Ye || Le || Re || Xe, error: Je || Ze || Ve || Ge || Pe,
                        }),
                    }), (0, y.jsx)('div', {
                        className: (0, x.A)(P.blockWrapper, {}, [P.bottom]),
                        children: (0, y.jsxs)('div', {
                            className: P.blockItem,
                            children: [(0, y.jsxs)('div', {
                                className: P.btnWrapper,
                                children: [s && (0, y.jsx)(M.xv, {
                                    size: M.yH.M, weight: M.fs.SEMIBOLD, theme: M.lg.ERROR, children: 'Форма заполнена некорректно', 
}), (0, y.jsx)(L.zx, {
                                    className: (0, x.A)(P.btn, {}, [P.deleteBtn]), theme: L.bn.ERROR, onClick: ot, disabled: G, children: (0, y.jsx)(M.xv, { weight: M.fs.SEMIBOLD, children: 'Удалить' }),
                                })], 
}), (0, y.jsxs)('div', {
                                className: P.btnWrapper,
                                children: [(0, y.jsx)(L.zx, {
                                    className: (0, x.A)(P.btn, {}, [P.defaultBtn]), theme: L.bn.OUTLINE, onClick: lt, disabled: G, children: (0, y.jsx)(M.xv, { weight: M.fs.SEMIBOLD, children: 'Назад к списку' }),
                                }), (0, y.jsx)(L.zx, {
                                    className: (0, x.A)(P.btn, {}, [P.defaultBtn]), theme: L.bn.OUTLINE, onClick: ut, disabled: G, children: (0, y.jsx)(M.xv, { weight: M.fs.SEMIBOLD, children: 'Отменить изменения' }),
                                }), (0, y.jsx)(L.zx, {
                                    className: (0, x.A)(P.btn, {}, [P.saveBtn]), type: 'submit', disabled: G, children: (0, y.jsx)(M.xv, { weight: M.fs.SEMIBOLD, children: 'Сохранить' }),
                                })], 
})], 
})
                    })],
                }), (0, y.jsx)(C.KF, { ref: b, push: _, placement: 'top-end' }), (0, y.jsx)(g.g1, {
                    visible: ie, setVisible: re, data: Qe, mode: 'edit', structureMode: Oe, qualId: De,
                }), (0, y.jsx)(g.u4, {
                    visible: oe, setVisible: ue, data: Qe, moduleId: Me, mode: 'edit', structureMode: Oe, qualId: De,
                }), (0, y.jsx)(g.xO, {
                    visible: se, setVisible: de, data: Qe, mode: 'edit',
                }), (0, y.jsx)(g.yb, {
                    visible: he, setVisible: me, data: Qe, moduleId: Me, qualId: De, mode: 'edit', structureMode: Oe,
                }), (0, y.jsx)(g.$i, {
                    visible: ve, setVisible: pe, data: Qe, qualId: De, moduleId: Me, unitId: Ce, mode: 'edit', structureMode: Oe,
                }), (0, y.jsx)(g.V3, {
                    visible: ye, setVisible: xe, data: Qe, mode: 'edit', qualId: De,
                }), (0, y.jsx)(z.Dh, {
                    standardCurriculum: Ne, visible: je, setVisible: we, withReturnBack: !0,
                })],
            });
        };
    },
    146: (e, t, n) => { n.d(t, { Q: () => i }); let a = function () { return a = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const i in t = arguments[n])Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]); return e; }, a.apply(this, arguments); }; var i = function (e, t) { for (var n = { ...e }, i = 0, r = t; i < r.length; i++) { const l = r[i]; n.hasOwnProperty(l) && delete n[l]; } return n; }; },
}]);
