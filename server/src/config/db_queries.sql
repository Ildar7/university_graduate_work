--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

-- Started on 2025-05-15 15:37:47

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 224 (class 1259 OID 16447)
-- Name: citizenship; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.citizenship (
    id_citizenship integer NOT NULL,
    citizenship character varying(100) NOT NULL,
    country_id integer
);


ALTER TABLE public.citizenship OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16446)
-- Name: citizenship_id_citizenship_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.citizenship_id_citizenship_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.citizenship_id_citizenship_seq OWNER TO postgres;

--
-- TOC entry 5074 (class 0 OID 0)
-- Dependencies: 223
-- Name: citizenship_id_citizenship_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.citizenship_id_citizenship_seq OWNED BY public.citizenship.id_citizenship;


--
-- TOC entry 226 (class 1259 OID 16454)
-- Name: comesfrom; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comesfrom (
    id_comesfrom integer NOT NULL,
    comesfrom character varying(200) NOT NULL
);


ALTER TABLE public.comesfrom OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16453)
-- Name: comesfrom_id_comesfrom_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.comesfrom_id_comesfrom_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.comesfrom_id_comesfrom_seq OWNER TO postgres;

--
-- TOC entry 5075 (class 0 OID 0)
-- Dependencies: 225
-- Name: comesfrom_id_comesfrom_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.comesfrom_id_comesfrom_seq OWNED BY public.comesfrom.id_comesfrom;


--
-- TOC entry 234 (class 1259 OID 16482)
-- Name: courseoftraining; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.courseoftraining (
    id_courseoftraining integer NOT NULL,
    courseoftraining character varying(50) NOT NULL,
    coursevalue integer
);


ALTER TABLE public.courseoftraining OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 16481)
-- Name: courseoftraining_id_courseoftraining_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.courseoftraining_id_courseoftraining_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.courseoftraining_id_courseoftraining_seq OWNER TO postgres;

--
-- TOC entry 5076 (class 0 OID 0)
-- Dependencies: 233
-- Name: courseoftraining_id_courseoftraining_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.courseoftraining_id_courseoftraining_seq OWNED BY public.courseoftraining.id_courseoftraining;


--
-- TOC entry 232 (class 1259 OID 16475)
-- Name: durationoftraining; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.durationoftraining (
    id_durationoftraining integer NOT NULL,
    durationoftraining character varying(50) NOT NULL
);


ALTER TABLE public.durationoftraining OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 16474)
-- Name: durationoftraining_id_durationoftraining_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.durationoftraining_id_durationoftraining_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.durationoftraining_id_durationoftraining_seq OWNER TO postgres;

--
-- TOC entry 5077 (class 0 OID 0)
-- Dependencies: 231
-- Name: durationoftraining_id_durationoftraining_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.durationoftraining_id_durationoftraining_seq OWNED BY public.durationoftraining.id_durationoftraining;


--
-- TOC entry 250 (class 1259 OID 16544)
-- Name: finimatpomosh; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.finimatpomosh (
    id_finimatpomosh integer NOT NULL,
    finimatpomosh character varying(100) NOT NULL
);


ALTER TABLE public.finimatpomosh OWNER TO postgres;

--
-- TOC entry 249 (class 1259 OID 16543)
-- Name: finimatpomosh_id_finimatpomosh_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.finimatpomosh_id_finimatpomosh_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.finimatpomosh_id_finimatpomosh_seq OWNER TO postgres;

--
-- TOC entry 5078 (class 0 OID 0)
-- Dependencies: 249
-- Name: finimatpomosh_id_finimatpomosh_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.finimatpomosh_id_finimatpomosh_seq OWNED BY public.finimatpomosh.id_finimatpomosh;


--
-- TOC entry 228 (class 1259 OID 16461)
-- Name: fromacceptedfinished; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.fromacceptedfinished (
    id_fromacceptedfinished integer NOT NULL,
    fromacceptedfinished character varying(100) NOT NULL
);


ALTER TABLE public.fromacceptedfinished OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 16460)
-- Name: fromacceptedfinished_id_fromacceptedfinished_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.fromacceptedfinished_id_fromacceptedfinished_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.fromacceptedfinished_id_fromacceptedfinished_seq OWNER TO postgres;

--
-- TOC entry 5079 (class 0 OID 0)
-- Dependencies: 227
-- Name: fromacceptedfinished_id_fromacceptedfinished_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.fromacceptedfinished_id_fromacceptedfinished_seq OWNED BY public.fromacceptedfinished.id_fromacceptedfinished;


--
-- TOC entry 220 (class 1259 OID 16433)
-- Name: gender; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.gender (
    id_gender integer NOT NULL,
    gender character varying(50) NOT NULL
);


ALTER TABLE public.gender OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16432)
-- Name: gender_id_gender_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.gender_id_gender_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.gender_id_gender_seq OWNER TO postgres;

--
-- TOC entry 5080 (class 0 OID 0)
-- Dependencies: 219
-- Name: gender_id_gender_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.gender_id_gender_seq OWNED BY public.gender.id_gender;


--
-- TOC entry 252 (class 1259 OID 16551)
-- Name: groups; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.groups (
    id_group integer NOT NULL,
    name character varying(50) NOT NULL,
    id_language integer,
    enrollment_year integer NOT NULL,
    id_specialty integer,
    id_education_base integer,
    course integer NOT NULL,
    study_duration integer NOT NULL,
    is_full_time boolean NOT NULL,
    short_name character varying(10),
    serial_number integer,
    code character varying(20)
);


ALTER TABLE public.groups OWNER TO postgres;

--
-- TOC entry 251 (class 1259 OID 16550)
-- Name: groups_id_group_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.groups_id_group_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.groups_id_group_seq OWNER TO postgres;

--
-- TOC entry 5081 (class 0 OID 0)
-- Dependencies: 251
-- Name: groups_id_group_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.groups_id_group_seq OWNED BY public.groups.id_group;


--
-- TOC entry 254 (class 1259 OID 16659)
-- Name: kvotum; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.kvotum (
    id_kvotum integer NOT NULL,
    kvotum_name character varying(100) NOT NULL
);


ALTER TABLE public.kvotum OWNER TO postgres;

--
-- TOC entry 253 (class 1259 OID 16658)
-- Name: kvotum_id_kvotum_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.kvotum_id_kvotum_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.kvotum_id_kvotum_seq OWNER TO postgres;

--
-- TOC entry 5082 (class 0 OID 0)
-- Dependencies: 253
-- Name: kvotum_id_kvotum_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.kvotum_id_kvotum_seq OWNED BY public.kvotum.id_kvotum;


--
-- TOC entry 236 (class 1259 OID 16489)
-- Name: languageofedu; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.languageofedu (
    id_languageofedu integer NOT NULL,
    languageofedu character varying(50) NOT NULL
);


ALTER TABLE public.languageofedu OWNER TO postgres;

--
-- TOC entry 235 (class 1259 OID 16488)
-- Name: languageofedu_id_languageofedu_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.languageofedu_id_languageofedu_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.languageofedu_id_languageofedu_seq OWNER TO postgres;

--
-- TOC entry 5083 (class 0 OID 0)
-- Dependencies: 235
-- Name: languageofedu_id_languageofedu_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.languageofedu_id_languageofedu_seq OWNED BY public.languageofedu.id_languageofedu;


--
-- TOC entry 222 (class 1259 OID 16440)
-- Name: nationality; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.nationality (
    id_nationality integer NOT NULL,
    nationality character varying(100) NOT NULL
);


ALTER TABLE public.nationality OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16439)
-- Name: nationality_id_nationality_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.nationality_id_nationality_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.nationality_id_nationality_seq OWNER TO postgres;

--
-- TOC entry 5084 (class 0 OID 0)
-- Dependencies: 221
-- Name: nationality_id_nationality_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.nationality_id_nationality_seq OWNED BY public.nationality.id_nationality;


--
-- TOC entry 246 (class 1259 OID 16530)
-- Name: needhostel; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.needhostel (
    id_needhostel integer NOT NULL,
    needhostel character varying(50) NOT NULL
);


ALTER TABLE public.needhostel OWNER TO postgres;

--
-- TOC entry 245 (class 1259 OID 16529)
-- Name: needhostel_id_needhostel_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.needhostel_id_needhostel_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.needhostel_id_needhostel_seq OWNER TO postgres;

--
-- TOC entry 5085 (class 0 OID 0)
-- Dependencies: 245
-- Name: needhostel_id_needhostel_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.needhostel_id_needhostel_seq OWNED BY public.needhostel.id_needhostel;


--
-- TOC entry 242 (class 1259 OID 16510)
-- Name: qualification; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.qualification (
    id_qual integer NOT NULL,
    shifr_qual character varying(20) NOT NULL,
    qualification character varying(255) NOT NULL,
    specialty_id integer,
    sort integer DEFAULT 100
);


ALTER TABLE public.qualification OWNER TO postgres;

--
-- TOC entry 241 (class 1259 OID 16509)
-- Name: qualification_id_qual_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.qualification_id_qual_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.qualification_id_qual_seq OWNER TO postgres;

--
-- TOC entry 5086 (class 0 OID 0)
-- Dependencies: 241
-- Name: qualification_id_qual_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.qualification_id_qual_seq OWNED BY public.qualification.id_qual;


--
-- TOC entry 240 (class 1259 OID 16503)
-- Name: specialty; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.specialty (
    id_spec integer NOT NULL,
    shifr_spec character varying(20) NOT NULL,
    speciality character varying(255) NOT NULL,
    level_of_education character varying(50)
);


ALTER TABLE public.specialty OWNER TO postgres;

--
-- TOC entry 239 (class 1259 OID 16502)
-- Name: specialty_id_spec_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.specialty_id_spec_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.specialty_id_spec_seq OWNER TO postgres;

--
-- TOC entry 5087 (class 0 OID 0)
-- Dependencies: 239
-- Name: specialty_id_spec_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.specialty_id_spec_seq OWNED BY public.specialty.id_spec;


--
-- TOC entry 256 (class 1259 OID 16666)
-- Name: students; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.students (
    students_id integer NOT NULL,
    user_id integer,
    student_govid character varying(50),
    student_birth_date date,
    student_gender integer,
    student_nationality integer,
    student_citizenship integer,
    student_govid_issue_date date,
    student_residential_address character varying(255),
    student_temporary_residence_address character varying(255),
    student_enrollment_type integer,
    student_arrival_date date,
    student_is_arrival_from integer,
    student_phone_number character varying(20),
    student_is_finished_edu_type integer,
    student_residence_type integer,
    student_study_duration integer,
    student_study_course integer,
    student_edu_lang integer,
    student_edu_form integer,
    student_edu_speciality integer,
    student_edu_classifier integer,
    student_is_study_in_dual_system boolean,
    student_is_need_hostel_type integer,
    student_is_live_at_hostel boolean,
    student_financing_source_type integer,
    student_quota integer,
    student_material_assistance_type integer,
    id_group integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.students OWNER TO postgres;

--
-- TOC entry 255 (class 1259 OID 16665)
-- Name: students_students_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.students_students_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.students_students_id_seq OWNER TO postgres;

--
-- TOC entry 5088 (class 0 OID 0)
-- Dependencies: 255
-- Name: students_students_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.students_students_id_seq OWNED BY public.students.students_id;


--
-- TOC entry 244 (class 1259 OID 16523)
-- Name: typeenrollment; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.typeenrollment (
    id_typeenrollment integer NOT NULL,
    typeenrollment character varying(100) NOT NULL
);


ALTER TABLE public.typeenrollment OWNER TO postgres;

--
-- TOC entry 243 (class 1259 OID 16522)
-- Name: typeenrollment_id_typeenrollment_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.typeenrollment_id_typeenrollment_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.typeenrollment_id_typeenrollment_seq OWNER TO postgres;

--
-- TOC entry 5089 (class 0 OID 0)
-- Dependencies: 243
-- Name: typeenrollment_id_typeenrollment_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.typeenrollment_id_typeenrollment_seq OWNED BY public.typeenrollment.id_typeenrollment;


--
-- TOC entry 230 (class 1259 OID 16468)
-- Name: typeofareaofresidence; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.typeofareaofresidence (
    id_typeofareaofresidence integer NOT NULL,
    typeofareaofresidence character varying(100) NOT NULL
);


ALTER TABLE public.typeofareaofresidence OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 16467)
-- Name: typeofareaofresidence_id_typeofareaofresidence_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.typeofareaofresidence_id_typeofareaofresidence_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.typeofareaofresidence_id_typeofareaofresidence_seq OWNER TO postgres;

--
-- TOC entry 5090 (class 0 OID 0)
-- Dependencies: 229
-- Name: typeofareaofresidence_id_typeofareaofresidence_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.typeofareaofresidence_id_typeofareaofresidence_seq OWNED BY public.typeofareaofresidence.id_typeofareaofresidence;


--
-- TOC entry 238 (class 1259 OID 16496)
-- Name: typeoftraining; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.typeoftraining (
    id_typeoftraining integer NOT NULL,
    typeoftraining character varying(50) NOT NULL
);


ALTER TABLE public.typeoftraining OWNER TO postgres;

--
-- TOC entry 237 (class 1259 OID 16495)
-- Name: typeoftraining_id_typeoftraining_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.typeoftraining_id_typeoftraining_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.typeoftraining_id_typeoftraining_seq OWNER TO postgres;

--
-- TOC entry 5091 (class 0 OID 0)
-- Dependencies: 237
-- Name: typeoftraining_id_typeoftraining_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.typeoftraining_id_typeoftraining_seq OWNED BY public.typeoftraining.id_typeoftraining;


--
-- TOC entry 218 (class 1259 OID 16403)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    login character varying(50) NOT NULL,
    email character varying(100),
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    patronymic character varying(50),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    password character varying(255) DEFAULT ''::character varying NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16402)
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_user_id_seq OWNER TO postgres;

--
-- TOC entry 5092 (class 0 OID 0)
-- Dependencies: 217
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- TOC entry 248 (class 1259 OID 16537)
-- Name: whopaying; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.whopaying (
    id_whopaying integer NOT NULL,
    whopaying character varying(100) NOT NULL
);


ALTER TABLE public.whopaying OWNER TO postgres;

--
-- TOC entry 247 (class 1259 OID 16536)
-- Name: whopaying_id_whopaying_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.whopaying_id_whopaying_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.whopaying_id_whopaying_seq OWNER TO postgres;

--
-- TOC entry 5093 (class 0 OID 0)
-- Dependencies: 247
-- Name: whopaying_id_whopaying_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.whopaying_id_whopaying_seq OWNED BY public.whopaying.id_whopaying;


--
-- TOC entry 4843 (class 2604 OID 16450)
-- Name: citizenship id_citizenship; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.citizenship ALTER COLUMN id_citizenship SET DEFAULT nextval('public.citizenship_id_citizenship_seq'::regclass);


--
-- TOC entry 4844 (class 2604 OID 16457)
-- Name: comesfrom id_comesfrom; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comesfrom ALTER COLUMN id_comesfrom SET DEFAULT nextval('public.comesfrom_id_comesfrom_seq'::regclass);


--
-- TOC entry 4848 (class 2604 OID 16485)
-- Name: courseoftraining id_courseoftraining; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courseoftraining ALTER COLUMN id_courseoftraining SET DEFAULT nextval('public.courseoftraining_id_courseoftraining_seq'::regclass);


--
-- TOC entry 4847 (class 2604 OID 16478)
-- Name: durationoftraining id_durationoftraining; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.durationoftraining ALTER COLUMN id_durationoftraining SET DEFAULT nextval('public.durationoftraining_id_durationoftraining_seq'::regclass);


--
-- TOC entry 4857 (class 2604 OID 16547)
-- Name: finimatpomosh id_finimatpomosh; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.finimatpomosh ALTER COLUMN id_finimatpomosh SET DEFAULT nextval('public.finimatpomosh_id_finimatpomosh_seq'::regclass);


--
-- TOC entry 4845 (class 2604 OID 16464)
-- Name: fromacceptedfinished id_fromacceptedfinished; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.fromacceptedfinished ALTER COLUMN id_fromacceptedfinished SET DEFAULT nextval('public.fromacceptedfinished_id_fromacceptedfinished_seq'::regclass);


--
-- TOC entry 4841 (class 2604 OID 16436)
-- Name: gender id_gender; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gender ALTER COLUMN id_gender SET DEFAULT nextval('public.gender_id_gender_seq'::regclass);


--
-- TOC entry 4858 (class 2604 OID 16554)
-- Name: groups id_group; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.groups ALTER COLUMN id_group SET DEFAULT nextval('public.groups_id_group_seq'::regclass);


--
-- TOC entry 4859 (class 2604 OID 16662)
-- Name: kvotum id_kvotum; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kvotum ALTER COLUMN id_kvotum SET DEFAULT nextval('public.kvotum_id_kvotum_seq'::regclass);


--
-- TOC entry 4849 (class 2604 OID 16492)
-- Name: languageofedu id_languageofedu; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.languageofedu ALTER COLUMN id_languageofedu SET DEFAULT nextval('public.languageofedu_id_languageofedu_seq'::regclass);


--
-- TOC entry 4842 (class 2604 OID 16443)
-- Name: nationality id_nationality; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nationality ALTER COLUMN id_nationality SET DEFAULT nextval('public.nationality_id_nationality_seq'::regclass);


--
-- TOC entry 4855 (class 2604 OID 16533)
-- Name: needhostel id_needhostel; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.needhostel ALTER COLUMN id_needhostel SET DEFAULT nextval('public.needhostel_id_needhostel_seq'::regclass);


--
-- TOC entry 4852 (class 2604 OID 16513)
-- Name: qualification id_qual; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.qualification ALTER COLUMN id_qual SET DEFAULT nextval('public.qualification_id_qual_seq'::regclass);


--
-- TOC entry 4851 (class 2604 OID 16506)
-- Name: specialty id_spec; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.specialty ALTER COLUMN id_spec SET DEFAULT nextval('public.specialty_id_spec_seq'::regclass);


--
-- TOC entry 4860 (class 2604 OID 16669)
-- Name: students students_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students ALTER COLUMN students_id SET DEFAULT nextval('public.students_students_id_seq'::regclass);


--
-- TOC entry 4854 (class 2604 OID 16526)
-- Name: typeenrollment id_typeenrollment; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.typeenrollment ALTER COLUMN id_typeenrollment SET DEFAULT nextval('public.typeenrollment_id_typeenrollment_seq'::regclass);


--
-- TOC entry 4846 (class 2604 OID 16471)
-- Name: typeofareaofresidence id_typeofareaofresidence; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.typeofareaofresidence ALTER COLUMN id_typeofareaofresidence SET DEFAULT nextval('public.typeofareaofresidence_id_typeofareaofresidence_seq'::regclass);


--
-- TOC entry 4850 (class 2604 OID 16499)
-- Name: typeoftraining id_typeoftraining; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.typeoftraining ALTER COLUMN id_typeoftraining SET DEFAULT nextval('public.typeoftraining_id_typeoftraining_seq'::regclass);


--
-- TOC entry 4837 (class 2604 OID 16406)
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- TOC entry 4856 (class 2604 OID 16540)
-- Name: whopaying id_whopaying; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.whopaying ALTER COLUMN id_whopaying SET DEFAULT nextval('public.whopaying_id_whopaying_seq'::regclass);


--
-- TOC entry 4869 (class 2606 OID 16452)
-- Name: citizenship citizenship_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.citizenship
    ADD CONSTRAINT citizenship_pkey PRIMARY KEY (id_citizenship);


--
-- TOC entry 4871 (class 2606 OID 16459)
-- Name: comesfrom comesfrom_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comesfrom
    ADD CONSTRAINT comesfrom_pkey PRIMARY KEY (id_comesfrom);


--
-- TOC entry 4879 (class 2606 OID 16487)
-- Name: courseoftraining courseoftraining_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courseoftraining
    ADD CONSTRAINT courseoftraining_pkey PRIMARY KEY (id_courseoftraining);


--
-- TOC entry 4877 (class 2606 OID 16480)
-- Name: durationoftraining durationoftraining_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.durationoftraining
    ADD CONSTRAINT durationoftraining_pkey PRIMARY KEY (id_durationoftraining);


--
-- TOC entry 4895 (class 2606 OID 16549)
-- Name: finimatpomosh finimatpomosh_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.finimatpomosh
    ADD CONSTRAINT finimatpomosh_pkey PRIMARY KEY (id_finimatpomosh);


--
-- TOC entry 4873 (class 2606 OID 16466)
-- Name: fromacceptedfinished fromacceptedfinished_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.fromacceptedfinished
    ADD CONSTRAINT fromacceptedfinished_pkey PRIMARY KEY (id_fromacceptedfinished);


--
-- TOC entry 4865 (class 2606 OID 16438)
-- Name: gender gender_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gender
    ADD CONSTRAINT gender_pkey PRIMARY KEY (id_gender);


--
-- TOC entry 4897 (class 2606 OID 16556)
-- Name: groups groups_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.groups
    ADD CONSTRAINT groups_pkey PRIMARY KEY (id_group);


--
-- TOC entry 4899 (class 2606 OID 16664)
-- Name: kvotum kvotum_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.kvotum
    ADD CONSTRAINT kvotum_pkey PRIMARY KEY (id_kvotum);


--
-- TOC entry 4881 (class 2606 OID 16494)
-- Name: languageofedu languageofedu_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.languageofedu
    ADD CONSTRAINT languageofedu_pkey PRIMARY KEY (id_languageofedu);


--
-- TOC entry 4867 (class 2606 OID 16445)
-- Name: nationality nationality_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nationality
    ADD CONSTRAINT nationality_pkey PRIMARY KEY (id_nationality);


--
-- TOC entry 4891 (class 2606 OID 16535)
-- Name: needhostel needhostel_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.needhostel
    ADD CONSTRAINT needhostel_pkey PRIMARY KEY (id_needhostel);


--
-- TOC entry 4887 (class 2606 OID 16516)
-- Name: qualification qualification_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.qualification
    ADD CONSTRAINT qualification_pkey PRIMARY KEY (id_qual);


--
-- TOC entry 4885 (class 2606 OID 16508)
-- Name: specialty specialty_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.specialty
    ADD CONSTRAINT specialty_pkey PRIMARY KEY (id_spec);


--
-- TOC entry 4901 (class 2606 OID 16674)
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (students_id);


--
-- TOC entry 4889 (class 2606 OID 16528)
-- Name: typeenrollment typeenrollment_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.typeenrollment
    ADD CONSTRAINT typeenrollment_pkey PRIMARY KEY (id_typeenrollment);


--
-- TOC entry 4875 (class 2606 OID 16473)
-- Name: typeofareaofresidence typeofareaofresidence_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.typeofareaofresidence
    ADD CONSTRAINT typeofareaofresidence_pkey PRIMARY KEY (id_typeofareaofresidence);


--
-- TOC entry 4883 (class 2606 OID 16501)
-- Name: typeoftraining typeoftraining_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.typeoftraining
    ADD CONSTRAINT typeoftraining_pkey PRIMARY KEY (id_typeoftraining);


--
-- TOC entry 4863 (class 2606 OID 16410)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- TOC entry 4893 (class 2606 OID 16542)
-- Name: whopaying whopaying_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.whopaying
    ADD CONSTRAINT whopaying_pkey PRIMARY KEY (id_whopaying);


--
-- TOC entry 4903 (class 2606 OID 16557)
-- Name: groups groups_id_language_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.groups
    ADD CONSTRAINT groups_id_language_fkey FOREIGN KEY (id_language) REFERENCES public.languageofedu(id_languageofedu);


--
-- TOC entry 4904 (class 2606 OID 16562)
-- Name: groups groups_id_specialty_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.groups
    ADD CONSTRAINT groups_id_specialty_fkey FOREIGN KEY (id_specialty) REFERENCES public.specialty(id_spec);


--
-- TOC entry 4902 (class 2606 OID 16517)
-- Name: qualification qualification_specialty_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.qualification
    ADD CONSTRAINT qualification_specialty_id_fkey FOREIGN KEY (specialty_id) REFERENCES public.specialty(id_spec);


--
-- TOC entry 4905 (class 2606 OID 16765)
-- Name: students students_id_group_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_id_group_fkey FOREIGN KEY (id_group) REFERENCES public.groups(id_group);


--
-- TOC entry 4906 (class 2606 OID 16690)
-- Name: students students_student_citizenship_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_student_citizenship_fkey FOREIGN KEY (student_citizenship) REFERENCES public.citizenship(id_citizenship);


--
-- TOC entry 4907 (class 2606 OID 16740)
-- Name: students students_student_edu_classifier_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_student_edu_classifier_fkey FOREIGN KEY (student_edu_classifier) REFERENCES public.qualification(id_qual);


--
-- TOC entry 4908 (class 2606 OID 16730)
-- Name: students students_student_edu_form_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_student_edu_form_fkey FOREIGN KEY (student_edu_form) REFERENCES public.typeoftraining(id_typeoftraining);


--
-- TOC entry 4909 (class 2606 OID 16725)
-- Name: students students_student_edu_lang_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_student_edu_lang_fkey FOREIGN KEY (student_edu_lang) REFERENCES public.languageofedu(id_languageofedu);


--
-- TOC entry 4910 (class 2606 OID 16735)
-- Name: students students_student_edu_speciality_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_student_edu_speciality_fkey FOREIGN KEY (student_edu_speciality) REFERENCES public.specialty(id_spec);


--
-- TOC entry 4911 (class 2606 OID 16695)
-- Name: students students_student_enrollment_type_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_student_enrollment_type_fkey FOREIGN KEY (student_enrollment_type) REFERENCES public.typeenrollment(id_typeenrollment);


--
-- TOC entry 4912 (class 2606 OID 16750)
-- Name: students students_student_financing_source_type_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_student_financing_source_type_fkey FOREIGN KEY (student_financing_source_type) REFERENCES public.whopaying(id_whopaying);


--
-- TOC entry 4913 (class 2606 OID 16680)
-- Name: students students_student_gender_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_student_gender_fkey FOREIGN KEY (student_gender) REFERENCES public.gender(id_gender);


--
-- TOC entry 4914 (class 2606 OID 16700)
-- Name: students students_student_is_arrival_from_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_student_is_arrival_from_fkey FOREIGN KEY (student_is_arrival_from) REFERENCES public.comesfrom(id_comesfrom);


--
-- TOC entry 4915 (class 2606 OID 16705)
-- Name: students students_student_is_finished_edu_type_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_student_is_finished_edu_type_fkey FOREIGN KEY (student_is_finished_edu_type) REFERENCES public.fromacceptedfinished(id_fromacceptedfinished);


--
-- TOC entry 4916 (class 2606 OID 16745)
-- Name: students students_student_is_need_hostel_type_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_student_is_need_hostel_type_fkey FOREIGN KEY (student_is_need_hostel_type) REFERENCES public.needhostel(id_needhostel);


--
-- TOC entry 4917 (class 2606 OID 16760)
-- Name: students students_student_material_assistance_type_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_student_material_assistance_type_fkey FOREIGN KEY (student_material_assistance_type) REFERENCES public.finimatpomosh(id_finimatpomosh);


--
-- TOC entry 4918 (class 2606 OID 16685)
-- Name: students students_student_nationality_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_student_nationality_fkey FOREIGN KEY (student_nationality) REFERENCES public.nationality(id_nationality);


--
-- TOC entry 4919 (class 2606 OID 16755)
-- Name: students students_student_quota_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_student_quota_fkey FOREIGN KEY (student_quota) REFERENCES public.kvotum(id_kvotum);


--
-- TOC entry 4920 (class 2606 OID 16710)
-- Name: students students_student_residence_type_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_student_residence_type_fkey FOREIGN KEY (student_residence_type) REFERENCES public.typeofareaofresidence(id_typeofareaofresidence);


--
-- TOC entry 4921 (class 2606 OID 16720)
-- Name: students students_student_study_course_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_student_study_course_fkey FOREIGN KEY (student_study_course) REFERENCES public.courseoftraining(id_courseoftraining);


--
-- TOC entry 4922 (class 2606 OID 16715)
-- Name: students students_student_study_duration_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_student_study_duration_fkey FOREIGN KEY (student_study_duration) REFERENCES public.durationoftraining(id_durationoftraining);


--
-- TOC entry 4923 (class 2606 OID 16675)
-- Name: students students_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


-- Completed on 2025-05-15 15:37:47

--
-- PostgreSQL database dump complete
--

