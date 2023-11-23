import {Component, OnInit, ViewChild} from '@angular/core';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {DiaryService} from "./service/diary.service";
import {Diary} from "./model/diary";
import {Entry} from "./model/entry";

@Component({
    selector: 'app-diary',
    templateUrl: './diary.component.html',
    styleUrls: ['./diary.component.scss'],
})

export class DiaryComponent implements OnInit {
    @ViewChild('editor')
    public Editor: any;
    editorContent: string;
    editorHidden: boolean;

    diary: Diary;
    diaryId: number;

    entries?: Entry[];
    currentEntryId?: number;
    entryCanBeSaved: boolean;

    loading: boolean;

    constructor(
        public diaryService: DiaryService) {
        this.Editor = ClassicEditor;
        this.editorHidden = true;
    }

    ngOnInit(): void {
        this.loading = true;
        this.getDiary();
    }

    getDiary(): void {
        this.diaryService.getDiaryByUser()
            .subscribe(
                (data) => {
                    this.diary = data;
                    this.diaryId = this.diary.id;
                    this.entries = this.diary.entries;

                    this.loading = false;
                },
                error => {
                    console.log(error.status);
                });
    }

    addEntry() {
        this.entryCanBeSaved = false;
        this.editorHidden = false;

        const entry: Entry = new Entry({
            content: ""
        });

        this.diaryService.createEntry(this.diaryId, entry)
            .subscribe(
                (data) => {
                    console.log(data);
                    this.currentEntryId = data;
                    this.entryCanBeSaved = true;
                    this.editorContent = entry.content;
                    this.refreshEntries();
                },
                error => {
                    switch (error.status) {
                        case -1: {
                            //this.openSnackBar("Something went wrong while trying to register anxiety type", "Try again");
                            break;
                        }
                    }
                });
    }

    setEditorContent(entry: Entry) {
        this.editorHidden = false;
        this.currentEntryId = entry.id;
        this.editorContent = entry.content;
    }

    generatePreview(content: string, maxLengthPerLine: number): string {
        const lines = content.match(/<h1>.*?<\/h1>|<h2>.*?<\/h2>|<h3>.*?<\/h3>|<p>.*?<\/p>|<br>/g) || []

        const truncatedLines = lines
            .slice(0, 3)
            .map((line) => (line.length > maxLengthPerLine ? line.substring(0, maxLengthPerLine) + '...' : line));

        return truncatedLines.join('\n');
    }

    refreshEntries() {
        this.diaryService.getEntriesByDiary(this.diaryId)
            .subscribe(
                (data) => {
                    this.entries = data;
                },
                error => {
                    console.log(error.status);
                });
    }

    closeEditor() {
        this.editorHidden = true;
    }
}
