import {Component, Input, OnDestroy, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store';
import {getFeedAction} from '../../store/actions/getFeed.action';
import {Observable, Subscription} from 'rxjs';
import {GetFeedResponseInterface} from '../../types/getFeedResponse.interface';
import {errorSelector, feedSelector, isLoadingSelector} from '../../store/selectors';
import {environment} from '../../../../../../environments/environment';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {

  @Input('apiUrl') apiUrlProps: string;

  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  feed$: Observable<GetFeedResponseInterface | null>;
  limit = environment.limit;
  baseUrl: string;
  queryParamsSubscription: Subscription;
  currentPage: number;

  constructor(private store: Store, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
    this.initializeListeners(); // метод для всех подписок
    console.log('baseUrl', this.router.url); // Выводит - /,
    // но может например такой, если там несколько страниц /tags/some?page=7
  }


  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.feed$ = this.store.pipe(select(feedSelector));
    this.baseUrl = this.router.url.split('?')[0]; // получим /tags/some из /tags/some?page=7
  }

  fetchData(): void {
    this.store.dispatch(getFeedAction({url: this.apiUrlProps}));
  }

  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = Number(params.page || '1');
      console.log('currentPage', this.currentPage);  // получим 7 из /tags/some?page=7
    });
  }
  // Не забывать делать отписки, если подписка делается с помощью метода .subscribe!!!
  // В данном случае route сам делает отписку, но в качестве примера сделали отписку

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }
}


