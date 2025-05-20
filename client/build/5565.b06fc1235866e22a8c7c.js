!(function () { try { const e = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; const t = (new Error()).stack; t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = '056f3a93-f684-4257-bf8b-e78b89797a2d', e._sentryDebugIdIdentifier = 'sentry-dbid-056f3a93-f684-4257-bf8b-e78b89797a2d'); } catch (e) {} }()); const _global = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}; _global.SENTRY_RELEASE = { id: '45ee1168f5cf48e9753bace26323152d3b61cb67' }, (self.webpackChunkproduction_project = self.webpackChunkproduction_project || []).push([[5565], {
    6818: (e, t, n) => { n.d(t, { Z: () => l }); let a; const r = n(7294); function i() { return i = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const a in n)Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]); } return e; }, i.apply(this, arguments); } const l = function (e) { return r.createElement('svg', i({ width: 20, height: 20, xmlns: 'http://www.w3.org/2000/svg' }, e), a || (a = r.createElement('path', { d: 'M9.41 1.91a.833.833 0 0 1 1.18 0l3.332 3.334a.833.833 0 0 1-1.178 1.178l-1.91-1.91v8.821a.833.833 0 0 1-1.667 0V4.512l-1.911 1.91a.833.833 0 0 1-1.178-1.178L9.41 1.911ZM4.168 14.168A.834.834 0 0 1 5 15v1.667h10V15a.833.833 0 0 1 1.667 0v1.667A1.667 1.667 0 0 1 15 18.333H5a1.667 1.667 0 0 1-1.667-1.666V15a.833.833 0 0 1 .834-.833Z' }))); }; },
    7970: (e, t, n) => { n.d(t, { Z: () => l }); let a; const r = n(7294); function i() { return i = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const a in n)Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]); } return e; }, i.apply(this, arguments); } const l = function (e) { return r.createElement('svg', i({ width: 20, height: 20, xmlns: 'http://www.w3.org/2000/svg' }, e), a || (a = r.createElement('path', { d: 'M14.083 2.5a.917.917 0 0 1 .912.817l.005.1v2.416h.833a2.5 2.5 0 0 1 2.496 2.354l.004.146v5.834a1.667 1.667 0 0 1-1.541 1.662l-.125.004H15v1.584a.917.917 0 0 1-.817.911l-.1.005H5.917a.916.916 0 0 1-.912-.816l-.005-.1v-1.584H3.333a1.666 1.666 0 0 1-1.662-1.541l-.004-.125V8.333A2.5 2.5 0 0 1 4.02 5.838l.147-.005H5V3.417a.917.917 0 0 1 .817-.912l.1-.005h8.166Zm-.75 10.833H6.667v3.334h6.666v-3.334Zm2.5-5.833H4.167a.833.833 0 0 0-.828.736l-.006.097v5.834H5v-1.584a.917.917 0 0 1 .817-.911l.1-.005h8.166a.916.916 0 0 1 .912.816l.005.1v1.584h1.667V8.333a.833.833 0 0 0-.834-.833Zm-1.666.833a.834.834 0 0 1 .097 1.661l-.097.006H12.5a.834.834 0 0 1-.098-1.66l.098-.007h1.667Zm-.834-4.166H6.667v1.666h6.666V4.167Z' }))); }; },
    3250: (e, t, n) => {
        n.r(t), n.d(t, { default: () => te }); const a = n(5893); const r = n(4387); const i = n(918); const l = n(1150); const o = n(9649); const s = n(7294); const c = n(6458); const u = n(5375); const d = n(5461); const p = n(4118); const f = n(5306); const h = n(7730); const v = n(795); const g = n(8683); const m = n(7168); const b = function (e) { let t; return (t = e.addNewWorkingCurriculum) === null || void 0 === t ? void 0 : t.data; }; const y = function (e) { let t; return (t = e.addNewWorkingCurriculum) === null || void 0 === t ? void 0 : t.isLoading; }; let x = function () { return x = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, x.apply(this, arguments); }; const j = (0, m.hg)('workingCurriculum/addEmployeeEducation', ((e, t) => {
            return n = void 0, a = void 0, i = function () {
                let e; let n; let a; let r; let i; let l; let o; let s; return (function (e, t) {
                    let n; let a; let r; let i; let l = {
                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                    }; return i = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function o(o) { return function (s) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, o[0] && (l = 0)), l;) try { if (n = 1, a && (r = 2 & o[0] ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, o[1])).done) return r; switch (a = 0, r && (o = [2 & o[0], r.value]), o[0]) { case 0: case 1: r = o; break; case 4: return l.label++, { value: o[1], done: !1 }; case 5: l.label++, a = o[1], o = [0]; continue; case 7: o = l.ops.pop(), l.trys.pop(); continue; default: if (!((r = (r = l.trys).length > 0 && r[r.length - 1]) || o[0] !== 6 && o[0] !== 2)) { l = 0; continue; } if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) { l.label = o[1]; break; } if (o[0] === 6 && l.label < r[1]) { l.label = r[1], r = o; break; } if (r && l.label < r[2]) { l.label = r[2], l.ops.push(o); break; }r[2] && l.ops.pop(), l.trys.pop(); continue; }o = t.call(e, l); } catch (e) { o = [6, e], a = 0; } finally { n = r = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, s])); }; }
                }(this, ((c) => { switch (c.label) { case 0: e = t.rejectWithValue, n = t.extra, a = t.dispatch, r = t.getState, i = b(r()), l = { ...i, standard_curriculum_id: Number(i.standard_curriculum_id.split(':')[0].split('№')[1]), academic_year_from: Number(i.academic_year_from.split(' -')[0]) }, c.label = 1; case 1: return c.trys.push([1, 3,, 4]), [4, n.api.post('/curriculum/working-curriculum/', l)]; case 2: return o = c.sent(), a((0, p.qn)()), a(k.clearData()), [2, o.data]; case 3: return s = c.sent(), [2, e({ errors: s.response.data.errors, status: s.response.status })]; case 4: return [2]; } })));
            }, new ((r = void 0) || (r = Promise))(((e, t) => { function l(e) { try { s(i.next(e)); } catch (e) { t(e); } } function o(e) { try { s(i.throw(e)); } catch (e) { t(e); } } function s(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof r ? n : new r(((e) => { e(n); }))).then(l, o); }s((i = i.apply(n, a || [])).next()); })); let n; let a; let r; let i;
        })); let w = function () { return w = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, w.apply(this, arguments); }; const _ = {
            data: {
                academic_year_from: null, approval_date: null, is_active: !1, is_full_time_education: null, education_base_id: null, standard_curriculum_id: null, title: null, version: 1,
            },
            isLoading: !1,
            errors: void 0,
        }; const O = (0, m.oM)({
            name: 'addWorkingCurriculum',
            initialState: _,
            reducers: {
                setInputData(e, t) { let n; let a; t.payload[1] ? e.data = { ...e.data, ...((a = {})[t.payload[0]] = t.payload[1], a) } : e.data = { ...e.data, ...((n = {})[t.payload[0]] = null, n) }; }, checkHandler(e, t) { e.data.is_active = t.payload; }, changeEducationBaseId(e, t) { e.data.education_base_id = t.payload; }, changeFullTimeEducation(e, t) { e.data.is_full_time_education = t.payload; }, setApprovalDate(e, t) { e.data.approval_date = t.payload; }, clearData(e) { e.data = _.data, e.errors = void 0; },
            },
            extraReducers(e) { e.addCase(j.pending, ((e) => { e.errors = void 0, e.isLoading = !0; })).addCase(j.fulfilled, ((e) => { e.isLoading = !1; })).addCase(j.rejected, ((e, t) => { e.isLoading = !1, e.errors = t.payload; })); },
        }); var k = O.actions; const C = O.reducer; const N = n(238); const S = n(6925); const E = n(4475); const D = n(4809); const A = n(9161); const L = n(1134); const M = n(1138); const R = n(100); const P = n(6837); const Z = n(5321); const H = n(1353); const I = n(9456); const B = n(9198); const V = n.n(B); const F = n(9546); const J = n(8523); const T = n(6914); const z = n(530); const K = 'RXg6Ob90'; let X = function () { return X = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, X.apply(this, arguments); }; const W = (0, s.memo)(((e) => {
            let t; const n = e.className; const i = e.onClose; const l = e.isOpen; const o = (0, d.T)(); const u = (0, s.useState)(); const p = u[0]; const f = u[1]; const h = (0, s.useRef)(null); const v = (0, s.useState)(!1); const m = v[0]; const x = v[1]; const w = (0, s.useState)(!1); const _ = (w[0], w[1]); const O = (0, s.useState)([]); const C = O[0]; const B = O[1]; const W = (0, s.useState)('null'); const U = W[0]; const q = W[1]; const G = (0, s.useState)('null'); const Y = G[0]; const Q = G[1]; const $ = (0, c.v9)(b); const ee = (0, c.v9)(y); const te = (0, c.v9)(L.Hu); const ne = (0, c.v9)(L.Fu); const ae = (0, c.v9)(L.oV); const re = (0, c.v9)(Z.KP); const ie = (0, c.v9)(Z.Rr); const le = (0, c.v9)(Z.d3); const oe = (0, s.useMemo)((() => (te == null ? void 0 : te.map(((e) => '№'.concat(e.standard_curriculum_id, ': ').concat(e.specialty.shifr_spec, ' - ').concat(e.specialty.speciality))).sort(((e, t) => Number(e) - Number(t))))), [te]); const se = (0, s.useMemo)((() => ['очная', 'заочная']), []); const ce = (0, s.useMemo)((() => (re == null ? void 0 : re.map(((e) => ''.concat(e.short_name))))), [re]); const ue = (0, s.useMemo)((() => { let e; const t = Number((e = $ == null ? void 0 : $.standard_curriculum_id) === null || void 0 === e ? void 0 : e.split(':')[0].split('№')[1]); const n = te == null ? void 0 : te.filter(((e) => e.standard_curriculum_id === t))[0]; return n ? ''.concat(n.specialty.shifr_spec, ' - ').concat(n.specialty.speciality) : ''; }), [$ == null ? void 0 : $.standard_curriculum_id, te]); const de = (0, s.useCallback)(((e, t) => { o(k.setInputData([t, e])); }), [o]); const pe = (0, s.useCallback)(((e, t) => { Q(e); const n = re == null ? void 0 : re.filter(((t) => t.short_name === e))[0]; o(k.changeEducationBaseId((n == null ? void 0 : n.id_education_bases) || null)); }), [o, re]); const fe = (0, s.useCallback)(((e, t) => { q(e), o(k.changeFullTimeEducation(e.toLowerCase() === 'очная')); }), [o]); const he = (0, s.useCallback)((() => { i(), q('null'), Q('null'), o(k.clearData()); }), [o, i]); return (0, s.useEffect)((() => { o((0, L.ko)()), o((0, Z.xe)()); }), [o]), (0, s.useEffect)((() => { for (var e = [], t = (new Date()).getFullYear(); t >= 2e3; t--)e.push(''.concat(t, ' - ').concat(t + 1)); B(e); }), []), t = ne || ie ? (0, a.jsx)(M.O, { width: '100%', height: 300 }) : ae || le ? (0, a.jsx)(D.xv, {
                theme: D.lg.ERROR, size: D.yH.M, weight: D.fs.SEMIBOLD, children: 'Произошла ошибка при загрузке данных, попробуйте перезагрузить страницу',
            }) : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(S.I, { placeholder: 'Название', value: ($ == null ? void 0 : $.title) || '', onChange(e) { !(function (e, t) { o(k.setInputData(['title', e.target.value])); }(e)); } }), (0, a.jsx)(R.u, {
                    label: 'Типовой учебный план', options: oe, columnName: 'standard_curriculum_id', optionValue: String($ == null ? void 0 : $.standard_curriculum_id) || '', onClickOption: de,
                }), (0, a.jsx)(S.I, { placeholder: 'Специальность', value: ue, readonly: !0 }), (0, a.jsx)(P.X, {
                    label: 'Активен', id: 'add_working_curriculum_is_active', checked: $ == null ? void 0 : $.is_active, onChange(e) { o(k.checkHandler(e.target.checked)); },
                }), (0, a.jsx)(R.u, {
                    label: 'База образования', options: ce, columnName: 'education_base_id', optionValue: Y, onClickOption: pe,
                }), (0, a.jsx)(R.u, {
                    label: 'Форма обучения', options: se, columnName: '', optionValue: U, onClickOption: fe,
                }), (0, a.jsx)(R.u, {
                    placeholder: 'Академический год', searchDisabled: !0, options: C, columnName: 'academic_year_from', optionValue: ($ == null ? void 0 : $.academic_year_from) || 'null', onClickOption: de,
                }), (0, a.jsx)('div', {
                    className: 'RNk4LooU',
                    children: (0, a.jsx)(V(), {
                        selected: ($ == null ? void 0 : $.approval_date) ? new Date($.approval_date) : null, onChange(e) { o(k.setApprovalDate(e ? (0, F.default)(new Date(e), 'yyyy-MM-dd') : null)); }, maxDate: new Date(), locale: J.Z, dropdownMode: 'scroll', dateFormat: 'dd.MM.yyyy', closeOnScroll: !0, showMonthDropdown: !0, showYearDropdown: !0, showWeekNumbers: !0, customInput: (0, a.jsx)(T.K, {}), placeholderText: 'Дата утверждения',
                    }),
                }), (0, a.jsxs)('div', {
                    className: 'pOUK4CQ3',
                    children: [(0, a.jsxs)(A.zx, {
                        theme: A.bn.BACKGROUND_DARK, className: K, onClick: he, children: [(0, a.jsx)(D.xv, { size: D.yH.XS, weight: D.fs.SEMIBOLD, children: 'Отмена' }), (0, a.jsx)(H.J, { Svg: I.Z })],
                    }), (0, a.jsxs)(A.zx, {
                        type: 'submit', theme: A.bn.BACKGROUND, className: K, disabled: ee, children: [(0, a.jsx)(D.xv, { size: D.yH.XS, weight: D.fs.SEMIBOLD, children: 'Добавить' }), (0, a.jsx)(H.J, { Svg: g.Z })],
                    })],
                })],
            }), (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(N.u, {
                    className: (0, r.A)('MCta36gE', {}, [n]),
                    onClose: i,
                    isOpen: l,
                    title: 'Создание РУП',
                    children: (0, a.jsx)(E.lx, {
                        className: (0, r.A)('H2L3iP1n', {}, ['needs-validation']),
                        noValidate: !0,
                        validated: m,
                        onSubmit(e) {
                            return t = void 0, n = void 0, r = function () {
                                let t; let n; return (function (e, t) {
                                    let n; let a; let r; let i; let l = {
                                        label: 0, sent() { if (1 & r[0]) throw r[1]; return r[1]; }, trys: [], ops: [],
                                    }; return i = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol === 'function' && (i[Symbol.iterator] = function () { return this; }), i; function o(o) { return function (s) { return (function (o) { if (n) throw new TypeError('Generator is already executing.'); for (;i && (i = 0, o[0] && (l = 0)), l;) try { if (n = 1, a && (r = 2 & o[0] ? a.return : o[0] ? a.throw || ((r = a.return) && r.call(a), 0) : a.next) && !(r = r.call(a, o[1])).done) return r; switch (a = 0, r && (o = [2 & o[0], r.value]), o[0]) { case 0: case 1: r = o; break; case 4: return l.label++, { value: o[1], done: !1 }; case 5: l.label++, a = o[1], o = [0]; continue; case 7: o = l.ops.pop(), l.trys.pop(); continue; default: if (!((r = (r = l.trys).length > 0 && r[r.length - 1]) || o[0] !== 6 && o[0] !== 2)) { l = 0; continue; } if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) { l.label = o[1]; break; } if (o[0] === 6 && l.label < r[1]) { l.label = r[1], r = o; break; } if (r && l.label < r[2]) { l.label = r[2], l.ops.push(o); break; }r[2] && l.ops.pop(), l.trys.pop(); continue; }o = t.call(e, l); } catch (e) { o = [6, e], a = 0; } finally { n = r = 0; } if (5 & o[0]) throw o[1]; return { value: o[0] ? o[1] : void 0, done: !0 }; }([o, s])); }; }
                                }(this, ((a) => { switch (a.label) { case 0: return e.preventDefault(), t = e.currentTarget, _(!t.checkValidity()), t.checkValidity() || e.stopPropagation(), x(!0), t.checkValidity() ? ($ == null ? void 0 : $.title) && $.standard_curriculum_id && $.education_base_id && $.is_full_time_education !== null && $.academic_year_from && $.approval_date ? [4, o(j())] : [3, 2] : [3, 3]; case 1: return (n = a.sent()).meta.requestStatus === 'fulfilled' && (f(z.F.success('РУП добавлен')), he()), n.meta.requestStatus === 'rejected' && _(!0), [3, 3]; case 2: f(z.F.error('Заполните все поля!')), _(!0), a.label = 3; case 3: return [2]; } })));
                            }, new ((a = void 0) || (a = Promise))(((e, i) => { function l(e) { try { s(r.next(e)); } catch (e) { i(e); } } function o(e) { try { s(r.throw(e)); } catch (e) { i(e); } } function s(t) { let n; t.done ? e(t.value) : (n = t.value, n instanceof a ? n : new a(((e) => { e(n); }))).then(l, o); }s((r = r.apply(t, n || [])).next()); })); let t; let n; let a; let r;
                        },
                        children: t,
                    }),
                }), (0, a.jsx)(E.KF, { ref: h, push: p, placement: 'top-end' })],
            });
        })); const U = n(3728); const q = n(3079); const G = n(7687); const Y = n(1759); const Q = { search: 'QvpAdNye' }; let $ = function () { return $ = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, $.apply(this, arguments); }; const ee = {
            standardCurriculum: L.YU, workingCurriculum: p.j6, workingCurriculumDetail: U.Jc, addNewWorkingCurriculum: C, editWorkingCurriculum: q.X, educationBases: Z.kp,
        }; const te = function (e) {
            const t = e.className; const n = (0, s.useState)(''); const m = n[0]; const b = n[1]; const y = (0, s.useState)(); const x = y[0]; const j = y[1]; const w = (0, s.useState)(!1); const _ = w[0]; const O = w[1]; const k = (0, d.T)(); const C = (0, c.v9)(p.di); const N = (0, c.v9)(p.e9); const S = (0, c.v9)(p.iS); const E = (0, c.v9)(p.te); const D = (0, c.v9)(p.R1); const A = (0, s.useCallback)((() => { O(!1); }), []); const L = (0, s.useCallback)(((e) => { b(e); }), []); (0, s.useEffect)((() => { j((C == null ? void 0 : C.data) || []); }), [C]), (0, s.useEffect)((() => { const e = (0, h.vZ)(m, (C == null ? void 0 : C.data) || []); j(e || []); }), [C, m]); const M = (0, s.useCallback)(((e) => { k(p.Xw.setLimit(e)), k((0, p.qn)()); }), [k]); const R = (0, s.useCallback)(((e) => { k(p.Xw.setPage(e)), k((0, p.qn)()); }), [k]); return (0, s.useEffect)((() => { k(Y.f$.setSort('working_curriculum_id')), k((0, p.qn)()); }), [k]), (0, a.jsx)(i.B, {
                title: 'LMS - Рабочий учебный план',
                children: (0, a.jsxs)(l.W, {
                    reducers: ee,
                    removeAfterUnmount: !0,
                    children: [(0, a.jsxs)('div', {
                        className: (0, r.A)(Q.WorkingCurriculumPage, {}, [t]),
                        children: [(0, a.jsxs)('div', {
                            className: 'page-settings '.concat(!1),
                            children: [(0, a.jsx)(o.o, {
                                className: Q.search, value: m, onChange: L, searchText: 'Введите для поиска по названию или специальности', error: S, isLoading: N,
                            }), (0, a.jsx)(f.X, {
                                onlyAdding: !0, addingModalText: 'Добавить', setVisibleAddNewField: O, addingModalIcon: g.Z, error: S, isLoading: N, children: (0, a.jsx)(W, { onClose: A, isOpen: _ }),
                            })],
                        }), (0, a.jsx)(p.Qw, { data: x || [], exportDisabled: !1 }), (0, a.jsxs)('div', {
                            className: 'page-table-settings',
                            children: [D && (0, a.jsx)(G.K, {
                                data: x || [], onChange: M, onChangePage: R, paginationData: C == null ? void 0 : C.pagination, itemsLimit: D, withRecords: !0, isLoading: N, error: S,
                            }), E && (0, a.jsx)(G.N, {
                                data: x || [], onChange: R, itemsPage: E, isLoading: N, error: S, paginationData: C == null ? void 0 : C.pagination,
                            })],
                        }), (0, a.jsx)(v._, {
                            onlyExport: !0, importDisabled: !0, exportDisabled: !0, printDisabled: !0, error: S, isLoading: N,
                        })],
                    }), S && (0, a.jsx)(u.d, { error: S })],
                }),
            });
        };
    },
    5375: (e, t, n) => { n.d(t, { d: () => s }); const a = n(5893); const r = n(7294); const i = n(530); const l = n(4475); function o(e) { return o = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) { return typeof e; } : function (e) { return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e; }, o(e); } var s = (0, r.memo)(((e) => { const t = e.error; const n = (0, r.useState)(); const s = n[0]; const c = n[1]; const u = (0, r.useRef)(null); return (0, r.useEffect)((() => { (typeof t === 'string' && t === 'timeout' || o(t) === 'object' && t.status === 500 && t.error === 'timeout') && c(i.F.error('Соединение с сервером потеряно')); }), [t]), (0, a.jsx)(l.KF, { ref: u, push: s, placement: 'top-end' }); })); },
    795: (e, t, n) => {
        n.d(t, { _: () => j }); let a; let r; const i = n(5893); const l = n(7294); const o = n(4387); const s = n(9161); const c = n(1353); const u = n(9086); const d = n(9979); const p = n(9250); const f = n(5461); const h = n(7970); function v() { return v = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const a in n)Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]); } return e; }, v.apply(this, arguments); } const g = function (e) { return l.createElement('svg', v({ width: 20, height: 20, xmlns: 'http://www.w3.org/2000/svg' }, e), a || (a = l.createElement('path', { d: 'M4.167 14.167A.833.833 0 0 1 5 15v1.667h10V15a.833.833 0 0 1 1.667 0v1.667A1.667 1.667 0 0 1 15 18.333H5a1.667 1.667 0 0 1-1.667-1.666V15a.833.833 0 0 1 .834-.833Z' })), r || (r = l.createElement('path', { d: 'M10.596 13.926a.833.833 0 0 1-1.179 0l-3.333-3.333a.833.833 0 0 1 1.178-1.179l1.911 1.911V2.503a.833.833 0 0 1 1.667 0v8.822l1.91-1.91a.833.833 0 0 1 1.179 1.178l-3.333 3.333Z' }))); }; const m = n(6818); const b = n(4809); const y = 'RaZ8cMh6'; let x = function () { return x = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, x.apply(this, arguments); }; var j = (0, l.memo)(((e) => {
            const t = e.className; const n = e.onlyExport; const a = e.isLoading; const r = e.error; const v = e.importDisabled; const j = e.exportDisabled; const w = e.printDisabled; const _ = (0, p.s0)(); const O = (0, f.T)(); const k = (0, l.useCallback)((() => { _((0, u.L)()); }), [_]); const C = (0, l.useCallback)((() => { O((0, d.bZ)()); }), [O]); return (0, i.jsxs)('div', {
                className: (0, o.A)('YOO3Y6u0', {}, [t]),
                children: [!n && (0, i.jsxs)(s.zx, {
                    className: y, onClick: k, disabled: v, children: [(0, i.jsx)(b.xv, { size: b.yH.XS, weight: b.fs.SEMIBOLD, children: 'Импорт' }), (0, i.jsx)(c.J, { Svg: g })],
                }), (0, i.jsxs)(s.zx, {
                    className: y, onClick: C, disabled: !!r || a || j, children: [(0, i.jsx)(b.xv, { size: b.yH.XS, weight: b.fs.SEMIBOLD, children: 'Экспорт' }), (0, i.jsx)(c.J, { Svg: m.Z })],
                }), !n && (0, i.jsxs)(s.zx, { className: y, disabled: w, children: [(0, i.jsx)(b.xv, { size: b.yH.XS, weight: b.fs.SEMIBOLD, children: 'Печать' }), (0, i.jsx)(c.J, { Svg: h.Z })] })],
            });
        }));
    },
    7687: (e, t, n) => {
        n.d(t, { K: () => _, N: () => P }); let a; const r = n(5893); const i = n(4387); const l = n(7294); const o = ['25', '50', '100', '200', '500']; const s = n(1138); const c = n(4809); const u = n(1353); const d = n(8896); function p() { return p = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const a in n)Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]); } return e; }, p.apply(this, arguments); } const f = function (e) { return l.createElement('svg', p({ width: 20, height: 20, xmlns: 'http://www.w3.org/2000/svg' }, e), a || (a = l.createElement('path', { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M8.565 9.731 5.229 6.396A.79.79 0 0 1 5 5.813a.79.79 0 0 1 .23-.584A.79.79 0 0 1 5.811 5a.79.79 0 0 1 .584.23l3.25 3.25 3.25-3.25a.79.79 0 0 1 .583-.23.79.79 0 0 1 .584.23.79.79 0 0 1 .229.582.79.79 0 0 1-.23.584l-3.33 3.331 3.335 3.335a.79.79 0 0 1 .229.584.79.79 0 0 1-.23.583.79.79 0 0 1-.583.23.79.79 0 0 1-.583-.23l-3.25-3.25-3.25 3.25a.79.79 0 0 1-.583.23.79.79 0 0 1-.584-.23.79.79 0 0 1-.229-.583.79.79 0 0 1 .23-.584l3.33-3.33Z' }))); }; const h = n(9161); const v = n(8863); const g = 'lJhrM3nh'; const m = 'zZgj2JgW'; let b = function () { return b = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, b.apply(this, arguments); }; const y = (0, l.memo)(((e) => {
            let t; const n = e.className; const a = e.items; const o = e.value; const s = e.onChange; const p = (0, l.useState)(o); const y = p[0]; const x = p[1]; const j = (0, l.useState)(!1); const w = j[0]; const _ = j[1]; const O = (0, l.useRef)(null); (0, v.p)(O, _); const k = (0, l.useCallback)((() => { _(!0); }), []); const C = (0, l.useCallback)((() => { _(!1); }), []); const N = (0, l.useCallback)(((e) => { s(e), x(e), C(); }), [C, s]); return (0, r.jsxs)('div', {
                className: (0, i.A)('eXu4wq7K', {}, [n]),
                ref: O,
                children: [!w && (0, r.jsxs)(h.zx, {
                    className: 'bAUrWG2D', theme: h.bn.CLEAR, onClick: k, children: [(0, r.jsx)(c.xv, { weight: c.fs.SEMIBOLD, className: g, children: y }), (0, r.jsx)(u.J, { Svg: d.Z })],
                }), (0, r.jsx)('div', {
 className: (0, i.A)('Jh9c6KnL', (t = {}, t.fpG6Af4B = w, t), []),
style: { top: ''.concat(-40 * a.indexOf(y), 'px') },
children: a.map(((e) => (y === e ? (0, r.jsxs)('div', { className: (0, i.A)(m, {}, ['rKHhU8sR']), children: [(0, r.jsx)(c.xv, { weight: c.fs.SEMIBOLD, className: g, children: e }), (0, r.jsx)(h.zx, {
 theme: h.bn.CLEAR, className: 'HkrPDu6E', onClick: C, children: (0, r.jsx)(u.J, { Svg: f }) 
})] }, e) : (0, r.jsx)(h.zx, {
                    theme: h.bn.CLEAR, className: m, size: h.qE.XS, onClick() { N(e); }, children: (0, r.jsx)(c.xv, { weight: c.fs.SEMIBOLD, className: g, children: e }), 
}, e)))) 
})],
            });
        })); const x = {
            LimitShow: 'eQ6pERU2', selectLimit: 'hKaByxY3', limitSelectWrapper: 'XhlPZwOr', recordsText: 'Shn48cNg', textResults: 'MlwyceC_',
        }; let j; let w = function () { return w = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, w.apply(this, arguments); }; var _ = (0, l.memo)(((e) => {
            const t = e.className; const n = e.onChange; const a = e.itemsLimit; const l = e.withRecords; const u = e.paginationData; const d = e.isLoading; const p = e.error; const f = e.data; const h = e.onChangePage; const v = (u == null ? void 0 : u.current_page) ? (u.current_page - 1) * Number(a) + 1 : 0; const g = (u == null ? void 0 : u.current_page) ? u.current_page * Number(a) : 0; return d ? (0, r.jsx)(s.O, {
                width: '100%', height: 40, border: '6px', className: x.skeleton,
            }) : p ? (0, r.jsx)('div', {}) : f.length ? (0, r.jsxs)('div', { className: (0, i.A)(x.LimitShow, {}, [t]), children: [l && v && g && (0, r.jsxs)(c.xv, { theme: c.lg.LIGHT, className: x.recordsText, children: ['Записи', ' ', v, ' ', '-', ' ', g, ' ', '| Всего', ' ', u == null ? void 0 : u.total_records] }), (0, r.jsxs)('div', { className: x.limitSelectWrapper, children: [(0, r.jsx)(c.xv, { theme: c.lg.LIGHT, className: x.textResults, children: 'Результатов на странице' }), (0, r.jsx)(y, { items: o, value: a, onChange(e) { n(e), h('1'); } })] })] }) : (0, r.jsx)('div', {});
        })); const O = n(4475); function k() { return k = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const a in n)Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]); } return e; }, k.apply(this, arguments); } const C = function (e) {
            return l.createElement('svg', k({
                width: 30, height: 30, fill: 'none', xmlns: 'http://www.w3.org/2000/svg',
            }, e), j || (j = l.createElement('path', { d: 'M9.514 5.763A1.739 1.739 0 0 0 9 6.994a1.73 1.73 0 0 0 .514 1.231l6.822 6.777-6.822 6.776a1.735 1.735 0 0 0 0 2.462 1.759 1.759 0 0 0 2.48 0l8.07-8.016a1.74 1.74 0 0 0 .514-1.231 1.73 1.73 0 0 0-.514-1.231l-8.07-8.016c-.669-.664-1.794-.664-2.48.017Z', fill: '#EB8247' })));
        }; let N; function S() { return S = Object.assign ? Object.assign.bind() : function (e) { for (let t = 1; t < arguments.length; t++) { const n = arguments[t]; for (const a in n)Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]); } return e; }, S.apply(this, arguments); } const E = function (e) {
            return l.createElement('svg', S({
                width: 30, height: 30, fill: 'none', xmlns: 'http://www.w3.org/2000/svg',
            }, e), N || (N = l.createElement('path', { d: 'M6.175 8.2a1.875 1.875 0 0 1 2.65-2.65l8.125 8.125a1.875 1.875 0 0 1 0 2.65L8.825 24.45a1.875 1.875 0 0 1-2.65-2.65l6.8-6.8-6.8-6.8Zm18.2 16.8a1.875 1.875 0 0 0 1.875-1.875V6.875a1.875 1.875 0 0 0-3.75 0v16.25c0 1.035.84 1.875 1.875 1.875Z', fill: '#EB8247' })));
        }; const D = 'ytJMbyx3'; const A = 'SRBkd4oW'; const L = '_DUi30wm'; let M = function () { return M = Object.assign || function (e) { for (var t, n = 1, a = arguments.length; n < a; n++) for (const r in t = arguments[n])Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]); return e; }, M.apply(this, arguments); }; const R = function (e, t, n) { if (n || arguments.length === 2) for (var a, r = 0, i = t.length; r < i; r++)!a && r in t || (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]); return e.concat(a || Array.prototype.slice.call(t)); }; var P = (0, l.memo)(((e) => {
            const t = e.className; const n = e.data; const a = e.isLoading; const l = e.error; const o = e.paginationData; const c = e.onChange; const d = e.itemsPage; return a ? (0, r.jsx)(s.O, {
                width: 250, height: 40, border: '6px', className: 'nlgg7yYk',
            }) : l || n.length === 0 ? (0, r.jsx)('div', {}) : (0, r.jsx)('div', {
                className: (0, i.A)('AuxB6Ddw', {}, [t]),
                children: (0, r.jsxs)(O.E7, {
                    'aria-label': 'TrainingSchedule pagination',
                    align: 'end',
                    children: [(o == null ? void 0 : o.prev_page) && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(O.tn, { onClick() { c('1'); }, className: (0, i.A)(D, {}, [A]), children: (0, r.jsx)(u.J, { className: 'uBUXyeMF', Svg: E }) }), (0, r.jsx)(O.tn, { onClick() { c(''.concat(+d - 1)); }, className: (0, i.A)(D, {}, [A]), children: (0, r.jsx)(u.J, { className: 'jKQ4PRf5', Svg: C }) })] }), (o == null ? void 0 : o.total_pages) ? (0, r.jsxs)(r.Fragment, {
                        children: [o.total_pages <= 7 && R([], Array(o.total_pages), !0).map(((e, t) => (0, r.jsx)(O.tn, {
                            className: (0, i.A)(D, {}, [L]), active: +d === t + 1, onClick() { c(''.concat(t + 1)); }, children: t + 1,
                        }, t))), o.total_pages > 7 && (0, r.jsxs)(r.Fragment, {
                            children: [R([], Array(o.total_pages), !0).map(((e, t) => {
                                if ((+d === t + 1 || +d + 1 === t + 1 || +d + 2 === t + 1) && +d !== o.total_pages && t + 1 !== o.total_pages && t + 2 !== o.total_pages && t + 3 !== o.total_pages) {
                                    return (0, r.jsx)(O.tn, {
                                        className: (0, i.A)(D, {}, [L]), active: +d === t + 1, onClick() { c(''.concat(t + 1)); }, children: t + 1,
                                    }, t);
                                }
                            })), o.total_pages === +d || o.total_pages - 1 == +d || o.total_pages - 2 == +d || o.total_pages - 2 - +d == 3 || o.total_pages - 2 - +d == 2 || o.total_pages - 2 - +d == 1 ? '' : (0, r.jsx)(O.tn, { className: (0, i.A)(D, {}, [L, 'JQSOdsCs']), onClick() { c(''.concat(+d + 1)); }, children: '...' }), R([], Array(o.total_pages), !0).map(((e, t) => {
                                if (o.total_pages - t + 1 == 4 || o.total_pages - t + 1 == 3 || o.total_pages - t + 1 == 2 || o.total_pages - t + 1 == 1) {
                                    return (0, r.jsx)(O.tn, {
                                        className: (0, i.A)(D, {}, [L]), active: +d === t + 1, onClick() { c(''.concat(t + 1)); }, children: t + 1,
                                    }, t);
                                }
                            }))],
                        })],
                    }) : (0, r.jsx)('div', {}), (o == null ? void 0 : o.next_page) && (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(O.tn, { onClick() { c(''.concat(+d + 1)); }, className: (0, i.A)(D, {}, [A]), children: (0, r.jsx)(u.J, { Svg: C }) }), (0, r.jsx)(O.tn, { onClick() { c(''.concat(o == null ? void 0 : o.total_pages)); }, className: (0, i.A)(D, {}, [A]), children: (0, r.jsx)(u.J, { Svg: E }) })] })],
                }),
            });
        }));
    },
}]);
